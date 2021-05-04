import Card from "../card/card";

const Hand = ({ monsters }) => {
  return (
    <div>
      {monsters.map((monster) => (
        <Card monster={{ name: monster.name, color: monster.color }} />
      ))}
    </div>
  );
};

export default Hand;
