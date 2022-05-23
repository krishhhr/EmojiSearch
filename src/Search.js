import React, { useState } from 'react'
import Filter from './Filter'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    const[text,setText]=useState("")
    

  return (
      <div className='container'>
          <div className='title'>
              <h1> <SearchIcon fontSize='large'/>Emoji Search</h1>
          </div>
        <input className='input__field' type='text' value={text} onChange={(e)=>setText(e.target.value)} />
        <Filter text1={text.toLowerCase()}/>
    
    </div>
  )
}

export default Search