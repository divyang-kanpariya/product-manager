import React, { useContext, useEffect, useState } from "react";
import { Box, CardActions, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { CartContext } from "../App";
import "../css/cartItemCard.css";

function CartItemCard({props, onDelete} ) {
  const navigate = useNavigate();
console.log('props',props)
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const [state, setstate] = useState();

  function GotoProduct() {
    setstate(props);
    navigate(`/showproduct?sourceid=${props.id}`);
  }

  function IncreaseCounter() {
    let temp = cartProducts.map((e, i) => {
      if (props.id === e.id) {
        e.counter += 1;
      }
      return e;
    });
    setCartProducts(temp);
  }

  function DecreaseCounter() {
    let temp = cartProducts.map((e, i) => {
      if (props.id == e.id) {
        e.counter = e.counter - 1;
      }
      return e;
    });
    setCartProducts(temp);
  }

  return (
    <Card className="cartitem-card">
      <CardMedia
        onClick={GotoProduct}
        component="img"
        height="194"
        image={URL.createObjectURL(props.file)}
        alt="Paella dish"
      />
      <CardContent onClick={GotoProduct}>
        <Typography variant="h5">{props.name}</Typography>
        <Typography>{props.category}</Typography>
        <Typography>{props.color}</Typography>
        <Typography className="price">$ {props.price}</Typography>
      </CardContent>
      <CardActions>
        <Grid>
          <Button
            className="minus-button"
            size="small"
            onClick={DecreaseCounter}
          >
            <RemoveIcon className="icons"/>
          </Button>
        </Grid>

        <Grid>
          <Box className="counter">
            {props.counter}
          </Box>
        </Grid>
        <Grid>
          <Button
          className="plus-button"
            size="small"
            onClick={IncreaseCounter}
          
          >
            <AddIcon className="icons" />
          </Button>
        </Grid>
        <Grid>
          <Button
          className="delete-button"
            size="small"
            onClick={() => {
              onDelete(props.id);
            }}
          >
            <DeleteIcon className="icons"/>
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default CartItemCard;
