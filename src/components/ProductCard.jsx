import React, { useState } from 'react'
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const navigate = useNavigate();
  const data = {
    id : props.id,
    name: props.name,
    description: props.description,
    category: props.category,
  }
  const [state, setstate] = useState();
  

  function gotoProduct(){
    setstate(data)
      navigate("/showproduct",{state});
  }


  return (
    <Card onClick={gotoProduct} sx={{ width: 340, marginLeft: 10, backgroundColor: 'grey', boxShadow: "0px 0px 3px", float: 'left', marginBottom: 5 }}>

      <CardMedia
        component="img"
        height="194"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h5'>{data.name}</Typography>
        <Typography>{data.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard