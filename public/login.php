<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Log the request method and data
error_log("Request Method: " . $_SERVER["REQUEST_METHOD"]);
error_log("Raw input: " . file_get_contents("php://input"));

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Log the received data
    error_log("Received data: " . print_r($data, true));
    error_log("POST data: " . print_r($_POST, true));
    
    // If JSON parsing failed, try regular POST
    if (!$data) {
        $username = isset($_POST["username"]) ? trim($_POST["username"]) : "";
        $password = isset($_POST["password"]) ? trim($_POST["password"]) : "";
    } else {
        $username = isset($data["username"]) ? trim($data["username"]) : "";
        $password = isset($data["password"]) ? trim($data["password"]) : "";
    }
    
    // Validate input
    if (empty($username) || empty($password)) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "Kullanıcı adı ve şifre gereklidir"
        ]);
        exit();
    }
    
    // Log the extracted credentials
    error_log("Username: " . $username);
    error_log("Password: " . $password);
    
    // Hardcoded credentials
    $validUsername = "b241210073@sakarya.edu.tr";
    $validPassword = "b241210073";
    
    // Check credentials
    if ($username === $validUsername && $password === $validPassword) {
        // Start session if not already started
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        
        // Set session variables
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['studentNumber'] = "b241210073";
        
        echo json_encode([
            "success" => true,
            "studentNumber" => "b241210073",
            "message" => "Giriş başarılı"
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "message" => "Kullanıcı adı veya şifre hatalı"
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed"
    ]);
}
?>
