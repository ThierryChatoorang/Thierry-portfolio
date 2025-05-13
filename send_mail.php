<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $recipient = "chatoorangthie@gmail.com";
        $subject = "New contact form message: $subject";

        // Create the email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Create the email headers
        $email_headers = "From: $name <$email>";

        // Send the email
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Thank you! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong, and we couldn't send your message.";
        }
    } else {
        http_response_code(400);
        echo "Please complete the form and try again.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>