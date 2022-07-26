import * as React from 'react';
import { useTheme, Box, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Badge, Menu, ChevronLeft, ChevronRight, CalendarMonth, Person, People, ExitToApp } from '@mui/icons-material';

import * as S from './styles'

type MiniDrawerType = {
  title: string,
  children: React.ReactNode
}

const listItems = [
  {
    text: 'Agendamento',
    link: '/agendamentos',
    icon: (<CalendarMonth />)
  },
  {
    text: 'Clientes',
    link: '/clientes',
    icon: (<People />)
  },
  {
    text: 'Funcionários',
    link: '/funcionarios',
    icon: (<Badge />)
  },
  {
    text: 'Usuários',
    link: '/usuarios',
    icon: (<Person />)
  },
  {
    text: 'Sair',
    link: '/',
    icon: (<ExitToApp />)
  }
]

const MiniDrawer = ({ title, children }: MiniDrawerType) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <S.AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </S.AppBar>
      <S.Drawer variant="permanent" open={open}>
        <S.DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </S.DrawerHeader>
        <Divider />
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <S.Link to={item.link}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </S.Link>
            </ListItem>
          ))}
        </List>
      </S.Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <S.DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default MiniDrawer