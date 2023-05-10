import useInput from "../hooks/use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();

    if (
      !nameInputValid ||
      !streetInputValid ||
      !postalInputValid ||
      !cityInputValid
    ) {
      return;
    }

    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postal: postalInput,
      city: cityInput,
    });
  };

  const {
    enteredValue: nameInput,
    isValid: nameInputValid,
    hasError: nameInputError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((enteredValue) => enteredValue.trim() !== "");
  const {
    enteredValue: streetInput,
    isValid: streetInputValid,
    hasError: streetInputError,
    onChangeHandler: streetChangeHandler,
    onBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((enteredValue) => enteredValue.trim() !== "");
  const {
    enteredValue: postalInput,
    isValid: postalInputValid,
    hasError: postalInputError,
    onChangeHandler: postalChangeHandler,
    onBlurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput((enteredValue) => enteredValue.trim() !== "");
  const {
    enteredValue: cityInput,
    isValid: cityInputValid,
    hasError: cityInputError,
    onChangeHandler: cityChangeHandler,
    onBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((enteredValue) => enteredValue.trim() !== "");

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          nameInputError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        ></input>
        {nameInputError && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          nameInputError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Your street</label>
        <input
          type="text"
          id="street"
          value={streetInput}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        ></input>
        {streetInputError && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          nameInputError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="postal">Your postal</label>
        <input
          type="text"
          id="postal"
          value={postalInput}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        ></input>
        {postalInputError && <p>Please enter a valid postal</p>}
      </div>
      <div
        className={`${classes.control} ${
          nameInputError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">Your city</label>
        <input
          type="text"
          id="city"
          value={cityInput}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        ></input>
        {cityInputError && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onHide}>
          Close
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
