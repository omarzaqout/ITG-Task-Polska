import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/NavBar';
import Footer from './components/Home/Footer';
import PLP from './pages/PLP';
import Menu from './components/Menu/Menu';
import PDP from './pages/PDP';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          {/* <Route path="/PLP" element={<PLP />} /> */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Menu />} /> */}
          <Route path="/" element={<PDP />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;