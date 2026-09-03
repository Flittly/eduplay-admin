import { Search } from "lucide-react";
import { useState } from "react";

const initialTeachers = [
  { id: 1, name: "王老师", username: "teacher_wang", school: "第一中学", status: "正常" },
  { id: 2, name: "李老师", username: "teacher_li", school: "实验中学", status: "正常" },
  { id: 3, name: "陈老师", username: "teacher_chen", school: "第二中学", status: "已禁用" }
];

export default function TeachersPage() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [keyword, setKeyword] = useState("");

  const visibleTeachers = teachers.filter((teacher) =>
    teacher.name.includes(keyword) || teacher.username.includes(keyword)
  );

  function toggleStatus(id: number) {
    setTeachers((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "正常" ? "已禁用" : "正常"
            }
          : item
      )
    );
  }

  return (
    <div className="admin-page">
      <header className="page-heading">
        <div>
          <p className="eyebrow">TEACHERS</p>
          <h1>教师管理</h1>
        </div>
      </header>

      <section className="neu-card">
        <div className="toolbar">
          <label className="search-box">
            <Search size={17} />
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="搜索姓名或用户名"
            />
          </label>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>姓名</th>
                <th>用户名</th>
                <th>学校</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {visibleTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.username}</td>
                  <td>{teacher.school}</td>
                  <td>{teacher.status}</td>
                  <td>
                    <button
                      className="neu-button small"
                      onClick={() => toggleStatus(teacher.id)}
                    >
                      {teacher.status === "正常" ? "禁用" : "启用"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

