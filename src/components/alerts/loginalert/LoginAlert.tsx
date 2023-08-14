import "./loginalert.css"
interface AlertMode {
    alertmode : string
    alertText : string
}
const LoginAlert = ({alertmode, alertText} : AlertMode) => {
  return (
        <div className={`${alertmode}`}>
            <span className={`${alertmode}-color`}>{alertText}</span>
        </div>
    )
}

export default LoginAlert