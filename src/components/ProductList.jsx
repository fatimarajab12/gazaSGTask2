import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product, index) => (
                    <Product key={index} product={product} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

// Define prop types for ProductList
ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProductList;
