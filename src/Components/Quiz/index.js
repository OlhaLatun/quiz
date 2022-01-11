import { useEffect, useState } from 'react'

import Question from '../Question'
import Result from '../Result'

import './Quiz.css'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [questionCounter, setQuestionCounter] = useState(0)
    const [quizKey, setQuizKey] = useState([])
    const [quizRes, setQuizResult] = useState(null)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/OlhaLatun/server/questions')
        .then(res => res.json())
        .then(data => setQuestions(data))
    
        if (quizKey.length === 4) {
            getResult(quizKey)
        }
    }, [quizKey])

    function getResult(key) {
        let k = key.join('')
        fetch('https://my-json-server.typicode.com/OlhaLatun/server/keys')
        .then(res => res.json())
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
         setKey={key => setQuizKey(prevState => [...prevState, key])}
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