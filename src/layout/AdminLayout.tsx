import {
  Boxes,
  LayoutDashboard,
  LogOut,
  Ticket,
  Users
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "数据概览", icon: LayoutDashboard },
  { to: "/teachers", label: "教师管理", icon: Users },
  { to: "/games", label: "游戏管理", icon: Boxes },
  { to: "/codes", label: "兑换码", icon: Ticket }
];

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="logo-mark">E</span>
          <div>
            <strong>EduPlay</strong>
            <small>Admin</small>
          </div>
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `admin-nav-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <button className="logout-button" type="button">
          <LogOut size={17} />
          退出登录
        </button>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

