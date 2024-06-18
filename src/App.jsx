import './App.scss'

import Hero from './components/hero/Index'
import Filter from './components/filters/Index'
import CardGrid from './components/card/Index'

function App() {

  return (
    <div className='app'>
      <Hero />
      <Filter />
      <CardGrid />
    </div>
  )
}

export default App
