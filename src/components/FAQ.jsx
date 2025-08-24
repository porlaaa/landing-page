import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "ค่าเทอมเท่าไหร่?", a:  "สามารถติดต่อเพื่อสอบถามโปรโมชั่นล่าสุด" },
  { q: "ใช้เอกสารอะไรบ้าง?", a:  "บัตรประชาชน, วุฒิการศึกษา, รูปถ่าย" },
  { q: "เริ่มเรียนเมื่อไหร่?", a:  "เริ่มเรียนได้ทุกเทอมตามตารางเปิดรับสมัคร" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
         คำถามที่พบบ่อย
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 flex text-gray-600"
                >
                  <p className="pt-2 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
