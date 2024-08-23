import React from "react";

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish & vegies',
        price: 800,
    },
    {
        id: 'm2',
        name: 'Barbeque Burger',
        description: 'Raw, meaty & puffy bread',
        price: 300,
    },
    {
        id: 'm3',
        name: 'Tornado Pizza',
        description: 'Loaded with chicken fillings, juicy in every bite',
        price: 600,
    },
    {
        id: 'm4',
        name: 'Chicken Biryani',
        description: 'Feel the aroma & Taste like heaven',
        price: 900,
    },
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <ul>{mealsList}</ul>
        </section>
    );
};

export default AvailableMeals;