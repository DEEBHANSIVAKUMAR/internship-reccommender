import React from "react";
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");

  return (
    <form className="bg-white p-4 rounded shadow flex gap-4 mt-4"
      onSubmit={(e) => { e.preventDefault(); onSearch(location, skill); }}>

      <input placeholder="Location" className="border p-3 rounded flex-1" onChange={(e) => setLocation(e.target.value)} />
      <input placeholder="Skill" className="border p-3 rounded flex-1" onChange={(e) => setSkill(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>

    </form>
  );
}
