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
import "../css/header.css";

function Header() {
  const navigate = useNavigate();
  const { cartProducts } = useContext(CartContext);

  const uniqueCartProducts = cartProducts.filter((e, id) => {
    return cartProducts.indexOf(e) === id;
  });

  const noOfItems = uniqueCartProducts.length;
  return (
    <AppBar className="app-bar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography className="logo-text" href="/">
            LOGO
          </Typography>

          <Box
            className="header-box"
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Box>
          <Button
            className="open-cart"
            onClick={() => {
              return navigate("/cartpage");
            }}
          >
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
