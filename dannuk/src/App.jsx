import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Router, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
