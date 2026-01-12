import React from "react";
import { useState } from "react";
import { login } from "../api/api";

export default function Login({ onLoggedIn, goRegister }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const res = await login(form.email, form.password);
    localStorage.setItem("token", res.data.token);
    onLoggedIn(res.data.token);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <form className="space-y-4" onSubmit={submit}>
          <input name="email" placeholder="Email" className="border p-3 w-full rounded" onChange={handle} />
          <input name="password" placeholder="Password" type="password" className="border p-3 w-full rounded" onChange={handle} />
          <button className="w-full bg-blue-600 text-white p-3 rounded">Login</button>
        </form>

        <p className="mt-3 text-sm">New user? <span className="text-blue-600 cursor-pointer" onClick={goRegister}>Register</span></p>
      </div>
    </div>
  );
}
