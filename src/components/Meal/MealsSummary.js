import classes from "./MealsSummery.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        all our meals are cooked with high-quality ingredients, freshly-made by
        our experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
