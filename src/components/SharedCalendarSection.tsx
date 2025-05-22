// src/components/SharedCalendarSection.tsx

const dummyEvents = [
  { date: "2025-05-25", title: "학원 모의고사" },
  { date: "2025-05-28", title: "중간고사 (1차)" },
  { date: "2025-06-02", title: "기말고사 대비 테스트" },
];

const SharedCalendarSection = () => {
  return (
    <div className="bg-white/70 rounded-lg shadow p-4 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">📅 반 시험 일정</h2>
      <ul className="space-y-1">
        {dummyEvents.map((event, idx) => (
          <li key={idx} className="text-sm text-gray-700 flex justify-between">
            <span>{event.title}</span>
            <span className="text-xs text-gray-500">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SharedCalendarSection;
