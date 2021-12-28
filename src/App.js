
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import NavbarComponent from './Navbar/Navbar';
import Footer from './Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';
import SentimentsChart from './LandingPage/SentimentsChart';
import Tweets from './LandingPage/Tweets';

function App() {
  return (
    <Router>
    <>
      <NavbarComponent/>
     
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/sentiments/:hashtag" element={<SentimentsChart/>} />
            <Route exact path="/sentiments-tweets/:hashtag" element={<Tweets/>} />
            <Route exact path="*" element={<PageNotFound/>} />
            
        </Routes>
      <Footer/>
    </>
    </Router>
  );
}

export default App;
