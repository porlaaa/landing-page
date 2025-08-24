import React, { useState } from "react";

const LeadForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    line: "",
    level: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("ส่งข้อมูลเรียบร้อย!");
  };

  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-8">ลงทะเบียนเรียนต่อ</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="ชื่อ-นามสกุล"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="เบอร์โทร"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="text"
          name="line"
          placeholder="LINE ID"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
        />
        <select
          name="level"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        >
          <option value="">ระดับการศึกษาที่สนใจ</option>
          <option value="ปวช.">ปวช.</option>
          <option value="ปวส.">ปวส.</option>
          <option value="ป.ตรี">ป.ตรี</option>
          <option value="ป.โท">ป.โท</option>
          <option value="ป.เอก">ป.เอก</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ส่งข้อมูล
        </button>
      </form>
    </section>
  );
};

export default LeadForm;
