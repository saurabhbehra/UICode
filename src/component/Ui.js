import React from 'react';
import { Handle, Position } from 'reactflow';
import vector1 from './Group820.png'
import vector3 from './Rectangle559.png'

import './ui.css'


function Ui() {

  return (
    <>
      <div style={{display:'flex'}} className='vector'>
        <div className='uiDiv'>
            <img src={vector1} className='vector1'/>
        </div>
        <div>
          <img src={vector3} className='vector3'/>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="a"/>
    </>
  );
}

export default Ui;
