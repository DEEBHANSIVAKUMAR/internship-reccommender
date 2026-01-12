import React from "react";
import { useState } from "react";
import { registerUser } from "../api/api";

export default function Register({ goLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await registerUser(form.name, form.email, form.password);
    alert("Registered successfully!");
    goLogin();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>

        <form className="space-y-4" onSubmit={submit}>
          <input name="name" placeholder="Full Name" className="border p-3 w-full rounded" onChange={handle} />
          <input name="email" placeholder="Email" className="border p-3 w-full rounded" onChange={handle} />
          <input name="password" placeholder="Password" type="password" className="border p-3 w-full rounded" onChange={handle} />
          <button className="w-full bg-green-600 text-white p-3 rounded">Register</button>
        </form>

        <p className="mt-3 text-sm">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={goLogin}>Login</span></p>
      </div>
    </div>
  );
}
