<?php
    $con = mysqli_connect("127.0.0.1","root","","goodslist");
    mysqli_query($con,"SET NAMES utf8");
    $data = file_get_contents("pagedata.json");
    $arr = json_decode($data,true);
    // var_dump($arr);

    for($i = 0;$i<count($arr);$i++){
        $src = implode(",",$arr[$i]["src"]);
        $typelist = implode(",",$arr[$i]["typelist"]);
        $edition = implode(",",$arr[$i]["edition"]);
        $title = implode(",",$arr[$i]["Title"]);
        $memory = implode(",",$arr[$i]["memory"]);
        $goodstype = $arr[$i]["goodstype"];
        $typetextlist = implode(",",$arr[$i]["typetextlist"]);
        $name = $arr[$i]["name"];
        $price = implode(",",$arr[$i]["price"]);
        var_dump($src,$typelist,$edition,$title,$memory,$goodstype,$typetextlist,$name,$price);
        $sql = "INSERT INTO `goodslist01` (`src`,`typelist`,`edition`,`Title`,`memory`,`goodstype`,`typetextlist`,`name`,`price`) VALUES ('$src','$typelist','$edition','$title','$memory','$goodstype','$typetextlist','$name','$price')";
        // mysqli_query($con,$sql);
        $arrA =  mysqli_query($con,$sql);
        var_dump($arrA);
        var_dump($sql);
    }
?>