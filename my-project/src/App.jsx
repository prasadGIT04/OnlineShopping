import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { About,Cart,Homepage,Checkout,Error,Landing,Login,Orders,Products,SingleProductPage,Register } from './Pages'
import { ErrorElement } from './components'
import { loader as LandingLoader } from './Pages/Landing'
import {loader as SingleProductPageLoader} from './Pages/SingleProductPage'
import {loader as ProductsLoader} from './Pages/Products'


const router = createBrowserRouter([
{
  path:"/",
  element:<Homepage/>,
  errorElement:<Error/>,
  children:[{
      index:true,
      element:<Landing/>,
      errorElement:<ErrorElement/>,
      loader:LandingLoader
    },
    {
      path:"Products",
      element:<Products/>,
      errorElement:<ErrorElement/>,
      loader:ProductsLoader
    },
    {
      path:"cart",
      element:<Cart/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"products/:id",
      element:<SingleProductPage/>,
      errorElement:<ErrorElement/>,
      loader:SingleProductPageLoader,
    },
    {
      path:"checkout",
      element:<Checkout/>
    },
    {
      path:"orders",
      element:<Orders/>
    },
  ],
},
{
  path:"login",
  element:<Login/>,
  errorElement:<Error/>
},
{
  path:"register",
  element:<Register/>,
  errorElement:<Error/>
}
])
const App = () => {
  return (<>
    <RouterProvider router={router} />
    {/* <About/> */}
  </>
  )
}

export default App