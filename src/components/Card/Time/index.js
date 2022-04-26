import React, { useEffect } from 'react'
import './Time.css'

const Time = ({ sec, onUpdateSec, onGameOver, quizStart }) => {
  useEffect(() => {
    if (quizStart) {
      if (sec >= 0) {
        setTimeout(() => {
          onUpdateSec(sec)
        }, 1000)
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

  return <div className="time">{quizStart ? printTime(sec) : '00:01:00'}</div>
}

export default Time
