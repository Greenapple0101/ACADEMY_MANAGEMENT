// EntryPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("/bg/xp-bg.png")' }}
    >
      {/* XP 창 컨테이너: 프레임과 내부 콘텐츠를 함께 감싸도록 조정 */}
      <div className="relative w-[400px] h-[380px] max-w-full">
        {/* 창 안의 콘텐츠: 프레임 내부에 함께 배치 */}
        <div className="relative w-full h-full">
          {/* 투명 배경의 창 프레임 이미지 */}
          <img
            src="/ui/window-frame.png"
            alt="XP Window Frame"
            className="w-full h-full block pointer-events-none absolute top-0 left-0"
          />

          {/* 프레임 내부 버튼 배치 */}
          <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            {/* 학생 버튼 */}
            <img
              src="/ui/btn-student.png"
              alt=""
              className="w-[180px] mb-4 hover:opacity-90 transition cursor-pointer"
              onClick={() => navigate("/student/login")}
            />

            {/* 선생님 버튼 */}
            <img
              src="/ui/btn-teacher.png"
              alt=""
              className="w-[180px] hover:opacity-90 transition cursor-pointer"
              onClick={() => navigate("/teacher/login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
