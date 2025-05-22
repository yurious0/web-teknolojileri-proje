import '../css/style.css';
import yemekImage from '../assets/yemek.jpeg';
import gamingImage from '../assets/gaming.jpg';
import musicImage from '../assets/music.jpeg';
import chessImage from '../assets/Chess.jpeg';

function Anasayfa() {
  return (
    <div>
      <h1>Hakkımda</h1>
      <h2>Merhaba</h2>
      <div className="about-box">
        <p>
          Ben Poyraz Efe Özcan Sakarya Üniversitesi Bilgisayar Mühendisliği 1. sınıf öğrencisiyim.
          Bu siteyi 2024-2025 döneminde Web Teknolojileri dersinin projesi için geliştirdim.
        </p>
        <p>
          Bu sitede özgeçmişim, yaşadığım şehir, kültürel mirasımız, ilgi alanlarım ve iletişim
          bilgilerim gibi bölümleri bulabilirsiniz.
        </p>
      </div>
      <h2>Hobilerim</h2>
      <div className="box-container">
        <div className="info-box">
          <p>Yemek yapmak</p>
          <img src={yemekImage} alt="Yemek yapma" />
        </div>
        <div className="info-box">
          <p>Oyun oynamak</p>
          <img src={gamingImage} alt="Oyun oynama" />
        </div>
        <div className="info-box">
          <p>Müzik dinlemek</p>
          <img src={musicImage} alt="Müzik dinleme" />
        </div>
        <div className="info-box">
          <p>Satranç oynamak</p>
          <img src={chessImage} alt="Satranç" />
        </div>
      </div>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default Anasayfa;
