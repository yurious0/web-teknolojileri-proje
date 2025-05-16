import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anasayfa from './pages/Anasayfa';
import Ozgecmis from './pages/Ozgecmis';
import Sehrim from './pages/Sehrim';
import Mirasimiz from './pages/Mirasimiz';
import IlgiAlanlarim from './pages/IlgiAlanlarim';
import Iletisim from './pages/Iletisim';
import Giris from './pages/Giris';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/ozgecmis" element={<Ozgecmis />} />
          <Route path="/sehrim" element={<Sehrim />} />
          <Route path="/mirasimiz" element={<Mirasimiz />} />
          <Route path="/ilgialanlarim" element={<IlgiAlanlarim />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/giris" element={<Giris />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
