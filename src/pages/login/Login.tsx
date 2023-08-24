import { AiFillGoogleCircle,AiOutlineUser, AiOutlineCheck } from "react-icons/ai"
import { Link } from "react-router-dom";
import LoginForms from "./loginForms/LoginForms";
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from "react";
import "./login.css"
import LoginAlert from "../../components/alerts/loginalert/LoginAlert";
import jwt_decode from "jwt-decode";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
const LOGIN_URL = "/login"

const Login = () => {
  const  { setAuth } = useAuth();
    const handleGoogleLogin = async (resData : any) => {
        const accessToken = resData.access_token;
        const isLoggedByGoogle = true;
        setAuth({accessToken, isLoggedByGoogle})
        try { 
            const response = await axios.post(LOGIN_URL, {
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer + ${accessToken}`
                }
            })
        } catch(err : any) {

        }
    }
    const login = useGoogleLogin({
        onSuccess: tokenResponse => handleGoogleLogin(tokenResponse),
        onError: tokenResponse => handleGoogleLogin(tokenResponse)
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