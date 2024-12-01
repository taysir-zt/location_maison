import axios from "axios";

const API_URL = "http://localhost:9001/api/homes"; // L'URL de l'API

class HomeService {
  // Récupérer toutes les maisons
  getAllHomes() {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/listhome`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // Récupérer une maison par son ID
  getHomeById(id) {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // Récupérer les détails d'une maison par ID
  getHomeDetailsById(id) {
    const token = localStorage.getItem("token");
    return axios.get(`${API_URL}/details/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }



}

export default new HomeService();
