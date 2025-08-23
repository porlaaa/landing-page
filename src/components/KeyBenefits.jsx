import React from "react";

const benefits = [
  "เรียนเสาร์–อาทิตย์ ไม่กระทบงาน",
  "ผ่อนค่าเทอมได้จริง",
  "ป.ตรี จบ ปวส. แล้ว เรียนแค่ 2 ปี",
  "วุฒิถูกต้อง กระทรวงศึกษารับรอง",
];

const KeyBenefits = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">จุดขายของเรา</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            {benefit}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenefits;
