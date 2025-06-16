import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Router, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
