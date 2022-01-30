import React, { useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import db from "../../firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../App";
import { LogoutButton, LoginButton } from "../CustomerComponents";
import { collection, getDocs, query, where, setDoc, doc  } from "firebase/firestore"; 

const style = {
  appbar: {
    background: "#151515",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px",
  },
  link: {
    textDecoration: "none",
    display: "flex",
    maxWidth: "65%",
  },
  backIconButton: {
    mr: 1,
    color: "#ffffff",
    transform: "scale(1.2)",
  },
  headerTitle: {
    color: "#ffffff",
    display: "flex",
    fontWeight: 600,
    letterSpacing: "0.05rem",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "auto",
    textOverflow: "ellipsis",
  },
};

export default function Header(props) {
  const { navigateBack, title, user, setUser, signedIn, setSignedIn, questions, setQuestions } = props;

  useEffect((signedIn) => {
    if (signedIn) return;
    setQuestions(Array.from(Array(1000).keys()).map((_) => false));
  }, [signedIn]);

  const handleUserLogin = async () => {
    console.log("user tried to log in");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { displayName: name, email, uid, questions, setQuestions } = result.user;
        setUser({
          email: email,
          name: name,
          uid: uid,
        });
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        let insert = true;
        setSignedIn(true);
        querySnapshot.forEach((doc) => {
          if (doc.id === uid) {
            // setQuestions(prev => [...doc.data().questions]);
            console.log(doc.data().questions);
          } else if (doc.id !== uid) {
            insert = false; 
          }
        });
        if (insert) {
          await setDoc(doc(usersRef, uid), {
            name: name,
            email: email,
            uid: uid,
            questions: Array.from(Array(1000).keys()).map((_) => false),
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setSignedIn(false);
      });
  };

  const handleUserLogOut = () => {
    console.log("user tried to log out");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
        setSignedIn(false);
      })
      .catch((error) => {
        console.log(error);
        setSignedIn(true);
      });
  };

  return (
    <AppBar position="sticky" sx={style.appbar}>
      <Toolbar sx={style.toolbar}>
        <Link to="/" style={style.link}>
          {navigateBack && (
            <IconButton size="large" edge="start" sx={style.backIconButton}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <div
            variant="h5"
            component="div"
            style={{
              fontFamily: title === "dsalgo!" ? "Reem Kufi" : "",
              fontSize: title === "algo!" ? "2em" : "1.4em",
              ...style.headerTitle,
            }}
          >
            {title}
          </div>
        </Link>
        {signedIn ? (
          <LogoutButton
            variant="contained"
            disableRipple
            onClick={handleUserLogOut}
            endIcon={<LogoutIcon />}
          >
            <div>{user.name}</div>
          </LogoutButton>
        ) : (
          <LoginButton
            variant="contained"
            disableRipple
            onClick={handleUserLogin}
          >
            <div>Login</div>
          </LoginButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
