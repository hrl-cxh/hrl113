$(function(){
    //验证码
    let str = '';
    $('#btnChange').click(function(){
        let ocans = document.getElementById('radnum');
        str = new RandomCode(ocans);
    })

    //封装函数
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
    oinput('.emil','.boxA label');
    oinput('.psw','.boxB label');
    oinput('.agpsw','.boxC label');
    oinput('.surname','.boxD label');
    oinput('.name','.boxE label');
    oinput('.ancode','.boxH label');

    //正则表达式
    let username = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    let pswstr = /^[A-Za-z0-9]{8,}$/;
    let sname =  /^([\u4e00-\u9fa5]){1,2}$/;
    let name = /^([\u4e00-\u9fa5]){1,2}$/;
    
    //获取标签
    let emil = $('.emil');
    let psw = $('.psw');
    let agpsw = $('.agpsw');
    let surname = $('.surname');
    let userName = $('.name');
    // let radnum = $('.radnum');
    let ancode = $('.ancode');
    let btn = $('.nextbtn');
    let birthday = $('.data');
    console.log(birthday);

    //邮箱正则判断
    emil.blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
        console.log(oNext)
        if (text.length == 0) {
            oNext.text('邮箱不能为空');
            oNext.css("color","red");
        } else if (!username.test(text)) {
            oNext.text('邮箱不符合规范'); 
            oNext.css("color","red");
        } else {
            oNext.text('邮箱符合规范');
            oNext.css("color","green");
        }
    })
    //密码正则判断
    psw.focus(function(){
       $('.psw-text').show(1000); 
    })
    psw.blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
       $('.psw-text').hide(1000); 
        if (text.length == 0) {
            oNext.text('密码不能为空');
            oNext.css("color","red");
        } else if (!pswstr.test(text)) {
            oNext.text('密码不符合规范'); 
            oNext.css("color","red");
        } else {
            oNext.text('密码符合规范');
            oNext.css("color","green");
        }
    })
    //确认密码
    agpsw.blur(function(){
        let text1 = $.trim($(this).val());
        let text2 = psw.val();
        let oNext = $(this).siblings('label');
        if(text1.length == 0){
            oNext.text('不能为空');
            oNext.css("color","red");
        }else if(text1 == text2){
            oNext.text('密码一致');
            oNext.css("color","green");
        }else{
            oNext.text('密码不一致');
            oNext.css("color","red");
        }
    })
    //姓氏正则判断
    surname.blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
        if (text.length == 0) {
            oNext.text('姓氏不能为空');
            oNext.css("color","red");
        } else if (!sname.test(text)) {
            oNext.text('姓氏不符合规范'); 
            oNext.css("color","red");
        } else {
            oNext.text('姓氏符合规范');
            oNext.css("color","green");
        }
    })
    //名字正则判断
    userName.blur(function(){
        let text = $.trim($(this).val());
        let oNext = $(this).siblings('label');
        if (text.length == 0) {
            oNext.text('名字不能为空');
            oNext.css("color","red");
        } else if (!sname.test(text)) {
            oNext.text('名字不符合规范'); 
            oNext.css("color","red");
        } else {
            oNext.text('名字符合规范');
            oNext.css("color","green");
        }
    })
    //随机验证码判断
    ancode.blur(function(){
        let num1 = ancode.val();
        console.log(str.join(''));
        let oNext = $(this).siblings('label');
        if(num1.length == 0){
            oNext.text('安全代码不能为空');
            oNext.css("color","red");
        }else if(num1 == str.join('')){
            oNext.text('安全代码一致');
            oNext.css("color","green");
        }else{
            oNext.text('安全代码不一致');
            oNext.css("color","red");
        }
    })
    btn.click(function(){
        
    })
})