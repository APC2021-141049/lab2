<?php
$servername = "http://apcwebprog.csf.ph";
$username = "webprogss211";
$password = "webprogss211";
$dbname = "webprogss211";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE searceo_guestlist (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
fullname VARCHAR(30) NOT NULL,
email VARCHAR(99) NOT NULL,
website VARCHAR(99) NOT NULL,
comment VARCHAR(999) NOT NULL,
gender VARCHAR(30) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo "Table searceo_guestlist created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$conn->close();
?>