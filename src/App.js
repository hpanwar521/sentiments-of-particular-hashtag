
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import NavbarComponent from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
    <>
      <NavbarComponent/>
     
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
        </Routes>
      <Footer/>
    </>
    </Router>
  );
}

export default App;
