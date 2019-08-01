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
            let oDivA = $("<div></div>");
            oDivA.addClass("tab-cont-left");
            this.navtabdata.forEach(element =>{
               element.headdata.forEach(ele =>{
                let lisA = ele.dataimg.map((item)=>{
                    return `<li><a href="#"><img src="${item.imgurl}">
                    <p>${item.imgname}</p>
                    </a></li>`
                }).join('');
                let oUlA = `<ul>${lisA}</ul>`
                console.log(oUlA);
               })
            })
        }
    }
    let navtab = new navlist(navtabdata);
})