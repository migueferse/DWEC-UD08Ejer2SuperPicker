import '../styles/gradient.css';
function Gradient(props) {
  const {valueHue, valueSat, valueStep} = props;
  let light = 0;
  let squares = []
  for (let i = 1; i <= valueStep; i++) {
    let backgroundStyle = {
      backgroundColor: `hsl(${valueHue},${valueSat}%,${light}%)`
    }
    squares.push(<div className='square' style = {backgroundStyle} key={i}></div>)
    light = light + (100/valueStep);
  }

  return (
    <div className='squares'>
      {squares}
    </div>
  )
 }

 export default Gradient