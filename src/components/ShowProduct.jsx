import React, { useContext } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserContext } from '../App';
import { Container } from 'react-bootstrap';
import { shadows } from '@mui/system';


const ShowProduct = () => {
  const navigate = useNavigate()

  const { products } = useContext(UserContext);
  const backButton = {
    position: 'fixed',
    top: '120px',
    left: '100px'
  }
  function backToApp() {
    navigate('/')
  }


  const text = {
    border: '1px solid red',
    borderRadius: '5px',
    padding: '10px',
    width: '400px',
  }

  return (
    <div>
      <Header />
      <Fab onClick={backToApp} sx={backButton} color="primary">
        <ArrowBackIcon />
      </Fab>
      <p style={{ textAlign: 'center' }} className='fs-2 p-4 text-primary'>About Product</p>
      <div className='d-flex justify-content-center p-5 '>

        <div><img style={{ paddingRight: '100px', width:'350px' }} src="https://modernpaintbynumbers.com/wp-content/uploads/2021/09/Still-Life-with-Candlestick-by-leger-paint-by-number.jpg" alt="" />
        </div>
        <div><table className='m-auto '>

          <tr>
            <td ><p style={text}>this is name</p></td>
          </tr>
          <tr>
            <td><p style={text}>this is category</p></td>
          </tr>
          <tr>
            <td><p style={text}>This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription,This is discription</p></td>
          </tr>
          <tr>
            <td><p style={text}>This is color</p></td>
          </tr>
          <tr>
            <td><p style={text}>This is price</p></td>
          </tr>
        </table></div>
      </div>
      <Footer /></div>
  )
}

export default ShowProduct