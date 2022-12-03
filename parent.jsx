import React, {Component,useState} from "react";
import Child from "./child";
const parent = () => {
    const [outputt,setOutput]=useState(0);
    const [inputt1,setInput1]=useState("");
    const [inputt2 ,setInput2]=useState("");
    return (
        <div>
            {/* <input type="number" onChange={(event)=>{setInput1(event.target.value)}} value={input1}/>
            <input type="number" onChange={(event)=>{setInput2(event.target.value)}} value={input2}/>
            <div>{output}</div> */}
            <Child value1={inputt1} value2={inputt2} updateval={setOutput}/>
        </div>
    )
}
export default parent;