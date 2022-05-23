import React, { useState } from 'react'
import emoji from './emoji'
import './Search.css'

function Filter({text1}) { 
  // const [show,setShow]=useState(false) ;
  const [title,setTitle]=useState("")
  const [symbol,setSymbol]=useState("")
  const showTitle=(title,symbol)=>{
    // setShow(!show)
    // console.log('This is emoji title', title)
    setSymbol(symbol)
    setTitle(title)
  } 
  return (
    <div>
      <h3 className='display'>{symbol}:{title}</h3>
        {
            emoji.filter(obj=>obj.keywords.includes(text1)).map((obj, i)=>{
               
          return(
          <>
                         <button onClick={() => showTitle(obj.title,obj.symbol)}><span id={obj.title}>{obj.symbol}</span>
                         </button>
                         </>
                    
             ) } )
        
        }
             

    </div>
  )
}

export default Filter