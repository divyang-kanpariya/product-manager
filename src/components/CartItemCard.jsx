import React, { useContext, useEffect, useState } from "react";
import { Box, CardActionArea, CardActions, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { border } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CartContext } from "../App";

function CartItemCard(props) {
    const navigate = useNavigate();

    const { cartProducts, setCartProducts } = useContext(CartContext);

    const [state, setstate] = useState();
    const [counter, setCounter] = useState(1);

    function gotoProduct() {
        setstate(props);
        navigate(`/showproduct?sourceid=${props.id}`);
    }

    function IncreaseCounter() {
        let temp =cartProducts.map((e, i) => {
            if (props.id == e.id) {
                e.counter += 1;
                
            }
            return e
        });
        
        //setCounter(counter+1);
        setCartProducts(temp);
    }

    function DecreaseCounter() {
       let temp= cartProducts.map((e, i) => {
            if (props.id == e.id) {
                e.counter = e.counter - 1;
            }
            return e
        });
        // setCounter(counter-1)
        setCartProducts(temp);
    }

    return (
        <Card
            className="cartitem-card"
            sx={{
                width: 290,
                marginLeft: 10,
                minHeight: "365px",
                backgroundColor: "#ebd3d1",
                boxShadow: "0px 0px 3px",
                float: "left",
                marginBottom: 5,
            }}
        >
            <CardMedia
                onClick={gotoProduct}
                component="img"
                height="194"
                // image={URL.createObjectURL(props.file)}
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Paella dish"
            />
            <CardContent onClick={gotoProduct}>
                <Typography variant="h5">{props.name}</Typography>
                <Typography>{props.category}</Typography>
                <Typography>{props.color}</Typography>
                <Typography className="fs-2 text-danger">$ {props.price}</Typography>
            </CardContent>
            <CardActions>
                <Grid>
                    <Button
                        size="small"
                        onClick={DecreaseCounter}
                        style={{
                            backgroundColor: "red",
                            position: "relative",
                            marginBottom: "10px",
                            marginRight: "3px",
                        }}
                    >
                        <RemoveIcon sx={{ color: "white" }} />
                    </Button>
                </Grid>
            
                <Grid>
                    <Box className="fs-3 mx-2" sx={{ marginBottom: "10px" }}>{props.counter}</Box>
                </Grid>
                <Grid>
                    <Button
                        size="small"
                        onClick={IncreaseCounter}
                        style={{
                            backgroundColor: "Green",
                            position: "relative",
                            marginBottom: "10px",
                            marginRight: "3px",
                        }}
                    >
                        <AddIcon sx={{ color: "white" }} />
                    </Button>
                </Grid>
                <Grid>
                    <Button
                        size="small"
                        onClick={() => {
                            return props.onDelete(props.id);
                        }}
                        style={{
                            backgroundColor: "black",
                            position: "relative",
                            float: "right",
                            marginBottom: "10px",
                            marginRight: "3px",
                        }}
                    >
                        <DeleteIcon sx={{ color: "white" }} />
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default CartItemCard;
