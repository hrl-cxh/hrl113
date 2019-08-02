$(function () {
    class creatgoodstab{
        constructor(tabData){
            this.tabData = tabData;
            this.links();
        }
        //处理标签
        links(){
            this.addcreattabhtml();

        }
        //创建标签
        addcreattabhtml(){
            let oDiv = document.createElement('div');
            oDiv.className = 'tabA-nav';
            let dataA = this.tabData[0];
            let navtxt = '';
            let lis ='';

            let ptext = ` <p class="tabA-title">${dataA.title}</p>
                <a class="goodsmost" href="#">更多&gt</a>`
            $(oDiv).html(ptext);
            $('#tabA').append(oDiv);
            //遍历数据
            dataA.type.forEach(element =>{
                let oUlA = document.createElement('ul');
                oUlA.className = 'tabA-btns';
                lis += `<li>${element.typelike}</li>`;
                $(oUlA).html(lis);
                // console.log(oUlA)
                $(oDiv).append(oUlA);
                $('#tabA').append(oDiv);                

                navtxt = element.cont.map(item =>{
                    return `<li>
                    <a href="#"><img src="${item.contimg}"></a>
                    <p class="goodsname">${item.contname}</p><br>
                    <span class="newprice">￥${item.newprice}</span><span class="oldprice">￥${item.oldprice}</span>
                </li>`
                }).join('');
                let oUlB = document.createElement('ul');
                oUlB.className = 'tabA-cont';
                $(oUlB).html(navtxt);
                $(oDiv).append(oUlA,oUlB);
            })
            
        }
    }
    let p = new creatgoodstab(tabData);
})