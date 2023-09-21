import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics, Login, GameBoard }  from "./pages"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientInfo } from "./constraints/clientId";
import "./app.css"
import { MenuDisplayProvider } from "./context/MenuDisplayProvider";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
import useGame from "./hooks/useGame";
const App = () => {
  const { getAuth } = useAuth();
  const { gameData } = useGame();

  useEffect(() => {
    const fetchData = async () => {
      getAuth();
      
    }
    fetchData();

  }, []);
  
  const routes= createBrowserRouter([
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
      path : `/friendgame/${gameData.gameCode}`,
      element: (
          <GameBoard/>
      )
    }
  ]);
  return (
    <GoogleOAuthProvider clientId={clientInfo.clientId}>
      <MenuDisplayProvider>
        <RouterProvider router={routes} />
      </MenuDisplayProvider>
    </GoogleOAuthProvider>
  )
}
export default App