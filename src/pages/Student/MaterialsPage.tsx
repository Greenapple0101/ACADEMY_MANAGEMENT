// src/pages/Student/MaterialsPage.tsx

const dummyFiles = [
  { title: "이차방정식 공식 정리", type: "pdf", url: "#" },
  { title: "도형 단원 요약", type: "pdf", url: "#" },
  { title: "함수 개념 정리", type: "pdf", url: "#" },
];

const MaterialsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 p-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">📂 자료실</h1>
      <ul className="space-y-2">
        {dummyFiles.map((file, index) => (
          <li
            key={index}
            className="bg-white/70 backdrop-blur-md p-3 rounded-lg shadow text-sm flex justify-between items-center"
          >
            <span>{file.title}</span>
            <button className="text-blue-500 text-xs underline">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialsPage;
