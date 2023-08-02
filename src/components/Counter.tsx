import React, { useState } from 'react'
import classes from './Counter.module.scss'

function Counter() {
  const [counter, setCounter] = useState<number>(0)


  return (
    <div>
        <div>
        {counter}
        </div>
      <button className={classes.button} onClick={()=>setCounter(counter + 1)}>
            increment
        </button>
    </div>
  )
}

export default Counter