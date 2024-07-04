import { useState } from 'react'

import Hero from './components/hero/Index'
import Filter from './components/filters/Index'
import CardGrid from './components/card/Index'
import Footer from './components/footer/Index'

import styles from "./styles/app.module.scss"
import "./index.scss"

function App() {
  const [filterTipo, setFilterTipo] = useState('');


  return (
    <div className={`${styles.bg}`}>
      <Hero />
      <Filter setFilterTipo={setFilterTipo} />
      <CardGrid filterTipo={filterTipo} />
      <Footer />
    </div>
  )
}

export default App
