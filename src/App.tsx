import React, { useState } from 'react'
import Login from './pages/login'
import Home from './pages/home'

function App() {
  const [logged] = useState(true)

  return <div className="App">{logged ? <Home /> : <Login />}</div>
}

export default App
