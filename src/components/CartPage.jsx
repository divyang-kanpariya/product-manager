import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import CartItemCard from "./CartItemCard";
import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import "../css/cartPage.css"

const CartPage = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  useEffect(() => {
    let temp = 0;
    cartProducts?.map((e) => {
      temp += Number(e.price * e.counter);
    });
    console.log(temp);

    setTotalPrice(temp);
  }, [cartProducts]);

  function DeleteFromCart(cartProductId) {
    setCartProducts((cartProducts) => {
      return cartProducts.filter((x) => {
        return x.id !== cartProductId;
      });
    });
  }

  const uniqueCartProducts = cartProducts.filter((e, id) => {
    return cartProducts.indexOf(e) == id;
  });

  return (
    <>
      <Header />
      <BackButton
        onBack={() => {
          navigate("/");
        }}
      />
      {uniqueCartProducts.map((data) => {
        return (
          <CartItemCard
            onDelete={DeleteFromCart}
            props={data}
          />
        );
      })}
      <div class="total-price">
        Total Price = $ {totalPrice}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
