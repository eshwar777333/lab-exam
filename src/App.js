import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import './App.css'; // Import the combined CSS file

function PrivateRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    const [isAuthenticated, setAuth] = React.useState(false);

    return (
        <Router>
            <Header isAuthenticated={isAuthenticated} setAuth={setAuth} />
            <Routes>
                <Route
                    path="/home"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login setAuth={setAuth} />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;