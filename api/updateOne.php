<?php
// Database connection parameters
$servername = "localhost";
$username = "mast_er_USER";
$password = "^cjrucbv3F10onA^";
$database = "mast_er_DB";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the parameters id, name, and value are set in the URL
if (isset($_GET['id']) && isset($_GET['name']) && isset($_GET['value'])) {
    // Sanitize and validate input parameters
    $id = intval($_GET['id']);
    $name = $conn->real_escape_string($_GET['name']);
    $value = floatval($_GET['value']);

    // SQL query to update the record based on the provided ID
    $sql = "UPDATE your_table_name SET name='$name', value='$value' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
} else {
    echo "Missing parameters. Please provide 'id', 'name', and 'value' in the URL.";
}

// Close the database connection
$conn->close();
?>
