<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    $data = file_get_contents("goodslist02.json");
    $arr = json_decode($data,true);
    // var_dump($arr);

    for($i = 0;$i<count($arr);$i++){
        $src = $arr[$i]["src"];
        var_dump($arr[$i]["name"]);
        // $title = implode("",$arr[$i]["title"]);
        $title = $arr[$i]["title"];
        var_dump($title);
        $name = $arr[$i]["name"];
        // var_dump($name);
        $newprice = $arr[$i]["newprice"];
        $oldprice = $arr[$i]["oldprice"];
        $id = $i;
        $sql = "INSERT INTO `phonelist` (`src`,`title`,`name`,`newprice`,`oldprice`) VALUES ('$src','$title','$name','$newprice','$oldprice')";
        mysqli_query($con,$sql);
    }
?>