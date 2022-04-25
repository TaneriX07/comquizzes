import { useState, useEffect } from 'react'
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
  const [answers, setAnswers] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState([])

  // Shuffle the answers
  useEffect(() => {
    setAnswers(
      [quiz.correct_answer, ...quiz.incorrect_answers].sort(
        (a, b) => 0.5 - Math.random()
      )
    )
  }, [])

  // Check whether answer is true
  const handleClick = (answer, index) => {
    console.log('Button clicked')
    if (answer === quiz.correct_answer) {
      console.log('true')
      setIsCorrect(true)
    } else {
      console.log('false')
      setWrongAnswers([...wrongAnswers, index])
    }
  }

  return (
    <div className="cardContainer">
      <div className="question">
        <p>{quiz.question}</p>
      </div>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="answer-btn"
            disabled={wrongAnswers.includes(index)}
            onClick={() => handleClick(answer, index)}
          >
            {answer}
          </button>
        ))}
      </div>
      <div>{isCorrect ? 'true' : 'false'}</div>
    </div>
  )
}

export default QuizCard
