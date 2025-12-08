import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Franchise from './pages/Franchise';
import FranchiseInfo from './pages/FranchiseInfo';
import ScrollToTop from './components/ScrollToTop';
import BackgroundWrapper from './components/Layout/BackgroundWrapper';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <ScrollToTop />
        <BackgroundWrapper />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="admission" element={<Admission />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="franchise/:topic" element={<FranchiseInfo />} />
          </Route>
        </Routes>
      </Router>
    </SmoothScroll>
  );
}

export default App;
