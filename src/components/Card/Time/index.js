import React, { useEffect } from 'react'
import './Time.css'

const Time = ({
  sec,
  onUpdateSec,
  onGameOver,
  quizStart,
  wrongAnswer,
  onWrongAnswer,
}) => {
  useEffect(() => {
    if (quizStart) {
      if (sec >= 0) {
        const timer = setTimeout(() => {
          onUpdateSec(sec)
        }, 1000)

        // We use setTimeout here so that the animation can play before the state reset (re-render)
        const resetAnswerStatus = setTimeout(() => {
          onWrongAnswer(false)
        }, 300)

        return () => {
          clearTimeout(timer)
          clearTimeout(resetAnswerStatus)
        }
      } else {
        onGameOver(true)
      }
    }
  })

  // Make sure the seconds are displayed properly
  const printTime = (sec) => {
    if (sec <= 0) {
      return '00:00:00'
    } else if (sec < 10) {
      return `00:00:0${sec}`
    } else {
      return `00:00:${sec}`
    }
  }

  return (
    <div key={sec} className={wrongAnswer ? 'time shake' : 'time'}>
      {quizStart ? printTime(sec) : '00:01:00'}
    </div>
  )
}

export default Time
