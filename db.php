<?php
$conn = mysqli_connect("localhost", "root", "", "galaxy_tv");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>