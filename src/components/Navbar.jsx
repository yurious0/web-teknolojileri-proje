import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Web Projem</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Anasayfa</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/ozgecmis">Özgeçmiş</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sehrim">Şehrim</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/mirasimiz">Mirasımız</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/ilgialanlarim">İlgi Alanlarım</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/iletisim">İletişim</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/giris">Giriş</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
