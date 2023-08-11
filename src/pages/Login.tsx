import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { useFormik } from 'formik';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useAuthStore } from '../zustand/useAuthStore'

const Login = () => {
    const {setUser} = useAuthStore();
    const navigate = useNavigate();
                
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                console.log('logged in')
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            });
        },
        });
 
    return(
        <>
                <Container sx={{ height: '100vh'}}>
                    <Container sx={{display: 'flex', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
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
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Login
                        </Button>
                        <Typography sx={{color: 'white', mt: 1}} onClick={() => navigate("/signUp")}>Don't have an account with us?</Typography>
                    </form>
                    
                    </Container>
                </Container>
        </>
    )
}

export default Login;
