import React, { useContext, useReducer } from 'react'
import TextField from '@mui/material/TextField';
import Header from './Header';
import { margin } from '@mui/system';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Category } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Footer from './Footer';
import { UserContext } from '../App';
import { type } from '@testing-library/user-event/dist/type';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


const InputDetails = () => {

  const { products, setProducts } = useContext(UserContext);


  const unique_id = uuid();

  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({ id: unique_id, name: "", category: "", file: {}, description: "", price: "", color: "", counter:1 });
  const [image, setImage] = useState()
  const navigate = useNavigate();

  console.log('image', image)
  

  function addImage(event) {
    if (event.target.files && event.target.files.length > 0) {
      setProduct({ ...product, file: event.target.files[0] })

    }
  }

  function removeImage() {
    setImage();
  }


  const form = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    width: '500px',

  }

  function categorySelector(event) {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  }

  function formValidation() {

    // product.name == "" ? document.getElementById('name').style.border = '2px solid red' : document.getElementById('name').style.border = 'none';
    // product.category == "" ? document.getElementById('category').style.border = '2px solid red' : document.getElementById('category').style.border = 'none';
    // product.description == "" ? document.getElementById('image').style.border = '2px solid red' : document.getElementById('image').style.border = 'none';
    // product.description == "" ? document.getElementById('description').style.border = '2px solid red' : document.getElementById('description').style.border = 'none';
    // product.price == "" ? document.getElementById('price').style.border = '2px solid red' : document.getElementById('price').style.border = 'none';
    // if (product.color == "") {
    //   document.getElementById('color').style.border = '2px solid red';
    // }
    // else {
      setProducts([...products, product])
      navigate("/")
    // }

  }


  function eventHandeler(event) {
    const { name, value } = event.target;
    setProduct((product) => {
      return {
        ...product,
        [name]: value
      };
    })
  }

  const categories = [
    'Mobiles',
    'kitchen',
    'Elecronics',
    'Home',
    'Computers',
  ]

  function uploadImages(event) {
    console.log(event);
  }
  return (
    <>
      <Header />
      <div className='w-40 justify-content-center col-12 d-flex'>

        <table style={{ fontWeight: '500' }} className='text-center m-auto '>
          <tr><td colSpan={2}><p style={{ fontWeight: '600' }} className='fs-2 '>Enter Product Details</p></td></tr>

          <tr className='text-start'>
            <td className='fs-5 px-3'>Name</td>
            <td> <TextField id='name' required onChange={eventHandeler} sx={form} name='name' /></td>
          </tr>
          <tr className='text-start'>
            <td className='fs-5 px-3'>Category</td>
            <td> <FormControl sx={form}>
              <Select id='category' value={product.category} onChange={eventHandeler} name='category'>
                {categories.map((name) => (
                  <MenuItem key={name} value={name}
                  >{name}
                  </MenuItem>))}
              </Select>
            </FormControl></td>
          </tr>
          <tr className='text-start'>
            <td className='fs-5 px-3'>Images</td>
            <td><input id='image' style={{ padding: '20px 0px 20px 0px' }} type="file"  onChange={addImage} name='file' /></td></tr><tr><td> </td>

          </tr>
          <tr className='text-start'>
            <td className='fs-5 px-3 '>description</td>
            <td id='description'><TextField required name='description' onChange={eventHandeler} multiline={true} minRows={3} sx={form} style={{ marginTop: '0' }} />
            </td>
          </tr>
          <tr className='text-start'>
            <td className='fs-5 px-3'>Price</td>
            <td> <TextField id='price' required onChange={eventHandeler} autoFocus='true' sx={form} name='price' type='number' /></td>

          </tr>
          <tr className='text-start'>
            <td className='fs-5  px-3'>Color</td>
            <td> <TextField id="color" required onChange={eventHandeler} autoFocus='true' sx={form} name='color' /></td>
          </tr>
          <tr><td colSpan={2}><button style={{ marginTop: '30px', marginBottom: '100px', backgroundColor: 'black', border: 'none' }} class="btn btn-primary fs-5 " type="submit" onClick={formValidation}>Add Product</button></td></tr>
        </table>
      </div>
      <Footer />

    </>
  )
}

export default InputDetails