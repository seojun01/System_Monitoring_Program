import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Logs from './pages/Logs';
import Details from './pages/Details';
import Cpu from './pages/Cpu';

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
                <Route path="/" element={<Logs />} />
            </Routes>
            <Routes>
                <Route path="/details" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/details" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/details" element={<Details />} />
            </Routes>
            <Routes>
                <Route path="/cpu" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/cpu" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/cpu" element={<Cpu />} />
            </Routes>
        </Router>
    );
}

export default App;
