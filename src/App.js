import {useState} from "react";
import "./App.css";
import Hand from "./components/hand/hand";
import Logo from "./components/logo/logo";
import Pipo from "./assets/Pipo.png";
import Chuky from "./assets/Chuky.png";
import Polo from "./assets/Polo.png";
import Pepo from "./assets/Pepo.png";
import Papo from "./assets/Papo.png";
import Lora from "./assets/Lora.png";
import Leico from "./assets/Leico.png";
import Carco from "./assets/Carco.png";
import Pis from "./assets/Pis.png";
import { ShuffleButton } from "./components/button/shuffleButton";


function App() {
  const handOfMonsters = [
    { name: "Pipo", color: "#F2DFDF", img: Pipo },
    { name: "Chuky", color: " #6BBABB3B", img: Chuky },
    { name: "Polo", color: "#F2AADF", img: Polo },
    { name: "Pepo", color: "#7FB358", img: Pepo },
    { name: "Papo", color: "#BDCC59", img: Papo },
    { name: "Lora", color: "#F2AADF", img: Lora },
    { name: "Leico", color: "#F2AADF", img: Leico },
    { name: "Carco", color: "#F2AADF", img: Carco },
    { name: "Pis", color: "#F2AADF", img: Pis },
  ];

  const [shuffled, setShuffled] = useState(handOfMonsters);


  const handleShuffle = () => {
    const shuffle = handOfMonsters.sort(() => 0.5 - Math.random());
    setShuffled([...shuffle]);
  }

  return (
    <div className="App">
      <Logo />
      <Hand monsters={shuffled} />
      <ShuffleButton handleShuffle={handleShuffle} />
    </div>
  );
}

export default App;
