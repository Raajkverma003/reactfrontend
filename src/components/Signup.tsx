// src/components/Signup.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

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
            await axios.post('http://localhost:3001/auth/register', {
                name:fullname,
                email,
                password,
            });
            // Redirect or show success message here
            alert('Signup successful!');
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>

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
                <div className="mb-3">
                    <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {passwordError && <span className="text-danger">{passwordError}</span>}
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <p className="mt-3 text-center">
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;