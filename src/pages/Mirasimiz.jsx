import mirasImage from '../assets/miras.jpg';

function Mirasimiz() {
  return (
    <div>
      <h2>Mirasımız</h2>
      <h3>Bursa Hanlar Bölgesi</h3>
      <img 
        src={mirasImage} 
        alt="Bursa Hanlar Bölgesi" 
        style={{ display: 'block', margin: 'auto' }} 
      />
      <div className="about-box" style={{ backgroundColor: '#28a745', color: 'white' }}>
        <p>
          Bursa Hanlar Bölgesi, Osmanlı Devleti'nin ilk başkenti olan Bursa'nın tarihi kent merkezinde yer alır ve 14. yüzyıldan itibaren gelişen ticaret ağıyla 
          Anadolu'nun en önemli ekonomik merkezlerinden biri olmuştur. Bölge, kervan yollarının kesişim noktasında bulunması sayesinde yüzyıllar boyunca ipek,
          baharat, kumaş ve çeşitli değerli malların alınıp satıldığı bir ticaret üssü haline gelmiştir. En bilinen hanlardan biri olan Koza Han, ipek böcek
          çiliği ve ipek ticaretinin merkezi olarak kurulmuş ve bugün hâlâ bu geleneği yaşatmaktadır. Emir Han, bölgedeki ilk Osmanlı hanıdır ve çevresinde
          ki çarşı yapılarıyla birlikte Hanlar Bölgesi'nin çekirdeğini oluşturur. Bölgede ayrıca Pirinç Han, Balibey Han, Geyve Han gibi birçok han bulunmak
          tadır. Hanlar, alt katlarında dükkân, üst katlarında ise konaklama imkânı sunarak hem ticaret hem de konaklama ihtiyacını karşılayan yapılardır. 
          Bölge yalnızca ekonomik değil, mimari ve kültürel açıdan da değerlidir. Ulu Cami, Orhan Cami, Bedesten ve Kapalı Çarşı gibi yapılarla iç içe olmas
          ı, burayı adeta bir açık hava müzesi haline getirir. 2014 yılında UNESCO Dünya Mirası Listesi'ne alınan bu alan, günümüzde restore edilerek turist
          ik, kültürel ve sosyal faaliyetlerin merkezi olmayı sürdürmektedir.
        </p>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default Mirasimiz;
