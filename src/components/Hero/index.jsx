import * as React from "react"

import styles from './Hero.styles.js'

const Hero = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <span style={styles.smallBoldText}>SUBHEADING ALL CAPS</span>
        <span style={styles.bigBoldText}>Kick Start Your <br/> Product With Us</span>
        <button style={styles.button}>Call To Action</button>
      </div>
    </div>
  )
}

export default Hero
