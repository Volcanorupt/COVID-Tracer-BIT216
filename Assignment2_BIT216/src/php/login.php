<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
<<<<<<< HEAD
	$password = mysqli_real_escape_string($mysqli, trim($request->password));
  $username = mysqli_real_escape_string($mysqli, trim($request->username));
$sql='';

	$sql = "SELECT * FROM user where username='$username' and password ='$password'";
=======
	$pwd = mysqli_real_escape_string($mysqli, trim($request->password));
   $email = mysqli_real_escape_string($mysqli, trim($request->username));
$sql='';
	$sql = "SELECT * FROM employee where email='$email' and pwd='$pwd'";
>>>>>>> parent of 0076b1c... login.php and registration.php changes as per A2 requirements.
if($result = mysqli_query($mysqli,$sql))
{
 $rows = array();
  while($row = mysqli_fetch_assoc($result))
  {
    $rows[] = $row;
  }
 
  echo json_encode($rows);
}
else
{
  http_response_code(404);
}
}
?>