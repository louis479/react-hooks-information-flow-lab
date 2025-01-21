import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

const items = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Carrots", category: "Produce" },
  { id: 3, name: "Chicken", category: "Meat" },
  { id: 4, name: "Ice Cream", category: "Dessert" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
