import useFetch from "../../../hooks/useFetch"
import { useState } from "react"
import "./generatecode.css"

type GenerateCodeButtonProps = {
  handleSetCode : (code : string) => void
}

const GenerateCodeButton = ( { handleSetCode }: GenerateCodeButtonProps) => {
  // const [code,setCode] = useState<string>();
  const fetchData = useFetch({
    url : "/game",
    isJWT : true
  })
  const handleCodeGeneration =  () => {
    const fetchDataAndProcess = async () => {
      const data = await fetchData().then(
          response => {
            console.log("Code == " + response.data)
              handleSetCode(response.data);
          }
      );
    } 
    fetchDataAndProcess()
  }

  return (
    <button 
      onClick={handleCodeGeneration}
    >
      Generate    
    </button>
  )
}

export default GenerateCodeButton