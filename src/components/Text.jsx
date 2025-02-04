import React, { useState } from 'react'
import Draggable from 'react-draggable'


const Text = () => {
const [editMode, setEditMode] = useState(false);
const [val, setVal]= useState("Double click to edit");

  return (
    <Draggable>
      {
        editMode ? <input value={val} 
        onChange={ (e)=> setVal(e.target.value)}
        onDoubleClick={(e)=> setEditMode(false)} /> : <h1 onDoubleClick={e=>setEditMode(true)}> {val}</h1>

      }
    </Draggable>
  )
}

export default Text