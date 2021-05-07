import "./shuffleButton.css";


export const ShuffleButton = ({handleShuffle}) => {

    return (
        <button className="_button" onClick={handleShuffle}>
            Random hand 
        </button>
    )
}