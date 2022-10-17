<?PHP
$sender = $_POST['email'];
$name = $_POST['name'];
$recipient = 'viktor@betterdevelopers.dk';

$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = 'From: ' . $name . "< " . $sender . ">" . "\r\n" . 'Reply-To: ' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}

?>