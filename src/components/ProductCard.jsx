import React, { useState } from 'react'
import { CardActionArea, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const navigate = useNavigate();
  const data = {
    id: props.id,
    name: props.name,
    file: props.file,
    description: props.description,
    category: props.category,
    price: props.price,
    color: props.color,
  }
  const [state, setstate] = useState();

  
  function gotoProduct() {
    setstate(data)
    navigate(`/showproduct?sourceid=${data.id}`);
  }


  return (
    <Card onClick={gotoProduct} sx={{ width: 290, marginLeft: 10, minHeight: '365px', backgroundColor: '#ebd3d1', boxShadow: "0px 0px 3px", float: 'left', marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="194"
         // image={URL.createObjectURL(data.file)}
         image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant='h5'>{data.name}</Typography>
          <Typography>{data.category}</Typography>
          <Typography>{data.color}</Typography>
          <Typography className='fs-2 text-danger'>$ {data.price}</Typography>
        </CardContent>
    </Card>

  )
}

export default ProductCard