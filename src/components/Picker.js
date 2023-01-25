import { useState } from 'react';

function Picker(props) {
const {name, min, max, getPickerData} = props;
const [inputValue, setInputValue] = useState(min);

function changeValue(value) {
  setInputValue(value)
}


return (
  <div>
    <label htmlFor={name}>{name}:</label>
    <input id={name} type='range' min={min} max={max} onChange={event =>{changeValue(event.target.value); getPickerData(event.target.value)}}></input>
    <span>{inputValue}</span>
  </div>
)
}

export default Picker