import React from 'react'
import Header from '../components/Header/Header'
import Headmargin from '../components/MarginComponents/Headmargin'
import Maincontproduct from '../components/MainContproduct/Maincontproduct'

function ProductPage() {
  return (
    <div className="product-page">
        <Header />
        <section className="main" style={{padding: '0px 10px'}}>


        <Headmargin totall_pro = {32} />
        <Maincontproduct />

        </section>
    </div>
  )
}

export default ProductPage
