import React from 'react';
import cl from './Status.module.css'

const Status = ({status, className, ...props}) => {
    let classes = ''

    switch(status) {
        case 'Ожидание':
            classes = cl.wait
            break;
        case 'Одобрено':
            classes = cl.approved
            break;
        case 'Отказано':
            classes = cl.denied
            break;
        default:
            break;
    }

    return (
        <div {...props} className={`${cl.status} ${classes}`}>
            <p>{status}</p>
        </div>
    );
};

export default Status;