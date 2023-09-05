import { useEffect, useState } from "react"
import { buttonColors as colors} from "../../constraints/colors"
import "./button.css"
type colors = {
  backgroundColor: string
  textColor:  string
  borderColor: string
  backgroundColorHover: string
  textColorHover: string
  borderColorHover: string
}

type buttonProps = {
    style?: string,
    id? : string,
    onClick? : () => void,
}
const Button = (props: buttonProps) => {
  const [hovered,setHovered] = useState<boolean>(false);
  const [classNameStyle,setClassNameStyle] = useState<string>("");
  const style = {
    backgroundColor: hovered ? colors.backgroundColorHover : colors.backgroundColor,
    color:  hovered ? colors.textColorHover  : colors.textColor,
    borderColor: hovered ? colors.borderColorHover : colors.borderColor
  }

  const handleMouseEnter = () => {
    setHovered(true);
  }
  const handleMouseLeave = () => {
    setHovered(false);
  }
  useEffect(() => {
    if(props.id === "login") {
      setClassNameStyle("home__navbar")
    } else if(props.id === "menu") {
      setClassNameStyle("home__menu")
    } else if(props.id === "rank") {
      setClassNameStyle("home__rank")
    } else if(props.id === "leaderboard") {
      setClassNameStyle("home__leaderboard")
    }
  },[props])
  return (
    <button 
      style={style} 
      className={classNameStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick}
    >
      {props.style}
    </button>
  )
}

export default Button