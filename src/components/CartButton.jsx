import React from 'react'
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = (props) => {

  const cartButton = {
    position: 'fixed',
    bottom: "110px",
    right: "170px",
    backgroundColor: "black"
  }

  return (

    <div>
      <Fab sx={cartButton} onClick={props.onAdd} color='primary' aria-label="delete" size=''>
        <ShoppingCartIcon sx={{ color: 'white' }} />
      </Fab>
    </div>
  )
}

export default CartButton