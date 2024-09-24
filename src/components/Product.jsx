// Product.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Product.css'; // Import the CSS for styling

const Product = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Rating: {product.rating} ★</p>
            <p>{product.stock ? 'In Stock' : 'Out of Stock'}</p>
            {product.onSale && <span className="sale-tag">On Sale!</span>}
            <p>Description: {product.description}</p>
        </div>
    );
};

// Define prop types for Product
Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        stock: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
        onSale: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Product;
