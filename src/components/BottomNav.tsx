// src/components/BottomNav.tsx

import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/70 backdrop-blur-md fixed bottom-0 left-0 right-0 p-3 flex justify-around border-t border-gray-200 text-sm text-gray-700">
      <button className="flex flex-col items-center" onClick={() => navigate("/materials")}>
        <img src="/images/gallery-icon.png" className="w-5 h-5 mb-1" />
        Gallery
      </button>
      <button className="flex flex-col items-center" onClick={() => navigate("/calendar")}>
        <img src="/images/resources-icon.png" className="w-5 h-5 mb-1" />
        Resources
      </button>
      <button className="flex flex-col items-center" onClick={() => navigate("/qna")}>
        <img src="/images/qa-icon.png" className="w-5 h-5 mb-1" />
        Q&A
      </button>
    </div>
  );
};

export default BottomNav;
