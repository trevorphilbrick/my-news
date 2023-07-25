import { TextField, Button, Container, Typography } from "@mui/material";
import { useFormik } from 'formik';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container sx={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <form
      // style={{boxShadow: '0px 5px 20px lightGrey', borderRadius: 10, paddingTop: 100, paddingBottom: 100, paddingRight: 75, paddingLeft: 75}}
       onSubmit={formik.handleSubmit}>
        <Typography variant="subtitle1" sx={{mb: 1}}>Create a MY NEWS account to view the latest news!</Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{mb: 2}} 
        />
        <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{mb: 2}}
      />
        <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{mb: 2}}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
      </form>
    </Container>
  );
}

export default SignUp;
