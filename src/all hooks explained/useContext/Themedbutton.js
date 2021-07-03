 import React ,{useContext}from 'react'
import { ThemeContext } from './useContextHook';

  const ThemedButton=()=>{

    const theme = useContext(ThemeContext);

    return (
        <>
            <button style={{ background: theme.light.background, color: theme.light.foreground }}>
                I am styled by theme context!using first object value from code
            </button>

            <button style={{ background: theme.dark.background, color: theme.dark.foreground }}>
                I am styled by theme context! using second object value from code
            </button>
      </>
    );
  }
  export default ThemedButton