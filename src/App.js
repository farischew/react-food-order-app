import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
