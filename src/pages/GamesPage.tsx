import { Plus } from "lucide-react";
import { useState } from "react";

const initialGames = [
  { id: 1, name: "行政区拼图", code: "province_puzzle", version: "0.1.0", status: "已上架" },
  { id: 2, name: "猜省会", code: "guess_capital", version: "0.2.0", status: "已上架" },
  { id: 3, name: "猜故事", code: "guess_story", version: "0.1.0", status: "草稿" }
];

interface GamesPageProps {
  token: string;
}

export default function GamesPage({ token }: GamesPageProps) {
  const [games] = useState(initialGames);

  return (
    <div className="admin-page">
      <header className="page-heading">
        <div>
          <p className="eyebrow">GAMES</p>
          <h1>游戏管理</h1>
        </div>
        <button className="neu-button" type="button">
          <Plus size={17} />
          新建游戏
        </button>
      </header>

      <section className="game-admin-grid">
        {games.map((game) => (
          <article key={game.id} className="neu-card">
            <h2>{game.name}</h2>
            <p>{game.code}</p>
            <div className="game-meta">
              <span>版本 {game.version}</span>
              <span>{game.status}</span>
            </div>
            <button className="neu-button full" type="button">
              管理版本
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
