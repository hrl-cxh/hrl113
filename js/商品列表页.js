$(function(){
    class navlist{
        constructor(navtabdata){
            this.navtabdata = navtabdata;
            this.links();
        }
        //处理标签
        links(){
            this.addcreatnavul();
            this.addcreatnavbodyul();
            this.addcreatmouse();
        }
        //创建顶部标签
        addcreatnavul(){
            let oUl = $("<ul></ul>");
            oUl.addClass("nav-tab-list clearfix");
            let lis = this.navtabdata.map((item)=>{
                return `<li><a href="#">${item.title}</a></li>`
            }).join('');
            oUl.html(lis);
            $('.nav-tab').append(oUl);
        }
        //创建顶部内容标签
        addcreatnavbodyul(){
            let lisA = '';
            let lisB = '';
            this.navtabdata.forEach(element =>{
               element.headdata.forEach(ele =>{
                //左边的ul
                lisA = ele.dataimg.map((item)=>{
                    return `<li><a href="#"><img src="${item.imgurl}">
                    <p>${item.imgname}</p>
                    </a></li>`
                }).join('');
                let oUlA = document.createElement("ul");
                oUlA.className = 'tab-img clearfix';
                $(oUlA).html(lisA);
                //右边的ul
                lisB = ele.textdata.map((item)=>{
                    return `<li><a href="#">${item}</a></li>`
                }).join('');
                let oUlB = document.createElement("ul");
                oUlB.className = 'tab-txt';
                $(oUlB).html(lisB);
                let oDiv = $('<div></div>');
                oDiv.addClass('goodsDiv');             
                oDiv.append(oUlA).append(oUlB);
                $('.tab-cont').append(oDiv);         
               })
            })
        }
        //鼠标滑入滑出事件
        addcreatmouse(){
            $('.nav-tab-list').on("mouseenter","li",function(){
                let num = $(this).index();
                // console.log(num);
                $(this).addClass('active').siblings().removeClass('active');
                // console.log($('.tab-cont').eq(num));
                $('.goodsDiv').eq(num).show().siblings().hide();
            })
            $('.top-tab').mouseleave(function () { 
                $('.nav-tab-list').children('li').removeClass('active');
                $('.goodsDiv').hide();
            });
        }
    }
    let navtab = new navlist(navtabdata);

    class bodylist{
        constructor(alldata){
            this.alldata = alldata;
            this.links();
        }
        links(){
            this.creathtml();
        }
        //处理页面的标签
        creathtml(){
            let oDiv = $('.goodslist-right-body');
            let oSpan = '';
            //遍历数据
            let html = this.alldata.map((item,num) =>{
                return `<div class="goodsShow">
                <div class="goodsShow-top">
                    <a href="#"><img src="${item.src}"></a>
                    <div class="goodsShow-top-title">
                                <span>${item.title}</span>
                        </div>
                </div>
                <div class="goodsShow-body">
                        <div class="goodsColor">
                                <ul class="goodsColor-list">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div><br>
                    <div class="goodscot">
                        <h2><a href="#">${item.name}</a></h2>
                        <p class="red">
                            ￥${item.newprice}
                            <del>￥${item.oldprice}</del>
                        </p>
                    </div>
                </div>
            </div>`
            }).join('');
            oDiv.html(html);
        }
    }

    //发送请求
    var strarr = decodeURIComponent(window.location.search.slice(1)) ;
    // console.log(strarr);
    var newarr = strarr.split('&');//数组
    var str = {};
        for(var i = 0;i < newarr.length;i++){
            var arr1 = newarr[i].split('=');
            // console.log(arr1);
            str[arr1[0]] = arr1[1];
        }
    var lisarr = str.newlis.split(',');
    let newhtml = '';
    for(let i = 0;i < lisarr.length;i++){
        console.log(lisarr[i]);
        newhtml += `<li><a href="#">${lisarr[i]}</a></li>`;
        $('.type-body-list2').eq(0).find('ul').html(newhtml);
    }
    //进行必要的封装
    function responseT(url){
        $.get({
            url:url,
            dataType:"json",
            success(res){
                console.log(eval(res))
                let nav = new bodylist(res);
            }
        })
            $('.navtitle').text(str.title);
            $('.goodsbody-left').text(str.title);
            $('.goodsname').text(str.title);
    }
    //进行判断
    if(str.num == 0){
        responseT('../server/data01.php');
    }else if(str.num == 1){
        responseT("../server/data02.php");
    }else if(str.num == 2){
        responseT("../server/data05.php");
    }else if(str.num == 3){
       responseT("../server/data03.php");
    }else if(str.num == 4){
       responseT("../server/data04.php");
    }
})