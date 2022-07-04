import React, { useState } from 'react'
import Login from './pages/login'

function App() {
  const [logged, setLogged] = useState(false)

  return <div className="App">{logged ? <>home</> : <Login />}</div>
}

export default App
