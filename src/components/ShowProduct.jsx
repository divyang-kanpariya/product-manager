import React, { useContext } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';
import Footer from './Footer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserContext, CartContext } from '../App';
import { Container } from 'react-bootstrap';
import { shadows } from '@mui/system';
import DeleteButton from './DeleteButton';
import CartButton from './CartButton';
import BackButton from './BackButton';

const ShowProduct = () => {
  const navigate = useNavigate()


  const [searchParams, setSearchParams] = useSearchParams();
  let currentProductId = searchParams.get('sourceid');

  const { products, setProducts } = useContext(UserContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  console.log('cartproducts', cartProducts)


  function backToApp() {
    navigate('/')
  }

  const currentProduct = products.find(x => x.id == currentProductId);



  const text = {
    borderRadius: '5px',
    padding: '10px',
    width: '400px',
    fontSize: '19px'
  }


  function deleteProduct() {
    setProducts((prevProducts) => {
      return prevProducts.filter((x, id) => {
        return x.id !== currentProductId;
      })
    })
    setCartProducts((cartProducts) => {
      return cartProducts.filter((x, id) => {
        return x.id !== currentProductId;
      })
    })
    console.log(products)
    navigate('/')
  }

  function addToCart() {
    setCartProducts([...cartProducts, currentProduct])
    console.log('After cartproducts', cartProducts)
  }

  return (
    <div>
      <Header />
      <BackButton onBack={backToApp} />
      <div className='d-flex justify-content-center p-5 '>
        <div><img style={{ paddingRight: '100px', width: '600px' }} src={URL.createObjectURL(currentProduct.file)} alt="" />
        </div>
        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '45px', fontWeight: '600', padding: '0 0 0 0' }}>{currentProduct.name}</p>
          <p style={{ fontWeight: '500', fontSize: '35px', padding: '40px 0 0 0' }}>$ {currentProduct.price}</p>
          <div className='fs-5' style={{ padding: '50px 0 0 0' }}><tr>
            <td style={{ width: '100px' }}><b>Category  </b></td><td style={{ width: '100px' }}><p >{currentProduct.category}</p></td>
          </tr>
            <tr>
              <td style={{ width: '100px' }}><b>color  </b></td><td style={{ width: '100px' }}><p >{currentProduct.color}</p></td>
            </tr>
          </div>
          <p style={{ padding: '40px 0 40px 0', fontSize: '20px' }}>{currentProduct.description}</p>

        </div>
      </div>
      <CartButton onAdd={addToCart} />
      <DeleteButton onDelete={deleteProduct} />
      <Footer /></div>
  )
}

export default ShowProduct