import { createContext, ReactNode, useReducer } from "react"
import { menuButtonInitState, menuButtonReducer, REDUCER_ACTION_TYPE, menuButtonInitStateType } from "../reducer/menuButtonReducer"

interface MenuDisplayProps {
    children : ReactNode
}
type ReducerAction = {
    type: REDUCER_ACTION_TYPE
  }

const MenuDisplayContext = createContext<{
  state : menuButtonInitStateType,
  dispatch : React.Dispatch<any> 
}>({
    state : menuButtonInitState,
    dispatch : () => null
})

export const MenuDisplayProvider = ({ children } : MenuDisplayProps) => { 
    const [state, dispatch] = useReducer(menuButtonReducer,menuButtonInitState);
    return (
        <MenuDisplayContext.Provider value={{ state, dispatch }}>
            { children }
        </MenuDisplayContext.Provider>
    )
}

export default MenuDisplayContext;