import Button from "../../../../components/buttons/Button";


const ButtonPlayContainer = () => {
    const buttonTextData = ["Quick play", "Play ranked", "Play with friend"];
    return (
      <div className="menucontainer__buttons">
       {
        buttonTextData.map((buttonText) => (
          <Button key={buttonText} style={buttonText} id={`menu`}/>
        ))}
      </div>
    )
  }
  export default ButtonPlayContainer;