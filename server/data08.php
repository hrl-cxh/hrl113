<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    $id = $_POST["id"];
    $sql = "delete from shoppingcar where id='".$id."'";
    $result = mysqli_query($con,$sql);
?>