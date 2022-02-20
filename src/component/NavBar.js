import React from "react";
import "../App.css"
import user from "../img/avatar.svg"
import logo from "../img/LogoMi.svg"
import menu from "../img/menuHamburger.svg"


function NavBar() {
  const [navbar,setNavbar]= React.useState(false)
  const colorNav=()=>{
     if(window.scrollY>=5){
       setNavbar(true)
     }else{
       setNavbar(false)
     }
  }
window.addEventListener("scroll",colorNav)
  return (
    <nav className={navbar?"navbarBackgound navbar-expand-lg ":" navbar navbar-expand-lg "}>
      <a className="navbar-brand linkLogo" href="#">
          <img className="logo" src={logo} /> MyTinerary</a>
      <div className={navbar?"containerF":"container-fluid"}>
        
        <button className="navbar-toggler sinBorde" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><img className="menuHambur" src={menu}/></span>
        </button>
        <li class="nav-item dropdown linkAvatar">
            <a class="nav-link dropdown-toggle linkAvatar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="userImg" src={user} alt="usuario" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Log In</a></li>
              <li><a class="dropdown-item" href="#">Sign Up</a></li>
              </ul>
             </li>
       
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="ulNav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Cities</a>
              </li>
          </ul>
          
        </div>
        
      </div>
    </nav>
  )

}
export default NavBar

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';

// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';

// import Tooltip from '@mui/material/Tooltip';


// const ResponsiveAppBar = () => {
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <div className="prueba" position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//           >
//             <a className="navbar-brand linkLogo" href="#">
//               <img className="logo" src={logo} /> My Tinerary</a>
//           </Typography>
          
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             <a className="navbar-brand linkLogo" href="#">
//               <img className="logo" src={logo} /> My Tinerary</a>
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

//             <a className="nav-link" aria-current="page" href="#">Home</a>
//             <a className="nav-link" aria-current="page" href="#">Cities</a>

//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src={user} />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <a className="nav-link" aria-current="page" sx={{ color: "red" }} href="#">Home</a>
//               <a className="nav-link" aria-current="page" sx={{ color: "red" }} href="#">Cities</a>

//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </div>
//   );
// };
// export default ResponsiveAppBar;
