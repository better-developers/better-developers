<?PHP
$sender = 'viktor.lundsgaard@betterdevelopers.dk';
$recipient = 'vik.lund.and@gmail.com';

$subject = " {$_POST['subject']} ";
$message = "From: {$_POST['email']}\nName: {$_POST['name']}\nMessage:\n{$_POST['message']}";
$headers = 'From:' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}

?>