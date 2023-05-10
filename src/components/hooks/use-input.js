import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const reset = () => {
    setEnteredValue("");
  };

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  let isValid = false;

  if (validateInput(enteredValue)) {
    isValid = true;
  }

  const hasError = !isValid && isTouched;

  return {
    enteredValue,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
