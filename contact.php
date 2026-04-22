<?php
// Contact form handler for Chartered Accountant Website
// This script processes form submissions and sends emails

// Set response header
header('Content-Type: application/json');

// Initialize response
$response = array(
    'success' => false,
    'message' => ''
);

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Sanitize and validate input
    $name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim(htmlspecialchars($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'])) : '';
    
    // Validation
    if (empty($name)) {
        $response['message'] = 'Please provide your name.';
        echo json_encode($response);
        exit;
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Please provide a valid email address.';
        echo json_encode($response);
        exit;
    }
    
    if (empty($message)) {
        $response['message'] = 'Please provide a message.';
        echo json_encode($response);
        exit;
    }
    
    // Configure email
    $to = 'logiqgen@gmail.com'; // Replace with your email
    $subject = 'New Contact Form Submission from ' . $name;
    
    // Email body
    $emailBody = "New contact form submission:\n\n";
    $emailBody .= "Name: " . $name . "\n";
    $emailBody .= "Email: " . $email . "\n";
    $emailBody .= "Phone: " . ($phone ? $phone : 'Not provided') . "\n\n";
    $emailBody .= "Message:\n" . $message . "\n";
    
    // Email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        $response['success'] = true;
        $response['message'] = 'Thank you for contacting us! We will get back to you soon.';
    } else {
        $response['message'] = 'Sorry, there was an error sending your message. Please try again later.';
    }
    
} else {
    $response['message'] = 'Invalid request method.';
}

// Return response
echo json_encode($response);
?>
