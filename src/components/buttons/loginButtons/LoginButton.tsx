import "./loginbutton.css"

interface LoginButtonProps {
    text: string
}
const LoginButton = ({text} : LoginButtonProps) => {
  return (
    <button
        type="submit"
    >
        {text}
    </button>
  )
}

export default LoginButton