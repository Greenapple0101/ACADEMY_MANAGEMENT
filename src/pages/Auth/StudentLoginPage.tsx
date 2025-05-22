import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentLoginPage = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in", { studentId, password });
    navigate("/student/MyPage");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("/bg/xp-bg.png")' }}
    >
      {/* XP 창 컨테이너 */}
      <div className="relative w-[300px] h-[340px] shadow-[4px_4px_0px_#808080]">
        {/* XP 프레임 이미지 */}
        <img
          src="/ui/login-frame.png"
          alt="Login Frame"
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
        />

        {/* 아이디 입력 */}
        <div className="absolute top-[100px] left-[30px] w-[240px] z-10">
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="아이디"
            className="w-full text-[15px] px-3 py-3 border border-black rounded-lg bg-white font-[dotum] focus:outline-none"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="absolute top-[170px] left-[30px] w-[240px] z-10">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full text-[15px] px-3 py-3 border border-black rounded-lg bg-white font-[dotum] focus:outline-none"
          />
        </div>

        {/* 로그인 버튼 */}
        <div className="absolute top-[250px] left-[30px] w-[240px] z-10">
          <button
            onClick={handleLogin}
            className="w-full bg-[#c0c0c0] hover:bg-[#a0a0a0] text-[13px] py-2 border border-black rounded-md shadow-inner font-[dotum]"
          >
            로그인
          </button>
        </div>

        {/* 회원가입 링크 */}
        <div className="absolute top-[295px] left-[30px] w-[240px] text-center z-10">
          <span className="text-xs font-[dotum] text-gray-700">
            아직 계정이 없나요?{" "}
            <a
              href="/student/signup"
              className="text-blue-700 hover:underline"
            >
              회원가입
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;