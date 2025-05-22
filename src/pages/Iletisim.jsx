import React, { useState } from 'react';
import '../css/style.css';

function Iletisim() {
  const [formData, setFormData] = useState({
    adSoyad: '',
    email: '',
    telefon: '',
    konu: '',
    cinsiyet: '',
    ilgiAlanlari: [],
    mesaj: '',
    dosya: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.adSoyad.trim()) {
      newErrors.adSoyad = 'Ad Soyad alanı zorunludur';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email alanı zorunludur';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Geçerli bir email adresi giriniz';
    }

    const phoneRegex = /^[0-9]+$/;
    if (!formData.telefon) {
      newErrors.telefon = 'Telefon alanı zorunludur';
    } else if (!phoneRegex.test(formData.telefon)) {
      newErrors.telefon = 'Telefon numarası sadece rakam içermelidir';
    }

    if (!formData.konu) {
      newErrors.konu = 'Lütfen bir konu seçin';
    }

    if (!formData.cinsiyet) {
      newErrors.cinsiyet = 'Lütfen cinsiyet seçin';
    }

    if (formData.ilgiAlanlari.length === 0) {
      newErrors.ilgiAlanlari = 'En az bir ilgi alanı seçin';
    }

    if (!formData.mesaj.trim()) {
      newErrors.mesaj = 'Mesaj alanı zorunludur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
          if (key === 'ilgiAlanlari') {
            formDataToSend.append(key, JSON.stringify(formData[key]));
          } else {
            formDataToSend.append(key, formData[key]);
          }
        });

        const response = await fetch('form-sonuc.php', {
          method: 'POST',
          body: formDataToSend
        });

        if (response.ok) {
          alert('Form başarıyla gönderildi!');
          handleReset();
        } else {
          alert('Form gönderilirken bir hata oluştu.');
        }
      } catch (error) {
        console.error('Form gönderme hatası:', error);
        alert('Form gönderilirken bir hata oluştu.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      const ilgiAlanlari = [...formData.ilgiAlanlari];
      if (checked) {
        ilgiAlanlari.push(value);
      } else {
        const index = ilgiAlanlari.indexOf(value);
        if (index > -1) {
          ilgiAlanlari.splice(index, 1);
        }
      }
      setFormData(prev => ({ ...prev, ilgiAlanlari }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      adSoyad: '',
      email: '',
      telefon: '',
      konu: '',
      cinsiyet: '',
      ilgiAlanlari: [],
      mesaj: '',
      dosya: null
    });
    setErrors({});
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">İletişim Formu</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="adSoyad">Ad Soyad:</label>
          <input
            type="text"
            id="adSoyad"
            name="adSoyad"
            value={formData.adSoyad}
            onChange={handleChange}
            className={errors.adSoyad ? 'error' : ''}
          />
          {errors.adSoyad && <span className="error-message">{errors.adSoyad}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="telefon">Telefon:</label>
          <input
            type="text"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className={errors.telefon ? 'error' : ''}
          />
          {errors.telefon && <span className="error-message">{errors.telefon}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="konu">Konu:</label>
          <select
            id="konu"
            name="konu"
            value={formData.konu}
            onChange={handleChange}
            className={errors.konu ? 'error' : ''}
          >
            <option value="">Seçiniz</option>
            <option value="bilgi">Bilgi Talebi</option>
            <option value="sikayet">Şikayet</option>
            <option value="oneri">Öneri</option>
            <option value="diger">Diğer</option>
          </select>
          {errors.konu && <span className="error-message">{errors.konu}</span>}
        </div>

        <div className="form-group">
          <label>Cinsiyet:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="cinsiyet"
                value="erkek"
                checked={formData.cinsiyet === 'erkek'}
                onChange={handleChange}
              />
              Erkek
            </label>
            <label>
              <input
                type="radio"
                name="cinsiyet"
                value="kadin"
                checked={formData.cinsiyet === 'kadin'}
                onChange={handleChange}
              />
              Kadın
            </label>
          </div>
          {errors.cinsiyet && <span className="error-message">{errors.cinsiyet}</span>}
        </div>

        <div className="form-group">
          <label>İlgi Alanları:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="ilgiAlanlari"
                value="teknoloji"
                checked={formData.ilgiAlanlari.includes('teknoloji')}
                onChange={handleChange}
              />
              Teknoloji
            </label>
            <label>
              <input
                type="checkbox"
                name="ilgiAlanlari"
                value="spor"
                checked={formData.ilgiAlanlari.includes('spor')}
                onChange={handleChange}
              />
              Spor
            </label>
            <label>
              <input
                type="checkbox"
                name="ilgiAlanlari"
                value="sanat"
                checked={formData.ilgiAlanlari.includes('sanat')}
                onChange={handleChange}
              />
              Sanat
            </label>
          </div>
          {errors.ilgiAlanlari && <span className="error-message">{errors.ilgiAlanlari}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mesaj">Mesajınız:</label>
          <textarea
            id="mesaj"
            name="mesaj"
            value={formData.mesaj}
            onChange={handleChange}
            rows="5"
            className={errors.mesaj ? 'error' : ''}
          ></textarea>
          {errors.mesaj && <span className="error-message">{errors.mesaj}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dosya">Dosya Yükle:</label>
          <input
            type="file"
            id="dosya"
            name="dosya"
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">Gönder</button>
          <button type="button" onClick={handleReset} className="reset-button">Temizle</button>
        </div>
      </form>
    </div>
  );
}

export default Iletisim;
