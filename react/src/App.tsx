import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics, Login }  from "./pages"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientInfo } from "./constraints/clientId";
import "./app.css"
import { MenuDisplayProvider } from "./context/MenuDisplayProvider";
import GameBoard from "./pages/gameboard/GameBoard";
import useGame from "./hooks/useGame";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";

const App = () => {
  const { gameData,setGameData} = useGame();
  const { auth, setAuth } = useAuth();
  
  useEffect(() => {
    const refreshChecker = () => {
      if(performance.getEntriesByType("navigation")[0]) {
        setAuth({
          username : "",
          accessToken : ""
        })
      }
    }
    refreshChecker();
  },[])

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
    },
    {
      // path: `/${gameData.gameCode}`,
      path : "/game",
      element: (
          <GameBoard/>
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