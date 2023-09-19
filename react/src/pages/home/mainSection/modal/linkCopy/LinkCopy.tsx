
const LinkCopy = ({ gameURL }  :  { gameURL : string | null } ) => {

    const copyToClipboard = async () => {
        if(gameURL !== null) {
            await navigator.clipboard.writeText(gameURL);
        }
    }

    return (
        <> {
            gameURL ?
            <>
                <p>{gameURL}</p>
                <button onClick={copyToClipboard}>
                    Copy
                </button>
            </> : <></>
            }
        </>
    )
}

export default LinkCopy