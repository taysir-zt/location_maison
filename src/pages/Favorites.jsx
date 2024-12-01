import React, { useEffect, useState } from "react";
import Navbare from '../Common/Navbar';
import Footer from '../Common/Footer';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Charger les favoris depuis le localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="favorites-list">
            <Navbare />
            <div className="container">
                <h1>Mes Favoris</h1>
                {favorites.length === 0 ? (
                    <p>Aucun favori ajouté pour le moment.</p>
                ) : (
                    <div className="row">
                        {favorites.map((homeId) => (
                            <div className="col-md-4" key={homeId}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Maison ID : {homeId}</h5>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                const updatedFavorites = favorites.filter((id) => id !== homeId);
                                                setFavorites(updatedFavorites);
                                                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                                            }}
                                        >
                                            Supprimer des Favoris
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Favorites;
