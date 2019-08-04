$(function () {
    class creatgoodstab{
        constructor(arr){
            this.arr = arr;
            this.links();
            this.leftnum = 0;
            this.rightnum = 3;
        }
        //处理标签
        links(){
            this.addcreattabhtml();
            this.addmouseclick();
            this.addbtn();
            this.addcreattime();
            // this.addmouseenter();
            $('.tabA-cont').eq(0).addClass('tabA-con').siblings().removeClass('tabA-con');
            $('.tabA-btns>li').eq(0).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
        }
        //创建标签
        addcreattabhtml(){
            let oDiv = document.createElement('div');
            oDiv.className = 'tabA-nav';
            let dataA = this.arr;
            let navtxt = '';
            let lis ="";
            // let arrlis = [];
            let oUlA = document.createElement('ul');
            oUlA.className = 'tabA-btns';

            let ptext = ` <p class="tabA-title">${dataA.title}</p>
                        <a class="goodsmost" href="#">更多&gt</a>
                        <span class="btn-left">&lt</span>
                        <span class="btn-right">&gt</span>
                        `
            $(oDiv).html(ptext);
            $('.tabA').append(oDiv);
            //遍历数据
            dataA.type.forEach(element =>{
                
                lis += `<li>${element.typelike}</li>`;
                // console.log(lis);
                // arrlis.push(lis);
                $(oUlA).html(lis);
                // console.log(oUlA)
                $(oDiv).append(oUlA);
                $('.tabA').append(oDiv);                
                //再次遍历数据
                navtxt = element.cont.map(item =>{
                    // console.log(item.oldprice)
                    if(item.oldprice.length == 4){
                        return `<li>
                    <a href="#"><img src="${item.contimg}"></a>
                    <p class="goodsname">${item.contname}</p><br>
                    <span class="newprice">￥${item.newprice}</span><span class="oldprice"></span>
                    </li>`
                    }else{
                        return `<li>
                        <a href="#"><img src="${item.contimg}"></a>
                        <p class="goodsname">${item.contname}</p><br>
                        <span class="newprice">￥${item.newprice}</span>&nbsp &nbsp<span class="oldprice">￥${item.oldprice}</span>
                        </li>`
                    }
                    
                }).join('');
                let oUlB = document.createElement('ul');
                oUlB.className = 'tabA-cont';
                $(oUlB).html(navtxt);
                $(oDiv).append(oUlA,oUlB);
            })
        }
        //创建函数方法
        // 鼠标点击事件
        addmouseclick(){
            $('.tabA-btns').on("click","li",function(){
                let num = $(this).index();
                $(this).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
                $('.tabA-cont').eq(num).addClass('tabA-con').siblings().removeClass('tabA-con');
            })
        }
        //右键点击事件
        addbtn(){
            let Num = $('.tabA-btns>li').length;
            console.log(Num)
            // this.btnnum = 0;
            //右键
            $('.btn-right').click(() =>{
                this.rightnum++
                console.log(this.rightnum);
                if(this.rightnum > 2){
                    this.rightnum = 0
                    $('.tabA-btns>li').eq(this.rightnum).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
                    $('.tabA-cont').eq(this.rightnum).addClass('tabA-con').siblings().removeClass('tabA-con');                    
                }else{
                    $('.tabA-btns>li').eq(this.rightnum).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');                    
                    $('.tabA-cont').eq(this.rightnum).addClass('tabA-con').siblings().removeClass('tabA-con');
                }
            })
            //左键
            $('.btn-left').click(() =>{
                // this.btnnum++
                this.leftnum--
                    console.log(this.leftnum);
                    if(this.leftnum < 0){
                        this.leftnum = 2;
                        $('.tabA-btns>li').eq(this.leftnum).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
                        $('.tabA-cont').eq(this.leftnum).addClass('tabA-con').siblings().removeClass('tabA-con');                    
                    }else{
                        $('.tabA-btns>li').eq(this.leftnum).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
                        $('.tabA-cont').eq(this.leftnum).addClass('tabA-con').siblings().removeClass('tabA-con');
                    }
                })
        }
        
        // 自动轮播事件
        addcreattime(){
            let num = 0;
            let timer = setInterval(function(){
                ++num
                if(num > 2){
                    num = 0;
                    $('.tabA-btns>li').eq(num).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
                    $('.tabA-cont').eq(num).addClass('tabA-con').siblings().removeClass('tabA-con');
                }else{
                    $('.tabA-btns>li').eq(num).addClass('tabA-btns-active').siblings().removeClass('tabA-btns-active');
                    $('.tabA-cont').eq(num).addClass('tabA-con').siblings().removeClass('tabA-con');
                }                    
            },2000)
            $('.tabA').hover(() =>{
                clearInterval(timer);
            },()=>{
                this.addcreattime();
            })
        }
    }
    let arr = tabData[0];
    let p = new creatgoodstab(arr);
})