import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar'; // Import du calendrier
import 'react-calendar/dist/Calendar.css'; // Styles CSS du calendrier
import HomeService from '../Service/HomeService';
import ReservationService from '../Service/ReservationService'; // Import du service de réservation
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbare from '../Common/Navbar';
import Footer from '../Common/Footer';
import './HomeDetail.css';

const HomeDetails = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [homeDetails, setHomeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null); // État pour les dates sélectionnées
  const [reservedDates, setReservedDates] = useState([]); // Dates réservées pour la maison

  useEffect(() => {
    // Appeler le service pour récupérer les détails
    HomeService.getHomeDetailsById(id)
      .then((response) => {
        setHomeDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des détails :", err);
        setError(err.message);
        setLoading(false);
      });

    // Récupérer les dates réservées pour cette maison
    ReservationService.getReservationsByHouse(id) // Appel au service Reservation
      .then((response) => {
        setReservedDates(response);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des dates réservées :", err);
      });
  }, [id]);

  if (loading) return <p>Chargement des détails...</p>;
  if (error) return <p>Erreur : {error}</p>;

  // Fonction pour vérifier si les dates sélectionnées sont déjà réservées
  const isDateReserved = (dates) => {
    return reservedDates.some((reservedDate) => {
      const startDate = new Date(reservedDate.startDate);
      const endDate = new Date(reservedDate.endDate);
      return (
        (dates[0] >= startDate && dates[0] <= endDate) || 
        (dates[1] >= startDate && dates[1] <= endDate) ||
        (dates[0] <= startDate && dates[1] >= endDate)
      );
    });
  };

  // Gestion de la sélection de dates
  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    console.log("Dates sélectionnées :", dates);
  };

  const handleReservation = () => {
    if (!selectedDates || selectedDates.length !== 2) {
      alert("Veuillez sélectionner une plage de dates.");
      return;
    }

    if (isDateReserved(selectedDates)) {
      alert("Les dates sélectionnées sont déjà réservées. Veuillez choisir d'autres dates.");
      return;
    }

    // Préparer les données de réservation
    const reservationData = {
      startDate: selectedDates[0].toISOString(),
      endDate: selectedDates[1].toISOString(),
      userId: 1, // Remplacer par l'ID de l'utilisateur connecté
    };

    // Appeler le service de réservation pour créer la réservation
    ReservationService.createReservation(id, reservationData)  // Appel du service de réservation
      .then((response) => {
        alert("Réservation réussie !");
      })
      .catch((err) => {
        console.error("Erreur lors de la réservation :", err);
        alert("Erreur lors de la réservation. Veuillez réessayer.");
      });
  };

  return (
    <div>
      <Navbare />
      <div className="home-details-container">
        <div className="home-header">
          <h1>{homeDetails.titre}</h1>
          <div className="home-info">
            <span>
              <i className="fas fa-user"></i> {homeDetails.capacite} Personnes
            </span>
            <span>
              <i className="fas fa-tag"></i> Prix : à partir de {homeDetails.prixParNuit} TND
            </span>
          </div>
        </div>

        <div className="home-content">
          <div className="home-description">
            <p>{homeDetails.descriptionDetaille}</p>
          </div>

          <div className="home-gallery">
            {homeDetails.images && homeDetails.images.length > 0 ? (
              homeDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="gallery-image"
                />
              ))
            ) : (
              <div>Aucune image disponible.</div>
            )}
          </div>
        </div>

        <div className="equipements-et-services">
          <div className="equipements">
            <h2>Équipements de la maison</h2>
            <ul>
              {homeDetails.equipements && homeDetails.equipements.length > 0 ? (
                homeDetails.equipements.map((equipement, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i> {equipement}
                  </li>
                ))
              ) : (
                <li>Aucun équipement disponible.</li>
              )}
            </ul>
          </div>

          <div className="services">
            <h2>Services inclus :</h2>
            <p>{homeDetails.servicesInclus}</p>
          </div>

          <div className="home-calendar">
            <h2>Réservez vos dates</h2>
            <Calendar
              onChange={handleDateChange}
              selectRange={true}
              value={selectedDates}
            />
            {selectedDates && (
              <div>
                <p>
                  <strong>Dates sélectionnées :</strong>
                  <br />
                  Du {selectedDates[0]?.toLocaleDateString()} au {selectedDates[1]?.toLocaleDateString()}
                </p>
              </div>
            )}
            <button
              className="btn-reserver"
              onClick={handleReservation}
            >
              Réserver
            </button>
          </div>
        </div>

        <div className="home-map">
          <h2>Coordonnées GPS - position Google Maps {homeDetails.titre}</h2>
          <iframe
            src={homeDetails.map}
            title="Carte de localisation"
            className="map-iframe"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default HomeDetails;
