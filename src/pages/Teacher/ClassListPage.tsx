// src/pages/Teacher/ClassListPage.tsx

import { useNavigate } from "react-router-dom";

const dummyClasses = [
  { id: "junior", name: "중2+중3 통합반", studentCount: 8 },
  { id: "high1", name: "고1 수학반", studentCount: 5 },
];

const ClassListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">👨‍🏫 나의 반 목록</h1>
      <ul className="space-y-2">
        {dummyClasses.map((cls) => (
          <li
            key={cls.id}
            onClick={() => navigate(`/teacher/class/${cls.id}`)}
            className="bg-white/70 backdrop-blur-md p-4 rounded-lg shadow cursor-pointer hover:bg-white"
          >
            <div className="text-base font-semibold">{cls.name}</div>
            <div className="text-xs text-gray-600">학생 수: {cls.studentCount}명</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassListPage;
