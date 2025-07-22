import React from "react";
import Comp2 from "./Comp2";


function Comp1() {
    const name = "John Doe";
    return (
        <div className="box">
            <h3>Componet 1</h3>
            <h1>Hi {name}</h1>
            <comp2 msg={name} />
        </div>
    );
} 

export default Comp1;