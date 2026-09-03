import React from 'react'
import './Headmargin.css'

function Headmargin({total_pro}) {
  return (
    <section className="head-margin">
        <p>
            <a href="/all" className="allcollection">All Collections</a>
            <p id='t-line'> {total_pro} Products</p>
        </p>
    </section>
  )
}

export default Headmargin
