export default function Result({result}) {
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