import React, { useEffect, useState } from "react";
import HomeService from "../Service/HomeService";
import Navbare from '../Common/Navbar';
import Footer from '../Common/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import './vue.css';

const HomeList = () => {
    const [homes, setHomes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Charger les données des maisons
        HomeService.getAllHomes()
            .then((response) => {
                console.log("Données reçues :", response.data);
                setHomes(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la requête :", error);
            });

        // Charger les favoris depuis le localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // Fonction pour ajouter/supprimer une maison des favoris
    const handleAddToFavorites = (homeId) => {
        let updatedFavorites;

        if (favorites.includes(homeId)) {
            // Supprimer des favoris
            updatedFavorites = favorites.filter((id) => id !== homeId);
        } else {
            // Ajouter aux favoris
            updatedFavorites = [...favorites, homeId];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    // Flèches personnalisées pour le carrousel
    const NextArrow = ({ onClick }) => (
        <div className="arrow next" onClick={onClick}>
            <i className="fa fa-arrow-right"></i>
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="arrow prev" onClick={onClick}>
            <i className="fa fa-arrow-left"></i>
        </div>
    );

    // Configuration du carrousel
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="home_list">
            <Navbare />
            <div className="container-homelist">
                <h1>Liste des maisons</h1>
                <div className="house-list">
                    {homes.map((home) => (
                        <div className="col-md-4" key={home.id}>
                            <div className={`card-homelist ${favorites.includes(home.id) ? "favorite" : ""}`}>
                                <div className="slider-container-res">
                                    {/* Slider avec images */}
                                    <Slider {...sliderSettings}>
                                        {home.images && home.images.length > 0 ? (
                                            home.images.map((image, index) => (
                                                <div key={index} className="image-slide-homelist">
                                                    <img
                                                        src={image}
                                                        alt={`Maison ${home.titre} - Image ${index}`}
                                                        className="card-img-top"
                                                    />
                                                </div>
                                            ))
                                        ) : (
                                            <div className="image-slide-homelist">
                                                <img
                                                    src="/placeholder-image.jpg"
                                                    alt="Image non disponible"
                                                    className="card-img-top"
                                                />
                                            </div>
                                        )}
                                    </Slider>
                                </div>
                                <div className="card-body-homelist">
                                    <h5 className="card-title-homelist">{home.titre}</h5>
                                    <p className="card-text-homelist">{home.description}</p>
                                    <p>
                                        <strong>Prix :</strong> {home.prixParNuit} TND / nuit
                                    </p>
                                    <p>
                                        <strong>Vue :</strong> {home.typeVue}
                                    </p>
                                    <div className="button-group d-flex justify-content-between">
                                    <button
                                        className="btn btn-primary gradient-brand-color"
                                        onClick={() => window.location.href = `/listhome/${home.id}`}
                                    >
                                        Voir les détails
                                    </button>
                                    <button
                                        className={`btn ${favorites.includes(home.id) ? "btn-danger" : "btn-secondary"} ml-2`}
                                        onClick={() => handleAddToFavorites(home.id)}
                                    >
                                        <i className={`fa ${favorites.includes(home.id) ? "fa-heart" : "fa-heart-o"}`}></i>
                                        {favorites.includes(home.id) ? " Delete Favorit" : " Add Favorit"}
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeList;
