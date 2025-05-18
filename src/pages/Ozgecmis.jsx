import '../css/style.css';

function Cv() {
  return (
    <div>
      <header>
        <h1>Poyraz Efe Özcan</h1>
        <p>Sakarya Üniversitesi - Bilgisayar Mühendisliği Öğrencisi</p>
      </header>

      <main>
        <section>
          <h2>Eğitim</h2>
          <article>
            <h3>Sakarya Üniversitesi</h3>
            <p>Bilgisayar Mühendisliği - 2024 - Devam Ediyor</p>
          </article>
        </section>
        <section>
          <h2>Yabancı Diller</h2>
          <ul>
            <li>İngilizce - İleri Seviye</li>
            <li>Almanca - Başlangıç Seviyesi</li>
          </ul>
        </section>

        <section>
          <h2>Yetenekler</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Git & GitHub</li>
            <li>C++</li>
            <li>Python Machine Learning</li>
          </ul>
        </section>

        <section>
          <h2>Deneyimler</h2>
          <article>
            <p>HTML, CSS ve JavaScript ile geliştirdiğim bu internet sitesi</p>
          </article>
        </section>

        <aside>
          <h2>İletişim:</h2>
          <p><strong>E-posta:</strong> poyrazefeozcan0@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/yurious0" target="_blank">github.com/yurious0</a></p>
        </aside>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default Cv;