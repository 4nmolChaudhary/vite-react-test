import React from 'react'
import styles from './textinput.module.css'
import { FiAlertTriangle } from 'react-icons/fi'

function TextInput({ placeholder }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input className={styles.input} placeholder={placeholder} />
        <span className={styles.error}>{<FiAlertTriangle size={16} />}</span>
      </div>
      <div className={styles.errorDiv}>Enter a valid username !</div>
    </div>
  )
}

export default TextInput
