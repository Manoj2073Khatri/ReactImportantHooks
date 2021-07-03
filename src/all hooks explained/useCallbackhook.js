import React ,{useState,useCallback} from 'react'

const style={
  padding:'20px',
  fontSize:'20px'
}

// set takes only unique element at once
const functionsCounterWithoutCallback = new Set()
const functionsCounterWithCallback = new Set()

const UCBCounter = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const [count1, setCount1] = useState(0)
  const [otherCounter1, setOtherCounter1] = useState(0)


  // without callback
  const increment1 = (() => {
    setCount1(count1 + 1)
  })
  const decrement1 = (() => {
    setCount1(count1 - 1)
  })
  const incrementOtherCounter1 = (() => {
    setOtherCounter1(otherCounter1 + 1)
  })
  functionsCounterWithoutCallback.add(increment1)
  functionsCounterWithoutCallback.add(decrement1)
  functionsCounterWithoutCallback.add(incrementOtherCounter1)
  alert(`without call back hook all functions
   are re-rendered even if only one function is called or clicked.
   so here count is:${functionsCounterWithoutCallback.size}` )
  
    // with callback
    const increment = useCallback(() => {
      setCount(count + 1)
    }, [count])
    const decrement = useCallback(() => {
      setCount(count - 1)
    }, [count])
    const incrementOtherCounter = useCallback(() => {
      setOtherCounter(otherCounter + 1)
    }, [otherCounter])
    functionsCounterWithCallback.add(increment)
    functionsCounterWithCallback.add(decrement)
    functionsCounterWithCallback.add(incrementOtherCounter)
    alert(`with call back hook initially all function are rendered
    and on each single click re render occur for that function only but not all .so
    here count is: ${functionsCounterWithCallback.size}`)
    
  return (
    <>

     <div>
          <h1>without using useCallback</h1>
          Count: {count1}
          <button  style={style} onClick={increment1}>+</button>
          <button  style={style} onClick={decrement1}>-</button>
          <button  style={style} onClick={incrementOtherCounter1}>incrementOtherCounter</button>
           otherCounter:{otherCounter1}

     </div>

     <div>
            <h1>using useCallback</h1>
            Count: {count}
            <button style={style} onClick={increment}>+</button>
            <button  style={style}  onClick={decrement}>-</button>
            <button  style={style} onClick={incrementOtherCounter}>incrementOtherCounter</button>
            otherCounter:{otherCounter}

     </div>
      
    </>
  )
}

export default  UCBCounter


// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable
