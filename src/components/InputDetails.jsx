import React, { useReducer } from 'react'
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

const InputDetails = () => {

  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);

  const [state, dispatch] = useReducer(reducer ,{ id: "", name: "", category: "", discription: "" });
console.log(state);
  const products = [];

  function reducer(state,action){

  }

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

  function addProduct(event){
    console.log(event);
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
        <table className='text-center m-auto '>
          <tr><td colSpan={2}><p className='fs-2 text-primary'>Enter Product Details</p></td></tr>
          <tr>
            <td className='fs-5 text-primary px-3'>Name</td>
            <td> <TextField autoFocus='true' sx={form} label='Name' /></td>
          </tr>
          <tr>
            <td className='fs-5 text-primary px-3'>Category</td>
            <td fullHight > <FormControl sx={form}>
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={categorySelector} label="category">
                {categories.map((name) => (
                  <MenuItem key={name} value={name}
                  >{name}
                  </MenuItem>))}
              </Select>
            </FormControl></td>
          </tr>
          <tr>
            <td><td className='fs-5 text-primary px-3'>Images</td></td>
            <td><input type="file" onChange={uploadImages} /></td>
          </tr>

          <tr>
            <td className='fs-5 text-primary px-3 '>Discription</td>
            <td><TextField multiline={true} minRows={3} sx={form} label='' placeholder='Enter More Information about your product....' /></td></tr>
          <tr><td colSpan={2}><button class="btn btn-primary mt-5 fs-5 " type="submit" onClick={addProduct}>Add Product</button></td></tr>
        </table>



      </div>
      <Footer />

    </>
  )
}

export default InputDetails