import React, { useState } from 'react';
import { useStyle } from '../MakeStyle';
type LowerCase ={
  name: string
}


// function LoweToupperCase() {
//   const [value,setValue]=useState("")
//   function upperCase (strs: React.ChangeEvent<HTMLInputElement>|React.SetStateAction<string>):void{
// const stringType: string =`${strs}`;
// setValue(stringType.toUpperCase());
//   }
//   const upper = useStyle();
//   return (
//     <div className={upper.inputText}>
//       <input   onChange={(va)=>{upperCase(va.target.value)}}/>
//       <h1>{value}</h1>    
//     </div>
//   )
// }
// function LoweToupperCase() {
//   let count: number = 1

//   const [value, setValue] = useState("")
//   function upperCase(strs: React.ChangeEvent<HTMLInputElement> | React.SetStateAction<string>): void {
//     count++;
//     const stringType: string = `${strs}`;
//     setValue(stringType);
//   }
//   function ClickButton(): void {

//     if (value !== undefined) {
//       const UpperLimit = value.toUpperCase();
//       setValue(UpperLimit);
//     }

//   }

//   const upper = useStyle();
//   return (
//     <div className={upper.inputText}>
//       <input onChange={(va) => { upperCase(va.target.value) }} />
//       <button onClick={() => { ClickButton() }}> Click For upper</button>
//       <h1>{value}</h1>
//     </div>
//   )
// }
function LoweToupperCase(props:LowerCase) {
  const [value, setValue] = useState('');
  const [click, setClick] = useState('');
 

  function ButtonEvent(): void {
    if(value!==""){

      setClick(value.toUpperCase())
    }
  
   setTimeout(() => {
      alert('enter')
      
   }, 500);
 
  }
  

  console.log(value.toUpperCase())
  const upper = useStyle();
  return (<>
  <h1>welcome {props.name}</h1>
    <div className={upper.inputText}>
    
      <input onChange={(e) => { setValue(e.target.value) }} value={value} autoFocus />
     <button onClick={()=>{setValue("")}}>&times;</button>
    </div>
    <div>
    <button  className = {upper.OnclickButton}onClick={() => { ButtonEvent() }} onDoubleClick={()=>{setClick("")}}>click</button>
      <h1>{click}</h1>
    </div>
    </>
  )
}



export default LoweToupperCase
