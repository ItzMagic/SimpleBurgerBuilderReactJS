import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
/* There are three ways to get props from the component we will be wrraping with this comp
1) We can return an array with keys instead of a JSX code 
2) Making this an High order component
3) Or wrapping everything in a DIV
*/


const layout = ( props ) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className = {classes.Content}>
        { props.children }
    </main>
    </Aux>
);



export default layout;