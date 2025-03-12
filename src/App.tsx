import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/NavBar';
import Footer from './components/Home/Footer';
import { Home } from './pages/Home';
import PLP from './pages/PLP';
import Filter from './components/filter';
import Menu from './components/Menu/Menu';
import PDP from './pages/PDP';

function App() {
  return (
    <>
      <Navbar />
      <Router>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<PLP />} />
          {/* <Route path="/" element={<Filter />} /> */}
          {/* <Route path="/" element={<Menu />} /> */}
          {/* <Route path="/" element={<PDP />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
