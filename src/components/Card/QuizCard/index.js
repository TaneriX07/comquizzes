import { useState } from 'react'
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
  // Shuffle the answers
  const answers = [quiz.correct_answer, ...quiz.incorrect_answers].sort(
    (a, b) => 0.5 - Math.random()
  )

  const [isCorrect, setIsCorrect] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState([])

  // Check whether answer is true
  const handleClick = (answer, index) => {
    if (answer === quiz.correct_answer) {
      setIsCorrect(true)
    } else {
      wrongAnswers.push(index)
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
