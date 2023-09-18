import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics, Login, GameBoard }  from "./pages"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientInfo } from "./constraints/clientId";
import "./app.css"
import { MenuDisplayProvider } from "./context/MenuDisplayProvider";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
const App = () => {
  const { getAuth } = useAuth();
  const [routes, setRoutes] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      getAuth();
      const createdRoutes= createBrowserRouter([
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
        },
        {
          path : "/game",
          element: (
              <GameBoard/>
          )
        }
      ]);
      setRoutes(createdRoutes);
    }
    fetchData();
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientInfo.clientId}>
      <MenuDisplayProvider>
        {routes ? <RouterProvider router={routes} /> : null}
      </MenuDisplayProvider>
    </GoogleOAuthProvider>
  )
}
export default App