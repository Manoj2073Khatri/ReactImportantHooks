import React,{createContext} from "react";
import Toolbar from "./Toolbar";


const themes = {
    light: {
      foreground: "red",
      background: "blue"
    },
    dark: {
      foreground: "green",
      background: "orange"
    }
  };
  
  export const ThemeContext =createContext(themes);
  
  const Main=() =>{
    return (
      <ThemeContext.Provider value={themes}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  export default Main

  
//  useContext is use to provide data easily to lower levels of related components 
//  without using props so that for eg toolbar component which does not need the data is 
//  not given any data but if props was used it is passed through toolbar which is unnecessary