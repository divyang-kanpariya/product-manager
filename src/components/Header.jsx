import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../App";



function Header() {
  const navigate = useNavigate()
  const { cartProducts } = useContext(CartContext)
  const noOfItems = cartProducts.length
  return (
    <AppBar position="static" sx={{ marginBottom: "75px", backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            href="/"
            sx={{
              fontSize: '22px',
              marginRight: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Button sx={{ color: 'white', marginRight: '40px' }} onClick={() => { return navigate('/cartpage') }} >
            <ShoppingCartIcon />
            {noOfItems}
          </Button>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
