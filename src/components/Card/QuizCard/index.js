import { useState, useEffect } from 'react'
import './QuizCard.css'

const QuizCard = ({ quiz, updateScore, score }) => {
  const [answers, setAnswers] = useState([])
  const [wrongAnswers, setWrongAnswers] = useState([])

  // Shuffle the answers
  useEffect(() => {
    setAnswers(
      [quiz.correct_answer, ...quiz.incorrect_answers].sort(
        (a, b) => 0.5 - Math.random()
      )
    )
    setWrongAnswers([])
  }, [quiz])

  // Check whether answer is true or false
  // If the answer is false, add it to the wrongAnswers array
  // The answers in this array will be disabled
  const handleClick = (answer, index) => {
    if (answer === quiz.correct_answer) {
      console.log(score)
      updateScore(score)
    } else {
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
    </div>
  )
}

export default QuizCard
