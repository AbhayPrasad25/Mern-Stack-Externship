import React, { useState } from 'react';
import './TextUpdater.css'; // Import the CSS file

const TextUpdater = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="text-updater-container">
            <h2 className="text-updater-title">Interactive Text Updater</h2>
            <input
                className="text-updater-input"
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <div className="text-updater-display">
                <p className="text-updater-text">
                    {text ? (
                        <>Output: <span>{text}</span></>
                    ) : (
                        'Enter some text to see it displayed here'
                    )}
                </p>
            </div>
        </div>
    );
};

export default TextUpdater;
