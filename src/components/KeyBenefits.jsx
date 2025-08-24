import React from "react";
import { CheckCircle, Star, Award, ThumbsUp } from "lucide-react";

const benefits = [
  { text: "เรียนเสาร์–อาทิตย์ ไม่กระทบงาน", icon: <CheckCircle className="w-8 h-8 text-green-500" /> },
  { text: "ผ่อนค่าเทอมได้จริง", icon: <Star className="w-8 h-8 text-yellow-500" /> },
  { text: "ป.ตรี จบ ปวส. แล้ว เรียนแค่ 2 ปี", icon: <Award className="w-8 h-8 text-blue-500" /> },
  { text: "วุฒิถูกต้อง กระทรวงศึกษารับรอง", icon: <ThumbsUp className="w-8 h-8 text-purple-500" /> },
];

const KeyBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        จุดขายของเรา
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <p className="text-lg font-semibold text-gray-700">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenefits;
