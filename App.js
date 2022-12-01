import React,{useState} from "react";
import { v4 as uuid } from 'uuid';
import "./../styles/App.css";

function App() 
{
	const [grocery,setGrocery]=useState("");
	const [grocList,setgrocList]=useState([])
	const [issupdateVal,setIssUp]=useState(false);
	const [updatVal,setupdateval]=useState("")
	const [changeid,setchangeid]=useState("")
	const updatevalue=(event)=>{
		event.preventDefault()
		let idi=uuid();
		issupdateVal? setgrocList(grocList.filter((data)=>{
			if(data.id===changeid){ data.Grocery=updatVal}
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
		<input type="text" onChange={(event)=>{issupdateVal?setupdateval(event.target.value):setGrocery(event.target.value)}} id="grocery" value={issupdateVal?updatVal:grocery}/>
		<button onClick={updatevalue}>Add</button>
		<table>
            <tbody>
            {grocList.map((grocery,index)=>{
                return (
                    <tr key={index}>
                        <td >{grocery.Grocery}</td> 
                      <td> <button onClick={()=>{deleteitem(grocery)}}>Delete</button></td>
                       <td><button htmlFor="grocery" onClick={()=>{setchangeid(grocery.id),console.log("i"),setIssUp(true)}}>
						<label htmlFor="grocery">update </label>{console.log(issupdateVal,grocery.id)}</button></td>
                    </tr>
                )
            })
			}
			</tbody>
        </table>
	</div>
	);
}


export default App;
