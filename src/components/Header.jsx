import React from "react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 text-white py-24 text-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow">
          เรียนต่อจบชัวร์ <span className="text-yellow-300">Academy</span>
        </h1>
        <p className="text-2xl mb-8 text-blue-100">
          ทำงานประจำก็เรียนต่อได้ 🎓 
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSevj_mXGsGO4F0A84zAMGZ5RcJez1tQ0BqTSE_GnNuk6OcVGQ/alreadyresponded"
          className="inline-block bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-400 hover:shadow-xl transition transform hover:-translate-y-1"
        >
           ลงทะเบียนรับสิทธิ์ตอนนี้
        </a>
      </div>
    </header>
  );
};

export default Header;
