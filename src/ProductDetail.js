import React, { useState } from 'react';

const ProductDetail = ({ product, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    onAddComment(product.id, comment);
    setComment('');
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        <h3>Comments</h3>
        <ul>
          {product.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <form>
          <input type="text" value={comment} onChange={handleCommentChange} />
          <button type="button" onClick={handleAddComment}>
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
