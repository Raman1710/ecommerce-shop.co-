import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Banner from './Components/Banner/Banner'
import Category from './Pages/Category'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'

function MainApp() {

  return (
    <>
      <Banner/>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<Category category="mens" />} />
        <Route path='/women' element={<Category category="women" />} />
        <Route path='/casual' element={<Category sub_category="casual" />} />
        <Route path='/party' element={<Category sub_category="party" />} />
        <Route path='/formal' element={<Category sub_category="formal" />} />
        <Route path='/gym' element={<Category sub_category="gym" />} />
        <Route path='/on-sale' element={<Category on_sale= {true} />} />
        <Route path='/new-arrivals' element={<Category new_arrival={true}/>} />
        <Route   >
           <Route path='/calvin-klein' element={<Category brand="Calvin Klein"/>}/>
           <Route path='/gucci' element={<Category brand="Gucci"/>}/>
           <Route path='/prada' element={<Category brand="Prada"/>}/>
           <Route path='/zara' element={<Category brand="Zara"/>}/>
           <Route path='/versace' element={<Category brand="Versace"/>}/>
        </Route>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/register' element={<LoginSignup />} />
      </Routes>
      <Footer/>

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
