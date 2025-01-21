// src/components/Signin.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Validate password before submitting
        if (!validatePassword(password)) {
            
            setPasswordError('Password must be at least 8 characters long and include at least one letter, one number, and one special character.');
            return;
        }

        setPasswordError(''); 

        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            // Redirect or show success message here
            alert('Signin successful!');
            navigate('/first');
        } catch (err) {
            setError('Signin failed. Please check your credentials.');
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {passwordError && <span className="text-danger">{passwordError}</span>}
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
                <p className="mt-3 text-center">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;