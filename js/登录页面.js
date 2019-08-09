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
    //点击生成验证码
    $('#btnChange').click(function(){
        let ocans = document.getElementById('radnum');
        console.log(ocans);
        str = new RandomCode(ocans);
    })
    
    //向数据库发送请求
    $.ajax({
        type: "get",
        url: "../server/data09.php",
        dataType: "json",
        success: function (res) {
            for(var i = 0;i<res.length;i++){
                let stremali = res[i].emali;
                let strpsw = res[i].psw;
                let strname = res[i].name;
                let strpoersoncar = res[i].poersoncar;
                console.log(stremali,strpsw,strname,strpoersoncar);

                //失去焦点事件
                $(".userphone").blur(function(){
                    let text = $.trim($(this).val());
                    let oNext = $(this).siblings('label');
                    if(text == 0){
                        oNext.text("邮箱不能为空");
                        oNext.css("color","red");
                    }else if(text !== stremali){
                        oNext.text("没有该用户");
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
                    }else if(text !== strpsw){
                        oNext.text("密码不对");
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
                //点击验证是否有该用户
                $(".btnLogin").click(function(){
                    if($('.userphone').val() == stremali && $('.psw').val() == strpsw && $('.ancode').val().length !== 0){
                        Cookie.setCookie("namestr",strname,"","/");
                        window.open("../index.html");
                    }else{
                        alert("用户不存在或者信息未完善，请先完善信息");
                    }
                })
                
            }

        }
    });
})