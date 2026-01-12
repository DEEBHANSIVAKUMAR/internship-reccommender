import React from "react";
export default function InternshipCard({ item }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">{item.title}</h2>
      <p className="text-gray-600">{item.company}</p>
      <p className="text-gray-500">{item.location}</p>

      <p className="mt-2">{item.description}</p>

      <div className="mt-3 flex gap-2 flex-wrap">
        {item.skills_required.split(",").map((skill, i) => (
          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
            {skill.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
