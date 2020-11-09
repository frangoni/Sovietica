// import React from "react";
// import {Link} from "react-router-dom"
// import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
// import HomeIcon from "@material-ui/icons/Home";

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.black, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.black, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "dark",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
// }));

// export default function PrimarySearchAppBar({ handleChange, handleSubmit }) {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="dark"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static" style={{ backgroundColor: "#eeeeee" }} >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="dark"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <form onSubmit={handleSubmit}>
//               <InputBase
//                 onChange={handleChange}
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput,
//                 }}
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </form>
//           </div>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
          
//             <Link to="/home">
//             <IconButton color="black">
//               <HomeIcon />
//             </IconButton>
//             </Link>
          

//             <IconButton aria-label="show 4 new mails" color="black">
//               <Badge badgeContent={4} color="secondary">
//                 <ShoppingCartRoundedIcon />
//               </Badge>
//             </IconButton>

//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="black"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>

//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>

//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }

import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ handleSubmit, handleChange, value, user, handleLogout }) => (
  
  <div>
    <Navbar bg="light" variant="light">

      <Nav className="mr-auto">
      {user._id? ( 
        <Nav className="text-dark">
          <NavDropdown
            title={user.nombre}
            id="basic-nav-dropdown"
            className="text-warning"
          >
            <NavDropdown.Item>
              <Link to="/cart">Carrito</Link>
            </NavDropdown.Item>

            { user.rol == "admin" ? (
              <NavDropdown.Item>
              <Link to="/admin">Panel</Link>
            </NavDropdown.Item>
            ):null
            }
            
            <NavDropdown.Divider />

            <NavDropdown.Item>
            <p onClick={handleLogout}> Log Out </p>
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      ) : (
        <Nav>
          <Nav.Link className="text-dark">
            <Link to={"/login"} className="text-dark">
              Log In
            </Link>
          </Nav.Link>

          <Nav.Link className="text-dark">
            <Link to={"/register"} className="text-dark ">
              Register
            </Link>
          </Nav.Link>
        </Nav>
      )}
      </Nav>
      <Nav.Link>
          <Link to={"/home"} className="text-dark">
            Home
          </Link>
        </Nav.Link>

      <Form onSubmit={handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Buscar Prenda"
          className="mr-sm-3 "
          onChange={handleChange}
          value={value}
        />
        

        <Button type="submit" variant="dark">
          Search
        </Button>

      </Form>
    </Navbar>
  </div>
);

