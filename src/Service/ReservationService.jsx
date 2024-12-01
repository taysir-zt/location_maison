import axios from "axios";

const API_URL = "http://localhost:9001/api/reservations"; // URL de l'API

class ReservationService {
  // Récupérer les réservations par ID de maison
  getReservationsByHouse(houseId) {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/house/${houseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // Créer une réservation pour une maison
  createReservation(houseId, reservationData) {
    const token = localStorage.getItem("token"); // Récupérer le token si nécessaire
    return axios.post(`${API_URL}/${houseId}`, reservationData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ReservationService();
