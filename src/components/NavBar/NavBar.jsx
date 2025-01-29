import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";


const drawerWidth = 240;

function NavBar({ window }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" }
    // { name: "About", path: "/about" },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GroceryWale
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
  variant="h4"
  component="div"
  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, display: "flex", alignItems: "center" }}
>
  <span className="logo-icon" style={{ fontSize: "24px", marginRight: "8px" }}>🌱</span>
  GroceryWale
</Typography>

<TextField
  variant="outlined"
  placeholder="Search products..."
  value={searchQuery}
  onChange={handleSearchChange}
  sx={{
    backgroundColor: "white",
    borderRadius: "4px",
    "& .MuiInputBase-root": { padding: "2px 10px" },
    width: "40%", 
    marginLeft: "2px",  // Adds a 20px gap between the text and the search bar
  }}
/>


          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} to={item.path} sx={{ color: "white" }}>
                {item.name}
              </Button>
            ))}
            <Box className="mx-2" sx={{ display: "inline" }}>
              <div className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login
              </div>
              <div className="btn btn-danger ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                Sign Up
              </div>
            </Box>
            <IconButton color="inherit">
              <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Login Modal */}
<div
  className="modal fade"
  id="loginModal"
  tabIndex="-1"
  aria-labelledby="loginModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px" }}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">
          Login
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

{/* Signup Modal */}
<div
  className="modal fade"
  id="signupModal"
  tabIndex="-1"
  aria-labelledby="signupModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px" }}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="signupModalLabel">
          Sign Up
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="signupConfirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </Box>
  );
}

export default NavBar;
