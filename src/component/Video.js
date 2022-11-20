import React from 'react'
import { Handle, Position } from 'reactflow';
import vector4 from './Group826.png'

const Video =() => {
  return (
    <div>
        <img src={vector4} className='vector4'/>
        <Handle type="target" position={Position.Left} id="c"/>
    </div>
  )
}

export default Video