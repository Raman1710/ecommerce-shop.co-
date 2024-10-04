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
import AboutUs from './Components/AboutUs/AboutUs'
import PrimaryButton from './Components/Buttons/PrimaryButton'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './Components/TermsConditions/TermsConditions'
import DeliveryDetails from './Components/DeliveryDetails/DeliveryDetails'
import CustomerSupport from './Components/CustomerSupport/CustomerSupport'
import Features from './Components/Features/Features'
import Work from './Components/Work/Work'
import Careers from './Components/Careers/Careers'
import ManageDeliveriesFAQ from './Components/ManageDeliveriesFAQ/ManageDeliveriesFAQ'
import OrdersFAQ from './Components/OrdersFAQ/OrdersFAQ'
import PaymentsFAQ from './Components/PaymentsFAQ/PaymentsFAQ'

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
        <Route path='/about'element={<AboutUs/>}/>
        <Route path ='/features' element={<Features/>}/>
        <Route path ='/works' element={<Work/>} />
        <Route path ='/career' element={<Careers/>} />
        <Route path ='/customer-support' element= {<CustomerSupport/>} />
        <Route path ='/delivery-details'element={<DeliveryDetails/>} />
        <Route path ='/terms-&-conditions' element={<TermsConditions/>} />
        <Route path ='/privacy-policy' element= {<PrivacyPolicy/>} />
        <Route path ='/manage-delivery' element = {<ManageDeliveriesFAQ/>} />
        <Route path ='/orders' element = {<OrdersFAQ/>} />
        <Route path ='/payments' element = {<PaymentsFAQ/>} />
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
