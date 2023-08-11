import { useEffect } from "react";
import { useAuthStore } from "../zustand/useAuthStore";

const Welcome  = () => {
  const {user} = useAuthStore();

  useEffect(()=>{
    console.log(user)
  }, [user])

  return (
    <div>
      <div>Welcome</div>
    </div>);
}

export default Welcome;
