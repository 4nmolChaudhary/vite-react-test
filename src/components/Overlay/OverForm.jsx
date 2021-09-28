import React, { useState } from 'react'
import styles from './Form.module.css'
import { FiEyeOff, FiEye, FiMail } from 'react-icons/fi'

function OverForm() {
  const [isInputTypePassword, setInputType] = useState(true)

  return (
    <form className={styles.form}>
      <h2 className={styles.login}>Login</h2>
      <div className={styles.inputWrapper}>
        <input className={styles.inputTwo} placeholder='Email' />
        <span className={styles.eyeOff}>{<FiMail size={16} />}</span>
      </div>
      <div className={styles.inputWrapper}>
        <input className={styles.inputTwo} placeholder='Password' type={isInputTypePassword ? 'password' : 'text'} autoComplete='off' />
        <button className={styles.eyeOff} type='button' onClick={() => setInputType(!isInputTypePassword)}>
          {isInputTypePassword ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>
      {/* <TextInput placeholder='Username' /> */}
      <button className={styles.button} type='button'>
        <span className={styles.loginTwo}>Login</span>
      </button>
    </form>
  )
}

export default OverForm
