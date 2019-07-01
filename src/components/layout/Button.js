import React from 'react'

export default function Button() {
    const style= {
    fontFamily: '$poppins',
    padding: '.7rem',
    fontWeight: '400',
    border: 'none',
    borderRadius: '10px',
    background: 'linear-gradient(180deg, #F75C03 0%, #FF8000 93.51%)',
    color: 'white'
    }

    return (
        <div>
           <button style={style}>Hello Everyone</button> 
        </div>
    )
}
