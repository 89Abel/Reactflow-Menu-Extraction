import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import CenterPanel from './components/CenterPanel';
import './styles/App.css';

const App: React.FC = () => {
    const [menuItems, setMenuItems] = useState<string[]>([]);

    return (
        <div className="app">
            <div className="left-panel-container">
                <LeftPanel onExtract={setMenuItems} />
            </div>
            <div className="center-panel-container">
                <CenterPanel menuItems={menuItems} />
            </div>
        </div>
    );
};

export default App;
