import React,{useState} from 'react'


const style1={
    margin:'2rem 20rem',
    fontSize:'20px',

 }
const style2={
   padding:'20px',
   fontSize:'20px',
  

 }
const Counter=({initialCount})=> {
   

    const [count, setCount] = useState(initialCount=0);

    return (
      <div style={style1}>
        Count: {count}
        <button style={style2} onClick={() => setCount(initialCount)}>Reset</button>
        <button style={style2}onClick={() => setCount(count - 1)}>-</button>
        <button style={style2}  onClick={() => setCount(count + 1)}>+</button>
      
      </div>
    );
  }

  export default Counter