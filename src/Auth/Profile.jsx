import React, { useState, useEffect } from 'react';
import UserService from '../Service/UserService';
import './Profile.css';

function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.ourUsers);
    } catch (error) {
      console.error('Error fetching profile information:', error);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom-profile text-center text-white"
                  style={{
                    borderTopLeftRadius: '.5rem',
                    borderBottomLeftRadius: '.5rem',
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: '80px' }}
                  />
                  <h5>{profileInfo.name}</h5>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{profileInfo.email || 'Non disponible'}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>City</h6>
                        <p className="text-muted">{profileInfo.city || 'Non disponible'}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone Number</h6>
                        <p className="text-muted">{profileInfo.phoneNumber || 'Non disponible'}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>BirthDate</h6>
                        <p className="text-muted">{profileInfo.birthDate || 'Non disponible'}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
