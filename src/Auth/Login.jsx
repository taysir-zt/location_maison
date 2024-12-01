import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';
import './Login.css'; 
import logo from '../assets/logo.png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')
    const navigate = useNavigate();


    async function handleLogin(event) {
        event.preventDefault();


        try {
            const userData = await UserService.login(email, password)
            console.log(userData)
            if (userData.token) {
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                navigate('/')
            }else{
                setError(userData.message)
            }
            
        } catch (error) {
            console.log(error)
            setError(error.message)
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    }

    // Redirection vers la page d'inscription
    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <section className="login-h-100 login-gradient-form" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 login-h-100">
                <div className="row d-flex justify-content-center align-items-center login-h-100">
                    <div className="col-xl-10">
                        <div className="card login-rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body login-p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img src={logo} alt="logo" style={{ width: '200px' }} />
                                            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                        </div>
                                        <form onSubmit={handleLogin}>
                                            <p>Please log in to your account</p>
                                            {error && <p className="error-message">{error}</p>}
                                            <div className="login-form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="loginForm2Example11"
                                                    className="form-control"
                                                    placeholder="Enter your mail"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="login-form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="loginForm2Example22"
                                                    className="form-control"
                                                    placeholder="Mot de passe"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="text-center pt-1 mb-2">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block fa-lg login-gradient-custom-2 mb-3 btn-login-large">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="text-center mb-5">

                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline btn-login-lam"
                                                    onClick={handleRegisterClick}
                                                >
                                                    Create New
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center login-gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">“Discover the charm of Tunisia – start your stay with us.”</p>
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

export default Login;
