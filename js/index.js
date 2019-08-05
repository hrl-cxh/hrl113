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
                return `<li><a href="http://127.0.0.1:1996/hrl113/html/商品列表页.html#">${item.title}</a></li>`
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
    
    $('.banner').crxCarousel({
        type: "horizontal",
        imgUrl: ["https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201907/190719_KV_A80_1220_427.jpg",
        "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201907/190730_kv_S10_1220_427.jpg",
        "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201906/190701_KV_Activities-5G_1220_427.jpg",
        "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201906/190627_KV_A60_1220_427.jpg",
        "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201905/190507_KV_SmartHone_1220_427.jpg",
        "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201905/190507_KV_GalaxyFold_1220_427.jpg"],
        aUrl: ["#","#","#","#","#"],
        zykey: false,
        page: false,
        position: "center"
    })

    $('.activity-region').crxCarousel({
        type: "horizontal",
        imgUrl:["https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201905/190506_W2019_1220_184.jpg",
                "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201905/190430_GalaxyBuds_1220_184.jpg",
                "https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201906/20190618_MKV_TabS5e_1220_184.jpg"],
        aUrl: ["#","#","#"],
        zykey: false,
        page: false,
        position: "center"
    })

    class hotgoodslist{
        constructor(hotgoodsdata){
            this.hotgoodsdata = hotgoodsdata;
            this.links();
        }
        links(){
            this.createhtml();
        }
        //进行标签的处理
        createhtml(){
            // console.log(this.hotgoodsdata)
            let arrhot = this.hotgoodsdata.map((item) =>{
                if(item.oldprice.length == 4){
                    return`<div class="hotbox">
                <div>
                    <a href="#"><img src="${item.imgurl}" alt=""></a>
                    <h3>${item.imgname}<br>
                        <p>${item.discount}</p>
                    </h3>
                    <span>￥${item.newprice}</span><span></span>
                </div>
                <span class="classhot">${item.title}</span>
            </div>`
                }else{
                    return`<div class="hotbox">
                <div>
                    <a href="#"><img src="${item.imgurl}" alt=""></a>
                    <h3>${item.imgname}<br>
                        <p>${item.discount}</p>
                    </h3>
                    <span>￥${item.newprice}</span>&nbsp<span class="oldprice">￥${item.oldprice}</span>
                </div>
                <span class="classhot">${item.title}</span>
            </div>`
                }
                
            }).join('');
            console.log(arrhot);
            $('.hot-goods-list').html(arrhot);
        }
    }
    new hotgoodslist(hotgoodsdata);

    
})