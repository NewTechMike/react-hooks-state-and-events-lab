import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  // add event handler for click on button
  // event handler will toggle betweek light and dark
  const [isDark, setIsDark] = useState(false);
  const appClass = isDark ? "App dark" : "App light"
  
/*   function ClickHandler(){
    
    function clickHandler(){
      console.log("clicked");
      setIsDark((isDark) => !isDark)
      // when clicked, changes background from light to dark
      // or dark to light
      //return <button onClick={handle}>Clicked</button>
    }
    
  return <button style={{background: appClass}} onClick={clickHandler}>{isDark ? "Light mode": "Dark mode"}</button>
} */

function clickHandler(){
  console.log("clicked");
  setIsDark((isDark) => !isDark)
}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
       <button onClick={clickHandler}>{isDark ? "Light Mode": "Dark Mode"}</button>

      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
