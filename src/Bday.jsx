import React, { useState } from "react";

function Bday() {
  const emoji_dictionary = {
    "😀": "Grinning face",
    "😂": "Face with tears of joy",
    "❤️": "Red heart",
    "😍": "Smiling face with heart eyes",
    "👍": "Thumbs up",
    "😢": "Crying face",
    "😎": "Smiling face with sunglasses",
    "🔥": "Fire",
    "🥰": "Smiling face with hearts",
    "👏": "Clapping hands",
    "🤔": "Thinking face",
    "😡": "Angry face",
    "🎉": "Party popper",
    "🙏": "Folded hands (praying or thank you)",
    "💔": "Broken heart",
    "😊": "Smiling face with smiling eyes",
    "🥺": "Pleading face",
    "🎂": "Birthday cake",
    "🚀": "Rocket (progress or success)",
    "🌟": "Glowing star",
    "😴": "Sleeping face",
    "💪": "Flexed biceps (strength or determination)",
    "🙌": "Raising hands (celebration or praise)",
    "🐶": "Dog face",
    "🐱": "Cat face",
    "🌈": "Rainbow",
    "☀️": "Sun",
    "🍕": "Pizza",
    "🍎": "Red apple",
    "⚽": "Soccer ball",
    "🏀": "Basketball",
    "🚗": "Car",
    "✈️": "Airplane",
    "📚": "Books",
    "📱": "Mobile phone",
    "💡": "Light bulb (idea or innovation)",
    "💵": "Money bills",
    "⏰": "Alarm clock",
    "💣": "Bomb (explosive situation or impact)",
    "🌍": "Earth globe (world or global)",
    "🖐️": "Raised hand (stop or greeting)",
  };

  const [meaning, setMeaning] = useState("");

  
  function emojiInputHandler(event) {
    const userInput = event.target.value;
    const meaning = emoji_dictionary[userInput];
    setMeaning(meaning ? meaning : "Not found in the database");
  }

  
  function emojiClickHandler(emoji) {
    const meaning = emoji_dictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div>
      <h1>Emoji Interpreter</h1>

      
      <input
        type="text"
        placeholder="Enter an emoji here"
        onChange={emojiInputHandler}
      />
      <h2>{meaning ? `Meaning: ${meaning}` : "Enter or click an emoji"}</h2>

      
      <div>
        {Object.keys(emoji_dictionary).map((emoji) => (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)} 
          >
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Bday;