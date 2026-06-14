import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/Home'
import Toaster from 'sonner'


const App = () => {
  return (
    <BrowserRouter>
    <Toaster position ='top-right'></Toaster>
      <Routes>
        <Route path ='/' element ={<UserLayout></UserLayout>}>
          {/* {User Layout} */}
          <Route index element={<Home></Home>}></Route>   {/* Default child route of / */}
        </Route>
        <Route>
          {/* {Admin Layout} */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App