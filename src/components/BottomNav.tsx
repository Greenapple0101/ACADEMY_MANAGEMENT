// src/components/BottomNav.tsx

const BottomNav = () => {
  return (
    <div className="bg-white/70 backdrop-blur-md fixed bottom-0 left-0 right-0 p-3 flex justify-around border-t border-gray-200 text-sm text-gray-700">
      <button className="flex flex-col items-center">
        <img src="/images/gallery-icon.png" className="w-5 h-5 mb-1" />
        Gallery
      </button>
      <button className="flex flex-col items-center">
        <img src="/images/resources-icon.png" className="w-5 h-5 mb-1" />
        Resources
      </button>
      <button className="flex flex-col items-center">
        <img src="/images/qa-icon.png" className="w-5 h-5 mb-1" />
        Q&A
      </button>
    </div>
  );
};

export default BottomNav;
