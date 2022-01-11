export default function Question({question, setKey, setCount}) {
    
    function handleClick({target}) {
        setKey(target.id)
        setCount(1)
    } 

    return (
        <div className="question-card">
        <h3>Choose one of the options that characterise you</h3>
        <div className="question-options">
            {Object.entries(question).map((question) => {
                return <div className="question-option"
                key={question} 
                id={question[0]}
                onClick={(e) => handleClick(e)}>

                {question[1]}
            </div>
            })}
        </div>
        </div>
    )
}