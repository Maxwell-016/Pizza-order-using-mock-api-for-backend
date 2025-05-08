import Pizza from "./components/pizza";
import Order from "./components/order";

function App() {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
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
      <Order/>
    </div>
  );
}

export default App;
