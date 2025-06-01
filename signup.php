<?php
include 'db.php';

// Sanitize input to prevent SQL injection
$username = mysqli_real_escape_string($conn, $_POST['username']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$check = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
if (mysqli_num_rows($check) > 0) {
    echo "exists";
    exit();
}

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "error";
}

mysqli_close($conn);
?>