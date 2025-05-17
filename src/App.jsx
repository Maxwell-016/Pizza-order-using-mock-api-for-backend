import Pizza from "./components/Pizza";
import Order from "./components/Order";
import PizzaOfTheDay from "./components/PizzaOfTheDay";

function App() {
  return (
    <div>
      <h1 className="logo">Padre Gino's - Order Now</h1>
      {/* <Pizza
        name="Pepperoni"
        description="Pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="ham, pineapple, n stuff"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano"
        description="french fries, hot dogs, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      /> */}
      <Order />
      <PizzaOfTheDay />
    </div>
  );
}

export default App;
