import React from "react";

const MyPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-[dotum] text-[11px] flex flex-col justify-end pt-20"
      style={{ backgroundImage: 'url("/bg/xp-bg.png")' }}
    >
      <div className="w-3/5 mx-auto flex flex-col items-center gap-5 translate-y-[-170px]">
        
        {/* 상단: 마이페이지 아이콘 + 출석률 */}
        <div className="w-full flex justify-end items-start pr-5 relative">
          {/* 마이페이지 아이콘 */}
          <div className="absolute right-[121px] top-[-100px]">
            <img src="/icons/mypage.png" alt="mypage" className="w-[150px] h-[100px]" />
          </div>

          {/* 출석률 창 */}
          <div
            className="absolute top-[-100px] right-[-60px] w-[170px] h-[100px]"
            style={{
              backgroundImage: 'url("/ui/window-attendence.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="absolute top-[30px] left-[20px] right-[20px]">
              <h3 className="text-blue-700 font-bold mb-2 text-[12px]">출석률</h3>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: "75%" }} />
              </div>
              <div className="text-right mt-1 text-gray-700 font-medium text-[11px]">75%</div>
            </div>
          </div>
        </div>

        {/* 중단: 나무 성장 + 피드백 */}
        <div className="flex justify-center gap-4">
          {/* 나무 성장 */}
          <div
            className="relative w-[170px] h-[180px]"
            style={{
              backgroundImage: 'url("/ui/window-growth.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="absolute top-[50px] left-[20px] flex items-center gap-2">
              <img src="/ui/icon-tree.png" alt="tree" className="w-6 h-6" />
              <img src="/ui/icon-pdf.png" alt="pdf" className="w-5 h-5" />
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-[2px] rounded">75%</span>
            </div>
          </div>

          {/* 피드백 */}
          <div
            className="relative w-[170px] h-[180px]"
            style={{
              backgroundImage: 'url("/ui/window-feedback.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="absolute top-[50px] left-[10px] right-[10px] text-center">
              <p className="font-medium leading-tight">
                You're awesome,<br />thanks!
              </p>
            </div>
          </div>
        </div>

        {/* 퀘스트 창 */}
        <div
          className="relative w-[330px] h-[200px] mb-10"
          style={{
            backgroundImage: 'url("/ui/window-quest.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        >
          <div className="absolute top-[40px] left-[20px] right-[20px]">
            <ul className="list-disc list-inside space-y-1">
              <li>이차방정식 근과 계수의 관계 외우기</li>
              <li>함수 그래프 특징 복습</li>
              <li>오늘 개념 정리 복습하기</li>
            </ul>
          </div>
        </div>

        {/* 하단 아이콘 버튼 */}
        <div className="flex justify-center gap-6 mt-[20px] mb-4">
          <button onClick={() => window.location.href = "/calendar"}>
            <img src="/icons/calendar.png" alt="calendar" className="w-[60px] h-[60px]" />
          </button>
          <button onClick={() => window.location.href = "/resources"}>
            <img src="/icons/resources.png" alt="resources" className="w-[60px] h-[60px]" />
          </button>
          <button onClick={() => window.location.href = "/qna"}>
            <img src="/icons/qna.png" alt="qna" className="w-[60px] h-[60px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
