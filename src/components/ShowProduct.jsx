import React, { useContext } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserContext } from '../App';
import { Container } from 'react-bootstrap';


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


  const text ={
    backgroundColor:'grey',
    border:'2px solig red',
    borderRadius:'5px',
    padding: '10px',
    width:'400px'
  }

  return (
    <div>
      <Header />
      <Fab onClick={backToApp} sx={backButton} color="primary">
        <ArrowBackIcon />
      </Fab>
      <div className='d-flex justify-content-center p-5 '>
        <div><img  style={{paddingRight:'200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCc-uABwpeaK7m166KYGjN6qb1aMSYf9TxQ&usqp=CAU" alt="" />
       </div>
        <div><table className='m-auto '>
          <tr><td colSpan={2}><p className='fs-2 p-4 text-primary'>About Product</p></td></tr>
          <tr>
            <td className='fs-5 text-primary px-3'>Name</td>
            <td ><p style={text}>this is name</p></td>
          </tr>
          <tr>
            <td className='fs-5 text-primary px-3'>Category</td>
            <td><p style={text}>hehoo this isfffffffffffffffffffffffffffffffffffffffffffffffff pareegraph</p></td>
          </tr>
          <tr>
            <td className='fs-5 text-primary px-3 '>description</td>
            <td  style={text}>This is description</td></tr>
        </table></div> 
      </div>
      <Footer /></div>
  )
}

export default ShowProduct