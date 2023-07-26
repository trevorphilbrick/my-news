import "./App.css";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
function App() {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <Outlet />
    </div>
  );
}

export default App;
