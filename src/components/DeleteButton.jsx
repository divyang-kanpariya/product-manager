import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const DeleteButton = (props) => {
  const navigate = useNavigate();
    const DeleteButton = {
        position: 'fixed',
        bottom: "110px",
        right: "90px",
        backgroundColor:"red"
    }

   
  return (
   
    <div>
    <Fab sx={DeleteButton} onClick={props.onDelete}  aria-label="delete" size=''>
        <DeleteIcon />
      </Fab>
      </div>
  )
}

export default DeleteButton