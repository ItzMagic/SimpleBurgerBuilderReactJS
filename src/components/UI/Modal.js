import React from 'react';


import classes from './Modal.css';
import Aux from '../../hoc/Aux';
import Backdrop from './Backdrop/Backdrop'


// we placed backdrop here because the backdrop closely works with the modal
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
    <div 
    className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0'
    }}>
        {props.children}
    </div>
    </Aux>
);

export default modal;