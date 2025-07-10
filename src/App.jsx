import React from 'react'
import './Wordcounter.css'
import { useState } from 'react';


const App = () => {

  const [text,setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  return (
    <div className='Container'>
      <div className='Container_middle'>

        <div className='right'>
          <textarea className='text-input'
          rows="6"
          placeholder='Type or paste your text here...'/>
          <div className='button_div'>
            <button className='button-65'>
              Delete
              </button>
          </div>
        </div>

         <div className='left'>
           
            <div className='Container_middle_para'>
              <h1>Results</h1>
            </div>

            <div className='flex-container'>
              <div className='flex-container'>
             <div><p><strong>Characters:</strong> 453 </p></div>
             <div><p><strong>Sentences:</strong> 564 </p></div>
            </div>

          

         </div>

      </div>
      
    </div>
    </div>
  )
}

export default App

