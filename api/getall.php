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

// SQL query to fetch all data from the table
$sql = "SELECT * FROM your_table_name"; // Replace 'your_table_name' with the actual table name

$result = $conn->query($sql);

if ($result) {
    $data = array();

    // Fetch data from the result and store it in an array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Close the result set
    $result->close();

    // Close the database connection
    $conn->close();

    // Convert the data to JSON format
    $json_response = json_encode($data);

    // Set the response content type to JSON
    header('Content-Type: application/json');

    // Output the JSON data
    echo $json_response;
} else {
    // Handle the case where the query fails
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>
