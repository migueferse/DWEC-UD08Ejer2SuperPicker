import Picker from './Picker';

function Picker3(props) {
  const {getPicker3DataHue, getPicker3DataSat, getPicker3DataStep} = props
  function showDataHue(data) {
    getPicker3DataHue(data);
  }
  
  function showDataSat(data) {
    getPicker3DataSat(data);
  }
  function showDataStep(data) {
    getPicker3DataStep(data);
  }
  return (
    <>
    <Picker name={'Hue'} min={'0'} max={'360'} getPickerData={showDataHue}/>
    <Picker name={'Saturation'} min={'0'} max={'10'} getPickerData={showDataSat}/>
    <Picker name={'Steps'} min={'5'} max={'100'} getPickerData={showDataStep}/>
    </>
  )
}

export default Picker3