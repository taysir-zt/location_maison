import React, { useEffect, useState } from "react";
import HomeService from "../Service/HomeService";
import Navbare from '../Common/Navbar';
import Footer from '../Common/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import './vue.css';

const SeaPage = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    // Appel à la méthode getHomeByVue pour récupérer les maisons avec vue sur la mer
    HomeService.getHomeByVue("mer")
      .then((response) => {
        console.log("Données reçues :", response.data); // Debugging
        setHomes(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  }, []);

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
    <div>
      <Navbare />
      <div className="container-homelist">
        <h1>Houses by the Sea</h1>
        <div className="house-list">
          {homes.map((home) => (
            <div className="col-md-4" key={home.id}>
              <div className="card-homelist">
                <div className="slider-container-res">
                  {/* Carrousel pour afficher les images */}
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
                  <button
                    className="btn btn-primary gradient-brand-color"
                    onClick={() => window.location.href = `/listhome/${home.id}`}
                  >
                    Voir les détails
                  </button>
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

export default SeaPage;
