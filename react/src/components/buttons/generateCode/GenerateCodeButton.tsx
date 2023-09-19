import useFetch from "../../../hooks/useFetch"
import { useState } from "react"
import "./generatecode.css"
import useAuth from "../../../hooks/useAuth"

type GenerateCodeButtonProps = {
  handleSetCode : (code : string) => void
}
const GenerateCodeButton = ({ handleSetCode }: GenerateCodeButtonProps) => {
  const { fetchData } = useFetch({
    url : "/game",
    isJWT : true
  })
  const handleCodeGeneration =  () => {
    const fetchDataAndProcess = async () => {
      const data = await fetchData().then(
          response => {
              handleSetCode(response);
          }
      );
    } 
    fetchDataAndProcess()
  }

  return (
    <button 
      onClick={handleCodeGeneration}
      className="modal__generatecode"
    >
      Generate link    
    </button>
  )
}

export default GenerateCodeButton