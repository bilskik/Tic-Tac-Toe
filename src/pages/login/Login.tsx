import { AiFillGoogleCircle,AiOutlineUser, AiOutlineCheck } from "react-icons/ai"
import { Link } from "react-router-dom";
import LoginForms from "./loginForms/LoginForms";
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from "react";
import "./login.css"
import LoginAlert from "../../components/alerts/loginalert/LoginAlert";

const Login = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    const [serverErrorAlert, setServerErrorAlert] = useState({
        isAlert : false,
        errorMessage : ""
    });
    const serverError = (message : string) => {
        setServerErrorAlert({
            isAlert : true,
            errorMessage : message
        });
    }
    const serverAlert = (isShowed : boolean) => {
        setServerErrorAlert({
            ...serverErrorAlert,
            isAlert: false,
        })
    }  
    return (
        <div className='loginpage'>
            <div className="logincontainer">
                { serverErrorAlert.isAlert ? <LoginAlert alertmode="serverError" alertText={serverErrorAlert.errorMessage}/> : <></>}
                <header className="logincontainer__title">
                    Login
                </header>
                <LoginForms serverError={serverError} serverAlert={serverAlert}/>
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