import React from 'react';
import './App.css';
// import Game from './components/Tictactoe';
// import Counter from './all hooks explained/useStateHook';
import NewsApp from './all hooks explained/useEffectHook';
// import Main from './all hooks explained/useContext/useContextHook';
// import RCounter from './all hooks explained/useReducerhook';
// import UCBCounter from './all hooks explained/useCallbackhook';
// import CalculateFactorial from './all hooks explained/useMemohook';
// import ExampleInput from './all hooks explained/useRefhook';
const App=()=> {
  return (
    <div>
     
      {/* <Game/>  for tictactoe game */}
      
      {/* <Counter/>  for useState in counter app */}

       <NewsApp/> for useEffect in news app

       {/* <Main/>  fro useContext in changing background and foreground by passing data at diifferent lvl */}

       {/* <RCounter/>  for useReducer same as redux and as a more effective method of useState fro handling complex state change*/}
      
      {/* <UCBCounter/> for useCallback hooks it avoids re render of compoonets by memorizing whole fucntion */}

      {/* <CalculateFactorial/> for usememo hooks it avoids rerender by memorizing value for expensive computation */}

      {/* <ExampleInput/> for useref hook */}


    </div>
  );
}

export default App;
