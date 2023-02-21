import React, { useState } from "react";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../css/productCard.css'
function ProductCard({ data }) {
  const navigate = useNavigate();

  const [state, setstate] = useState();

  function GotoProduct() {
    setstate(data);
    navigate(`/showproduct?sourceid=${data.id}`);
  }

  return (
    <Card
      onClick={GotoProduct}
      className='product-card'
 
    >
      <CardMedia
        component="img"
        height="194"
        image={URL.createObjectURL(data.file)}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
        <Typography>{data.category}</Typography>
        <Typography>{data.color}</Typography>
        <Typography className="price">$ {data.price}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
