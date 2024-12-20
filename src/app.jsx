// app.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './footer/Footer.jsx';
import ServicesPage from "./Pages/ServicePage.jsx";
import ModelsPage from "./Pages/ModelsPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import NewsPage from "./Pages/NewsPage.jsx";
import AccountPage from './Pages/AccountPage';
import SettingsPage from './Pages/SettingsPage';
import HomePage from "./Pages/HomePages.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
