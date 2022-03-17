import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import user from "../img/avatar.svg"
import logo from "../img/LogoMi.svg"
import "../styles/NavBar.css"
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import usersActions from "../redux/actions/usuariosActions"



const NavBar2 = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const [navbar, setNavbar] = React.useState(false)
    const colorNav = () => {
        if (window.scrollY >= 5) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    function signOutUser() {
        console.log(props.user.email)
        
        props.signOut(props.user.email)
    }
    window.addEventListener("scroll", colorNav)
    return (
        <AppBar className='App-header' position="static">
            <Container maxWidth="xxl" className={navbar ? "navbarBackgound navbar-expand-lg " : " navbar navbar-expand-lg "}>
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ p: 0, mr: 2, display: { xs: 'none', md: 'block' } }}>
                        <LinkRouter className="navbar-brand linkLogo" to="/"><img className="logo" src={logo} alt="LogoMyTinerary" /> MyTinerary</LinkRouter>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', },
                            }}
                        >


                            <MenuItem className="navLi" onClick={handleCloseNavMenu}>
                                <LinkRouter className="nav-linkUser" aria-current="page" to="/">Home</LinkRouter>
                            </MenuItem>
                            <MenuItem className="navLi" onClick={handleCloseNavMenu}>
                                <LinkRouter className="nav-linkUser" to="/cities">Cities</LinkRouter>
                            </MenuItem>


                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <LinkRouter className="navbar-brand linkLogo" to="/"><img className="logo" src={logo} alt="LogoMyTinerary" /> MyTinerary</LinkRouter>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                        <Button onClick={handleCloseNavMenu} className="navLi">
                            <LinkRouter className="linkGeneral" aria-current="page" to="/">Home</LinkRouter>
                        </Button>
                        <Button sx={{ my: 0, color: 'white', display: 'flex' }} className="navLi">
                            <LinkRouter className="linkGeneral" to="/cities">Cities</LinkRouter>
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">

                            {
                                props.user ? (
                                    <div>
                                        <span className='spanUser'> {props.user.name.firstName}</span>
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                            <Avatar alt="Remy Sharp" className='logo' src={props.user.imageUrl} />
                                        </IconButton>
                                    </div>
                                ) :
                                    (<IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                        <Avatar alt="Remy Sharp" className='logo' src={user} />
                                    </IconButton>)
                            }

                        </Tooltip>
                        <Menu
                            className='pruebaMenu'
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                props.user ?
                                    (
                                        <MenuItem onClick={handleCloseUserMenu} className="navLi">
                                            <LinkRouter className="nav-linkUser" aria-current="page" onClick={signOutUser} to="#">Sign out</LinkRouter>
                                        </MenuItem>
                                    ) : (
                                        <div>
                                            <MenuItem onClick={handleCloseUserMenu} className="navLi">
                                                <LinkRouter className="nav-linkUser" aria-current="page" to="/signIn">Sign in</LinkRouter>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseUserMenu} className="navLi">
                                                <LinkRouter className="nav-linkUser " to="/signUp">Sign Up</LinkRouter>
                                            </MenuItem>
                                        </div>
                                    )
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    );
};


const mapStateToProps = (state) => {
    return {
        user: state.usuariosReducer.user
    }
}

const mapDispatchToProps = {
    signOut: usersActions.signOut

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar2);