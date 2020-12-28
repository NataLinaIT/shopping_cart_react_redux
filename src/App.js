import GoodsList from "./container/GoodsList";
import CartList from "./container/CartList";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <GoodsList />
        <CartList />
      </div>
    </div>
  );
}

export default App;
