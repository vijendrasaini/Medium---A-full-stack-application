import { useSelector } from 'react-redux'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { AdminPanel } from '../AdminPanel/AdminPanel'
import { BlogsContainer } from '../BlogsContainer/BlogsContainer'
import { BlogInDetail } from '../Card/BlogInDetail'
import { SearchBox } from '../SearchBox/SearchBox'
import { Loading } from '../Loading/Loading'
import { SignIn } from '../LoginPage/SignIn'
import { SignUp } from '../LoginPage/SignUp'
import { Avatar, Box, Button, Dialog, Grid, TextField, Typography } from '@mui/material'
import logo from '../AdminPanel/mediumLogo.png'



export const AllRouters = () => {

    const { loading } = useSelector(store => store)
    return loading ? <Loading /> :
        (<>
            <Routes>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/' element={
                    <div style={{ display: 'flex' }}>
                        <AdminPanel />
                        <BlogsContainer />
                        <SearchBox />
                    </div>
                } />
                <Route path='/:username/:blogId' element={
                    <div style={{ display: 'flex' }}>
                        <AdminPanel />
                        <BlogInDetail />
                        <SearchBox />
                    </div>
                } />
            </Routes>
            <Dialog open={true} onClose={"handleDialogClose"}>
            <div
                style={{
                    // marginTop: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin : 100
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
                <Box component="form" onSubmit={"handleSubmit"} noValidate sx={{ mt: 1 }}>
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
                            Sign In
                        </Button>
                    </Grid>

                    <Grid item>
                        Don't have an account?
                        <Link to={"#"} variant="body1" disa>
                            {" Sign Up"}
                        </Link>
                    </Grid>
                </Box>
                </div>
            </div>
            </Dialog>
        </>
        )
}


// import { Route, Routes } from 'react-router-dom'
// import { BlogInFullDetail } from '../../Pages/Blog/BlogInFullDetail'
// import { Blogs } from '../../Pages/Blogs/Blogs'



// export const AllRouters = ()=>{


//     return(
//         <Routes>
//             <Route path='/' element={<Blogs/>}/>
//             <Route path='/:username/:blogId' element={<BlogInFullDetail/>}/>
//         </Routes>
//     )
// }