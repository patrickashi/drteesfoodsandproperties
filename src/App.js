import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Homep from './pages/Homep';
import '@fontsource/poppins'; 
import '@fontsource/poppins/300.css'; // Light
import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/500.css'; // Medium
import '@fontsource/poppins/700.css';
import Aboutusp from './pages/Aboutusp';





function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWithLocation />
        <div className='content'>
          <Routes>
          <Route index path='/' element={<Homep />} />
          <Route path='/Aboutusp' element={<Aboutusp />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const NavbarWithLocation = () => {
  const location = useLocation();
  return <Navbar location={location} />;
};

export default App;
