<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
<<<<<<< HEAD
  $username = mysqli_real_escape_string($mysqli, trim($request->username));
  $password = mysqli_real_escape_string($mysqli, (int)$request->password);
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $sql = "INSERT INTO employee(username,password,name) VALUES ('{$username}','{$password}','{$name}')";
=======
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $pwd = mysqli_real_escape_string($mysqli, (int)$request->pwd);
   $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $mobile = mysqli_real_escape_string($mysqli, (int)$request->mobile);
  $sql = "INSERT INTO employee(name,pwd,email,mobile) VALUES ('{$name}','{$pwd}','{$email}','{$mobile}')";
>>>>>>> parent of 0076b1c... login.php and registration.php changes as per A2 requirements.
 // echo $sql;
if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
<<<<<<< HEAD
      'username' => $username,
      'password' => $password,
=======
>>>>>>> parent of 0076b1c... login.php and registration.php changes as per A2 requirements.
      'name' => $name,
	  'pwd' => '',
	  'email' => $email,
      'mobile' => $mobile,
      'Id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
 
}
}
?>