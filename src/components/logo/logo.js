import { ColorLetter } from "../colorLetter/colorLetter";
import "./logo.css";

const Logo = () => {
  return (
    <div className="_logoContainer">
      <ColorLetter letter="m" color="#5FA05B" />
      <ColorLetter letter="o" />
      <ColorLetter letter="n" />
      <ColorLetter letter="s" />
      <ColorLetter letter="t" />
      <ColorLetter letter="e" />
      <ColorLetter letter="r" />
      <ColorLetter letter="s" />
    </div>
  );
};

export default Logo;
