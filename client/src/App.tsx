import React, { useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
    const callApi = async () => {
        axios.get('/api').then((res) => {
            console.log('API Loaded');
        });
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div className="App">
            <h1>API Testing</h1>
        </div>
    );
}

export default App;
