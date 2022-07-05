import "./styles.css";
import List from "./components/List";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [people, setpeople] = useState(data);

  const deletePeople = () => {
    console.log();
    setpeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={deletePeople}>
          {people.length == 0 ? "Show All" : "Clear All"}
        </button>
      </section>
    </main>
  );
}
