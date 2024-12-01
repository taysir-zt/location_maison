import { useState } from "react";
import UserService from "../Service/UserService";
import { useNavigate } from "react-router-dom";
import './Register.css';

function Registre() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        city: '',
        phoneNumber: '',
        birthDate: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    async function register(event) {
        event.preventDefault();

        try {
            // Call the register method from UserService

            await UserService.register(formData); // Appel simple à la méthode du service
            alert('User registered successfully');

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                role: '',
                city: '',
                phoneNumber: '',
                birthDate: '',
            });
            navigate('/login');

        } catch (error) {
            console.error('Error registering user:', error.message); // Affichage des erreurs
            alert(error.message || 'An error occurred while registering user');
        }
    }

    return (
        <section className="registre-vh-100" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="registre-mask d-flex align-items-center h-100 registre-gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={register}>
                                        <div className="form-outline mb-4">
                                            <label className="form-label">Your Name</label>
                                            <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter name"
                                                value={formData.name}
                                                onChange={handleInputChange} required/>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email">Your Email</label>
                                            <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter email"
                                                value={formData.email} 
                                                onChange={handleInputChange} required />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="adresse">Role </label>
                                            <input type="text" name="role" className="form-control form-control-lg" placeholder="Enter Role"
                                                value={formData.role}
                                                onChange={handleInputChange} required/>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="telephone">Your City</label>
                                            <input type="text" name="city" className="form-control form-control-lg" placeholder="Enter City"
                                                value={formData.city} 
                                                onChange={handleInputChange} required/>
                                        </div>

                                            {/* Numéro de téléphone */}
                                        <div className="form-outline mb-4">
                                        <label className="form-label">Phone Number</label>
                                        <input type="tel" name="phoneNumber" className="form-control form-control-lg" placeholder="Enter phone number"
                                         value={formData.phoneNumber} 
                                         onChange={handleInputChange} required />
                                        </div>

                                        {/* Date de naissance */}
                                        <div className="form-outline mb-4">
                                        <label className="form-label">Birth Date</label>
                                        <input type="date" name="birthDate" className="form-control form-control-lg"
                                        value={formData.birthDate} 
                                        onChange={handleInputChange} required />
                                        </div>



                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Your Password</label>
                                            <input type="password" name="password" className="form-control form-control-lg" placeholder="Enter password"
                                                value={formData.password}
                                                onChange={handleInputChange} required/>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success btn-block btn-lg registre-gradient-custom-4 text-body">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registre;
