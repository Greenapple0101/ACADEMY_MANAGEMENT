// src/components/Header.tsx

const Header = () => {
  return (
    <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow flex flex-col items-center space-y-2">
      <div className="flex items-center gap-2">
        {/* 나중에 이미지 추가 가능 */}
        {/* <img src="/images/mountain.png" alt="icon" className="w-6 h-6" /> */}
        <h1 className="text-xl font-bold text-gray-800">My Page</h1>
      </div>
      <div className="w-full">
        <div className="text-sm font-medium text-gray-700 mb-1 text-center">Attendance: 75%</div>
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div className="bg-blue-500 h-3 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
