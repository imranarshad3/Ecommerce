import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Movebutton.css";

function Movebutton({ totalpages = 5, onPageChange }) {
  const [pageno, setPageno] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalpages && page !== pageno) {
      setPageno(page);
      if (onPageChange) {
        onPageChange(page);
      }
    }
  };

  return (
    <section className="move-margin">
      <div className="move-main">
        <button
          type="button"
          onClick={() => handlePageClick(pageno - 1)}
          disabled={pageno === 1}
          aria-label="Previous Page"
        >
          <ChevronLeft size={15} />
        </button>

        {[...Array(totalpages).keys()].map((index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              type="button"
              className={pageno === pageNumber ? "active" : ""}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => handlePageClick(pageno + 1)}
          disabled={pageno === totalpages}
          aria-label="Next Page"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </section>
  );
}

export default Movebutton;