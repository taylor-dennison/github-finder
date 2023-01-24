import React, { useContext } from "react"
import AlertContext from "../../context/alert/alertContext"

const Alert = () => {
  const alertContext = useContext(AlertContext)

  const { alert } = alertContext
  const newline = "this is a new line"
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  )
}

export default Alert
