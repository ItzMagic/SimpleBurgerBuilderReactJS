import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
        //        the amount of the given ingredient
        // spread method                      |
        //       |                            |
        return [...Array(props.ingredients[ igKey ])].map(( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} /> ;
        } );
    } )
    
//previous value, current value 
//            |    |
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    console.log(transformedIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type ="bread-bottom"/>
            <div>Build Controls</div>
        </div>
    );
};

export default burger;