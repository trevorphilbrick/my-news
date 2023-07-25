import { AppBar, Container, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Container>
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
      </Container>
    </AppBar>
  );
}

export default NavBar;
