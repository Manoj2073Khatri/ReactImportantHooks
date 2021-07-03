import React,{ useState , useMemo} from 'react';


  const CalculateFactorial=()=> {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);

  

  const factorialOf=(n)=> {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }

  //    with memo
  const factorial = useMemo(() => factorialOf(number), [number]);

//    without memo
//   const factorial = factorialOf(number); 


  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(inc + 1);
  
  return (
    <div>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render{inc}</button>
    </div>
  );
}
export default CalculateFactorial


// wihout memo
// Every time you change the input value, the factorial is 
// calculated factorialOf(n) and 'factorialOf(n) called!' is logged to console.
// On the other side, each time you click Re-render button, 
// inc state value is updated. Updating inc state value triggers 
// <CalculateFactorial /> re-rendering. But, as a secondary effect, 
// during re-rendering the factorial is recalculated again — 
// 'factorialOf(n) called!' is logged to console.
// How can you memoize the factorial calculation when the 
// component re-renders? Welcome useMemo() hook!
// By using useMemo(() => factorialOf(number), [number]) 
// instead of simple factorialOf(number), React memoizes the factorial calculation.

// with memo
// However, if you click Re-render button, 'factorialOf(n) called!' 
// isn’t logged to console because useMemo(() => factorialOf(number), [number]) 
// returns the memoized factorial calculation. Great!