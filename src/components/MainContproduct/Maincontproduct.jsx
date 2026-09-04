import React from "react";
import aero from "./Images/Aero.png"
import apex from "./Images/ApexChrono.png"
import trench from "./Images/classictrench.png"

import Aside from "../Aside/Aside";
import MPro from "../Main/MPro";
import Recentlyviewed from "../Main/RecentlyViewed/Recentlyviewed";

import "./MainContproduct.css";
import Footeer from "../ProductFooter/Footer/Footeer";

function MainContProduct() {
  const filters = ["Men", "Women"];

  const productsList = [
    {
      id: 1,
      name: "Essential Wallet",
      price: 45.00,
      image: aero,
    },
    {
      id: 2,
      name: "Aero Shades",
      price: 110.00,
      image: trench,
    },
    {
      id: 2,
      name: "Aero Shades",
      price: 100.00,
      image: apex,
    },
  ];

  return (
    <div className="main-cont-product-wrapper">
      <section className="main-section">
        <Aside filters={filters} />

        <main className="content-area">
          <MPro />
        </main>
      </section>

      <section className="recentlyview">
        <Recentlyviewed Recentlyviewed={productsList} />
      </section>

      <section className="footer">
        <Footeer />
      </section>
    </div>
  );
}

export default MainContProduct;

