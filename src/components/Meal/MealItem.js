const MealItem = (props) => {
  return (
    <li>
      {props.meal.name}
      {props.meal.description}
      {props.meal.price}
    </li>
  );
};

export default MealItem;
