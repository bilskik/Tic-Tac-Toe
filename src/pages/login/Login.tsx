import { AiFillGoogleCircle,AiOutlineUser, AiOutlineCheck } from "react-icons/ai"
import { Link } from "react-router-dom";
import LoginForms from "./loginForms/LoginForms";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import "./login.css"

const Login = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <div className='loginpage'>
            <div className="logincontainer">
                <header className="logincontainer__title">
                    Login
                </header>
                <LoginForms/>
                <p className="logincontainer__text">
                    <Link to="/getBack" className="logincontainer__text logincontainer__text-underline">
                        Forgot password?
                    </Link>
                </p>
                <div className="logincontainer__google">
                    <p>
                        Log in with
                    </p>
                    <AiFillGoogleCircle
                        className="logincontainer__googleicon"
                        onClick={() => login()}
                    /> 
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