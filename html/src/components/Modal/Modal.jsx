import React from 'react';
import cl from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.modal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}  onMouseDown={() => setVisible(false)}>
            <div className={cl.modalContent} onMouseDown={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;