import React from 'react'

async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projects', {
    headers: {
      'Content-Type': 'application/json',
    },
    // If access control is set up, you may need an auth token here.
    next: { revalidate: 60 }, // ISR (optional)
  })
  return res.json()
}

export default async function ProjectsPage() {
  const { docs: projects } = await getProjects()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project: any) => (
          <li key={project.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            {project.demoUrl && (
              <a href={project.demoUrl} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
