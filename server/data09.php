<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    $sql = "SELECT * FROM userlist";
    $result = mysqli_query($con,$sql);
    
    echo json_encode(mysqli_fetch_all($result,MYSQLI_ASSOC),JSON_UNESCAPED_UNICODE);
?>