<?php
$return[0]['type'] = "inc";
$return[0]['from'] = "x:y:z";
$return[0]['to'] = "x:y:z";
$return[0]['align'] = "e";
$return[0]['timeOnStart'] = time();
$return[0]['timeOnFinish'] = time()+10;
$return[0]['status'] = "attack";
$return[1]['type'] = "sent";
$return[1]['from'] = "x:y:z";
$return[1]['to'] = "x:y:z";
$return[1]['align'] = "s";
$return[1]['timeOnStart'] = time();
$return[1]['timeOnFinish'] = time()+20;
$return[1]['status'] = "attack";
$return[2]['type'] = "inc";
$return[2]['from'] = "x:y:z";
$return[2]['to'] = "x:y:z";
$return[2]['align'] = "a";
$return[2]['timeOnStart'] = time();
$return[2]['timeOnFinish'] = time()+30;
$return[2]['status'] = "attack";

$return[3]['status'] = "attack";
$return[4]['status'] = "attack";
$return[5]['status'] = "attack";

echo json_encode($return);
?>