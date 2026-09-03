import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import DashboardPage from "./pages/DashboardPage";
import TeachersPage from "./pages/TeachersPage";
import GamesPage from "./pages/GamesPage";
import CodesPage from "./pages/CodesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/codes" element={<CodesPage />} />
      </Route>
    </Routes>
  );
}

