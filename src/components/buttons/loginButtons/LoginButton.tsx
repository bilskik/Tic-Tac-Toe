import useLoginValidation from "../../../hooks/useLoginValidation";
import "./loginbutton.css"
import axios from "../../../api/axios";
import { useState } from "react";
interface LoginButtonProps {
    text: string
    username: string
    password: string
    clearInputFields : () => void
    setServerError : (message : string) => void
}
const LOGIN_URL = "/login"

const LoginButton = ({text,username,password, clearInputFields, setServerError} : LoginButtonProps) => {
  const isSubmitted = true;
  const { usernameAlert, passwordAlert } = useLoginValidation(username, password, isSubmitted);
  const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(usernameAlert.alertType === "" && passwordAlert.alertType === "") {
      try {
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({username, password}),
            {
              headers : { 'Content-Type' : 'application/json'},
              withCredentials: true
            }
          )
      } catch(err : any) {
        if(!err?.response) {
          setServerError("No server response!")
        }
        else {
          setServerError("Login failed!")
        }
      }
      clearInputFields();
    }
    else {

    }
  }
  return (
    <button
        type="submit"
        className={`loginbutton__${text}`}
        onClick={(e) => {handleSubmit(e)}}
    >
        {text}
    </button>
  )
}

export default LoginButton