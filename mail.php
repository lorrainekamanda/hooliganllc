<?php


if( isset($_POST['name']) && isset($_POST['lastName']) && isset($_POST['phoneNumber']) && isset($_POST['emailAddress']) && isset($_POST['message']) ){
	$name = $_POST['name'];
  $lastName = $_POST['lastName'];
  $phoneNumber = $_POST['phoneNumber'];
	$emailAddress = $_POST['emailAddress'];
	$message = nl2br($_POST['message']);
	$to = 'lorrainekamanda@gmail.com';
	$from = $emailAddress;
	$subject = 'Schedule Inquiry';
	$message = "<b>Name:</b> '.$name.' <b>LastName:</b> '.$lastName.' <br><b>Phone:</b> '.$phoneNumber' <b>Email:</b> '.$emailAddress.' <p>'.$message.'</p>";
	$headers = 'From: $from\n';
	$headers .= 'MIME-Version: 1.0\n';
	$headers .= 'Content-type: text/html; charset=iso-8859-1\n';
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
