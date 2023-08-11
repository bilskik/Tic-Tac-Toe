import { useState } from "react";
import "./login.css"
import LoginButton from "../../components/buttons/loginButtons/LoginButton";
import { AiFillGoogleCircle,AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                    <label htmlFor="checkbox" className="loginforms__label">
                        <span className="loginforms__checkbox">
                            Remember me?
                        </span>
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                        />

                    </label>
                    <LoginButton text={`login`}/>
                </form>
                <p className="logincontainer__text">
                    Forgot password?
                </p>
                <AiFillGoogleCircle/> 
                <p className="logincontainer__google">
                    Sign in with google
                </p>
                <p className="logincontainer__newaccount">
                    New to Tic-Tac-Toe? <span>Create account</span>
                </p>
            </div>
        </div>
    )
}

export default Login