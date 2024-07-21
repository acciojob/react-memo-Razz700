import React from 'react'

const UseMemo = (props) => {
  return (
    <div>
        <h1>
            React.useMemo
        </h1>
        <h2>My todos</h2>
        {props.todo.map((item,i)=><p id={'todo-'+i} key={'a'+i}>{item}</p>)}
        <button id='add-todo-btn' onClick={()=>props.settodo(todo=>[...todo,'New Todo'])}>Add Todo</button>
    </div>
  )
}

export default UseMemo