import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NewCase from './pages/newCase';

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newcase" element={<NewCase />} />
      </Routes>
    </Router>
  );
}
