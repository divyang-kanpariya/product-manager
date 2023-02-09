import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddButton = () => {

    const addButton = {
        position: 'fixed',
        bottom: "110px",
        right: "90px",
    }
  return (
   
    <div>
    <Fab sx={addButton} color="primary" aria-label="add" size=''>
        <AddIcon />
      </Fab>
      </div>
  )
}

export default AddButton