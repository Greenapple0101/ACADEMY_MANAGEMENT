import AppRoutes from "@/routes/AppRoutes"; // ✅ 라우팅 묶음만 반환
// src/main.tsx 또는 App.tsx 등
import "./index.css";  // Tailwind 지시어 포함된 CSS

const App = () => {
  return <AppRoutes />;
};

export default App;
