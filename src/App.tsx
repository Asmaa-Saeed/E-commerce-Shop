import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Layouts/Navbar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PostDetails from './Pages/PostDetails'
import Login from './Pages/Registeration/Login'
import SignUp from './Pages/Registeration/SignUp'
// import PostDetails from './Pages/PostDetails'

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/postDetails/:id" element={<PostDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

      </Routes>
    </Router> 
    </>
  )
}

export default App
