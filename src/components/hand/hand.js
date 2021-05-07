import Card from "../card/card";
import "./hand.css";

const Hand = ({ monsters }) => {

  return (
    <div className="hand_container">
      {monsters.slice(0, 3).map(monster => (
        <Card key={monster.name} monster={monster} />
      ))}
    </div>
  );
};

export default Hand;
