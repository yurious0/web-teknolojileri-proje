<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  echo "<h2>Form Verileri</h2>";
  echo "Ad Soyad: " . htmlspecialchars($_POST['adsoyad']) . "<br>";
  echo "Email: " . htmlspecialchars($_POST['email']) . "<br>";
  echo "Mesaj: " . nl2br(htmlspecialchars($_POST['mesaj'])) . "<br>";
}
?>
