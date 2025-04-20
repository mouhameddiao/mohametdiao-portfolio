import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInterface from "./components/UserInterface"; // Votre interface utilisateur existante
import AdminDashboard from "./components/admin/AdminDashboard"; // Nouvelle interface admin

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour l'interface utilisateur */}
        <Route path="/" element={<UserInterface />} />

        {/* Routes pour l'interface admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
