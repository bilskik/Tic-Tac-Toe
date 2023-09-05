import { useContext } from "react"
import useLoginValidation from "../../../hooks/useLoginValidation";
import "./loginbutton.css"
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface LoginButtonProps {
    text: string
    username: string
    password: string
    clearInputFields : () => void
    setServerError : (message : string) => void
}
const LOGIN_URL = "/register"

const LoginButton = ({text,username,password, clearInputFields, setServerError} : LoginButtonProps) => {
  const isSubmitted = true;
  const { usernameAlert, passwordAlert } = useLoginValidation(username, password, isSubmitted);
  const  { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(usernameAlert.alertType === "" && passwordAlert.alertType === "") {
      try {
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({username, password}),
            {
              headers : { 'Content-Type' : 'application/json'},
              // withCredentials: true
            }
          ).then((response) => {
            console.log(response)
            const accessToken :string= response?.data?.token;
            console.log(accessToken);
            const roles = response?.data?.roles;
            const isLoggedByGoogle = false;
            setAuth({username, password, accessToken, roles, isLoggedByGoogle})
            navigate("/");
          })
      } catch(err : any) {
        if(!err?.response) {
          setServerError("No server response!")
        }
        else {
          setServerError("Login failed!")
        }
      }
      // clearInputFields(); idk czy to usuwac czy nie
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