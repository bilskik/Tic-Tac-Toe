import { useState, useRef, useEffect } from "react";
import LoginButton from "../../../components/buttons/loginButtons/LoginButton";
import { RiLockPasswordLine } from "react-icons/ri"
import LoginAlert from "../../../components/alerts/loginalert/LoginAlert";
import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai"
import useLoginValidation from "../../../hooks/useLoginValidation";
import "./loginforms.css"

type LoginFormsProps = {
    serverError : (message : string) => void
    serverAlert : (isShowed : boolean) => void
} 
const LoginForms = ({ serverError, serverAlert } : LoginFormsProps) => {
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
    const isSubmitted = false;
    const { usernameAlert, passwordAlert } = useLoginValidation(username, password, isSubmitted);

    const validateUsername = (user : string) => {
        setUsername(user)
    }

    const validatePassword = (pass : string) => {
        setPassword(pass);
    }

    const clearInputFields = () => {
        setUsername('');
        setPassword('');
    }

    const setServerError = (message : string) => {
        serverError(message)
    }
    
    const handleCheckFocus = () => {
        if(document.activeElement === usernameInputRef.current || document.activeElement === passwordInputRef.current) {
            serverAlert(false);
        }
    }

  return (
    <form action="" className="loginforms">
        <label htmlFor="email" className="loginforms__label">
            <p className='loginforms__username'>
                Username
            </p>
            <div className={`loginforms__inputcontainer loginforms__inputcontainer-${usernameAlert.alertType}`}>
                <AiOutlineUser className="loginforms__icon"/>
                <input  
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    value={username}
                    className="loginforms__input"
                    ref={usernameInputRef}
                    onClick={(e) => handleCheckFocus()}
                    onChange={(e) => validateUsername(e.target.value)}
                />
            </div>
            { usernameAlert ? <LoginAlert alertmode={usernameAlert.alertType}
            alertText={usernameAlert.alertMessage}/> : <></>}
        </label>
        <label htmlFor="password" className="loginforms__label">
            <p className='loginforms__password'>
                Password
            </p>
            <div className={`loginforms__inputcontainer loginforms__inputcontainer-${passwordAlert.alertType}`}>
                <RiLockPasswordLine className="loginforms__icon"/>
                <input
                    type="password"
                    placeholder="******"
                    id="password"
                    name="password"
                    value={password}
                    className="loginforms__input"
                    ref={passwordInputRef}
                    onClick={(e) => handleCheckFocus()}
                    onChange={(e) => validatePassword(e.target.value)}
                />
            </div>
            { passwordAlert ? <LoginAlert alertmode={passwordAlert.alertType}
            alertText={passwordAlert.alertMessage}/> : <></>}
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
        <LoginButton 
            text={`login`}
            username={username}
            password={password}
            clearInputFields={clearInputFields} 
            setServerError={setServerError}
        />
    </form>
  )
}

export default LoginForms