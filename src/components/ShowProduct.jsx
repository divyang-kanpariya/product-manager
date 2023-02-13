import React, { useContext } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';
import Footer from './Footer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserContext } from '../App';
import { Container } from 'react-bootstrap';
import { shadows } from '@mui/system';
import DeleteButton from './DeleteButton';
const ShowProduct = () => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams();
  let currentProductId = searchParams.get('sourceid');

  const { products, setProducts } = useContext(UserContext);
  const backButton = {
    position: 'fixed',
    top: '120px',
    left: '100px'
  }
  function backToApp() {
    navigate('/')
  }

  const currentProduct = products.find(x => x.id == currentProductId);
  console.log(currentProduct);


  const text = {
    border: '1px solid red',
    borderRadius: '5px',
    padding: '10px',
    width: '400px',
    fontSize: '19px'
  }


  function deleteProduct(){
    setProducts((prevProducts) => {
      return prevProducts.filter((x, id) => {
        return x.id !== currentProductId;
      })
    })
    console.log(products)
    navigate('/')
  }

  return (
    <div>
      <Header />
      <Fab onClick={backToApp} sx={backButton} color="primary">
        <ArrowBackIcon />
      </Fab>
      <div className='d-flex justify-content-center p-5 '>
        <div><img style={{ paddingRight: '100px', width: '380px' }} src="https://modernpaintbynumbers.com/wp-content/uploads/2021/09/Still-Life-with-Candlestick-by-leger-paint-by-number.jpg" alt="" />
          <td><p className='fs-3 text-danger mt-3' style={{ border: '1px solid red', backgroungColor: 'blue', marginLeft: '90px', borderRadius: '5px', padding: '10px 25px ', }}>$ {currentProduct.price}</p></td></div>
        <div><table className='m-auto '>
          <tr>
            <td ><p style={text}>{currentProduct.name}</p></td>
          </tr>
          <tr>
            <td><p style={text}>{currentProduct.category}</p></td>
          </tr>
          <tr>
            <td><p style={text}>{currentProduct.description}</p></td>
          </tr>
          <tr>
            <td><p style={text}>{currentProduct.color}</p></td>
          </tr>
        </table></div>
      </div>
      <DeleteButton onDelete={deleteProduct}/>
      <Footer /></div>
  )
}

export default ShowProduct