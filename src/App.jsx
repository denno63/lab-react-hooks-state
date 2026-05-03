import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state: array of product objects (or just ids/names)
  const [cartItems, setCartItems] = useState([])

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Handler to add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  // Determine container class for dark mode styling
  const appClass = darkMode ? 'app dark-mode' : 'app light-mode'

  return (
    <div className={appClass}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category Filter Dropdown */}
      <div>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* ProductList receives category filter and addToCart callback */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      {/* Cart Component */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App