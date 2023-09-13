import { useEffect, useState } from "react"
import useGame from "../../../../../hooks/useGame";

type MarkGeneratorProps = {
    handleSelectedMarkNumber : (selected : number) => void
}

const MarkGenerator = ({ handleSelectedMarkNumber } : MarkGeneratorProps) => {
    const { gameData, setGameData }  = useGame();
    const [marksNumberToWin, setMarksNumberToWin] = useState<{
        min : number,
        max : number,
        selected : number
      }>({
        min : 3,
        max : 3,
        selected : 3
      });

    useEffect(() => {
        if(gameData.boardSize < 10) {
          setMarksNumberToWin({
            ...marksNumberToWin,
            max : 3,
            selected: 3
          })
        }
        else if(gameData.boardSize >= 10 && gameData.boardSize < 20) {
          setMarksNumberToWin({
            ...marksNumberToWin,
            max : 4,
            selected : 3
          })
        }
        else {
          setMarksNumberToWin({
             ...marksNumberToWin,
             max : 5
          })
    
        }
      
      },[gameData.boardSize])

    const handleOnChangeRadioButton = (value : number) => {
        setMarksNumberToWin({
            ...marksNumberToWin,
            selected: value
        })
        handleSelectedMarkNumber(value)
    }
    return (
        <>
            <p className="modal__toWin">
                Total marks to win:
            </p>
            {
                Array.from({ length: marksNumberToWin.max - marksNumberToWin.min + 1 }, (_, index) => (
                    <div className="modal__radio-input">
                        <input 
                            type="radio"
                            className={`radio-${marksNumberToWin.min + index}`}
                            value={marksNumberToWin.min + index}
                            name="radio-button"
                            onClick={(e) => handleOnChangeRadioButton(parseInt((e.target as HTMLInputElement ).value))}
                        />
                        <label htmlFor={`radio-${marksNumberToWin.min + index}`}>
                            {marksNumberToWin.min + index}
                        </label>
                    </div>
                ))
            }
        </>
    )
}

export default MarkGenerator