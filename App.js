import React,{useState} from "react";
import { v4 as uuid } from 'uuid';
import "./../styles/App.css";

function App() 
{
	const [grocery,setGrocery]=useState("");
	const [grocList,setgrocList]=useState([])
	let issupdateVal=false;
	const [updatVal,setupdateval]=useState("")
	const updatevalue=(event)=>{
		event.preventDefault()
		let idi=uuid();
		issupdateVal? setgrocList(grocList.filter((data)=>{
			if( data.id===groc.id){return data.Grocery=updatVal}
			return data
		}))
		:setgrocList([...grocList,{Grocery:grocery,id:idi}])
		setGrocery("")
	}
	const deleteitem=(groc)=>{
		setgrocList(grocList.filter((data)=>{
			return data.id!=groc.id
		}))
	}

	return (
	<div id="main">
		<input type="text" onChange={(event)=>{!issupdateVal?setGrocery(event.target.value):setupdateval(event.target.value)}} value={grocery}/>
		<button onClick={updatevalue}>Add</button>
		<table>
            
            {grocList.map((grocery,index)=>{
                return (
                    <tr key={index}>
                        <td >{grocery.Grocery}</td> 
                       <button onClick={()=>{deleteitem(grocery)}}>Delete</button>
                       <button onClick={()=>{issupdateVal=true}}>Delete</button>
                    </tr>
                )
            })
			}
        </table>
	</div>
	);
}


export default App;
