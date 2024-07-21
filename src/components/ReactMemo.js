import React, { memo, useState } from 'react'

const ReactMemo = () => {
    const [input,setinput]=useState('');
    const handlechange=(e)=>{
        const val=e.target.value;
setinput(val);
    }
    const [list,setlist]=useState(['HTML','CSS','JavaScript','React','sdadsd']);
    const handleclick=()=>{
        if (input.length>5) {
            setlist(list=>[...list,input]);
            setinput('');
        }
    }
  return (
    <div>
        <input value={input} onChange={handlechange} type='text' required/>
        <button onClick={handleclick}>Add Skill</button>
        <ul>
            {list.map((item,i)=><li key={'b'+i}>{item}</li>)}
        </ul>
    </div>
  )
}

export default memo(ReactMemo)