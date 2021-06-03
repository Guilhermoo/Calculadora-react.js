import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => (
    <div className="ClearBtn" onClick={props.handleClear}>
        <h1>{props.children}</h1>
    </div>
)

export default ClearButton;