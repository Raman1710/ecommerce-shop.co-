import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Banner from './Components/Banner/Banner'
import Category from './Pages/Category'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {
  

  return (
    <BrowserRouter>
     <Banner/>
      <Navbar/>

    <Routes>
      <Route path='/' element= {<Shop/>} />
      <Route path='/men' element= {<Category category="men" />} />
      <Route path='/women' element= {<Category category="women"  />} />
      <Route path='/casual' element= {<Category category="casual" />} />
      <Route path='/party' element= {<Category category="party" />} />
      <Route path='/formal' element= {<Category category="formal" />} />
      <Route path='/gym' element= {<Category category="gym" />} />
      <Route path='/brands' element= {<Category category="brands" />} />
      <Route path='/new-arrivals' element= {<Category category="new-arrivals" />} />
      <Route path='/on-sale' element= {<Category category="onsale" />} />
      <Route path='/product' element={<Product/>}> 
        <Route path='/productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>

    </BrowserRouter>

  )
}

export default App
