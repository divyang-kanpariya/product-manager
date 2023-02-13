import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const AddButton = () => {
  const navigate = useNavigate();
    const addButton = {
        position: 'fixed',
        bottom: "110px",
        right: "90px",
        backgroundColor:'black'
    }

    function addProduct(){
      navigate("/inputdetails");
    }
  return (
   
    <div>
    <Fab sx={addButton} onClick={addProduct} color="primary" aria-label="add" size=''>
        <AddIcon sx={{color:'white'}} />
      </Fab>
      </div>
  )
}

export default AddButton