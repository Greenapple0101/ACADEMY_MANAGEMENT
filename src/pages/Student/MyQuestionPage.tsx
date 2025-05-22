import React, { useState } from "react";

type Question = {
  id: number;
  title: string;
  content: string;
};

const MyQuestionPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) return alert("제목과 내용을 입력하세요.");
    const newQuestion: Question = {
      id: questions.length + 1,
      title,
      content,
    };
    setQuestions([newQuestion, ...questions]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto font-[dotum] text-sm space-y-4">
      <h2 className="text-lg font-bold">✏️ 내 질문 관리</h2>

      {/* 질문 등록 */}
      <div className="space-y-2 border border-gray-300 p-3 rounded-lg bg-white">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="질문 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="질문 내용을 입력하세요"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          질문 등록
        </button>
      </div>

      {/* 내 질문 목록 */}
      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="border border-gray-300 p-3 rounded bg-white">
            <h2 className="font-semibold">{q.title}</h2>
            <p className="text-gray-600">{q.content}</p>
            <button
              className="text-red-500 text-xs mt-2 underline"
              onClick={() => handleDelete(q.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyQuestionPage;
