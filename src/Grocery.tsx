import React, { ChangeEvent, useState } from 'react';
import { useStyle } from './MakeStyle';

function GroceryList() {

  const [text, setText] = useState("");
  const [storeText, setStoreText] = useState<string[]>([])

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    console.log(text)
  }

  const SubmitFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event.target);
    if (text !== "") {
      setStoreText([...storeText, text])
    }
    else {
      alert('enter the data')
    }
    setText("");

    console.log(storeText)
  }

  const DeleteFunction = (value: number) => {
    const newText = storeText.filter((v, index) => {
      return (index !== value)
    })
    setStoreText(newText);
  }
  const classes = useStyle();

  return (
    <div>
      <h1 className={classes.list} >Grocery List</h1>
      <input className={classes.InputToDo} onChange={handleText} value={text} placeholder="Grocery Item" autoFocus />
      <div className={classes.SubmitButton} >
        <button className="Button" onClick={(e) => { SubmitFunction(e) }} >submit</button>
      </div>
      <ul className={classes.UlList}>
        {storeText.map((value, index) => {
          return (<div>
            <li className='Li_style'>{index + 1}_{value} __<button onClick={() => { DeleteFunction(index) }}>&times;</button></li>
          </div>
          )
        })}
      </ul>
    </div>
  )
}

export default GroceryList
