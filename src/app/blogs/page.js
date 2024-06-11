import React from 'react'
import "./productss.css";
import Productcards from './productsscards/productcards'
import Producttop from './producttop/producttop'
import Productcolumcard from './productscolumncard/productcolumcard';
const blogs = () => {
  return (
    <div>
        <Producttop/>
        <Productcards/>
        <Productcolumcard/>
    </div>
  )
}

export default blogs