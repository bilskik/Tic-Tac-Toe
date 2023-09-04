import { useContext } from "react"
import MenuDisplayContext  from "../context/MenuDisplayProvider"

const useGameMenuDisplay = () => {
    return useContext(MenuDisplayContext)
}

export default useGameMenuDisplay;
