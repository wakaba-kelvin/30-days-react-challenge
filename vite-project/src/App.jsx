import { useState } from 'react'

import './App.css'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
// import index.css from './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="container">
     <Navbar/>
     <Main/>
     </div>
  )
}

export default App
