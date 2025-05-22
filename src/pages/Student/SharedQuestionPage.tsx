import React, { useState } from "react";

type Question = {
  id: number;
  title: string;
  content: string;
};

const SharedQuestionPage = () => {
  const [questions] = useState<Question[]>([
    { id: 1, title: "예시 질문입니다", content: "이건 다른 학생이 쓴 질문입니다." },
    // 실제론 서버에서 불러올 예정
  ]);

  return (
    <div className="p-4 max-w-md mx-auto font-[dotum] text-sm space-y-4">
      <h2 className="text-lg font-bold">🌐 공유 게시판</h2>
      {questions.length === 0 ? (
        <p className="text-gray-500">아직 등록된 질문이 없습니다.</p>
      ) : (
        questions.map((q) => (
          <div key={q.id} className="border border-gray-300 p-3 rounded bg-white">
            <h2 className="font-semibold">{q.title}</h2>
            <p className="text-gray-600">{q.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SharedQuestionPage;
