import React from 'react';
import { useNavigate } from 'react-router-dom';

const First = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem('token');
        // Redirect to Sign In page
        navigate('/signin');
    };

    return (
        <div className="container">
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </div>
            <h1 style={{ textAlign: 'center' }}>Welcome to the application - EasyGenerator</h1>
            <br />
            <h2 style={{ textAlign: 'left' }}>This page is created to demonstrate the Login and Register feature by using NestJS, React, MongoDB.</h2>
            <br />

            <h2 style={{ textAlign: 'center' }}>About Me</h2>
        
            <div className="card" style={{ width: '20rem', textAlign: 'center' }}>
                <img src="Raj_Pic.jpg" className="card-img-top" alt="Pic not found" />
                <div className="card-body">
                    <h5 className="card-title">Raj Kumar</h5>
                    <p className="card-text">
                    Full Stack Developer<br />
                    raajkverma003@gmail.com<br />
                    +919999855268</p>
                    <a href="mailto:raajkverma003@gmail.com" className="btn btn-primary">Contact</a>
                </div>
            </div>
      </div>
    );
};

export default First;