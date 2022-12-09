import { useState } from 'react';
import './App.css';
import LoweToupperCase from './components/LoweToupperCase';
import GroceryList from './Grocery';
import Select, { Selectoption } from './Select';

const options =[
  {label:"First", value:1},
  {label:"second", value:2},
  {label:"third", value:3},
  {label:"fourth", value:4},
  {label:"fifth", value:5},
  {label:"sixth", value:6}

]

function App() {
  const [value,setValue] = useState<Selectoption|undefined>(options[0]);
  
  return (
    <div >
      {/* <Select  options={options} value={value} xyz = {o=> setValue(o)}/> */}
      <br></br>
      {/* <GroceryList/> */}
      <LoweToupperCase name='jitesh'/>
    

      </div>
  );
}

export default App;
