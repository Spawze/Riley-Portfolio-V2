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
              path='/Riley-Portfolio-V2/'
              element={<AboutMe />}
            />
            <Route
              path='/Riley-Portfolio-V2/portfolio'
              element={<Portfolio />}
            />
            <Route
              path='/Riley-Portfolio-V2/contact'
              element={<Contact />}
            /><Route
              path='/Riley-Portfolio-V2/resume'
              element={<Resume />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
