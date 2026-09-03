import { Plus } from "lucide-react";
import { useState } from "react";

const initialCodes = [
  { id: 1, code: "PROVINCE-PUZZLE-2026", game: "行政区拼图", status: "未使用" },
  { id: 2, code: "TEST-30E0BDE3-568", game: "行政区拼图", status: "已使用" }
];

export default function CodesPage() {
  const [codes] = useState(initialCodes);

  return (
    <div className="admin-page">
      <header className="page-heading">
        <div>
          <p className="eyebrow">ACTIVATION</p>
          <h1>兑换码</h1>
        </div>
        <button className="neu-button" type="button">
          <Plus size={17} />
          批量生成
        </button>
      </header>

      <section className="neu-card">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>兑换码</th>
                <th>游戏</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((item) => (
                <tr key={item.id}>
                  <td>{item.code}</td>
                  <td>{item.game}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

