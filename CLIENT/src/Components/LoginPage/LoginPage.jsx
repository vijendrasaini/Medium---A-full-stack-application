import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import './loginPage.css'
import logo from '../AdminPanel//mediumLogo.png'
// import axios from 'axios'


import { GoogleLogin } from 'react-google-login'

export const LoginPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }
    const theme = createTheme();
    const responseGoogle = async (response) => {
        const tokenId = response.tokenId
        const body = {tokenId }
        console.log(body)
        const url = `http://localhost:7000/google/signin`
        const res1 = await fetch(url,{
            method : "POST",
            body : JSON.stringify(body),
            headers : {
                "content-type" : "application/json"
            }
        })
        const res = await res1.json()
        if(res.status == "failure")
            alert('Please Sign In again.')
        alert('Successfully Signed IN .')
    }
    const errorResponseGoogle = (error) => {
        alert('Please Sign In again.')
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 3, bgcolor: 'primary.main' }} src={logo}>
                    </Avatar>
                    <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
                        Sign in to medium
                    </Typography>
                    <GoogleLogin
                        clientId="155090589337-6ur9el9q6iud4j2kub2coleidgqcvspd.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={responseGoogle}
                        onFailure={errorResponseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button className='login-with-google-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
                        )}
                    />
                    <Typography variant="h6" gutterBottom component="div" sx={{mt:2,mb:2, fontSize : "16px"}}>
                        or
                    </Typography>
                    <div disabled>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email or username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            disabled
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            disabled
                        />
                        <Grid item xs>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled
                                sx={{ 
                                    mt: 3, 
                                    mb: 2, 
                                    bgcolor: 'black', 
                                    color: 'white', 
                                    borderRadius: "99px", 
                                    padding: "10px 0px",
                                    fontWeight : '600', 
                                    textTransform : 'none'}}
                            >
                                Sign In
                            </Button>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled
                            sx={{ 
                                mt: 2, 
                                mb: 2, 
                                bgcolor: 'white', 
                                color: 'white', 
                                background : 'blue',
                                borderRadius: "99px",
                                fontSize: "14px",
                                fontWeight : '600', 
                                textTransform : 'none',
                                '&:hover':{
                                    color : 'white',
                                    background : 'blue'
                                }
                             }}
                        >
                            Sign up with phone or email
                        </Button>

                        {/* <Grid item>
                            Don't have an account?
                            <Link href="#" variant="body1" disa>
                                {" Sign Up"}
                            </Link>
                        </Grid> */}
                    </Box>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
}