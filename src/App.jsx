import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
  const cards = data.map(item => (
    <Card
      key={item.id}
      {...item}
    />
  ));

  return (
    <div className="app">
      <Nav />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
