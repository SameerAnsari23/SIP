import React from 'react'

const App = () => {
  return (
    <div>
      {/* Page har baar refresh ho raha hai anchor tag ki wajah se: react ki SPA waali property full fill nahi ho rahi */}
      <a href="/Home">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
    </div>
  )
}

export default App
