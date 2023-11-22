import { useContext } from "react";
import { EmojiContext } from "./EmojiContextProvider";
import happyEmoji from "./assets/happy.png";
import sadEmoji from "./assets/sad.png";

function Emoji() {
  const { mood, handleMoodChange } = useContext(EmojiContext);

  const emojiImage = mood === 'happy' ? happyEmoji : sadEmoji;

  return (
    <div>
      <img src={emojiImage} alt="Emoji" className="emoji" />
      <button onClick={handleMoodChange}>Change Mood</button>
    </div>
  );
}

export default Emoji;
