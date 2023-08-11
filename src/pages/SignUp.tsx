import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { useAuthStore } from '../zustand/useAuthStore'
import { useFormik } from 'formik';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
 
const SignUp = () => {
    const {setUser} = useAuthStore();
    const navigate = useNavigate();
    const [accountExists, setAccountExists] = useState(false)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
        },
        onSubmit: async(values) => {
            await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async(userCredential) => {
                // Signed in
                const authRes = userCredential.user;
                const firstName = values.firstName
                await setDoc(doc(db, 'user-preferences', authRes.uid), {
                    firstName: firstName,
                    email: authRes.email,
                    uid: authRes.uid,
                    savedArticles: [],
                    searchHistory: []
                })
                setUser(authRes);
                console.log('signed up');
                navigate("/");
            })
            .catch((error) => {
                setAccountExists(true)
                console.log(error)
            });
        },
        });

  return (
  <>
                <Container sx={{ height: '100vh'}}>
                    <Container sx={{display: 'flex', height: '80vh', justifyContent: 'center', alignItems: 'center'}}>
                    <form onSubmit={formik.handleSubmit}>
                    {accountExists ? <Typography sx={{color: 'red', mb: 1}}>This account already exists! Please enter a different email.</Typography> : null}
                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            sx={{mb: 2}}
                        />
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
                            Create Account
                        </Button>
                    <Typography sx={{color: 'white', mt: 1}} onClick={() => navigate("/login")}>Already have an account?</Typography>
                    </form>
                </Container>
                </Container>
        </>
  )
}

export default SignUp;
