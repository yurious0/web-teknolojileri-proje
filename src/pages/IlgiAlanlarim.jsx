import React, { useEffect, useState } from "react";

const API_KEY = "f14df201b8da44cfb12ce03e4241ae53";

const favoriteGames = [
  "Counter-Strike 2",
  "Satisfactory",
  "Balatro",
  "Path of Exile",
];

function IlgiAlanlarım() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gameData = await Promise.all(
          favoriteGames.map(async (title) => {
            const res = await fetch(
              `https://api.rawg.io/api/games?search=${encodeURIComponent(
                title
              )}&key=${API_KEY}`
            );
            const data = await res.json();
            return data.results[0]; 
          })
        );
        setGames(gameData);
      } catch (err) {
        console.error("Oyun verileri alınamadı:", err);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="games-container">
      <h1 className="games-title">
        İlgi Alanlarım - Favori Oyunlarım
      </h1>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img
              src={game.background_image}
              alt={game.name}
              className="game-image"
            />
            <h2 className="game-title">{game.name}</h2>
            <p className="game-info"><strong>Çıkış Tarihi:</strong> {game.released}</p>
            <p className="game-info"><strong>Metacritic puanı:</strong> {game.metacritic ?? "Yok"}</p>
            <p className="game-info"><strong>Oyunu oynayabileceğiniz platformlar:</strong> {game.platforms.map(platform => platform.platform.name).join(", ")}</p>
            <p className="game-info"><strong>Oyunun türü:</strong> {game.genres.map(genre => genre.name).join(", ")}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default IlgiAlanlarım;
