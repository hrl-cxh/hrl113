<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    $aid = $_POST["aid"];
    if($aid == 0){
        $sql = "SELECT * FROM `wearlist` ORDER BY `wearlist`.`newprice` ASC";
        $result = mysqli_query($con,$sql);
        $res = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }elseif($aid == 1){
        $sql = "SELECT * FROM `wearlist` ORDER BY `wearlist`.`newprice` DESC";
        $result = mysqli_query($con,$sql);
        $res = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }
    
?>