import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";

const EditProject = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const response = await api.get(`/projects/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/projects/${id}`, { title, description });
    navigate("/");
  };

  return (
    <div>
      <h1>Modifier un Projet</h1>
      <form onSubmit={handleSubmit}>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default EditProject;
