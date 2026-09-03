import React from 'react'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import { Section } from 'lucide-react'
import "./MainContproduct.css"


function Maincontproduct() {
  const filters = [
    "Men",
    "Women"
  ]
  return (
    <section className='main-section' >
      <Aside  filters= {filters}/>
      <div className="content-area">
        <Main />
      </div>
    </section>
  )
}

export default Maincontproduct
