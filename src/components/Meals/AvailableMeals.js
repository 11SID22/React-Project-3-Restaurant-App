import React from "react";

import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

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

    const mealsList = DUMMY_MEALS.map(meal => <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;