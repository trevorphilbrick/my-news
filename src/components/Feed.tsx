import { useEffect } from "react";
import NavBar from "./feedComponents/NavBar";
import TopStories from "./feedComponents/TopStories";
import TopicBar from "./feedComponents/TopicBar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function Feed() {
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
    <div>
      <NavBar handleLogout={handleLogout}/>
      <TopicBar />
      <TopStories />
    </div>
  );
}

export default Feed;
