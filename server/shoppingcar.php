<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    $name = $_POST["name"];
    $price = $_POST["price"];
    $src = $_POST["src"];
    echo $name.$price.$src;
   
    $sql = "INSERT INTO `shoppingcar` (`src`,`price`,`name`) VALUES ('$src','$price','$name')";
    $arrA =  mysqli_query($con,$sql);
?>