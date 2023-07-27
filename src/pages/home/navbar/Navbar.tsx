import "./navbar.css"
import Button from '../../../components/buttons/Button'
import "./navbar.css";
import { buttonColors } from "../../../contraints/colors";
import { Link, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

//add mobile animations
const Navbar = ({nickName} : { nickName : string}) => {
  const [isOpen,setIsOpen] = useState(false);
  return (
      <header className="header">
        <div className="header__title">
          <h1 className='header__text header__text-title'>Tic-Tac-Toe</h1>
        </div>
        <div className="header__buttons">
            <HeaderNav nickName={nickName}/>
            <Button style={`login`} colors={buttonColors}/>
        </div>
        {
          isOpen ? <IoClose className="icons icons__close" onClick={() => {setIsOpen(false)}} /> 
           : <GiHamburgerMenu className="icons icons__hamburger" onClick={() => {setIsOpen(true)}} />
        }
        <div className={`topnav topnav${isOpen ? "-active" : "-inactive"}`}>
          <HeaderNav nickName={nickName}/>
          <p className="header__text">login</p>
        </div> 
      </header>
  )
}
type headerData = {
  nickName : string,
}
const HeaderNav = (props : headerData) => {
  return (
    <>
      <p className='header__text header__text-stats'>
        <Link to="/statistics" className="links">
          Statistics
        </Link>
      </p>
      <p className='header__text header__text-settings'>
        <Link to="/settings" className="links">
          Settings  
        </Link>
      </p>
      <p className='header__text header__text-nickname'>
        {props.nickName}
      </p>
    </>
  )
}

export default Navbar