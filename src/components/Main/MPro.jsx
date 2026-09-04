import React, { useState } from "react";

import Head from "./Head/Head";
import Product from "./Products/Product";
import Movebutton from "./Movebuttons/Movebutton";

import "./MPro.css";

function MPro() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="main-content">
      <Head />

      <Product currentPage={currentPage} />

      <div className="pagination-wrapper">
        <Movebutton
          totalpages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default MPro;
