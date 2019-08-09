<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    
    $name = $_POST["name"];
    $psw = $_POST["psw"];
    $emali = $_POST["emali"];
    $poersoncar = $_POST["poersoncar"];
    echo $name.$psw.$emali.$poersoncar;
    $sql = "SELECT * FROM userlist where name='".$name."'";
    $result = mysqli_query($con,$sql);
    $res = mysqli_fetch_row($result);
    if($res == 0){
        $sql = "INSERT INTO `userlist` (`name`,`psw`,`emali`,`poersoncar`) VALUES ('$name','$psw','$emali','$poersoncar')";
        $arrA =  mysqli_query($con,$sql);
    }elseif($res == 1){
        echo "已经存在该用户";
    }
    
?>