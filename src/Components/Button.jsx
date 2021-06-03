import React from 'react';
import './Button.css';


const isOperator = val => {
    return !isNaN(val) || val === '.';
}

const Button = props => (
    <div className={`Button ${isOperator(props.children) ? null : 'operator'}`}
    onClick={()=>
        props.handleClick(props.children)
    }>
        <h1>{props.children}</h1>
    </div>
);

export default Button