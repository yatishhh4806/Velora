import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './Components/Layout/UserLayout'
import { Toaster, toast } from "sonner";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import CollectionPage from './Pages/CollectionPage';
import ProductDetails from './Components/Products/ProductDetails';
import Checkout from './Components/Cart/Checkout';
import OrderConfirmationPage from './Pages/OrderConfirmationPage';
import OrderDetailsPage from './Pages/OrderDetailsPage';
import MyOrderPage from './Pages/MyOrderPage';


const App = () => {
  return (
    <BrowserRouter>
    <Toaster position ='top-right'></Toaster>
      <Routes>
        <Route path ='/' element ={<UserLayout></UserLayout>}>
          {/* {User Layout} */}
          <Route index element={<Home></Home>}></Route>   {/* Default child route of / */}
          <Route path= 'login' element={<Login></Login>}></Route>
          <Route path= 'register' element={<Register></Register>}></Route>
          <Route path= 'profile' element={<Profile></Profile>}></Route>
          <Route path= 'collections/:collection' element={<CollectionPage></CollectionPage>}></Route>
          <Route path= 'product/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path= 'checkout' element={<Checkout></Checkout>}></Route>
          <Route path= 'order-confirmation' element={<OrderConfirmationPage></OrderConfirmationPage>}></Route>
          <Route path= 'order/:id' element={<OrderDetailsPage></OrderDetailsPage>}></Route>
          <Route path= 'my-orders' element={<MyOrderPage></MyOrderPage>}></Route>
        </Route>
        <Route>
          {/* {Admin Layout} */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App