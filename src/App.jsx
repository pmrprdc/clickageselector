import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as buttons from "./buttons"



function App() {

  const [digitA,setDigitA] = useState("0")
  const [digitB, setDigitB] = useState("0")
  const [finalAge, setFinalAge] = useState(0)

  const firstButtonClickHandler = (e) => {
    const value = e.target.value;
    setDigitA(value/10)
  }

  const secondButtonEventHandler = (e) => {
    const {value} = e.target;
    setDigitB(value)
  }

  const submitHandler = (e) => {
    setFinalAge(parseInt(digitA*10)+parseInt(digitB))
  }

  useEffect(()=>{
    console.log('change')
  },[digitA, digitB])

  return (
    <div className="App">
      <h1>{digitA}{digitB}</h1>
     <h1>How old are you?</h1>
    {buttons.firstButtons.map(button=>{
      return (<button 
        onClick={firstButtonClickHandler} 
        value={button.value} 
        key={button.key}>
        {button.name}
        </button>)
        })}
    <br></br>
    {buttons.secondButtons.map(button=>{
      return(<button onClick={secondButtonEventHandler} value={button.value} key={button.key}>{button.name}</button>)
    })}
    <br>
    
    </br>
    <button onClick={submitHandler}>Submit Age</button>
    <h1>Calculated Age: {finalAge}</h1>
    </div>
  )
}

export default App
