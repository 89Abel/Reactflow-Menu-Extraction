import React, { useCallback } from 'react';
import ReactFlow,{
    Background,
    Controls,
    Node,
    useEdgesState,
    useNodesState,
} from 'reactflow';
import { addEdge, Edge, OnConnect, Connection} from 'reactflow';
import 'reactflow/dist/style.css';

interface CenterPanelProps {
    menuItems: string[];
}

const CenterPanel: React.FC<CenterPanelProps> = ({ menuItems }) => {
    const initialNodes: Node[] = menuItems.map((item, index) => ({
        id: `node-${index}`,
        data: { label: item },
        position: { x: index * 100, y: 50 },
    }));

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect: OnConnect = useCallback((params: Edge | Connection) => {
        setEdges((eds) => addEdge(params, eds));
      }, [setEdges]);

    return (
        <div className="center-panel">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default CenterPanel;
