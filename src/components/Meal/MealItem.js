import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <h3>{props.meal.name}</h3>
      <p className={classes.description}>{props.meal.description}</p>
      <p className={classes.price}>{props.meal.price}</p>
    </li>
  );
};

export default MealItem;
