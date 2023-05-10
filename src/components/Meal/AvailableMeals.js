import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      await delay(1000);

      const response = await fetch(
        "https://react-http-90692-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsloading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealserror}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.desciption}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p className="mealsloading">Loading...</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
