import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '/components/Home'
import Add from '/components/Add'
import { Nslide } from '../components/Nslide'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2>Welcome to react learning</h2> */}
      <Nslide/>
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes> */}
      <Home />
      <Add />
    </>
  )
}

export default App