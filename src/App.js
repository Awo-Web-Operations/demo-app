import React, { Component } from "react";
import SuggestMeal from "./components/SuggestMeal";
import './App.css';

class App extends Component {
  allMealNames = [];
  productNames = ["Spinach", "Brown Beans", "Ijebu Garri", "Honey Beans", "Kale", "Water",
    "Squash Potatoes", "Oregano", "Cashews", "Palm Oil", "Pineapple", "Onions", "Flour",
    "Butter", "Sugar", "Hawaiian Bread", "Avocados", "Tomatoes"];
  productImageLink = [];
  categories = ["Baking", "Cooking", "Home", "Ethiopian", "Quick-Meal"];
  measurements = ["mL", "oz", "L", "cup(s)", "Tbsp", "tsp", "pt", "lb", "g", "kg", "lb", "qt",
    "gallon", "dash/pinch", "Leaves", "cloves", "cubes", "Large", "medium", "small"];
  kitchenUtensils = ["Baking Sheet", "Colander", "Cooking Oil", "Cutting Board",
    "Fridge", "Knife Set", "Mixing Bowls", "Pot", "Pan", "Peeler", "Thermometer",
    "Wire Mesh", "Zester"];
    
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        App header       </header> */}

        Comes here
        <SuggestMeal productNames={this.productNames} allMealNames={this.allMealNames}
          measurements={this.measurements} kitchenUtensils={this.kitchenUtensils}
          categories={this.categories}/>
      </div>
    );
  }
}

export default App;
