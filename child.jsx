const Child=(para)=>{
    const addvalues=()=>{
        para.updateval(parseInt(para.value1)+parseInt(para.value2))
    }
    const multyply=()=>{
      para.updateval(parseInt(para.value1)*parseInt(para.value2))
    }
    return(
        <div>
            <button onClick={addvalues}>Add</button>
            <button onClick={multyply}>multyply</button>
        </div>
    )
}
export default Child;
