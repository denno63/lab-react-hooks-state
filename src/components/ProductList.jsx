import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (extended for better demonstration)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.80', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true }
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  // Filter products based on selected category
  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })

  // Message when no products match
  if (filteredProducts.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available in this category.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList