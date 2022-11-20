import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

import Ui from '../Ui.js';
import Cross from '../Cross'
import Video from '../Video'


const initialNodes = [
    {
        id: 'node-1', type: 'textUpdate', position: { x: 0, y: 0 }, data: { value: 123 },


    },
    {
        id: 'node-2',
        type: 'cross',
        position: { x: 0, y: 200 }
    },
    {
        id: 'node-3',
        type: 'video',
        position: { x: 0, y: 300 }
    }
];

const initialEdges = [
    { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
    { id: 'edge-2', source: 'node-2', target: 'node-3', sourceHandle: 'b' },
];


const nodeTypes = { textUpdate: Ui, cross: Cross, video: Video };

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{ height: 635, width: 1365 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            />
        </div>
    );
}

export default Flow;
