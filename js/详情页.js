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

    let imgdiv = $('.imgbox-top-show');
    //发送请求
    $.get({
        url:'../server/data06.php',
        dataType:"json",
        success(res){
            // console.log(eval(res))
            var strarr = decodeURIComponent(window.location.search.slice(1));
            let datares = eval(res)[strarr];
            console.log(datares);
            var newsrcarr = datares.src.split(',');//图片数组
            var newTitlearr = datares.Title.split(',');//标签数组
            var newtypelist = datares.typelist.split(',');
            var typetextlist = datares.typetextlist.split(',');
            var edition = datares.edition.split(',');
            var goodstype = datares.goodstype;
            var oid = datares.id;
            var memory = datares.memory.split(',');
            var name = datares.name;
            var price = datares.price.split(',');
            // console.log(goodstype,memory,price);
            //进行数据渲染
            $('.hrl-body-top>ul>li:eq(4)').text(name);
            $('.body-cont-right>h1').text(name);
            $('.pricebody-top span:eq(0)').text(goodstype);
            $('.pricebody-top span:eq(1)').text(price[0]);
            // console.log(newsrcarr[0]);
            $('.imgbox-top-show img:eq(0)').attr("src",newsrcarr[0]);
            //放大镜效果
            let bigimg = newsrcarr[0];
            console.log(bigimg);
            imgdiv.crxAmplify(bigimg);
            //面向对象
            class goodsData{
                constructor(newsrcarr,newTitlearr,typetextlist,newtypelist,memory,edition){
                    this.newsrcarr = newsrcarr;
                    this.newTitlearr = newTitlearr;
                    this.typetextlist = typetextlist;
                    this.newtypelist = newtypelist;
                    this.memory = memory;
                    this.edition = edition;
                    this.links();
                }
                //进行标签的处理
                links(){
                    this.creattitlehtml();
                    this.creatimghtml();
                    this.creattypehtml();
                    this.creattypehtml01();
                    this.creatconthtml();
                    this.createdition();
                }
                //创建图片标题
                creattitlehtml(){
                    let oUl = $('<ul></ul>');
                    oUl.addClass('titlelist');
                    let listitle = '';
                    for(var i = 0;i < newTitlearr.length;i++){
                        listitle += `<li>${newTitlearr[i]}</li>` 
                    }
                    oUl.html(listitle);
                    $('.imgbox-top-title').html(oUl);
                }
                //创建图片标签
                creatimghtml(){
                    let oUl = $('<ul></ul>');
                    oUl.addClass('imglist');
                    let lisimg = '';
                    for(var i = 0;i < newsrcarr.length;i++){
                        lisimg += ` <li>
                        <a href="#"><img src="${newsrcarr[i]}"></a>
                        </li>`
                    }
                    oUl.html(lisimg);
                    $('.imgsbox').html(oUl);
                }
                //创建样式介绍标签
                creattypehtml(){
                    let oUl = $('<ul></ul>');
                    oUl.addClass('typeboxlist');
                    let listype = '';
                    for(let i = 0;i < typetextlist.length;i++){
                            listype += `<li>
                            ${typetextlist[i]}
                            </li>`
                    }
                    // console.log(listype);
                    oUl.html(listype);
                    $('.typebox').html(oUl);
                }

                creattypehtml01(){
                    // console.log($('.typeboxlist'));
                }
                creatconthtml(){
                    let lisspan = '';
                    for(var i = 0;i < memory.length;i++){
                        lisspan += `<span class="cont1">${memory[i]}</span>`
                    }
                    // console.log(lisspan);
                    $('.contbox').html(lisspan);
                }
                createdition(){
                    let oUl = $('<ul></ul>');
                    oUl.addClass('editionlist clearfix');
                    let lisedition = '';
                    for(var i = 0;i<edition.length;i++){
                        lisedition += `<li>${edition[i]}</li>`
                    }
                    oUl.html(lisedition);
                    
                    $('.edition').html(oUl);
                }
            }
            let t1 = new goodsData(newTitlearr);
            let img1 = new goodsData(newsrcarr);
            let type1 = new goodsData(typetextlist);
            let memory1 = new goodsData(memory);
            let edition1 = new goodsData(edition);

            // console.log($(".imgsbox .imglist"))
            let imgA =  $('.imglist li:eq(1)').find('img').prop("src");
            let untprice = $('.pricebody-top span:eq(1)').text();
            let nameA = $('.body-cont-right h1').text();
            $('.btncar').click(function(){
                // console.log(imgA,untprice,nameA)
                $.ajax({
                    type: "post",
                    url: "../server/shoppingcar.php",
                    data: {
                        "name":nameA,
                        "price":untprice,
                        "src":imgA
                    },
                    // dataType: "json",
                    success: function (res) {
                        console.log(res);
                    }
                });
                window.location.href = "../html/购物车.html"
            })
        }
    })
    console.log( $('.imgsbox'));
    $('.imgsbox').on("click","img",function(){
        // console.log($(this));
        let imgsrc = $(this).prop("src");
        // console.log(imgsrc);
        imgdiv.crxAmplify(imgsrc);
    })
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

    //点击加入购物车
    // $('.btncar').click(function(){
    //    let imgA =  $('.imglist li:eq(1)').find('img').prop("src");
    //    console.log(imgA);
    //    let untprice = $('.pricebody-top span:eq(1)').text();
    //    console.log(untprice);
    //    let nameA = $('.body-cont-right h1').text();
    //    console.log(nameA);
    //    window.location.href = "http://127.0.0.1:1996/hrl113/html/%e8%b4%ad%e7%89%a9%e8%bd%a6.html?" + "src" + "=" + imgA + '&' + "name" + "=" + nameA + "&" + "price" + "=" + untprice;
    // })
    
})