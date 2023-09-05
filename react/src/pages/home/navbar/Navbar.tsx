import "./navbar.css"
import Button from '../../../components/buttons/Button'
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

//add mobile animations
const Navbar = ({nickName} : { nickName : string}) => {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [isLoginBtn, setIsLoginBtn] = useState<boolean>(true);
  const { auth, setDestroyAuth }   = useAuth();

 

  useEffect(() => {
    console.log(auth.username)
    console.log(isLoginBtn);
    console.log("useEffect")
    console.log(" Aith " + auth.isRefreshed)
    if(auth.username && auth.accessToken) {
      setIsLoginBtn(false);
    } else {
      setIsLoginBtn(true);
    }
    console.log(" AUth" + auth.isRefreshed)
  },[auth.isRefreshed])

  const handleLogout = () => {
    setDestroyAuth()
    console.log("Handle1")
    setIsLoginBtn(true);
    console.log("Handle2")

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