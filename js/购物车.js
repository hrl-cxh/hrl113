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

    
    // 发送请求获取数据
    $.get({
        url:"../server/data07.php",
        dataType:"json",
        success(res){
            console.log(eval(res))
            let goodssrc = res[0].src;
            let goodsname = res[0].name;
            let goodsprice = res[0].price;
            console.log(goodssrc,goodsname,goodsprice)
            //进行渲染
            // class{
            //     constructor(){

            //     }
            // }
        }
    })
})