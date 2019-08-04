$(function () {
    class creatgoodstab{
        constructor(arr){
            this.arr = arr;
            this.links();
            this.leftnum = 0;
            this.rightnum = 5;
        }
        //处理标签
        links(){
            this.addcreattabhtml();
            this.addmouseclick();
            this.addbtn();
            this.addcreattime();
            // this.addmouseenter();
            $('.tabB-cont').eq(0).addClass('tabB-con').siblings().removeClass('tabB-con');
            $('.tabB-btns>li').eq(0).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
        }
        //创建标签
        addcreattabhtml(){
            let oDiv = document.createElement('div');
            oDiv.className = 'tabB-nav';
            let dataB = this.arr;
            let navtxt = '';
            let lis ="";
            // let arrlis = [];
            let oUlA = document.createElement('ul');
            oUlA.className = 'tabB-btns';

            let ptext = ` <p class="tabB-title">${dataB.title}</p>
                        <a class="goodsmost" href="#">更多&gt</a>
                        <span class="btn-left">&lt</span>
                        <span class="btn-right">&gt</span>
                        `
            $(oDiv).html(ptext);
            $('.tabB').append(oDiv);
            //遍历数据
            dataB.type.forEach(element =>{
                
                lis += `<li>${element.typelike}</li>`;
                // console.log(lis);
                // arrlis.push(lis);
                $(oUlA).html(lis);
                // console.log(oUlA)
                $(oDiv).append(oUlA);
                $('.tabB').append(oDiv);                
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
                oUlB.className = 'tabB-cont';
                $(oUlB).html(navtxt);
                $(oDiv).append(oUlA,oUlB);
            })
        }
        //创建函数方法
        // 鼠标点击事件
        addmouseclick(){
            $('.tabB-btns').on("click","li",function(){
                let num = $(this).index();
                $(this).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
                $('.tabB-cont').eq(num).addClass('tabB-con').siblings().removeClass('tabB-con');
            })
        }
        //右键点击事件
        addbtn(){
            let Num = $('.tabB-btns>li').length;
            console.log(Num)
            // this.btnnum = 0;
            //右键
            $('.btn-right').click(() =>{
                this.rightnum++
                console.log(this.rightnum);
                if(this.rightnum > 3){
                    this.rightnum = 0
                    $('.tabB-btns>li').eq(this.rightnum).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
                    $('.tabB-cont').eq(this.rightnum).addClass('tabB-con').siblings().removeClass('tabB-con');                    
                }else{
                    $('.tabB-btns>li').eq(this.rightnum).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');                    
                    $('.tabB-cont').eq(this.rightnum).addClass('tabB-con').siblings().removeClass('tabB-con');
                }
            })
            //左键
            $('.btn-left').click(() =>{
                // this.btnnum++
                this.leftnum--
                    console.log(this.leftnum);
                    if(this.leftnum < 0){
                        this.leftnum = 3;
                        $('.tabB-btns>li').eq(this.leftnum).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
                        $('.tabB-cont').eq(this.leftnum).addClass('tabB-con').siblings().removeClass('tabB-con');                    
                    }else{
                        $('.tabB-btns>li').eq(this.leftnum).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
                        $('.tabB-cont').eq(this.leftnum).addClass('tabB-con').siblings().removeClass('tabB-con');
                    }
                })
        }
        
        // 自动轮播事件
        addcreattime(){
            let num = 0;
            let timer = setInterval(function(){
                ++num
                if(num > 3){
                    num = 0;
                    $('.tabB-btns>li').eq(num).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
                    $('.tabB-cont').eq(num).addClass('tabB-con').siblings().removeClass('tabB-con');
                }else{
                    $('.tabB-btns>li').eq(num).addClass('tabB-btns-active').siblings().removeClass('tabB-btns-active');
                    $('.tabB-cont').eq(num).addClass('tabB-con').siblings().removeClass('tabB-con');
                }                    
            },2000)
            $('.tabB').hover(() =>{
                clearInterval(timer);
            },()=>{
                this.addcreattime();
            })
        }
    }
    let arr = tabData[1];
    let p = new creatgoodstab(arr);
})