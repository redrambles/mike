import React, { useEffect } from 'react'

function Alert({message="We have a problem here", color="tomato", duration=4000, showMessage }) {

  useEffect(() => {
    const messageAlert = setInterval(() => {
      showMessage(false)
    }, duration)
    return () => clearInterval(messageAlert)
  }, [duration, showMessage])

  return (
    <div style={{color}}>{message}</div>
  )
}

export default Alert