import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../images/parallax-2.png"
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box className='nav' sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} className='logo' alt="" />
          </IconButton>

          <div className='grow'>
            <Typography variant="h6" color="textPrimary" component="p">
                Hola!
            </Typography>
            <div className="button">
                <Button variant="outlined">
                    <strong className='boton'>Iniciar sesión</strong>
                </Button>
                <IconButton>
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCart fontSize='large'/>
                    </Badge>
                </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
