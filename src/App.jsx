import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FeaturesPage } from './pages/FeaturesPage';
import { PasswordGate } from './components/PasswordGate';

function App() {
  return (
    <Router>
      <PasswordGate>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </Layout>
      </PasswordGate>
    </Router>
  );
}

export default App;
