import { useEffect } from "react";
import {  signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

function Welcome() {
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
  <div>Welcome 
    <div>
          <button onClick={handleLogout}>
              Logout
          </button>
  </div>
  </div>);
}

export default Welcome;
