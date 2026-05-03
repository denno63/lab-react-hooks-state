import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Button text changes based on current mode
  const buttonText = darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'

  return <button onClick={toggleDarkMode}>{buttonText}</button>
}

export default DarkModeToggle