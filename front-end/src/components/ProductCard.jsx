import React from 'react';

function ProductCard({product}) {
  const {id, name, price, urlImage} = product;
    return (
    <div
    data-testid={`customer_products__element-card-price-${id}`}
    >
      <Link to ={`/products/${id}`}>
      <div> {price}</div>
         <button
    type= 'button'>
      <div>
        {name}
      </div>
      <img
      src = {urlImage}
      alt={name}>
      </img>    
      </button>
      </Link>
    </div>
 
  )
}
export default ProductCard;