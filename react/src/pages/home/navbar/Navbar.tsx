import "./navbar.css"
import Button from '../../../components/buttons/Button'
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

type NavbarProps = {
  nickName : string
} 

//add mobile animation
const Navbar = ({ nickName } : NavbarProps) => {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [isLoginBtn, setIsLoginBtn] = useState<boolean>(true);
  const { auth, setDestroyAuth }   = useAuth();
 
  useEffect(() => {
    if(auth.username && auth.accessToken) {
      setIsLoginBtn(false);
    } else {
      setIsLoginBtn(true);
    }
  },[auth.isRefreshed])

  const handleLogout = () => {
    setDestroyAuth()
    setIsLoginBtn(true);
  }

  return (
      <header className="header">
        <div className="header__title">
          <h1 className='header__text header__text-title'>Tic-Tac-Toe</h1>
        </div>
        <div className="header__buttons">
            <HeaderNav nickName={nickName}/>
              { 
                isLoginBtn ? 
                  <Link to="/login">
                    <Button style={`login`} id={`login`}/>
                  </Link>
                 :
                <Button style={`logout`} id={`login`} onClick={handleLogout}/>

              }
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

const HeaderNav = ({nickName} : NavbarProps) => {
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
        {nickName}
      </p>
    </>
  )
}

export default Navbar