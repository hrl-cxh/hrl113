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
        let txt = $(this).val();
        if(txt.length == 0){
            $(p2).animate({
            "font-size":"18px",
            "top":"-18px"
        })
        }else{
            $(p2).animate({
            "font-size":"12px",
            "top":"-40px"
        })
    }
        $(p1).css("border-bottom","1px solid #DDD");
        $(p2).css("color","#767676");
    });
    }
    oinput('.userphone','.box1 label');
    oinput('.psw','.box2 label');
    oinput('.ancode','.box5 label');
    let str = '';
    $('#btnChange').click(function(){
        let ocans = document.getElementById('radnum');
        console.log(ocans);
        str = new RandomCode(ocans);
    })
    //失去焦点事件
    $(".userphone").blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
        if(text == 0){
            oNext.text("邮箱不能为空");
            oNext.css("color","red");
        }else{
            oNext.text("请输入邮箱");
        }
    })
    //密码框失去焦点事件
    $(".psw").blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
        if(text == 0){
            oNext.text("密码不能为空");
            oNext.css("color","red");
        }else{
            oNext.text("请输入密码");
        }
    })
    //验证码失去焦点事件
    $(".ancode").blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
        if(text == 0){
            oNext.text("验证码不能为空");
            oNext.css("color","red");
        }else if(text == str.join("")){
            oNext.text("验证码一致");
            oNext.css("color","green");            
        }else{
            oNext.text("验证码不一致");
            oNext.css("color","red");  
        }
    })
    //与数据库进行匹对
    let cookEmil = Cookie.getCookie("useEmil");
    let cookpsw = Cookie.getCookie("pswnum");
    // 绑定点击事件
    $(".btnLogin").click(function(){
        let userEmil = $('.userphone').val();
        let userPsw = $('.psw').val();
        if(userEmil == cookEmil && userPsw == cookpsw){
            window.open("../index.html");                      
        }else{
            alert("用户不存在");  
        }
    })
})