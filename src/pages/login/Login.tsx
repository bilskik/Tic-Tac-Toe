import { useState } from "react";
import "./login.css"
import LoginButton from "../../components/buttons/loginButtons/LoginButton";
import { AiFillGoogleCircle,AiOutlineUser, AiOutlineCheck } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
    return (
        <div className='loginpage'>
            <div className="logincontainer">
                <header className="logincontainer__title">
                    Login
                </header>
                <form action="" className="loginforms">
                    <label htmlFor="email" className="loginforms__label">
                        <p className='loginforms__username'>
                            Username
                        </p>
                        <div className="loginforms__inputcontainer">
                            <AiOutlineUser className="loginforms__icon"/>
                            <input  
                                type="text"
                                placeholder="Username"
                                id="username"
                                name="username"
                                value={username}
                                className="loginforms__input"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </label>
                    <label htmlFor="password" className="loginforms__label">
                        <p className='loginforms__password'>
                            Password
                        </p>
                        <div className="loginforms__inputcontainer">
                            <RiLockPasswordLine className="loginforms__icon"/>
                            <input
                                type="password"
                                placeholder="******"
                                id="password"
                                name="password"
                                value={password}
                                className="loginforms__input"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </label>
                    <label htmlFor="checkbox" className="loginforms__label loginforms__labelcheckbox">
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            className="loginforms__checkbox"
                            onChange={(e) => setIsCheckboxClicked(!isCheckboxClicked)}
                        />
                        { isCheckboxClicked ? <AiOutlineCheck className="loginforms__labelcheckbox-check"/> : <></>}
                        <span className="loginforms__text">
                            Remember me?
                        </span>
                    </label>
                    <LoginButton text={`login`}/>
                </form>
                <p className="logincontainer__text">
                    <Link to="/getBack" className="logincontainer__text logincontainer__text-underline">
                        Forgot password?
                    </Link>
                </p>
                <div className="logincontainer__google">
                    <p>
                        Sign in with
                    </p>
                    {/* <Link>  */}
                        <AiFillGoogleCircle className="logincontainer__googleicon"/> 
                    {/* </Link> */}
                </div>
                <p className="logincontainer__newaccount">
                    New to Tic-Tac-Toe?&nbsp;
                    <Link to="/signup" className="logincontainer__newaccount">
                        <span className="logincontainer__newaccount-underline">
                            Create account
                        </span>
                    </Link>

                </p>
            </div>
        </div>
    )
}

export default Login