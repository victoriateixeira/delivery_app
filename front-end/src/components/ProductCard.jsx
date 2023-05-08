import React from 'react';

function ProductCard({id, name, price, urlImage}) {
  return (
    <div
    data-testid={`customer_products__element-card-price-${id}`}
    >
      <div> {price}</div>
         <button
    type= 'button'>
      <div>
        {name}
      </div>
      <img
      src = {urlImage}>
      </img>    
      </button>
      
    </div>
 
  )
}
export default ProductCard;