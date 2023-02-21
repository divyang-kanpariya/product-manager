import React, { useContext, useReducer } from "react";
import TextField from "@mui/material/TextField";
import Header from "./Header";
import { margin } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Category } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Footer from "./Footer";
import { UserContext } from "../App";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Box, Button, Grid } from "@mui/material";
import "../css/inputedetail.css";

const InputDetails = () => {
  const { products, setProducts } = useContext(UserContext);

  const uniqueId = uuid();

  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({
    id: uniqueId,
    name: "",
    category: "",
    file: {},
    description: "",
    price: "",
    color: "",
    counter: 1,
  });
  const [image, setImage] = useState();
  const navigate = useNavigate();


  function AddImage(event) {
    if (event.target.files && event.target.files.length > 0) {
      setProduct({ ...product, file: event.target.files[0] });
    }
  }

  const form = {
    width: "500px",
  };

  function CategorySelector(event) {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  }

  function FormValidation() {
    product.name === ""
      ? (document.getElementById("name").style.border = "2px solid red")
      : (document.getElementById("name").style.border = "none");
    product.category === ""
      ? (document.getElementById("category").style.border = "2px solid red")
      : (document.getElementById("category").style.border = "none");
    product.description === ""
      ? (document.getElementById("image").style.border = "2px solid red")
      : (document.getElementById("image").style.border = "none");
    product.description === ""
      ? (document.getElementById("description").style.border = "2px solid red")
      : (document.getElementById("description").style.border = "none");
    product.price ===""
      ? (document.getElementById("price").style.border = "2px solid red")
      : (document.getElementById("price").style.border = "none");
    if (product.color === "") {
      document.getElementById("color").style.border = "2px solid red";
    } else {
      setProducts([...products, product]);
      navigate("/");
    }
  }

  function eventHandeler(event) {
    const { name, value } = event.target;
    setProduct((product) => {
      return {
        ...product,
        [name]: value,
      };
    });
  }

  const categories = ["Mobiles", "kitchen", "Elecronics", "Home", "Computers"];


  return (
    <>
      <Header/>
      <Grid  className="form">
          <Box className='title-box'>
              <p>
                Enter Product Details
              </p>
          </Box>

          <Grid container className="form-container">
            <Grid item className="input-field-name">Name</Grid>
            <Grid item className='form-field'>
              <TextField
                id="name"
                required
                onChange={eventHandeler}
                style={form}
                name="name"
              />
            </Grid>
          </Grid>

          <Grid container className="form-container">
            <Grid item className="input-field-name">Category</Grid>
            <Grid item className='form-field'>
              <FormControl sx={form}>
                <Select
                  id="category"
                  value={product.category}
                  onChange={eventHandeler}
                  name="category"
                >
                  {categories.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


            </Grid>
          </Grid>
        
          <Grid container className="form-container">
            <Grid item className="input-field-name">Image</Grid>
            <Grid item className='form-field'>
            <input
                id="image"
                style={form}
                type="file"
                onChange={AddImage}
                name="file"
              />
            </Grid>
          </Grid>


          <Grid container className="form-container">
            <Grid item className="input-field-name">Description</Grid>
            <Grid item id="description" className='form-field'>
            <TextField
                required
                
                name="description"
                onChange={eventHandeler}
                multiline={true}
                minRows={3}
                style={form}
              />
            </Grid>
          </Grid>

          <Grid container className="form-container">
            <Grid item className="input-field-name">Price</Grid>
            <Grid item className='form-field'>
            <TextField
                id="price"
                required
                onChange={eventHandeler}
                autoFocus="true"
                style={form}
                name="price"
                type="number"
              />
            </Grid>
          </Grid>

          <Grid container className="form-container">
            <Grid item className="input-field-name">Color</Grid>
            <Grid item className='form-field'>
            <TextField
                id="color"
                required
                onChange={eventHandeler}
                autoFocus="true"
                style={form}
                name="color"
              />
            </Grid>
          </Grid>
  
              <button
              className="addproduct-button"
                onClick={FormValidation}
              >
                Add Product
              </button>
        
        </Grid> 
   
     <Footer/>
    </>
  );
};

export default InputDetails;
