/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react'


const EachBox = ({ handleClick, text }) => {
  return(
    <>
      <li className='box'>
        {text}
      </li>
      <span onClick={handleClick} className='text-span' />
    </>
    )
}

function App() {
  const [texts, setTexts ] = useState(['B', 'K', 'T']);
  const [otherArray, setOtherArray ] = useState(['O', 'O', 'I']);
  const [ outPut, setOutPut ] = useState('');

  const addNewBox = (index) => {
    if(otherArray.length !== 0){
      const nextIndex = index + 1;
      const newOther = otherArray.shift()
      const newArray = texts.splice(nextIndex, 0, newOther);
  
      setTexts((prev) => [...prev, ...newArray])
    }
  }

  const handleClick = () => {
    setOutPut(texts.join(' '))
  }

  return (
    <>
      <ul className='box-container'>
        {texts.map((text, index) => (
          <EachBox 
          key={index} 
          handleClick={() => addNewBox(index)} 
          text={text} 
          texts={texts}
          index={index} 
        />
        ))}
      </ul>
      <div className='printout'>{outPut}</div>
      <button onClick={handleClick}>Print</button>
    </>
  )
}

export default App
