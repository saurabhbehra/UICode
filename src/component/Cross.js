import React from 'react'
import { Handle, Position } from 'reactflow';
import vector2 from './Group819.png'


function Cross() {
  return (
    <div>
        <div className='cross'>
             <img src={vector2} className='crossVector'/>
        </div>

        <Handle type="target" position={Position.Left} id="b"/>
        <Handle type="source" position={Position.Right} id="d"/>
    </div>
  )
}

export default Cross