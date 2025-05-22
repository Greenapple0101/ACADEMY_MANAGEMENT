import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionBoardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-md mx-auto font-[dotum] text-sm space-y-4">
      <h1 className="text-lg font-bold mb-4">💬 질문 게시판</h1>
      <div className="flex flex-col space-y-3">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/student/questions/my")}
        >
          ✏️ 질문 등록/삭제
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => navigate("/student/questions/shared")}
        >
          🌐 공유 게시판
        </button>
      </div>
    </div>
  );
};

export default QuestionBoardPage;
