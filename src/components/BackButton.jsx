import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';

const BackButton = (props) => {

    const backButton = {
        position: 'fixed',
        top: '75px',
        left: '60px',
        backgroundColor: 'black',
    }

    return (
        <Fab onClick={props.onBack} sx={backButton} color="primary">
            <ArrowBackIcon />
        </Fab>
    )
}

export default BackButton