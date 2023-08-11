import { useState } from "react";
import "./login.css"
import LoginButton from "../../components/buttons/loginButtons/LoginButton";
import { AiFillGoogleCircle,AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='loginpage'>
            <div className="logincontainer">
                <header className="logincontainer__title">
                    Login
                </header>
                <form action="" className="loginforms">
                    <label htmlFor="email">
                        <p className='loginforms__email'>
                            Email
                        </p>
                        <AiOutlineMail/>
                        <input 
                            type="email"
                            placeholder="youremail@gmail.com"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        <p className='loginforms__password'>
                            Password
                        </p>
                        <RiLockPasswordLine/>
                        <input
                            type="password"
                            placeholder="******"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label htmlFor="checkbox">
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                        />
                        <p className="loginforms__checkbox">
                            Remember me?
                        </p>
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