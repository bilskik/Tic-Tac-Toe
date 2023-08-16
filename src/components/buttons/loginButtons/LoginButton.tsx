import useLoginValidation from "../../../hooks/useLoginValidation";
import "./loginbutton.css"

interface LoginButtonProps {
    text: string
    username: string
    password: string
}
const LoginButton = ({text,username,password} : LoginButtonProps) => {
  const isSubmitted = true;
  const { usernameAlert, passwordAlert } = useLoginValidation(username, password, isSubmitted);
  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(usernameAlert.alertType === "" && passwordAlert.alertType === "") {
      console.log("GITUUWA")
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