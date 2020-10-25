<?php


   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $visitor_email = $_POST['email'];
   $message = $_POST['message'];

   $email_from = 'worksonme313@gmail.com';
   $email_subject = 'New Form Submission';
   $email_body = "User Name: $name.\n";
				 "User Email:$visitor_email\n";
				 "User subject:$subject\n";
				 "User Message:$message\n";
   $to = "lorrainekamanda@gmail.com";

   $headers = "From: $email_from\r\n";
   $headers .= "Reply-To: ". $visitor_email."\r\n";

   mail($to, $email_subject, $email_body, $headers)
   

?>