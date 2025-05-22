import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type Event = {
  date: string;
  title: string;
};

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());
  const [events] = useState<Event[]>([
    { date: "2025-05-25", title: "학원 모의고사" },
    { date: "2025-05-28", title: "수학 중간고사" },
    { date: "2025-06-01", title: "고등 수학 퀴즈" },
  ]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("sv-SE"); // yyyy-mm-dd 형식, 한국시간 기준
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
    <div
      className="min-h-screen bg-cover bg-center font-[dotum] text-xs flex items-center justify-center p-8"
      style={{ backgroundImage: 'url("/bg/xp-bg.png")' }}
    >
      <div
        className="relative w-[360px] h-[400px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/ui/calendar-frame.png")',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="absolute top-[48px] left-[16px] right-[16px] bottom-[16px]">
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={tileContent}
            className="text-xs w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
