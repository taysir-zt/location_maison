import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import L from 'leaflet';
import Retourhome from './Retourhome';


// Configuration des icônes des marqueurs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const cities = [
    { name: 'Tunis', lat: 36.8065, lng: 10.1815, price: '136 DTN' },
    { name: 'Hammamet', lat: 36.4058, lng: 10.5600, price: '50 DTN' },
    { name: 'Sousse', lat: 35.8256, lng: 10.6411, price: '86 DTN' },
    { name: 'Monastir', lat: 35.7770, lng: 10.8261, price: '74 DTN' },
    { name: 'Djerba', lat: 33.8076, lng: 10.8530, price: '129 DTN' },
  ];

const MapView = () => {
  
  return (
    <div className="map-view">
      <MapContainer
        center={[34.0, 9.0]} /* Coordonnées pour centrer la carte sur la Tunisie */
        zoom={6} /* Niveau de zoom pour voir toute la Tunisie */
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
            <Marker key={index} position={[city.lat, city.lng]}>
                <Popup>
                    <strong>{city.name}</strong><br/>
                    Prix moyen : {city.price}
                </Popup>
            </Marker>
        ))}
      </MapContainer>
      <Retourhome/>
    </div>
    
  );
};

export default MapView;
