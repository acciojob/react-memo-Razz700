<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useMemo, useState } from 'react'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
    const [count,setcount]=useState(0);
    const [todo,settodo]=useState(['New Todo']);
    const useMemovalue=useMemo(()=>{
return 1000000000;
    },[])
  return (
    <div id='main'>
        <UseMemo todo={todo} settodo={settodo} />
        <hr/>
        <p>Count:{count}
            <button id='incr-cnt' onClick={()=>setcount(count+1)}>0</button>
        </p>
        <h2>Expensive Calculation</h2>
        <p>{useMemovalue}</p>
        <hr/>
        <hr/>
           <ReactMemo/>
    </div>
  )
}

export default App
