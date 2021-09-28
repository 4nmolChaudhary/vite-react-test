import React from 'react'
import styles from './herotext.module.css'

function HeroText() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Hello!</div>
      <div className={styles.text}>I am self taught</div>
      <div className={styles.text}>UI/UX Designer</div>
      <div className={styles.text}>&</div>
      <div className={styles.text}>Front-End developer.</div>
    </div>
  )
}

export default HeroText
