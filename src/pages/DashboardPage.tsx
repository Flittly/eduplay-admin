import { Boxes, Ticket, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="admin-page">
      <header className="page-heading">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h1>数据概览</h1>
        </div>
      </header>

      <section className="stat-grid">
        <article className="neu-card">
          <div className="stat-icon">
            <Users size={22} />
          </div>
          <span>注册教师</span>
          <strong>128</strong>
        </article>
        <article className="neu-card">
          <div className="stat-icon">
            <Boxes size={22} />
          </div>
          <span>已发布游戏</span>
          <strong>12</strong>
        </article>
        <article className="neu-card">
          <div className="stat-icon">
            <Ticket size={22} />
          </div>
          <span>已兑换激活码</span>
          <strong>356</strong>
        </article>
      </section>

      <section className="neu-card chart-card">
        <h2>平台状态</h2>
        <p>当前功能为前端管理界面，后续接入真实统计接口。</p>
      </section>
    </div>
  );
}

