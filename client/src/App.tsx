import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Packet from './pages/Menupages/Packet';
import Live from './pages/Menupages/Live';
import System_Info from './pages/Menupages/System_Info';
import SignUpForm from './pages/Loginpages/SignUpForm';
import LoginForm from './pages/Loginpages/LoginForm';
import './App.css';

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Packet />} />
            </Routes>
            <Routes>
                <Route path="/live" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/live" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/live" element={<Live />} />
            </Routes>
            <Routes>
                <Route path="/system_info" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/system_info" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/system_info" element={<System_Info />} />
            </Routes>
            <Routes>
                <Route path="/signup" element={<SignUpForm />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default App;
