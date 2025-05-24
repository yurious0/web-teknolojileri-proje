import React, { useState } from 'react';
import '../css/style.css';

function Giris() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.username || !formData.password) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    const emailPattern = /^[a-z0-9._%+-]+@sakarya\.edu\.tr$/;
    if (!emailPattern.test(formData.username)) {
      setError("Geçerli bir Sakarya Üniversitesi e-posta adresi giriniz.");
      return;
    }

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('password', formData.password);

      const API_URL = 'https://webprojem.infinityfree.net/login.php';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        alert(`Hoşgeldiniz "${data.studentNumber}"`);
        window.location.href = "/";
      } else {
        setError(data.message || "Giriş başarısız!");
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
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
              value={formData.username}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

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
