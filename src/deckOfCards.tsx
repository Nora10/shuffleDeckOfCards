import React, { useState } from "react";

const shuffleArray = (array: string[]) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const DeckShuffler = () => {
  const [deckOfCards, setDeckOfCards] = useState([
    " Ace 🃏",
    "King 👑",
    "Queen 👸",
    "Prince 🤴",
    "10 🔟",
    "9 9️⃣",
    "8 8️⃣",
    "7 7️⃣",
  ]);
  const shuffleDeck = () => {
    setDeckOfCards(shuffleArray(deckOfCards));
  };

  return (
    <div className="deck-shuffler">
      <button className="shuffle-button" onClick={shuffleDeck}>
        {" "}
        Shuffle cards
      </button>
      <div className="card-container">
        {deckOfCards.map((card, index) => (
          <div className="card-item" key={index}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckShuffler;
