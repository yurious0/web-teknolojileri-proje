<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Örnek kontrol (gerçek uygulamada veritabanından kontrol edilmeli)
    $validUsername = "b1812100001@sakarya.edu.tr";
    $validPassword = "b1812100001";
    
    if ($username === $validUsername && $password === $validPassword) {
        echo json_encode([
            "success" => true,
            "studentNumber" => "b1812100001",
            "message" => "Giriş başarılı"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Kullanıcı adı veya şifre hatalı"
        ]);
    }
}
?>
