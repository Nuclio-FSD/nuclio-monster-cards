import "./App.css";
import Hand from "./components/hand/hand";
import Logo from "./components/logo/logo";

function App() {
  const handOfMonsters = [
    { name: "Pipo", color: "#F2DFDF" },
    { name: "Chuky", color: " #6BBABB3B" },
    { name: "Polo", color: "#F2AADF" },
  ];

  return (
    <div className="App">
      <Logo />
      <Hand monsters={handOfMonsters} />
    </div>
  );
}

export default App;
