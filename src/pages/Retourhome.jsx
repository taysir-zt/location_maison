import React from "react";
import { useNavigate } from "react-router-dom";  // Importation de useNavigate
import "./Retourhome.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Retourhome = () => {
  const navigate = useNavigate();  // Créer un hook de navigation

  const goToHome = () => {
    navigate("/");  // Naviguer vers la page /home
  };

  return (
    <button className="map-button" onClick={goToHome}>
      <span>Back Home</span>
      <FaMapMarkerAlt className="map-icon" />
    </button>
  );
};

export default Retourhome;
