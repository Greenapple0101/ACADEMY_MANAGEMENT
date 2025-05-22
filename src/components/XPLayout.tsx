// src/components/XPLayout.tsx
import React from "react";

const XPLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
    style={{ backgroundImage: 'url("/xp-bg.jpg")' }}
  >
    {children}
    <div className="fixed bottom-0 left-0 right-0 h-6 bg-blue-600 text-white text-xs flex items-center justify-between px-4">
      <span>Academy XP Edition</span>
      <span>🕒 10:24 AM</span>
    </div>
  </div>
);

export default XPLayout;
