import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentSignUpPage = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // TODO: 회원가입 처리 로직 추가
    console.log("Signing up", { studentId, password });
    navigate("/student/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("/bg/xp-bg.png")' }}
    >
      <div className="relative w-[320px] h-[400px] shadow-[4px_4px_0px_#808080]">
        {/* 프레임 이미지 */}
        <img
          src="/ui/signup-frame.png"
          alt="Sign Up Frame"
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
        />

        {/* 아이디 입력 */}
        <div className="absolute top-[90px] left-[30px] w-[260px] z-10">
          <label className="text-[13px] font-bold text-black font-[dotum] mb-1 block">
            아이디
          </label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full px-3 py-2.5 border border-black rounded-lg bg-white text-[15px] font-[dotum] focus:outline-none"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="absolute top-[160px] left-[30px] w-[260px] z-10">
          <label className="text-[13px] font-bold text-black font-[dotum] mb-1 block">
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2.5 border border-black rounded-lg bg-white text-[15px] font-[dotum] focus:outline-none"
          />
        </div>

        {/* 비밀번호 확인 입력 */}
        <div className="absolute top-[230px] left-[30px] w-[260px] z-10">
          <label className="text-[13px] font-bold text-black font-[dotum] mb-1 block">
            비밀번호 확인
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2.5 border border-black rounded-lg bg-white text-[15px] font-[dotum] focus:outline-none"
          />
        </div>

        {/* 가입하기 버튼 */}
        <div className="absolute top-[315px] left-[30px] w-[260px] z-10">
          <button
            onClick={handleSignUp}
            className="w-full bg-[#c0c0c0] hover:bg-[#a0a0a0] text-sm py-2 border border-black rounded-md shadow-inner font-[dotum]"
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUpPage;
