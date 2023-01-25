import Picker3 from './Picker3';
import Gradient from './Gradient';
import { useState } from 'react';

function App() {
  const [inputValueHue, setInputValueHue] = useState(0);
  const [inputValueSat, setInputValueSat] = useState(0);
  const [inputValueStep, setInputValueStep] = useState(0);

  function getDataHue(data){
    setInputValueHue(data);
  }

  function getDataSat(data){
    setInputValueSat(data);
  }

  function getDataStep(data){
    setInputValueStep(data);
  }
  return (
    <>
    <Picker3 getPicker3DataHue={getDataHue}  getPicker3DataSat={getDataSat}  getPicker3DataStep={getDataStep}/>
    <Gradient valueHue={inputValueHue} valueSat={inputValueSat} valueStep={inputValueStep}/>
    </>
  )
}

export default App