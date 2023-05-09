import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path='/'
              element={<AboutMe />}
            />
            <Route
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            /><Route
              path='/resume'
              element={<Resume />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
