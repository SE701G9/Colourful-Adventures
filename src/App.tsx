import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import NavigationPage from './pages/NavigationPage';
import Module1Page from './pages/Module1Page';
import Module2Page from './pages/Module2Page';
import Module3Page from './pages/Module3Page';
import GamePage from './pages/GamePage';
import FindPrimary from './components/activities/FindPrimary';
import TeachPrimary from './components/activities/TeachPrimary';
import LavaColourMix from './components/activities/LavaColourMix';
import GrassColourMix from './components/activities/GrassColourMix';
import LakeColourMix from './components/activities/LakeColourMix';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="modules">
          <Route index element={<NavigationPage />} />
          <Route path="1" element={<Module1Page />} />
          <Route path="2" element={<Module2Page />} />
          <Route path="3" element={<Module3Page />} />
        </Route>

        <Route path="activities">
          <Route path="find-primary" element={<FindPrimary />} />
          <Route path="teach-primary" element={<TeachPrimary />} />
          <Route path="colour-mix-lava" element={<LavaColourMix />} />
          <Route path="colour-mix-grass" element={<GrassColourMix />} />
          <Route path="colour-mix-lake" element={<LakeColourMix />} />
        </Route>

        <Route path="game">
          <Route index element={<GamePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
