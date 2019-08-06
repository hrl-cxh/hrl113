$(function(){
    function oinput(p1,p2){
        $(p1).focus(function (e) { 
        $(p2).animate({
            "font-size":"12px",
            "top":"-40px"
        })
        $(p1).css("border-bottom","1px solid blue");
        $(p2).css("color","blue");
    });
    $(p1).blur(function (e) { 
        $(p2).animate({
            "font-size":"18px",
            "top":"-18px"
        })
        $(p1).css("border-bottom","1px solid #DDD");
        $(p2).css("color","#767676");
    });
    }
    oinput('.userphone','.box1 label');
    oinput('.psw','.box2 label');
    oinput('.ancode','.box5 label');
    $('#btnChange').click(function(){
        let ocans = document.getElementById('radnum');
        console.log(ocans);
        let str = new RandomCode(ocans);
    })
})