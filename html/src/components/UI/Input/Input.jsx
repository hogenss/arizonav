import React from 'react';
import cl from './Input.module.css'
import useClasses from "../../../hooks/useClasses";

const Input = ({className, ...props}) => {
    const classes = useClasses(cl.input, className)

    return (
        <input className={classes} {...props}/>
    );
};

export default Input;