import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Web Projem</Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ozgecmis" onClick={() => setIsMenuOpen(false)}>Özgeçmiş</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sehrim" onClick={() => setIsMenuOpen(false)}>Şehrim</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mirasimiz" onClick={() => setIsMenuOpen(false)}>Mirasımız</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ilgialanlarim" onClick={() => setIsMenuOpen(false)}>İlgi Alanlarım</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/giris" onClick={() => setIsMenuOpen(false)}>Giriş</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
