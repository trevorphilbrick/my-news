import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./components/Feed.tsx";
import Welcome from "./components/Welcome.tsx";
import SignUp from "./pages/SignIn.tsx";
import Login from "./pages/login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Feed /> },
      { path: "welcome", element: <Welcome /> },
      {path: "signup", element: <SignUp />},
      {path: "login", element: <Login />}
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
