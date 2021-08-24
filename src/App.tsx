import React from 'react'
import Counter from './features/counter/Counter'
import logo from './logo.svg'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </header>
  </div>
)

export default App
