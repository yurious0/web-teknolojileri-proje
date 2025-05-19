import Slider from '../components/slider';

function Sehrim() {
  return (
    <div>
      <h2>Şehrim</h2>
      <Slider />
      <div className="box-container">
        <div id="bursa" className="info-box" style={{ backgroundColor: '#28a745' }}>
          <h2>Bursa</h2>
          <p>Türkiye'nin Marmara Bölgesi'nde yer alan Bursa, yaklaşık 3 milyonluk nüfusuyla ülkemizin en büyük şehirlerinden biridir. Osmanlı İmparatorluğu'nun ilk başkenti olan Bursa, tarihi dokusu, doğal güzellikleri ve kültürel zenginlikleriyle öne çıkar. Uludağ, kış turizminin vazgeçilmez adreslerinden biri olurken; Cumalıkızık Köyü, Osmanlı döneminden kalma mimarisiyle dikkat çeker. Yeşil Türbe, Ulu Cami ve Koza Han gibi tarihi yapılar şehrin ruhunu yansıtır. Aynı zamanda Bursa, İskender kebabı ve kestane şekeri gibi meşhur lezzetleriyle de gastronomi açısından zengin bir mutfağa sahiptir.</p>
        </div>
      </div>
      <div className="box-container">
        <div id="cumalikizik" className="info-box" style={{ backgroundColor: '#28a745' }}>
          <h4>Cumalıkızık</h4>
          <p>
            Cumalıkızık, Bursa'nın en önemli tarihi yerlerinden biridir. 13. yüzyılda kurulan bu köy, tarihi yapılarıyla ünlüdür. Köydeki tarihi yapılar,
            köyün tarihi ve kültürel özelliklerini anlamamızı sağlar. Köydeki tarihi yapılar, köyün tarihi ve kültürel özelliklerini anlamamızı sağlar.
          </p>
        </div>
      </div>
      <div className="box-container">
        <div id="ulucami" className="info-box" style={{ backgroundColor: '#28a745' }}>
          <h4>Ulu Cami</h4>
          <p>
            Ulu Cami, Bursa'nın en önemli tarihi yapılarından biridir. 13. yüzyılda inşa edilen bu cami, tarihi yapılarıyla ünlüdür. Caminin tarihi yapıları,
            caminin tarihi ve kültürel özelliklerini anlamamızı sağlar. Caminin tarihi yapıları, caminin tarihi ve kültürel özelliklerini anlamamızı sağlar.
          </p>
        </div>
      </div>
      <div className="box-container">
        <div id="yesilturbe" className="info-box" style={{ backgroundColor: '#28a745' }}>
          <h4>Yeşil Türbe</h4>
          <p>
            Yeşil Türbe, Bursa'nın en önemli tarihi yapılarından biridir. 13. yüzyılda inşa edilen bu türbe, tarihi yapılarıyla ünlüdür. Türbenin tarihi yapıları,
            türbenin tarihi ve kültürel özelliklerini anlamamızı sağlar. Türbenin tarihi yapıları, türbenin tarihi ve kültürel özelliklerini anlamamızı sağlar.
          </p>
        </div>
      </div>
      <div className="box-container" style={{ marginBottom: '70px' }}>
        <div id="uludag" className="info-box" style={{ backgroundColor: '#28a745' }}>
          <h4>Uludağ</h4>
          <p>
            Bursa'nın güneyinde yer alan Uludağ, kış sporları ve doğa turizmiyle öne çıkar.
            Hem kayak merkezi hem de yazın yürüyüş ve kamp için tercih edilen popüler bir doğa alanıdır.
          </p>
        </div>
      </div>
      <footer className="footer"> </footer>
    </div>
  );
}

export default Sehrim;
