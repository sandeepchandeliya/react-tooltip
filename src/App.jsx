import { useState } from "react"
import Tooltip from "./components/Tooltip"


function App() {
  
const [position, setPositon] = useState('top');
  return (
    <>
    <div className="main-div">
       <h2>React Tooltip</h2>
       <label id="label">Choose Tooltip Position</label>
       <select 
       className="select"
       value={position}
       onChange={(e)=> setPositon(e.target.value)}
       >
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
       </select>
      <Tooltip position={position} text={`${position}`}>
        <button className="btn">Hover me</button>
      </Tooltip>
    </div>
    </>
  )
}

export default App
