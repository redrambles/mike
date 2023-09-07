import React, { useEffect } from "react";

function Alert({ message = "We have a problem here", color = "tomato", duration = 2000, setShowMessage }) {
  useEffect(() => {
    const messageAlert = setInterval(() => {
      setShowMessage(false);
    }, duration);
    return () => clearInterval(messageAlert);
  }, [duration, setShowMessage]);

  return <div style={{ color }}>{message}</div>;
}

export default Alert;
