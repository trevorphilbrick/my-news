import "./App.css";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
import useMockData from "./zustand/mockData";
import { useEffect } from "react";

function App() {
  const { setMockData, isUsingMockData } = useMockData((state) => state);

  // set to true to use mock data
  useEffect(() => {
    setMockData(true);
  }, []);

  useEffect(() => {
    console.log(isUsingMockData);
  }, [isUsingMockData]);
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <Outlet />
    </div>
  );
}

export default App;
