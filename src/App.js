import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="title">Adopt Me!</h1>
      <Pet name="Kobe" animal="Dog" breed="Staffordshire" />
      <Pet name="Mia" animal="Cat" breed="Shorthair" />
      <Pet name="Gaspar" animal="Dog" breed="Beagle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
