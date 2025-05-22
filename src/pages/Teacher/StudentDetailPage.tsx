// src/pages/Teacher/StudentDetailPage.tsx

import { useParams } from "react-router-dom";
import { useState } from "react";

const dummyStudent = {
  name: "김지민",
  grade: "중3",
  attendance: 88,
  homework: 92,
  feedback: "최근 집중력이 좋아졌습니다!",
};

const StudentDetailPage = () => {
  const { classId, studentId } = useParams();
  const [feedback, setFeedback] = useState(dummyStudent.feedback);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">👤 학생 상세 보기</h1>
      <p className="text-sm text-gray-600">반: {classId}</p>
      <p className="text-sm text-gray-600">ID: {studentId}</p>

      <div className="bg-white/70 rounded-lg shadow p-4 space-y-2">
        <div className="text-lg font-semibold">{dummyStudent.name}</div>
        <div className="text-sm text-gray-600">{dummyStudent.grade}</div>
        <div className="text-sm text-green-700">출석률: {dummyStudent.attendance}%</div>
        <div className="text-sm text-blue-700">과제 완수율: {dummyStudent.homework}%</div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">📋 피드백</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded bg-white shadow"
        />
        <button
          onClick={() => alert("피드백이 저장되었습니다!")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default StudentDetailPage;
