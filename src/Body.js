import React from 'react';
import ProductDetail from './ProductDetail';

function Body({ items, handleCheckboxChange, onAddComment }) {
  return (
    <div className="body">
      <div className="bodydiv">
        <h2>List of Products</h2>
        {items.map((item) => (
          <ProductDetail key={item.id} product={item} onAddComment={onAddComment} />
        ))}
      </div>
    </div>
  );
}

export default Body;
