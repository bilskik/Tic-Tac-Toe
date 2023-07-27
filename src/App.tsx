import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics }  from "./pages"
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
    }
  ]);

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App