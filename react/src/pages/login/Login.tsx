import { AiFillGoogleCircle,AiOutlineUser, AiOutlineCheck } from "react-icons/ai"
import { Link } from "react-router-dom";
import LoginForms from "./loginForms/LoginForms";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useState } from "react";
import "./login.css"
import LoginAlert from "../../components/alerts/loginalert/LoginAlert";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
const LOGIN_URL = "/oauth/login"

const Login = () => {

    const  { setAuth } = useAuth();

    const [serverErrorAlert, setServerErrorAlert] = useState({
        isAlert : false,
        errorMessage : ""
    });

    const handleGoogleLogin = async (resData : any) => {
        console.log(resData.credential)
        const token = `Bearer ${resData.credential}`;
        // try {
        //     const response = axios.post(LOGIN_URL, 
        //          JSON.stringify(token) , {
        //         headers : { 
        //             'Content-Type' : 'application/json',
        //         }
        //     }).then(res => {
        //     })

        // } catch(err : any) {

        // }

    }
    const handleErrorGoogleLogin = () => {

    } 
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
                    <div className="logincontainer__googolebtn">
                        <GoogleLogin
                            onSuccess={handleGoogleLogin}
                            onError={handleErrorGoogleLogin}
                        />
                    </div>
                </div>

                <p className="logincontainer__newaccount">
                    New to Tic-Tac-Toe?&nbsp;
                    <Link to="/signup" className="logincontainer__newaccount">
                        <span 
                            className="logincontainer__newaccount-underline"
                        >
                            Create account
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login