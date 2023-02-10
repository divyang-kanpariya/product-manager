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

const InputDetails = () => {

  const { products, setProducts } = useContext(UserContext);



  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({ name: "", category: "", file: "", description: "" });
  const navigate = useNavigate();


  const form = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    width: '500px',

  }

  function categorySelector(event) {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  }

  function addProduct(event) {
    event.preventDefault()
    setProducts([...products, product])

   navigate("/")

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
    'Kitchn',
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
        <form>
          <table className='text-center m-auto '>
            <tr><td colSpan={2}><p className='fs-2 pb-4 text-primary'>Enter Product Details</p></td></tr>
            <tr className='text-start'>
              <td className='fs-5 text-primary px-3'>Name</td>
              <td> <TextField onChange={eventHandeler} autoFocus='true' sx={form} label='Name' name='name' /></td>
            </tr>
            <tr className='text-start'>
              <td className='fs-5 text-primary px-3'>Category</td>
              <td> <FormControl sx={form}>
                <InputLabel>Category</InputLabel>
                <Select value={product.category} onChange={eventHandeler} label="category" name='category'>
                  {categories.map((name) => (
                    <MenuItem key={name} value={name}
                    >{name}
                    </MenuItem>))}
                </Select>
              </FormControl></td>
            </tr>
            <tr className='text-start'>
              <td className='fs-5 text-primary px-3'>Images</td>
              <td><input style={{padding:'25px 0px 0px 0px'}} type="file" onChange={eventHandeler} name='file' /></td>
            </tr>
            <tr className='text-start'>
              <td className='fs-5 text-primary px-3 '>description</td>
              <td><TextField name='description' onChange={eventHandeler} multiline={true} minRows={3} sx={form} label='' placeholder='Enter More Information about your product....' /></td></tr>
            <tr><td colSpan={2}><button style={{marginTop:'65px'}} class="btn btn-primary fs-5 " type="submit" onClick={addProduct}>Add Product</button></td></tr>
          </table>
        </form>
      </div>
      <Footer />

    </>
  )
}

export default InputDetails