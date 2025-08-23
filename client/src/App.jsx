import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './assets/Header/Header.jsx';
import Footer from './assets/Footer/Footer.jsx';
import Loading from './assets/Loading/Loading.jsx'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate a network request or some async action
    setTimeout(() => {
      setLoading(false); // Set loading to false once data is fetched
    }, 500); // Simulating 0.5 seconds loading time
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  //The above is a bit of a meme and should probably be removed in the future.

  return (
    <>
      {loading ? (
        <progress className="LoadingPosition">
          <Loading/>
        </progress>
      ) : (
        <div>
          <header className="HeaderPosition">
            <Header />
          </header>

          <main className="OutletPosition">
            <Outlet />
          </main>

          <footer className="FooterPosition">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
