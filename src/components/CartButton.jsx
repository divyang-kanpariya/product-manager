import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = (props) => {
  const navigate = useNavigate();

  const CartButton = {
    position: 'fixed',
    bottom: "110px",
    right: "170px",
    backgroundColor: "black"
  }

  return (

    <div>
      <Fab sx={CartButton} onClick={props.onAdd} color='primary' aria-label="delete" size=''>
        <ShoppingCartIcon sx={{ color: 'white' }} />
      </Fab>
    </div>
  )
}

export default CartButton