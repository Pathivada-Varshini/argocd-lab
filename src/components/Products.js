import React, { useEffect, useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8087/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('There was an error fetching the products!', error));
  }, []);

  return (
    <div className="products">
      <h2>Products List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;