<?php  header('Content-Type: text/html'); header('Access-Control-Allow-Origin: http://bulbdes.com');  

$email = file_get_contents('php://input');

mail('skochkovadym@gmail.com', 'Email Send', ''.$email.'');

echo 'Good';

?>