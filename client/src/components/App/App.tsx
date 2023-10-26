import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import NetworkPacket from '../../pages/Menupages/Network';
import Attack from '../../pages/HomePage/Attack';
import Live from '../../pages/Menupages/Live';
import Perfmon from '../../pages/Menupages/Perfmon';
import './App.css';

function App(): JSX.Element {
    const customCursor = document.createElement('div');
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Attack />} />
            </Routes>
            <Routes>
                <Route path="/network" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/network" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/network" element={<NetworkPacket />} />
            </Routes>
            <Routes>
                <Route path="/realtime" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/realtime" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/realtime" element={<Live />} />
            </Routes>
            <Routes>
                <Route path="/perfmon" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/perfmon" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/perfmon" element={<Perfmon />} />
            </Routes>
        </Router>
    );
}

export default App;
