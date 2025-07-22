import React from "react";

function Child({ame,age =22}){
    return(
        <>
        <h2>child component</h2>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        </>
    );
}
export default Child