import "./loginbutton.css"

interface LoginButtonProps {
    text: string
}
const LoginButton = ({text} : LoginButtonProps) => {
  return (
    <button
        type="submit"
        className={`loginbutton__${text}`}
    >
        {text}
    </button>
  )
}

export default LoginButton