import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PropDrill from "./Context/PropDrill";
// import App1 from './Route/App1'
// import CounterButton from "./UseRef/CounterButton";
// import CounterDisplay from "./UseRef/CounterDisplay";
// import Lift from "./UseRef/lift";
// import Timer from "./UseRef/timer";
// import { Calc } from "./UseRef/calci";
createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  {/* <App1/> */}
  {/* <CounterButton/> */}
  {/* <CounterDisplay/> */}
  {/* <Lift/> */}
  {/* <Timer/> */}
  {/* <Calc/> */}
  <PropDrill/>
  </BrowserRouter>,
)
