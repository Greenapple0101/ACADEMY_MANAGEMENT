// src/components/StudentCard.tsx

const StudentCard = () => {
  return (
    <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow flex items-center gap-4">
      {/* 8비트 수학 이미지 대신 간단한 박스, 나중에 이미지로 대체 */}
      <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center text-xs font-bold text-green-800">
        MATH
      </div>
      <div className="flex-1 space-y-1">
        <div className="text-base font-semibold text-gray-800">Jane Doe</div>
        <div className="text-sm text-gray-600">8th Grade / Class B</div>
        <div className="text-xs text-green-700">🌱 Tree growth: 75%</div>
      </div>
    </div>
  );
};

export default StudentCard;
