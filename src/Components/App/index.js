
import './App.css';
import Quiz from '../Quiz'
import { useState } from 'react';

function App() {

  const [start, setStart] = useState(false)

  function startQuiz({target}) {
    setStart(true)
    target.hidden = true
  }

  return (
    <div className="app">
      <h1 className="app-title"> Who are you from <br />
        <span> Simpsons </span></h1>
      {!start ? 
      <div className="instructions">
      <h3> Instructions </h3>
      <p>Answer whether the statements is about you or not </p>
      </div> :
      <Quiz />
      }
      
      <button className="btn" onClick={(e) => startQuiz(e)} >Start</button>
    </div>
  );
}

export default App;
