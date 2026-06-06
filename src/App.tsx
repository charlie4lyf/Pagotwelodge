import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Amenities from './components/Amenities/Amenities';
import Rooms from './components/Rooms/Rooms';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <a href="#home" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <Hero />
        <Amenities />
        <Rooms />
        <Events />
        <Gallery />
        <Reviews />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;