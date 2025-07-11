"use client";

import React, { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;

        if (!apiUrl) {
          throw new Error("NEXT_PUBLIC_PAYLOAD_API_URL is not defined");
        }

        const res = await fetch(`${apiUrl}/api/projects`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(
            `Failed to fetch projects: ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        setProjects(data.docs || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      {loading && <p>Loading projects...</p>}

      {error && (
        <p className="text-red-600">
          Error loading projects: {error}
        </p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p>No projects found.</p>
      )}

      <ul className="space-y-4">
        {projects.map((project: any) => (
          <li key={project.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
