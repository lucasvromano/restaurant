import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = () => {

  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  return (

    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setIsVisibleMenu(!isVisibleMenu)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Restaurant
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {
        isVisibleMenu && (
          <Box
            position='fixed'
            bgcolor='#f7f7f7'
            width='350px'
            height='100%'
            boxShadow='-5px 0px 35px #555'>
            <ul>
              <li>Pedidos</li>
              <li>Usuários</li>
              <li>Receitas</li>
              <li onClick={() => setIsVisibleMenu(!isVisibleMenu)}>Fechar</li>
              <li>
                <Link to='/'>
                  Sair
                </Link>
              </li>
            </ul>
          </Box>
        )
      }
    </Box>


  );
}

export default HeaderBar