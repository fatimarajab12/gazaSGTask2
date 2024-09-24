import { useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import './App.css';
import Footer from './components/Footer';

const products = [
  { 
      name: "Laptop", 
      category: "Electronics", 
      price: 1000, 
      image: "https://via.placeholder.com/300x200?text=Laptop",
      rating: 4.5,
      stock: true,
      description: "A high-performance laptop perfect for work and gaming.",
      onSale: true
  },
  { 
      name: "T-Shirt", 
      category: "Clothing", 
      price: 20, 
      image: "https://via.placeholder.com/300x200?text=T-Shirt",
      rating: 4.0,
      stock: true,
      description: "A comfortable and stylish t-shirt for daily wear.",
      onSale: false
  },
  { 
      name: "Smartphone", 
      category: "Electronics", 
      price: 500, 
      image: "https://via.placeholder.com/300x200?text=Smartphone",
      rating: 4.7,
      stock: false,  // Out of stock
      description: "A sleek smartphone with a stunning display.",
      onSale: true
  },
  { 
      name: "Jeans", 
      category: "Clothing", 
      price: 40, 
      image: "https://via.placeholder.com/300x200?text=Jeans",
      rating: 4.2,
      stock: true,
      description: "Durable and fashionable jeans for all occasions.",
      onSale: false
  },
  { 
      name: "Smartwatch", 
      category: "Electronics", 
      price: 250, 
      image: "https://via.placeholder.com/300x200?text=Smartwatch",
      rating: 4.3,
      stock: true,
      description: "A stylish smartwatch with fitness tracking features.",
      onSale: false
  },
  { 
      name: "Sneakers", 
      category: "Clothing", 
      price: 60, 
      image: "https://via.placeholder.com/300x200?text=Sneakers",
      rating: 4.6,
      stock: true,
      description: "Comfortable sneakers for everyday use.",
      onSale: true
  },
  { 
      name: "Headphones", 
      category: "Electronics", 
      price: 100, 
      image: "https://via.placeholder.com/300x200?text=Headphones",
      rating: 4.4,
      stock: true,
      description: "Noise-cancelling headphones for an immersive experience.",
      onSale: true
  },
  { 
      name: "Backpack", 
      category: "Clothing", 
      price: 35, 
      image: "https://via.placeholder.com/300x200?text=Backpack",
      rating: 4.1,
      stock: true,
      description: "A versatile backpack for school or travel.",
      onSale: false
  },
  { 
      name: "Camera", 
      category: "Electronics", 
      price: 700, 
      image: "https://via.placeholder.com/300x200?text=Camera",
      rating: 4.8,
      stock: true,
      description: "A DSLR camera with high-resolution capabilities.",
      onSale: false
  },
  { 
      name: "Winter Jacket", 
      category: "Clothing", 
      price: 120, 
      image: "https://via.placeholder.com/300x200?text=Winter+Jacket",
      rating: 4.5,
      stock: true,
      description: "Keep warm with this stylish winter jacket.",
      onSale: true
  },
  { 
      name: "Bluetooth Speaker", 
      category: "Electronics", 
      price: 80, 
      image: "https://via.placeholder.com/300x200?text=Bluetooth+Speaker",
      rating: 4.2,
      stock: true,
      description: "Portable Bluetooth speaker with great sound quality.",
      onSale: true
  },
  { 
      name: "Sunglasses", 
      category: "Clothing", 
      price: 30, 
      image: "https://via.placeholder.com/300x200?text=Sunglasses",
      rating: 4.4,
      stock: true,
      description: "Stylish sunglasses for sunny days.",
      onSale: false
  }
];


function App() {
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProducts = products.filter(product => 
        activeFilter === 'All' || product.category === activeFilter
    );

    return (
        <div className="App">
            <h1>Product List</h1>
            <Filter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            <ProductList products={filteredProducts} />
            <Footer/>
        </div>
    );
}

export default App;
