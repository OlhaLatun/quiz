import { useEffect, useState } from 'react'
import './Quiz.css'
import { data } from '../../fakeData'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [questionCounter, setQuestionCounter] = useState(0)
    const [quizKey, setQuizKey] = useState([])
    const [quizRes, setQuizResult] = useState(null)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/OlhaLatun/server/questions')
        .then(res => res.ok ? res.json() : data.questions)
        .then(data => setQuestions(data))
    

        if (quizKey.length === 4) {
            getResult(quizKey)
        }
    }, [quizKey])

    function getResult(key) {
        let k = key.join('')
        fetch('https://my-json-server.typicode.com/OlhaLatun/server/keys')
        .then(res => res.ok ? res.json() : data.keys)
        .then(data => {
            for (let key in data) {
              if (key === k ){
                  return data[key]
              }      
            }
        })
        .then(res => setQuizResult(res))
    }

    function restartQuiz() {
        setQuestionCounter(0)
        setQuizKey([])
        setQuizResult(null)
    }

    return (
        <div className="quiz">
        <h1 className="quiz-title">Quiz</h1>
        { questions[questionCounter] ? 
         < Question question={questions[questionCounter]} 
         saveKey={key => setQuizKey(prevState => [...prevState, key])}
         setCount={step => setQuestionCounter(prevState => prevState + step)}/> : null }
         {quizRes ? 
         <>
         <Result result={quizRes} /> 
         <button className="btn" onClick={() => restartQuiz()}>Restart</button>
         </>
         : null}
        </div>
    )
}

function Question(props) {
    
    function handleClick({target}) {
        props.saveKey(target.id)
        props.setCount(1)
    } 

    return (
        <div className="question-card">
        <h3>Choose one of the options that characterise you</h3>
        <div className="question-options">
            <div className="question-option"
            key={Object.keys(props.question)[0]} 
            id={Object.keys(props.question)[0]}
            onClick={(e) => handleClick(e)}>
                {Object.values(props.question)[0]}
            </div>
            <div className="question-option"
            key={Object.keys(props.question)[1]} 
            id={Object.keys(props.question)[1]}
            onClick={(e) => handleClick(e)}>
                {Object.values(props.question)[1]}
            </div>
        </div>
        </div>
    )
}

function Result({result}) {
    return (
        <div className="result">
            <h4 className="result-title">You're {result.character}</h4>        
            <div className='result-description'>
            <img  className="result-img" src={result.img} alt={result.character}/>
            <div>
            <p>Your strengths: {result.strengths}</p>
            <p>Your weaknesses: {result.weaknesses}</p>
            </div>
            </div>
        </div>
    )
}