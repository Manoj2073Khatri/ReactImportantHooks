import React ,{useReducer} from 'react'



const initialState = {count: 0};

const style1={
    margin:'2rem 20rem',
    fontSize:'20px',
 }
const style2={
   padding:'20px',
   fontSize:'20px',
 }

 const reducer=(state, action)=> {

    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }
  

 const RCounter=()=> {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={style1}>
      Count: {state.count}
      <button style={style2} onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button style={style2} onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default RCounter

// An alternative to useState. Accepts a reducer of type (state, action) => newState,
//  and returns the current state paired with a dispatch method. (If you’re familiar
//      with Redux, you already know how this works.)     useReducer is usually preferable 
//      to useState when you have complex state logic that involves multiple sub-values 
//      or when the next state depends on the previous one. useReducer also lets you
//       optimize performance for components that trigger deep updates because you can 
//       pass dispatch down instead of callbacks.