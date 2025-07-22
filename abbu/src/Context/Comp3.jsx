import React from "react";
import Comp4 from "./Comp4";


function Comp3({msg}) {
   
    return (
        <div className="box">
            <h3>Componet 3</h3>
         
            <comp4 msg={msg} />
        </div>
    );
} 

export default Comp3;