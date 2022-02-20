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

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar2 = () => {
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
    window.addEventListener("scroll", colorNav)
    return (
        <AppBar className='App-header' position="static">
            <Container maxWidth="xxl" className={navbar ? "navbarBackgound navbar-expand-lg " : " navbar navbar-expand-lg "}>
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrapc component="div" sx={{ p: 0, mr: 2, display: { xs: 'none', md: 'block' } }}>
                        <a className="navbar-brand linkLogo" href="#"><img className="logo" src={logo} alt="LogoMyTinerary" /> MyTinerary</a>
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

                            <MenuItem onClick={handleCloseNavMenu}>
                                <li className="navLi">
                                    <a className="nav-linkUser" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="navLi">
                                    <a className="nav-linkUser" href="#">Cities</a>
                                </li>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <a className="navbar-brand linkLogo" href="#"><img className="logo" src={logo} alt="LogoMyTinerary" /> MyTinerary</a>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 0, color: 'white', display: 'flex' }}
                        >
                            <li className="navLi">
                                <a className="linkGeneral" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="navLi">
                                <a className="linkGeneral" href="#">Cities</a>
                            </li>
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                <Avatar alt="Remy Sharp" className='logo' src={user} />
                            </IconButton>
                        </Tooltip>
                        <Menu
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

                            <MenuItem onClick={handleCloseUserMenu}>
                                <li className="navLi">
                                    <a className="nav-linkUser" aria-current="page" href="#">Log in</a>
                                </li>
                                <li className="navLi">
                                    <a className="nav-linkUser " href="#">Sign Up</a>
                                </li>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
};
export default NavBar2;