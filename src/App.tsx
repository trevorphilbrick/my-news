import "./App.css";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
import NavBar from "./components/feedComponents/NavBar";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully")
    }).catch((error) => {
    console.log(error)
    });
}

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <NavBar handleLogout={handleLogout}/>
      <Outlet />
    </div>
  );
}

export default App;
