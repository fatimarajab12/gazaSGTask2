import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ activeFilter, onFilterChange }) => {
    const categories = ['All', 'Electronics', 'Clothing', 'Toys'];

    return (
        <section className="filter-section">
            {categories.map(category => (
                <button 
                    key={category} 
                    className={activeFilter === category ? 'active' : ''} 
                    onClick={() => onFilterChange(category)}
                >
                    {category}
                </button>
            ))}
        </section>
    );
};

// Define prop types for Filter
Filter.propTypes = {
    activeFilter: PropTypes.string.isRequired,  // Validate activeFilter as a required string
    onFilterChange: PropTypes.func.isRequired,  // Validate onFilterChange as a required function
};

export default Filter;
