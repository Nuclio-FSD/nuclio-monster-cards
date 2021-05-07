// {name: "Pipo", color: "#FFFFFF", img: "./image"}
import "./card.css";

const Card = ({ monster }) => {
  return (
    <div className="_cardContainer" style={{ backgroundColor: monster.color }}>
      <img src={monster.img} className="_card_image" alt={monster.name} />
    </div>
  );
};

export default Card;
