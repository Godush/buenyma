<?php
$return[0]["amount"] = 10000;
$return[0]["price"] = 100000;
$return[0]["status"] = "not yet sold";
$return[1]["amount"] = 20000;
$return[1]["price"] = 200000;
$return[1]["status"] = "flying";

echo json_encode($return);
?>