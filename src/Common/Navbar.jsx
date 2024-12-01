import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Navbar.css";
import logosansback from "../assets/logosansback.png";
import avatar from "../assets/avatar.png";

function Navbare() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion
    const [userAvatar, setUserAvatar] = useState(null); // URL de l'avatar utilisateur
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token"); // Vérifiez si un token existe dans localStorage
        if (token) {
            try {
                const decodedToken = jwtDecode(token);                console.log("Token décodé :", decodedToken); // Debugging
                setIsLoggedIn(true); // Marquez l'utilisateur comme connecté
                setUserAvatar(
                    decodedToken.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                ); // Utilisez l'avatar du token ou une image par défaut
            } catch (error) {
                console.error("Erreur lors du décodage du token :", error);
                setIsLoggedIn(false);
                setUserAvatar(null); // Réinitialisez si une erreur survient
            }
        } else {
            setIsLoggedIn(false); // Pas de token, donc pas connecté
            setUserAvatar(null);
        }
    }, []);

    const handleLogout = () => {
        // Déconnexion : supprimez le token et réinitialisez les états
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUserAvatar(null);
        alert("Déconnecté avec succès !");
        navigate("/login"); // Redirection vers la page login
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-navbar">
            <Container>
                {/* Logo */}
                <img src={logosansback} alt="logo" className="logonav" />
                <Navbar.Brand href="/" className="logo-text">
                    Lotus
                </Navbar.Brand>

                {/* Bouton pour le menu responsive */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Menu déroulant */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="aya">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="aya">
                            About
                        </Nav.Link>
                        <Nav.Link href="#contact" className="aya">
                            Contact
                        </Nav.Link >
                        <Nav.Link  href="/favorites" className="aya">
                            Favorit
                        </Nav.Link>

                        {/* Dropdown Avatar */}
                        <NavDropdown
                            align="end"
                            title={
                                <img
                                    src={userAvatar || avatar}
                                    className="rounded-circle"
                                    height="30"
                                    alt="User Avatar"
                                />
                            }
                            id="avatar-dropdown"
                        >
                            {isLoggedIn ? (
                                <>
                                    <NavDropdown.Item onClick={() => navigate("/profile")}>
                                        My Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </>
                            ) : (
                                <>
                                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                </>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbare;
