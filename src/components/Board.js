import React from 'react'
import Square from './Square';


const style={
    background:'light-blue',
    borderRadius:'10px',
    width:'250px',
    height:'250px',
    margin:'4rem auto',
    display:'grid',
    gridTemplate:'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board=({squares,onClick})=>{

    return(
     
            <div style={style}>
                {squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                ))}
            </div>

        //   <div style={style}>
        //         <squares value="1" onClick={()=>onClick("dummy ")}/>
        //         <squares value="2" onClick={()=>onClick("dummy ")}/>
        //         <squares value="3" onClick={()=>onClick("dummy ")}/>
        //         <squares value="4" onClick={()=>onClick("dummy ")}/>
        //         <squares value="5" onClick={()=>onClick("dummy ")}/>
        //         <squares value="6" onClick={()=>onClick("dummy ")}/>
        //         <squares value="7" onClick={()=>onClick("dummy ")}/>
        //         <squares value="8" onClick={()=>onClick("dummy ")}/>
        //         <squares value="9" onClick={()=>onClick("dummy ")}/>
        //   </div>
            
  
    )
}

export default Board;