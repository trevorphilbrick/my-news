import { Container, FormControl, Typography, Grid, InputLabel, OutlinedInput} from "@mui/material";

function SignUp() {
  return (
    <Container >
      <Grid container alignItems="center" direction='column'>
      <Typography>Sign Up!</Typography>
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
      <Grid item style={{margin: 6}}>
      <FormControl>
        <InputLabel htmlFor="re-password-input">Re-enter Password</InputLabel>
        <OutlinedInput
          id="re-password-input"
          defaultValue=""
          label="Re-enter Password"
        />
      </FormControl>
      </Grid>
      </Grid>
     </Grid>
    </Container>
  );
}

export default SignUp;
