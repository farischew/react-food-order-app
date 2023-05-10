import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-90692-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          desciption: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchData();
  }, []);

  console.log(meals);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.desciption}
      price={meal.price}
    ></MealItem>
  ));

  // console.log(mealsList);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
