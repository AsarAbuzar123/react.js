import React from "react";
import Comp3 from "./Comp3";


function Comp2({msg}) {
   
    return (
        <div className="box">
            <h3>Componet 2</h3>
         
            <comp3 msg={msg} />
        </div>
    );
} 

export default Comp2;