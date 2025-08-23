import React from "react";

const faqs = [
  { q: "ค่าเทอมเท่าไหร่?", a: "สามารถติดต่อเพื่อสอบถามโปรโมชั่นล่าสุด" },
  { q: "ใช้เอกสารอะไรบ้าง?", a: "บัตรประชาชน, วุฒิการศึกษา, รูปถ่าย" },
  { q: "เริ่มเรียนเมื่อไหร่?", a: "เริ่มเรียนได้ทุกเทอมตามตารางเปิดรับสมัคร" },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">คำถามที่พบบ่อย</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-6 text-left">
            <h3 className="font-semibold">{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
