// src/components/QuestItem.tsx

interface QuestItemProps {
  title: string;
}

const QuestItem = ({ title }: QuestItemProps) => {
  return (
    <div className="bg-white/60 backdrop-blur p-3 rounded-md shadow text-sm text-gray-800">
      • {title}
    </div>
  );
};

export default QuestItem;
