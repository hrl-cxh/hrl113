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
                    return `<li><a href=""><img src="${item.imgurl}">
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

    //进行渲染
    class divHTML{
        constructor(){
            this.links();
        }
        //处理函数
        links(){
            this.creatdivhtml();
            this.addclick();
            // this.addpricec();
            // console.log($(".btnNum"));

        }
        //创建标签
        creatdivhtml(){
            $.get({
                url:"../server/data07.php",
                dataType:"json",
                success(res){
                    // console.log(res)
                    // 进行渲染
                    let divbox = '';
                    res.forEach((item)=>{
                    console.log(item);
                    divbox += `<div class="likeGoods clearfix">
                    <div class="btngood">
                        <input class="checkA" type="checkbox" name="hobby">
                    </div>
                    <div class="likeshow">
                        <div class="imgbox1">
                            <img src="${item.src}" style="width: 70px;height: 70px;">
                        </div>
                        <span>${item.name}</span>
                    </div>
                    <div class="unitPrice">
                        <span>￥${item.price}</span>
                    </div>
                    <div class="integoods">
                        <span>${item.price.substr(0,4)}</span>
                    </div>
                    <div class="strNumer">
                        <input value="1" class="btnNum" type="number">
                        <span class="removegoods"><a href="#" id="${item.id}" onclick="window.location.reload();">删除</a></span>
                    </div>
                    <div class="allprice">
                        <span>￥${item.price}</span>
                    </div>
                    </div>`
                    $('.shop-body-goods').html(divbox);
                   })

                // 价格变化
                let btnNum = $('.btnNum');
                let allprice = $(".allprice span");
                let allDiv = $('.shop-body-goods .likeGoods');
                // console.log(allDiv);
                let newarr1 = [];
                btnNum.map((index,item) =>{
                    console.log(item);
                    item.oninput = function(){
                        let numall = $(this).val();
                        let allnums = $(this).parent(".strNumer").siblings(".unitPrice").children("span");
                        let onlyprice =  allnums.text().substr(1);
                        let allpriceA = onlyprice * numall;
                        $(this).parent(".strNumer").siblings(".allprice").children("span").text('￥'+allpriceA);
                        $(this).parent(".strNumer").siblings(".integoods").children("span").text(allpriceA);
                        ppt();
                    }
                })
                function ppt(){
                    let allppt =  allDiv.find(".allprice").find('span');
                    let numA = 0;
                    for(var i = 0;i < allppt.length;i++){
                        numA += Number(allppt[i].innerText.slice(1));
                    }
                    $('.footer-right1 span:eq(1)').text("￥"+numA);
                    $('.footer-right2 span:eq(1)').text(numA);
                }
                ppt();

                //实现全选 反选
                let hobby = document.getElementsByName('hobby');
                let all = document.querySelector("#btns");
                // console.log(hobby);
                all.onclick = function(){
                    for(var i = 0; i < hobby.length; i++){
                        hobby[i].checked = all.checked;
                    }
                }

                //通过全选控制单选
                $(hobby).click(function(){
                    if($(hobby).filter(":checked").length == hobby.length){
                        $(all).prop("checked",true);
                    }else{
                        $(all).prop("checked",false);
                    }
                })

                //点击删除数据
                let regoods = $(".removegoods a");
                console.log(regoods);
                for(var i = 0;i<regoods.length;i++){
                    $(regoods[i]).click(function () { 
                        console.log($(this).attr("id"));
                        let goodsid = ($(this).attr("id"));
                        $.ajax({
                            type: "post",
                            url: "../server/data08.php",
                            data: {
                                "id":goodsid
                            },
                            // dataType: "json",
                            success: function (res) {
                                console.log(res);
                            }
                        });
                        
                     })
                }   
            }
            })
        }
        //全选，单选
        addclick(){
            

        }
    }
    let p = new divHTML();

    //吸顶效果
    let head = document.getElementsByClassName('top-tab')[0];
    let navheight = $('.top-tab').height();
    // console.log(head);
    window.onscroll = function(){
    let y = window.scrollY;
        if(y > navheight){
           $(head).addClass('top-tab fixed');
        }else{
           $(head).removeClass('fixed');
        }
    }

    //点击跳转列表页
    $('.nav-tab-list').on("click","li",function(){
        let num = $(this).index();
        let text = $(this).text();
        let newlist = [];
        console.log($('.tab-txt').eq(num).find('li'));
        $('.tab-txt').eq(num).find('li').map((item,index) =>{
            console.log(item,index);
            newlist.push($(index).text());
        })
        console.log(newlist.join(','));
        let strA = newlist.join(',');

        window.location.href = "http://127.0.0.1:1996/hrl113/html/商品列表页.html?"+ "num" + '=' + num + '&' + "title" + '=' + text + '&' + "newlis" + '=' + strA;        
    })

    //显示用户名
    let hrlnum = Cookie.getCookie("namestr");
    console.log(hrlnum);
    $('.denglu').text(hrlnum);
    if(hrlnum == 0){
        $('.denglu').text("登录");
    }
    // 点击注销用户
    $('.zhuxiao').click(function(){
        Cookie.clearCookie("/");
        // $('.denglu').text("登录");
    })
})

