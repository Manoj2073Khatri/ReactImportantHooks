import React from 'react'

const style={
    background:'light-blue',
    border:'2px solid dark-blue',
    fontSize:'30px',
    fontWeight:'800',
    curser:'pointer',
    outline:'none'

}

const Square=({value,onClick})=>(

    
        <button style={style} onClick={onClick}>{value}</button>
       
    )


export default Square