import { useState, createContext } from "react";

export const EmojiContext = createContext(); // Exporting the context

export const EmojiContextProvider = (props) => {
  const [mood, setMood] = useState('happy');
  
  const handleMoodChange = () => {
    setMood(mood === 'happy' ? 'sad' : 'happy');
  }

  return (
    <EmojiContext.Provider value={{ mood, handleMoodChange }}>
      {props.children}
    </EmojiContext.Provider>
  );
}

