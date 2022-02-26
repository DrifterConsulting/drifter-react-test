import * as React from "react"
import Hero from '../components/Hero'

import globalStyles from "../theme/globalStyles"
import '../theme/index.css'

const IndexPage = () => {
  return (
    <main style={globalStyles.body}>
     <title>Home Page</title>
     <Hero />
    </main>
  )
}

export default IndexPage
