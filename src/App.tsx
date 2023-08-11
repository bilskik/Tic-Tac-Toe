import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics, Login }  from "./pages"
import "./app.css"
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element : (
          <Home/>
      )
    },
    {
      path: "/settings",
      element: (
          <Settings/>
      )
    },
    {
      path: "/statistics",
      element: (
          <Statistics/>
      )
    }, 
    {
      path: "/login",
      element : (
          <Login/>
      )
    }
  ]);

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App