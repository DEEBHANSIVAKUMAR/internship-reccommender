import React from "react";
import { useState } from "react";
import { recommend } from "../api/api";
import SearchForm from "../components/SearchForm";
import InternshipCard from "../components/InternshipCard";

export default function Dashboard({ token, logout }) {
  const [results, setResults] = useState([]);

  const search = async (location, skill) => {
    const res = await recommend(token, location, skill);
    setResults(res.data.results);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={logout}>Logout</button>
      </div>

      <SearchForm onSearch={search} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {results.map((item, idx) => <InternshipCard key={idx} item={item} />)}
      </div>
    </div>
  );
}
