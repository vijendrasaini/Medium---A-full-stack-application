import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { AdminPanel } from '../AdminPanel/AdminPanel'
import { BlogsContainer } from '../BlogsContainer/BlogsContainer'
import { BlogInDetail } from '../Card/BlogInDetail'
import { SearchBox } from '../SearchBox/SearchBox'
import { Loading } from '../Loading/Loading'
import { Avatar, Box, Button, Dialog, Grid, TextField, Typography } from '@mui/material'
import logo from '../AdminPanel/mediumLogo.png'
import { useState } from 'react'
import { baseURL } from '../../Resources/universalData'
import { useEffect } from 'react'
import { useRef } from 'react'
import './routers.css'
import { setAuthStatus, setLoggedUser, setSignInPopup, setSignInAlert } from '../../Redux/Auth/actioncreator'



export const AllRouters = () => {

    const [signUpOpen, setSignUpOpen] = useState(false)
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const Id = useRef(null)

    const { loading } = useSelector(store => store.blog)
    const { authStatus, signInPopUp, signInAlert } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSignUpOpen = () => {
        setSignUpOpen(false)
    }
    const handleSignInOpen = () => {
        dispatch(setSignInPopup(false))
        dispatch(setSignInAlert())
    }

    const signUp = async () => {
        try {
            const path = '/register'
            const response = await fetch(`${baseURL}${path}`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "content-type": "application/json"
                }
            })
            const result = await response.json()
            console.log(result)
            if (result?.status == 'failure')
                return
            else {
                setSignUpOpen(false)
                dispatch(setSignInPopup(true))
            }
        } catch (error) {
            console.log({ error: error.message })
        }
    }
    const signIn = async () => {
        try {
            const path = '/login'
            const response = await fetch(`${baseURL}${path}`, {
                method: "POST",
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            const result = await response.json()
            if (result.status == 'failure')
                return
            else {
                if (result.status == 'success') {
                    dispatch(setAuthStatus(true))
                    localStorage.setItem('user', JSON.stringify(result.user))
                    dispatch(setLoggedUser(result.user))
                    dispatch(setSignInPopup(false))
                }
            }
        } catch (error) {
            console.log({ error: error.message })
        }
    }
    const checkLoggedUser = () => {
        if (authStatus)
            return
        if (Id.current)
            return
        if (signInAlert) {
            Id.current = setTimeout(() => {
                dispatch(setSignInPopup(true))
            }, 2000)
        }
    }
    const sendForSignUp = () => {
        dispatch(setSignInPopup(false))
        setSignUpOpen(true)
    }
    useEffect(() => {
        checkLoggedUser()

        return () => {
            clearTimeout(Id.current)
            Id.current = null
        }
    }, [])

    return loading ? <Loading /> :
        (<div style={{
            display: 'flex'
        }}>
            <AdminPanel />
            <div>
                <div className='search-box-container'>
                    <div>
                        <SearchBox />
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<BlogsContainer />} />
                        <Route path='/:username/:blogId' element={<BlogInDetail />} />
                    </Routes>
                    <Dialog open={signInPopUp} onClose={handleSignInOpen}>
                        <div className='signin-pop-up login-pop-up'>
                            <Avatar sx={{ m: 3, bgcolor: 'primary.main' }} src={logo}>
                            </Avatar>
                            <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
                                Sign in to medium
                            </Typography>
                            <div>
                                <Box noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email or username"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={user.email}
                                        onChange={handleInputChange}
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
                                        value={user.password}
                                        onChange={handleInputChange}
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
                                                fontWeight: '600',
                                                textTransform: 'none'
                                            }}
                                            onClick={signIn}
                                        >
                                            Sign In
                                        </Button>
                                    </Grid>

                                    <Grid item>
                                        Don't have an account?
                                        <span className='take_me_on_signUp_comp'
                                            style={{
                                                color: 'blue',
                                                textDecoration: 'underline',
                                            }}
                                            onClick={sendForSignUp}
                                        >
                                            {" Sign Up"}
                                        </span>
                                    </Grid>
                                    <div className='skip-for-now'>
                                        <span onClick={() => {
                                            dispatch(setSignInAlert())
                                            dispatch(setSignInPopup(false))
                                        }}>I will do it later</span>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </Dialog>
                    <Dialog open={signUpOpen} onClose={handleSignUpOpen}>
                        <div className='signup-pop-up login-pop-up'>
                            <Avatar sx={{ m: 3, bgcolor: 'primary.main' }} src={logo}>
                            </Avatar>
                            <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
                                Sign Up to medium
                            </Typography>
                            <div>
                                <Box noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        value={user.name}
                                        onChange={handleInputChange}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email or username"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={user.email}
                                        onChange={handleInputChange}
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
                                        value={user.password}
                                        onChange={handleInputChange}
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
                                                fontWeight: '600',
                                                textTransform: 'none',
                                                '&:disabled': {
                                                    background: "#ADD8E6"
                                                }
                                            }}
                                            onClick={signUp}
                                            disabled={user.name == "" || user.email == "" || user.password == ""}
                                        >
                                            Sign Up
                                        </Button>
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
        )
}