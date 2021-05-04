import "./colorLetter.css";

const ColorLetter = ({ color, letter }) => {
  return (
    <div className="_letterContainer" style={{ backgroundColor: color }}>
      {letter.toUpperCase()}
    </div>
  );
};

export { ColorLetter };
