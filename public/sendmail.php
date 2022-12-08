<?PHP
$sender = $_POST['email'];
$name = $_POST['name'];
$recipient = 'viktor@betterdevelopers.dk';

$subject = $_POST['subject'];

$phone = $_POST['phone'];
$position = $_POST['position'];
$message = $_POST['message'];

$body = 'From: ' . $name . "\n" . 'Phone: ' . $phone . "\n" . 'Position: ' . $position . "\n" . 'Message: ' . $message; 
$headers = 'From: ' . $name . "< " . $sender . ">" . "\r\n" . 'Reply-To: ' . $sender;

if (mail($recipient, $subject, $body, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}






$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, "https://trackcmp.net/event");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_POSTFIELDS, array(
	"actid" => "226098733",
	"key" => "eef3195f1075439646212353d4ebf7601ad5dcb8",
	"event" => "Contact",
	"eventdata" => $sender,
	"visit" => json_encode(array(
			// If you have an email address, assign it here.
			"email" => "$sender",
		)),
	));

	$result = curl_exec($curl);
	if ($result !== false) {
		$result = json_decode($result);
		if ($result->success) {
			echo 'Success! ';
		} else {
			echo 'Error! ';
		}

		echo $result->message;
	} else {
		echo 'cURL failed to run: ', curl_error($curl);
	}
?>