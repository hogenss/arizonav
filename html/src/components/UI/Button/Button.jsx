import React from 'react';
import cl from './Button.module.css'
import useClasses from "../../../hooks/useClasses";

const Button = ({children, className, ...props}) => {
    const classes = useClasses(cl.button, className)

    return (
        <button className={classes} {...props}>{children}</button>
    );
};

export default Button;