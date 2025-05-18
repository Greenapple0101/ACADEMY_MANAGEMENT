// src/routes/AppRoutes.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyPage from "@/pages/Student/MyPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/mypage" replace />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
