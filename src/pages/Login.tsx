import { Container, FormControl, Typography, Grid, InputLabel, OutlinedInput} from "@mui/material";

function Login() {
  return (
    <Container >
      <Grid container alignItems="center" direction='column'>
      <Typography>Login to an existing account!</Typography>
      <Grid container alignItems="center" direction='column'>
      <Grid item style={{margin: 6}}>
      <FormControl>
        <InputLabel htmlFor="email-input">Email Address</InputLabel>
        <OutlinedInput
          id="email-input"
          defaultValue=""
          label="Email Address"
        />
      </FormControl>
      </Grid>
      <Grid item style={{margin: 6}}>
      <FormControl>
        <InputLabel htmlFor="email-input">Password</InputLabel>
        <OutlinedInput
          id="password-input"
          defaultValue=""
          label="Password"
        />
      </FormControl>
      </Grid>
      </Grid>
     </Grid>
    </Container>
  );
}

export default Login;
