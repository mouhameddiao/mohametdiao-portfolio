import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await api.get("/projects");
    setProjects(response.data);
  };

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div>
      <h1>Gestion des Projets</h1>
      <Link to="/add">Ajouter un Projet</Link>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>
                <Link to={`/edit/${project._id}`}>Modifier</Link>
                <button onClick={() => deleteProject(project._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
