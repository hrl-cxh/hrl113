$(function(){
    var hobby = document.getElementsByName('hobby');
    var all = document.querySelector('#allbtns');
    console.log(all,hobby);
    
    // 下面的选中反过来控制全选
    // $(all).attr("checked",true);
    // var istrue = true;
    $(hobby).click(function(){
        if($(hobby).filter(":checked").length == hobby.length){
            $(all).prop("checked",true);
            $('.truebtn').addClass('active');
        }else{
            $(all).prop("checked",false);
            $('.truebtn').removeClass('active');
        }
    })
    //全选
    all.onclick = function() {
        //点击全选，让下面所有复选框跟着变
        for(var i = 0; i < hobby.length; i++) {
            hobby[i].checked = all.checked;
            if(all.checked){
                $('.truebtn').addClass('active');
            }else{
                $('.truebtn').removeClass('active');
            }
        }
    }


    // console.log(!$('.truebtn').hasClass(''))
    
    $('.truebtn').click(function(){
        if(!$('.truebtn').hasClass('active')){
            alert('请同意条款');
        }else{
            window.open("../html/register03.html");
        }
    })

    //点击拒接
    $('.flasebtn').click(function(){
        window.open("../html/登录页面.html");
    })
    
})