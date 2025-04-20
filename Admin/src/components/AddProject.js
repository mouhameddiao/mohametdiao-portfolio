import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/projects", { title, description });
    navigate("/");
  };

  return (
    <div>
      <h1>Ajouter un Projet</h1>
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
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddProject;
