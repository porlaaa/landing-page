import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">เรียนต่อจบชัวร์ Academy</h1>
      <p className="text-2xl mb-6">ทำงานประจำก็เรียนต่อได้ 🎓</p>
      <a
        href="https://forms.gle/yourformlink"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        ลงทะเบียนรับสิทธิ์ตอนนี้
      </a>
    </header>
  );
};

export default Header;
