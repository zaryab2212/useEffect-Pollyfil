import React, { useState } from 'react'
import "./App.css"
import { usemyEffect } from './assets/hooks'

const App = () => {
  const [count,setCount] = useState(0)
  const [counter,setCounter] = useState(1000)



   usemyEffect(()=>{
     console.log("working")

   })

  return (
    <div>
counter: {count}
<button onClick={()=>setCount(pre=>pre+1)}>plus me</button>
counter: {counter}
<button onClick={()=>setCounter(pre=>pre-1)}>plus me</button>


    </div>

  )
}

export default App