<?php header('Access-Control-Allow-Origin: http://bulbdes.com'); header('Content-Type: text/html');

$user = json_decode(file_get_contents('php://input'), true);

$name = $user['name'];
$email = $user['email'];
$msg = $user['msg'];
$subject = $user['subject'];

mail("skochkovadym@gmail.com", $subject, "Name: {$name}\nFrom: {$email}\nMesagge: {$msg}");

echo "Good";  

?>