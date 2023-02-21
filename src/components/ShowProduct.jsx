import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext, CartContext } from "../App";
import DeleteButton from "./DeleteButton";
import CartButton from "./CartButton";
import BackButton from "./BackButton";
import { Box } from "@mui/material";
import "../css/showProduct.css";

const ShowProduct = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  let currentProductId = searchParams.get("sourceid");

  const { products, setProducts } = useContext(UserContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  function BackToApp() {
    navigate("/");
  }

  const currentProduct = products.find((x) => x.id == currentProductId);

  function DeleteProduct() {
    setProducts((prevProducts) => {
      return prevProducts.filter((x, id) => {
        return x.id !== currentProductId;
      });
    });
    setCartProducts((cartProducts) => {
      return cartProducts.filter((x, id) => {
        return x.id !== currentProductId;
      });
    });
    console.log(products);
    navigate("/");
  }

  function AddToCart() {
    setCartProducts([...cartProducts, currentProduct]);
  }

  return (
    <Box>
      <Header />
      <BackButton onBack={BackToApp} />
      <Box className="box ">
        <img className="img"
          src={URL.createObjectURL(currentProduct.file)}
          alt=""
        />

        <Box className="detail-box">
          <p className="product-name">{currentProduct.name}</p>
          <p className="product-price">$ {currentProduct.price}</p>
          <Box sx={{pt:'50px'}}>
            <tr>
              <td className="color-category">
                <b>Category </b>
              </td>
              <td className="color-category">
                <p>{currentProduct.category}</p>
              </td>
            </tr>
            <tr>
              <td className="color-category">
                <b>color </b>
              </td>
              <td className="color-category">
                <p>{currentProduct.color}</p>
              </td>
            </tr>
          </Box>
          <p className="product-description">
            {currentProduct.description}
          </p>
        </Box>
      </Box>
      <CartButton onAdd={AddToCart} />
      <DeleteButton onDelete={DeleteProduct} />
      <Footer />
    </Box>
  );
};

export default ShowProduct;
