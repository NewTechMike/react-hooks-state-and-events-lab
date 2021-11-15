import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [display, setDisplay] = useState(items)
  let [selectedCategory, setCategory] = useState("All");
  const displayItems = display.filter((item)=> {
    if(selectedCategory === "All"){
      return true;
    } else {
      return item.category === selectedCategory
    }
  });
  //selectedCategory is used to keep 
 // track of the value from <select>
 //This is also used to determine which items to display


function handleFilter(event){
  //console.log("Event", className)
  setCategory(event.target.value)
  console.log("selectedCategory", selectedCategory)
  console.log("selectedCategory, category", selectedCategory[0].category)
}//selectedCategory = items.filter((item)=> item.category === 

  return (
    <div className="Shopping List">
      <div className="Filter">
        <select name="filter" value={selectedCategory[0].category} onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" onChange={handleFilter}>
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
