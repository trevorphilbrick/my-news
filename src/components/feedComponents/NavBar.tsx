import { AppBar, Button, Container, Typography } from "@mui/material";

function NavBar({ handleLogout }) {
  return (
    <AppBar position="static">
      <Container sx={{display: 'flex', flexDirection: 'row'}}>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "0.3rem",
            fontFamily: "monospace",
            fontWeight: 700,
            marginTop: "0.3em",
            marginBottom: "0.3em",
          }}
        >
          My News
        </Typography>
        <Button variant="outline" size="small" sx={{marginLeft: 'auto'}} onClick={handleLogout}>Log Out</Button>
      </Container>
    </AppBar>
  );
}

export default NavBar;
