import React from 'react'

export default function ProjectModal({project, onClose}){
  if(!project) return null
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white text-black rounded-lg max-w-3xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3">X</button>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2">{project.desc}</p>
        <div className="mt-4 flex gap-3">
          <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded">Live</a>
          <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">GitHub</a>
        </div>
      </div>
    </div>
  )
}
