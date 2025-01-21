import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import First from './components/First';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/first" element={<First/>} />
            </Routes>
        </Router>
    );
};

export default App;
