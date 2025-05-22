import React from 'react';
import '../css/style.css';

function Giris() {
  const validateForm = async (e) => {
    e.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("Lütfen tüm alanları doldurun.");
      return false;
    }

    const emailPattern = /^[a-z0-9._%+-]+@sakarya\.edu\.tr$/;
    if (!emailPattern.test(email)) {
      alert("Geçerli bir Sakarya Üniversitesi e-posta adresi giriniz.");
      return false;
    }

    try {
      const response = await fetch('login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: email,
          password: password
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        alert(`Hoşgeldiniz "${data.studentNumber}"`);
        window.location.href = "/anasayfa";
      } else {
        alert(data.message || "Giriş başarısız!");
        window.location.href = "/giris";
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      window.location.href = "/giris";
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Giriş Yap</h1>
        <form onSubmit={validateForm} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Kullanıcı Adı (e-posta):
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Şifre:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
            />
          </div>

          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default Giris;
