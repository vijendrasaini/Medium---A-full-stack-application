import './adminpanel.css'
import logo from './mediumLogo.png'

import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import {Stack, Typography,IconButton, Avatar} from '@mui/material'

export const AdminPanel = ()=>{


    return(
        <div className='admin-panel-container'>
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
                    <Avatar src='vijendra' alt='user-image'/>
                </div>
            </div>
        </div>
    )
}