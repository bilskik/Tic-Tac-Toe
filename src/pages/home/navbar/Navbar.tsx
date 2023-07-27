import "./navbar.css"
import Button from '../../../components/buttons/Button'
import "./navbar.css";
import { buttonColors } from "../../../contraints/colors";
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({nickName} : { nickName : string}) => {
  return (
      <header className="header">
        <div className="header__title">
          <h1 className='header__text header__text-title'>Tic-Tac-Toe</h1>
        </div>
        <div className="header__buttons">
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
            <Button style={`login`} colors={buttonColors}/>
        </div>
        <GiHamburgerMenu className="icons__hamburger"/>
      </header>
  )
}

export default Navbar