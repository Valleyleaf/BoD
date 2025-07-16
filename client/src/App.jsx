import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './assets/Header/Header.jsx';
import Footer from './assets/Footer/Footer.jsx';
import Navbar from './assets/Navbar/Navbar.jsx';
import Loading from './assets/Loading/Loading.jsx'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async action
    setTimeout(() => {
      setLoading(false); // Set loading to false once data is fetched
    }, 500); // Simulating 0.5 seconds loading time
  }, []);
  //The above is a bit of a meme and should probably be removed in the future.

  return (
    <>
      {loading ? (
        <div className="LoadingPosition">
          <Loading/>
        </div>
      ) : (
        <div>
          <div className="HeaderPosition">
            <Header />
          </div>

          <div className="NavbarPosition">
            <Navbar />
          </div>

          <div className="OutletPosition">
            <Outlet />
          </div>

          <div className="FooterPosition">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
