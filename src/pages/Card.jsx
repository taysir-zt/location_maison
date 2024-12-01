import React from 'react';
import foret from '../assets/foret.jpg';
import desert from '../assets/desert.jpg';
import mer from '../assets/mer.jpg';
import './Card.css';

function Card() {
  return (
    <div className="row-card-card">
      <div className="col-card-card">
        <a href='/forest' className="card-link-card">
        <div className="card-card">
          <img src={foret} className="card-img-top-card" alt="Forêt luxuriante" />
          <div className="card-body-card">
            <h5 className="card-title-card">Forest</h5>
            <p className="card-text-card">Discover the beauty of nature in a lush forest, ideal for a peaceful retreat.
            </p>
          </div>
        </div>
        </a>
      </div>
      <div className="col-card-card">
        <a href='/desert' className="card-link-card">
        <div className="card-card">
          <img src={desert} className="card-img-top-card" alt="Désert" />
          <div className="card-body-card">
            <h5 className="card-title-card">Desert</h5>
            <p className="card-text-card">
              Immerse yourself in the immensity of the Tunisian desert for a unique and memorable experience. 
            </p>
          </div>
        </div>
        </a>
      </div>
      <div className="col-card-card">
      <a href='/sea' className="card-link-card">
      <div className="card-card">
          <img src={mer} className="card-img-top-card" alt="Plage méditerranéenne" />
          <div className="card-body-card">
            <h5 className="card-title-card">Sea</h5>
            <p className="card-text-card">
            Enjoy the heavenly beaches and turquoise waters of the Tunisian coast.            </p>
          </div>
        </div>
      </a>
      </div>
    </div>
  );
}

export default Card;
