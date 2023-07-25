import { TextField, Button, Container } from "@mui/material";
import { useFormik } from 'formik';


  const Login = () => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  
  return (
    <Container sx={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <form onSubmit={formik.handleSubmit}>
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
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
      </form>
    </Container>
  );
}

export default Login;
