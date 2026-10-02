import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import DoctorsPage from '@/pages/Doctors';
import ServicesPage from '@/pages/Services';
import ContactPage from '@/pages/Contact';

export type Route = 'home' | 'about' | 'doctors' | 'services' | 'contact';

function parseHash(): Route {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  const valid: Route[] = ['home', 'about', 'doctors', 'services', 'contact'];
  if (valid.includes(hash as Route)) return hash as Route;
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((r: Route) => {
    window.location.hash = `/${r}`;
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'about':
        return <AboutPage />;
      case 'doctors':
        return <DoctorsPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar current={route} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
