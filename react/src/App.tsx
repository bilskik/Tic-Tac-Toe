import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home, Settings, Statistics, Login, GameBoard }  from "./pages"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientInfo } from "./constraints/clientId";
import "./app.css"
import { MenuDisplayProvider } from "./context/MenuDisplayProvider";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
import useGame from "./hooks/useGame";
import useFetch from "./hooks/useFetch";
type responseType = {
  gameCode : string,
  marksToWin : number,
  boardSize : number
}

const App = () => {
  const { getAuth } = useAuth();
  const { gameData, setGameData, saveData } = useGame();
  const { fetchData } = useFetch({
    url : "/friendgame/guest",
    isJWT : true

  });
  useEffect(() => {
    const fetchData = async () => {
      getAuth();
      
    }
    fetchData();

  }, []);

  useEffect(() => {
    const currUrl : string = window.location.href;
    if(currUrl.includes("friendgame") && gameData.gameCode === "") {
      const lastSlashIndex = currUrl.lastIndexOf("/");
      const code = currUrl.substring(lastSlashIndex + 1);
      const url = `/friendgame/guest/${code}`
      const postDataAndProcess = async () => {
        fetchData(url).then(
          (response : responseType)  => {
            const responseData = {
              ...gameData,
              gameCode : response.gameCode,
              markNumber : response.marksToWin,
              boardSize : response.boardSize
            }
            saveData(responseData)
            setGameData(responseData)
          }
        )
      }
      postDataAndProcess();
    }


  },[window.location.href])

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