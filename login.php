<?php
include 'db.php';
session_start();

// Sanitize input to prevent SQL injection
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);

    if (password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['username'];
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}

mysqli_close($conn);
?>