import React from 'react'
import './Wordcounter.css'
import { useState } from 'react';


const App = () => {

  const [text,setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value
    setText(inputText);

    // calculate character

      const characters = inputText.replace(/\s+/g, '');
      setCharacterCount(characters.length);

      // calculate sentence

      const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0)
      setSentenceCount(sentences.length);

  }

   const resetCounter = () => {
    setText("");
    setCharacterCount(0);
    setSentenceCount(0);
   }

  return (
    <div className='Container'>
      <div className='Container_middle'>

        <div className='right'>
          <textarea className='text-input'
          value={text}
          onChange={handleTextChange}
          rows="6"
          placeholder='Type or paste your text here...'/>
          <div className='button_div'>
            <button className='button-65' onClick={resetCounter}>
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
             <div><p><strong>Characters:</strong> {characterCount} </p></div>
             <div><p><strong>Sentences:</strong> {sentenceCount} </p></div>
            </div>

          

         </div>

      </div>
      
    </div>
    </div>
  )
}

export default App

