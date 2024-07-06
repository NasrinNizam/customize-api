
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './layouts/LayoutOne'
import { Cart } from './Pages/Cart'
import { Detail } from './Pages/Detail'
import { User } from './Pages/User'
import { Help } from './Pages/Help'
import { Contact } from './Pages/Contact'
import { Order } from './Pages/Order'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Product } from './Pages/Product'
import { NotFound } from './Pages/NotFound'

function App() {
const route =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/order' element={<Order/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
