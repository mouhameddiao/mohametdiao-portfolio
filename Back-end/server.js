const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Modèle de Projet
const Project = require('./models/Project');

// Routes
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

app.post('/projects', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newProject = new Project({ title, description });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de l’ajout du projet' });
    }
});

app.put('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(id, { title, description }, { new: true });
        res.json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la modification du projet' });
    }
});

app.delete('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la suppression du projet' });
    }
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
