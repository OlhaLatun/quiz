
import './App.css';
import Quizz from '../Quizz'

function App() {
  return (
    <div className="App">
      <h1> Who are you from Simpsons? </h1>
      <h3> Instructions </h3>
      <p>Answer whether the statements is about you or not </p>
      <button>Start</button>
      <Quizz />
    </div>
  );
}

export default App;
