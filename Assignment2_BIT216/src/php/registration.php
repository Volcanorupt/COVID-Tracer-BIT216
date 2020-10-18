<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  $username = mysqli_real_escape_string($mysqli, trim($request->username));
  $pwd = mysqli_real_escape_string($mysqli, (int)$request->pwd);
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $sql = "INSERT INTO employee(username,pwd,name) VALUES ('{$username}','{$pwd}','{$name}')";
 // echo $sql;
if ($mysqli->query($sql) === TRUE) {


    $authdata = [
      'username' => $username,
      'pwd' => '',
      'name' => $name,
      'Id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);

}
}
?>
