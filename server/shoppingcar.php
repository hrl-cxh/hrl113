<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");

    $name = $_POST["name"];
    $price = $_POST["price"];
    $src = $_POST["src"];
    $num = $_POST["num"];
    $sql = "SELECT * FROM shoppingcar where name='".$name."'";
    $result = mysqli_query($con,$sql);
    $res = mysqli_num_rows($result);
    if($res == 0){
        $sql = "INSERT INTO shoppingcar (src,price,name,num) VALUES ('".$src."','".$price."','".$name."','".$num."')";
        $arrA =  mysqli_query($con,$sql);
    }else{
        /* 更新 */
        $updateSql = "UPDATE shoppingcar SET num=num+1 WHERE name='".$name."'"; 
        $res = mysqli_query($con,$updateSql);
    }
?>