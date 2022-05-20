import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './loginPage.css'
import logo from '../AdminPanel//mediumLogo.png'


export const SignUp = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }
    return (
            <div
                style={{
                    marginTop: 100,
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
                    />
                    <Grid item xs>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, 
                                mb: 2, 
                                borderRadius: "99px", 
                                padding: "10px 0px",
                                fontWeight : '600', 
                                textTransform : 'none'}}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Box>
                </div>
            </div>
    );
}