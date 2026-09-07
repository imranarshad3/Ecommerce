import React from 'react'
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";
import Productdetails from '../components/ProductDetails/Productdetails';
import product from "../components/Main/Products/Product";

function ProductDetails() {
  return (
    <div className="product-detials">
      <section className="header">
        <Header />
      </section>
      <section className="product-details">
        <Productdetails  product = {product}/>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  )
}

export default ProductDetails
