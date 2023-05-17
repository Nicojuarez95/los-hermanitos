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
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import { Link as Anchor} from 'react-router-dom';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [{basket, user}, dispatch] = useStateValue()
  const navigate = useNavigate();

  const handleAuth = () =>{
    if (user){
      auth.signOut()
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: []
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null
      });
      navigate('/');
    }
  }

  return (
    <Box className='nav' sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} className='logo' alt="" />
            </IconButton>
          </Link>

          <div className='grow'>
            <Typography variant="h6" color="textPrimary" component="p">
            <p className='saludo'><span className='holas'>Hi</span> {user ? user.email : "!"}</p>
            </Typography>
            <div className="button">
              <Anchor to="/iniciarsesion">
                <Button variant="outlined" onClick={handleAuth}>
                    <strong className='boton'>{user ? "Log Out" : "Log In"}</strong>
                </Button>
              </Anchor>
                <Link to="/carrito">
                  <IconButton>
                      <Badge badgeContent={basket?.length} color='secondary'>
                          <ShoppingCart fontSize='large'/>
                      </Badge>
                  </IconButton>
                </Link>
                
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
