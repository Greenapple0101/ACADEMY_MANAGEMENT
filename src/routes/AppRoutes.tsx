import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from "@/pages/Common/EntryPage";
import MyPage from "@/pages/Student/MyPage";
import CalendarPage from "@/pages/Student/CalendarPage";
import MaterialsPage from "@/pages/Student/MaterialsPage";
import QuestionBoardPage from "@/pages/Student/QuestionBoardPage";
import ClassListPage from "@/pages/Teacher/ClassListPage";
import ClassDetailPage from "@/pages/Teacher/ClassDetailPage";
import StudentDetailPage from "@/pages/Teacher/StudentDetailPage";
import StudentLoginPage from "@/pages/Auth/StudentLoginPage";
import StudentSignUpPage from "@/pages/Auth/StudentSignUpPage";
import TeacherSignUpPage from "@/pages/Auth/TeacherSignUpPage";
import TeacherLoginPage from "@/pages/Auth/TeacherLoginPage";
import MyQuestionPage from "@/pages/Student/MyQuestionPage";
import SharedQuestionPage from "@/pages/Student/SharedQuestionPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>

                <Route path="/student/login" element={<StudentLoginPage />} />
                <Route path="/student/signup" element={<StudentSignUpPage />} />
                <Route path="/teacher/signup" element={<TeacherSignUpPage />} />
                <Route path="/teacher/login" element={<TeacherLoginPage />} />
                <Route path="/teacher/class/:classId/student/:studentId" element={<StudentDetailPage />} />
                <Route path="/teacher/class/:classId" element={<ClassDetailPage />} />
                <Route path="/teacher/classes" element={<ClassListPage />} />
                <Route path="/" element={<EntryPage />} />
                <Route path="/student/MyPage" element={<MyPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/materials" element={<MaterialsPage />} />
                <Route path="/qna" element={<QuestionBoardPage />} />
                <Route path="/student/questions" element={<QuestionBoardPage />} />
        <Route path="/student/questions/my" element={<MyQuestionPage />} />
        <Route path="/student/questions/shared" element={<SharedQuestionPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
