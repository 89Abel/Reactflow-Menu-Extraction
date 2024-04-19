import React, { useState } from 'react';

interface LeftPanelProps {
    onExtract: (menuItems: string[]) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onExtract }) => {
    const [inputText, setInputText] = useState('');
    const [extractedMenuItems, setExtractedMenuItems] = useState<string[]>([]);
    const [noMatchesFound, setNoMatchesFound] = useState(false);

    const extractMenuItems = () => {
        const menuRegex = /(\d+)\.\s(.+)/g;
        const matches = Array.from(inputText.matchAll(menuRegex));
        if (matches.length === 0) {
            setNoMatchesFound(true);
            onExtract([]);
        } else {
            const menuItems = matches.map(match => `${match[1]}. ${match[2]}`);
            setExtractedMenuItems(menuItems);
            onExtract(menuItems);
            setNoMatchesFound(false);
        }
    };

    return (
        <div className="left-panel">
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste text containing menu items here..."
            ></textarea>
            <button onClick={extractMenuItems}>Extract</button>
            {noMatchesFound && <p>No valid menu items found.</p>}
            <div>
                {extractedMenuItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default LeftPanel;
