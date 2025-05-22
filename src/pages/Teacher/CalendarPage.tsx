// src/pages/Teacher/CalendarPage.tsx

import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
// import './xp-calendar.css'; // XP 스타일 CSS 연결 가능

type Event = {
  date: string;
  title: string;
};

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([
    { date: "2025-05-25", title: "학원 모의고사" },
    { date: "2025-05-28", title: "수학 중간고사" },
    { date: "2025-06-01", title: "고등 수학 퀴즈" },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("sv-SE");
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(formatDate(date));
  };

  const handleAddEvent = () => {
    if (selectedDate && newTitle) {
      setEvents([...events, { date: selectedDate, title: newTitle }]);
      setNewTitle("");
    }
  };

  const tileContent = ({ date }: { date: Date }) => {
    const formatted = formatDate(date);
    const dayEvents = events.filter((e) => e.date === formatted);
    return (
      <div className="text-[10px] px-1">
        {dayEvents.map((e, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-500 rounded-sm px-1 mt-0.5 shadow text-gray-800"
          >
            {e.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 p-4 font-[dotum] text-xs">
      <h1 className="text-xl font-bold text-gray-800 mb-4">📅 Calendar (Teacher)</h1>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
        onClickDay={handleDayClick}
      />
      {selectedDate && (
        <div className="mt-4 bg-white p-3 rounded border border-gray-400 shadow">
          <p className="font-bold">{selectedDate} 일정 추가하기</p>
          <input
            type="text"
            className="border px-2 py-1 text-sm w-full mt-2"
            placeholder="일정 제목 입력"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            onClick={handleAddEvent}
            className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
          >
            추가하기
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;