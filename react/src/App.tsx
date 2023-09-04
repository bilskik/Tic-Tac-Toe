import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics, Login }  from "./pages"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientInfo } from "./constraints/clientId";
import "./app.css"
import { MenuDisplayProvider } from "./context/MenuDisplayProvider";
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
    <GoogleOAuthProvider clientId={clientInfo.clientId}>
      <MenuDisplayProvider>
        <RouterProvider router={routes}/>
      </MenuDisplayProvider>
    </GoogleOAuthProvider>
  )
}

export default App