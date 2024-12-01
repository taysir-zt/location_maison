import React from "react";
import "./Map.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Importer le hook useNavigate


const Map = () => {
    const navigate = useNavigate();  // Créer une instance du hook useNavigate

  // Fonction pour naviguer vers la carte
  const openMapPage = () => {
    navigate("/MapView");  // Redirige vers la route /map-view
  };

  
  return (
    
    <button className="map-button" onClick={openMapPage}>
      <span>Show map</span>
      <FaMapMarkerAlt className="map-icon" />
    </button>
 
  );
};

export default Map;
