import { useEffect, useState } from "react"
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
    colors: colors,
}
const Button = (props: buttonProps) => {
  const [hovered,setHovered] = useState(false);
  const style = {
    backgroundColor: hovered ? props.colors.backgroundColorHover : props.colors.backgroundColor,
    color:  hovered ? props.colors.textColorHover  : props.colors.textColor,
    borderColor: hovered ? props.colors.borderColorHover : props.colors.borderColor
  }
  useEffect(() => {
    if(props.style === "login") {
      // style.hoverColor = "green";
    }
  },[props])
  const handleMouseEnter = () => {
    setHovered(true);
  }
  const handleMouseLeave = () => {
    setHovered(false);
  }
  return (
    <button 
      style={style} 
      className="home__button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.style}
    </button>
  )
}

export default Button