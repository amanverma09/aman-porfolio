import React from 'react'

export default function ProjectCard({p, onDetails}){
  return (
    <div className="bg-white text-black rounded-lg overflow-hidden shadow">
      <img src={p.img} alt={p.title} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h4 className="font-semibold">{p.title}</h4>
        <p className="text-sm text-gray-700 mt-2">{p.short}</p>
        <div className="mt-3 flex gap-2 flex-wrap">{p.tech.map(t => <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{t}</span>)}</div>
        <div className="mt-3 flex gap-2">
          <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-2 bg-indigo-600 text-white rounded">Live</a>
          <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">GitHub</a>
          <button onClick={() => onDetails(p.id)} className="ml-auto text-sm text-gray-600">Details</button>
        </div>
      </div>
    </div>
  )
}
