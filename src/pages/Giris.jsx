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
    <div>
      <h2>Giriş Yap</h2>
      <h2>Giriş Sayfası</h2>
      <form onSubmit={validateForm}>
        <label htmlFor="username">Kullanıcı Adı (e-posta):</label><br />
        <input type="text" id="username" name="username" /><br />

        <label htmlFor="password">Şifre:</label><br />
        <input type="password" id="password" name="password" /><br /><br />

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Giris;
