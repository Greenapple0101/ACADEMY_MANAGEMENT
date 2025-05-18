import Header from "@/components/Header";
import StudentCard from "@/components/StudentCard";
import FeedbackCard from "@/components/FeedbackCard";
import QuestItem from "@/components/QuestItem";
import BottomNav from "@/components/BottomNav";

const MyPage = () => {
  return (
    <div className="relative min-h-screen pb-24 bg-gradient-to-b from-white to-green-100 px-4 py-6 space-y-4 text-sm">
      <Header />
      <StudentCard />
      <FeedbackCard />

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-gray-700">Learning Quests</h2>
        <QuestItem title="Memorize quadratic formula" />
        <QuestItem title="Review graph properties of functions" />
        <QuestItem title="Recap today’s concept" />
      </div>

      <BottomNav />
    </div>
  );
};

export default MyPage;
