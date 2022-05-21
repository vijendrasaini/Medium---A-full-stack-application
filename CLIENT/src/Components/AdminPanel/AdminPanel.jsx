import './adminpanel.css'
import logo from './mediumLogo.png'

import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import {Stack, Typography,IconButton, Avatar} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { openSignInPopup, setAuthStatus } from '../../Redux/Auth/actioncreator';

export const AdminPanel = ()=>{

    const dispatch = useDispatch()
    const { loggedUser, authStatus } = useSelector(store => store.auth)

    return(
        <div>
            <div className="admin-panel">
                <div className='admin-panel__medium-logo'>
                    <img src={logo} alt="logo image" />
                </div>
                <div className='admin-panel__icon-container'>
                    <IconButton>
                        <HomeIcon sx={{ fontSize : 32, color : "rgb(117 117 117)" }}/>
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon sx={{ fontSize : 32, color : "rgb(117 117 117)" }}/>
                    </IconButton>
                    <IconButton>
                        <BookmarkBorderIcon sx={{ fontSize : 32, color : "rgb(117 117 117)" }}/>
                    </IconButton>
                    <IconButton>
                        <ListAltIcon sx={{ fontSize : 32, color : "rgb(117 117 117)" }}/>
                    </IconButton>
                    <IconButton>
                        <BorderColorIcon sx={{ fontSize : 32, color : "rgb(117 117 117)" }}/>
                    </IconButton>
                </div>
                <div className='admin-panel__user-profile-image'>
                    { authStatus ? <div className='admin-panel__logout'>
                        <Avatar src={loggedUser?.avatar} alt={loggedUser?.name}/>
                        <span
                        onClick={()=>{
                            localStorage.removeItem('user')
                            dispatch(setAuthStatus(false)) 
                        }}
                        >Logout</span>
                    </div>
                    :
                    <div className='admin-panel__logout'>
                        <span onClick={()=>{
                            dispatch(openSignInPopup(true))
                        }}>Login</span>
                    </div> 
                }
                </div>
            </div>
        </div>
    )
}