import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './Components/Layout/UserLayout'
import { Toaster, toast } from "sonner";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Profile from './Pages/Profile';


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
        </Route>
        <Route>
          {/* {Admin Layout} */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App