// src/pages/Teacher/ClassDetailPage.tsx

import SharedCalendarSection from "@/components/SharedCalendarSection";
import { useParams, useNavigate } from "react-router-dom";

const dummyStudents = [
  { id: "s1", name: "김지민", grade: "중3" },
  { id: "s2", name: "박서연", grade: "중2" },
  { id: "s3", name: "이재훈", grade: "중3" },
];

const ClassDetailPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">👥 반 상세보기: {classId}</h1>

      {/* ✅ 학생 리스트 */}
      <ul className="space-y-2">
        {dummyStudents.map((student) => (
          <li
            key={student.id}
            onClick={() =>
              navigate(`/teacher/class/${classId}/student/${student.id}`)
            }
            className="bg-white/70 backdrop-blur-md p-3 rounded-lg shadow text-sm cursor-pointer hover:bg-white"
          >
            <div className="font-semibold text-gray-800">{student.name}</div>
            <div className="text-gray-600 text-xs">{student.grade}</div>
          </li>
        ))}
      </ul>

      {/* ✅ 공유 캘린더 섹션 추가 */}
      <SharedCalendarSection />
    </div>
  );
};

export default ClassDetailPage;
