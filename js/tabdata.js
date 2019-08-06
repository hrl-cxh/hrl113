//首页轮播图的图片数据
let bannnerimg = ["https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201905/190507_KV_GalaxyFold_720_855.jpg",
"https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201907/190730_kv_S10_720_855.jpg",
"https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201906/190701_KV_Activities-5G_720_855.jpg",
"https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201906/190627_KV_A60_720_855.jpg",
"https://res.samsungshop.com.cn/resources/ckimg/images/KVbanner/2019/201905/190507_KV_SmartHone_720_855.jpg"
]

//头部tab选项卡数据
let navtabdata = [
{
    "title":"智能手机",
    "headdata":[{
        "dataimg":[{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/2/18/15504709847698566_293X293.jpg?version=000000?version=000000?version=000000?version=000000",
            "imgname":"Galaxy S10+"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/2/17/15504155281862942_293X293.jpg?version=000000?version=000000?version=000000?version=000000",
            "imgname":"Galaxy S10"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/7/5/15623069730323459_293X293.jpg?version=000000",
            "imgname":"Galaxy A80"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/4/22/15559424941404450_293X293.jpg?version=000000?version=000000",
            "imgname":"Galaxy A60"
        }],
        "textdata":["Galaxy S系列","Galaxy Note系列","Galaxy A系列","三星 W系列"]
    }]
},{
    "title":"可穿戴设备",
    "headdata":[{
        "dataimg":[{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/3/14/15525681558852907_293X293.jpg?version=000000?version=000000",
            "imgname":"Galaxy Watch Active"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/4/2/15541983080223748_293X293.jpg?version=000000",
            "imgname":"Samsung Galaxy Buds"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2018/11/6/1541493180630352_293X293.jpg?version=000000?version=000000?version=000000",
            "imgname":"Samsung Galaxy Watch LTE版 46mm钛泽银"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2018/8/27/15353647882218146_293X293.jpg?version=000000",
            "imgname":"Samsung Galaxy Watch 蓝牙版46mm钛泽银"
        }],
        "textdata":["null"]
    }]
},{
    "title":"个人电脑",
    "headdata":[{
        "dataimg":[{
            "imgurl":"//res.samsungeshop.com.cn/resources/2018/8/29/15355228234576478_293X293.jpg?version=000000?version=000000?version=000000?version=000000?version=000000",
            "imgname":"Galaxy Tab S4 4G"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/6/4/15596515893208845_293X293.jpg?version=000000",
            "imgname":"Galaxy Tab S5e WLAN"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/2/10/1549775537279973_293X293.jpg?version=000000?version=000000",
            "imgname":"三星笔记本星曜 930XBE-K03"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/2/10/15497751284773365_293X293.jpg?version=000000?version=000000",
            "imgname":"三星笔记本星曜Pen Pro 930SBE-K01"
        }],
        "textdata":["笔记本电脑","平板电脑"]
    }]
},{
    "title":"智能家居",
    "headdata":[{
        "dataimg":[{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/4/28/15564331187835410_293X293.jpg?version=000000?version=000000",
            "imgname":"智能网关"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/4/28/15564340874093155_293X293.jpg?version=000000",
            "imgname":"智能插座"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/4/26/15562879950204535_293X293.jpg?version=000000?version=000000",
            "imgname":"智能空气检测器"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/4/26/15562878106311801_293X293.jpg?version=000000?version=000000",
            "imgname":"智能遥控器"
        }],
        "textdata":["健康生活类","便携生活类","安全智能类","时尚酷玩类"]
    }]
},{
    "title":"配件",
    "headdata":[{
        "dataimg":[{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/3/6/1551881426669526_293X293.jpg?version=000000",
            "imgname":"Galaxy S10e 硅胶保护壳"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/3/7/15519513725999160_293X293.jpg?version=000000",
            "imgname":"Galaxy S10 镜面保护套"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2019/3/6/15518858188075006_293X293.jpg?version=000000",
            "imgname":"Galaxy S10+ 立式保护壳"
        },{
            "imgurl":"//res.samsungeshop.com.cn/resources/2016/2/23/14562364928204697_293X293.jpg?version=000000",
            "imgname":"Level U 项圈蓝牙耳机"
        }],
        "textdata":["保护类","电源类","音频类","存储类","连接类"]
    }]
}]

//商品tabA的数据
let tabData =[
{
    "title":"配件",
    "type":[{
        "typelike":"保护类",
        "cont":[{
            "contimg":"//res.samsungeshop.com.cn/resources/2019/3/7/15519516124734642_293X293.jpg",
            "contname":"Galaxy S10+ 镜面保护套",
            "newprice":"299.00",
            "oldprice":"428.00"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2019/3/6/15518820342713454_293X293.jpg",
            "contname":"Galaxy S10+ 硅胶保护壳",
            "newprice":"199.00",
            "oldprice":"null"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2019/3/7/15519512483869399_293X293.jpg",
            "contname":"Galaxy S10 镜面保护套",
            "newprice":"299.00",
            "oldprice":"428.00"
        },{
            "contimg":"http://res.samsungeshop.com.cn/resources/2019/4/8/15546926546034125_293X293.jpg",
            "contname":"Galaxy S10 复仇者联盟智能保护壳",
            "newprice":"299.00",
            "oldprice":"null"
        }]
    },{
        "typelike":"音频类",
        "cont":[{
            "contimg":"//res.samsungeshop.com.cn/resources/2019/3/14/15525742797923937_293X293.jpg",
            "contname":"AKG Y100BT 颈挂式无线蓝牙耳机",
            "newprice":"699.00",
            "oldprice":"null"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2019/3/14/15525741041235304_293X293.jpg",
            "contname":"AKG Y500BT 贴耳式无线蓝牙耳机",
            "newprice":"1299.00",
            "oldprice":"null"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2017/6/13/14973423410549132_293X293.jpg",
            "contname":"弹力项圈运动耳机",
            "newprice":"478.00",
            "oldprice":"null"
        },{
            "contimg":"https://res.samsungeshop.com.cn/resources/2016/10/18/14767790194327396_293X293.jpg",
            "contname":"入耳式耳机",
            "newprice":"79.00",
            "oldprice":"null"
        }]
    },{
        "typelike":"电源类",
        "cont":[{
            "contimg":"//res.samsungeshop.com.cn/resources/2018/9/14/15369125090493796_293X293.jpg",
            "contname":"双项无线充电底座",
            "newprice":"608.00",
            "oldprice":"null"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2018/9/17/15371662451577595_293X293.jpg",
            "contname":"无线充电底座",
            "newprice":"458.00",
            "oldprice":"null"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2017/4/25/14931092631565933_293X293.jpg",
            "contname":"三星 旅行充电器 Type C",
            "newprice":"108.00",
            "oldprice":"null"
        },{
            "contimg":"//res.samsungeshop.com.cn/resources/2018/11/28/15433955099442350_293X293.jpg",
            "contname":"双向加速充电移动电源 10000毫安",
            "newprice":"149.00",
            "oldprice":"null"
        }]
    }]
},{
    "title":"为你推荐",
    "type":[{
        "typelike":"智能手机",
        "cont":[{
            "Label":"立减",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/2/17/15504164072644304_293X293.jpg",
            "contname":"Galaxy S10 512GB版本",
            "newprice":"7699.00",
            "oldprice":"null"
        },{
            "label":"立减",
            "contimg":"//res.samsungeshop.com.cn/resources/2018/9/11/15366540724936366_293X293.jpg",
            "contname":"Galaxy Note9",
            "newprice":"4999.00",
            "oldprice":"6999.00"
        },{
            "label":"立减",
            "contimg":"//res.samsungeshop.com.cn/resources/2018/10/18/15398552452035605_293X293.jpg",
            "contname":"Galaxy A6s",
            "newprice":"999.00",
            "oldprice":"1799.00"
        },{
            "label":"新品",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/7/11/15628312139038808_293X293.jpg",
            "contname":"Galaxy A40s",
            "newprice":"1499.00",
            "oldprice":"null"
        }]
    },{
        "typelike":"可穿戴设备",
        "cont":[{
            "label":"热销",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/4/2/15541984397739072_293X293.jpg",
            "contname":"Samsung Galaxy Buds",
            "newprice":"999.00",
            "oldprice":"null"
        },{
            "label":"新品",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/6/24/15613819425783094_293X293.jpg",
            "contname":"Galaxy Watch Active",
            "newprice":"1399.00",
            "oldprice":"1599.00"
        },{
            "label":"热销",
            "contimg":"//res.samsungeshop.com.cn/resources/2018/11/6/1541493180630352_293X293.jpg",
            "contname":"Samsung Galaxy Watch LTE版 46mm钛泽银",
            "newprice":"2299.00",
            "oldprice":"2499.00"
        },{
            "label":"热销",
            "contimg":"//res.samsungeshop.com.cn/resources/2018/8/27/15353646476566650_293X293.jpg",
            "contname":"Samsung Galaxy Watch 蓝牙版42mm",
            "newprice":"1899.00",
            "oldprice":"2099.00"
        }]
    },{
        "typelike":"平板电脑",
        "cont":[{
            "label":"新品",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/6/4/15596519191798793_293X293.jpg",
            "contname":"Galaxy Tab S5e 4G",
            "newprice":"3599.00",
            "oldprice":"null"
        },{
            "label":"新品",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/5/30/15592263578179518_293X293.jpg",
            "contname":"Galaxy Tab A(2019 10.1英寸)",
            "newprice":"1699.00",
            "oldprice":"null"
        },{
            "label":"热销",
            "contimg":"//res.samsungeshop.com.cn/resources/2018/8/29/15355228234576478_293X293.jpg",
            "contname":"Galaxy Tab S4 4G",
            "newprice":"5388.00",
            "oldprice":"5888.00"
        },{
            "label":"立减",
            "contimg":"//res.samsungeshop.com.cn/resources/2018/8/27/15353740973471156_293X293.jpg",
            "contname":"Galaxy Tab E",
            "newprice":"699.00",
            "oldprice":"1199.00"
        }]
    },{
        "typelike":"笔记本电脑",
        "cont":[{
            "label":"新品",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/6/18/15608425316964536_293X293.jpg",
            "contname":"三星星曜 750XBE-X02",
            "newprice":"8499.00",
            "oldprice":"null"
        },{
            "label":"新品",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/6/18/15608612396211979_293X293.jpg",
            "contname":"三星星曜 750XBE-X03",
            "newprice":"9999.00",
            "oldprice":"null"
        },{
            "label":"热销",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/4/3/15542943462071119_293X293.jpg",
            "contname":"三星星曜Pen 930MBE-K01",
            "newprice":"7999.00",
            "oldprice":"null"
        },{
            "label":"热销",
            "contimg":"//res.samsungeshop.com.cn/resources/2019/2/10/15497751284773365_293X293.jpg",
            "contname":"三星星曜Pen Pro930SBE-K01",
            "newprice":"9999.00",
            "oldprice":"null"
        }]
    }]
}]
 
//商品tabB的数据
let hotgoodsdata = [{
    "title":"热销",
    "imgurl":"//res.samsungeshop.com.cn/resources/2019/2/18/15504714179943326_293X293.jpg",
    "imgname":"Galaxy S10+",
    "discount":"好礼三选一 享12期免息",
    "newprice":"6999.00",
    "oldprice":"null"
},{
    "title":"新品",
    "imgurl":"//res.samsungeshop.com.cn/resources/2019/7/11/15628306744615279_293X293.jpg",
    "imgname":"Galaxy A60",
    "discount":" 桃桃汽汽 新色上市",
    "newprice":"1499.00",
    "oldprice":"null"
},{
    "title":"立减",
    "imgurl":"//res.samsungeshop.com.cn/resources/2018/3/14/15210101574116158_293X293.jpg",
    "imgname":"Galaxy S9+ 128GB版本",
    "discount":"优惠1500元 享6期免息",
    "newprice":"4999.00",
    "oldprice":"6499.00"
},{
    "title":"新品",
    "imgurl":"//res.samsungeshop.com.cn/resources/2019/7/5/15623069730323459_293X293.jpg",
    "imgname":"Galaxy A80",
    "discount":"新品上市 享多重好礼",
    "newprice":"3799.00",
    "oldprice":"null"
}]

 //列表页的数据
 let alldata = [{"src":"https://res.samsungeshop.com.cn/resources/2018/12/18/15451213504452651_293X293.jpg","title":["立减","免息","以旧换新"],"name":"Galaxy A8s","newprice":"2,299.00 ","oldprice":"2,799.00"},{"src":"https://res.samsungeshop.com.cn/resources/2019/2/2/15490874562193163_293X293.jpg","title":["免息","立减","以旧换新"],"name":"Galaxy A8s 独角精灵版","newprice":"2,299.00 ","oldprice":"2,799.00"},{"src":"https://res.samsungeshop.com.cn/resources/2018/10/18/15398552452035605_293X293.jpg","title":["以旧换新","免息","立减"],"name":"Galaxy A6s","newprice":"1,099.00 ","oldprice":"1,799.00"},{"src":"https://res.samsungeshop.com.cn/resources/2019/4/8/15547252978034623_293X293.jpg","title":["买赠","以旧换新","免息"],"name":"Galaxy A70","newprice":"2,499.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2019/7/11/15628304530278037_293X293.jpg","title":["免息","以旧换新"],"name":"Galaxy A60","newprice":"1,499.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2019/2/18/15504711032362897_293X293.jpg","title":["以旧换新","免息","买赠"],"name":"Galaxy S10+","newprice":"6,999.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2019/2/17/15504155281862942_293X293.jpg","title":["免息","以旧换新","立减","买赠"],"name":"Galaxy S10 512GB版本","newprice":"7,699.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2019/5/6/15571498061202164_293X293.jpg","title":["以旧换新","买赠","免息"],"name":"Galaxy S10 128GB版本","newprice":"5,999.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2019/2/17/1550410045798370_293X293.jpg","title":["免息","买赠","以旧换新"],"name":"Galaxy S10e","newprice":"4,999.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2018/5/16/15264003736188063_293X293.jpg","title":["立减","免息","以旧换新","买赠"],"name":"Galaxy S9+ 128GB版本","newprice":"4,999.00 ","oldprice":"6,499.00"},{"src":"https://res.samsungeshop.com.cn/resources/2019/7/5/15623069730323459_293X293.jpg","title":["买赠","以旧换新","免息"],"name":"Galaxy A80","newprice":"3,799.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2019/7/11/15628311282727081_293X293.jpg","title":["免息","以旧换新","买赠"],"name":"Galaxy A40s","newprice":"1,499.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2018/2/2/15175446114305800_293X293.jpg","title":["免息","以旧换新"],"name":"Galaxy S8","newprice":"2,899.00 ","oldprice":"3,999.00"},{"src":"https://res.samsungeshop.com.cn/resources/2019/4/4/15543665518086095_293X293.jpg","title":["免息","买赠","以旧换新"],"name":"三星W2019","newprice":"11,999.00","oldprice":"13,999.00"},{"src":"https://res.samsungeshop.com.cn/resources/2018/9/11/15366540335357282_293X293.jpg","title":["立减","免息","买赠","以旧换新"],"name":"Galaxy Note9","newprice":"4,999.00 ","oldprice":"6,999.00"},{"src":"https://res.samsungeshop.com.cn/resources/2018/10/18/15398549555149501_293X293.jpg","title":["免息","以旧换新","立减"],"name":"Galaxy A9s","newprice":"2,099.00 ","oldprice":"3,499.00"},{"src":"https://res.samsungeshop.com.cn/resources/2018/5/16/15264005466986136_293X293.jpg","title":["免息","立减"],"name":"Galaxy S9 128GB版本","newprice":"5,499.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2017/10/26/15090125810976415_293X293.jpg","title":["免息","立减","买赠"],"name":"Galaxy Note8","newprice":"6,988.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2018/2/23/15193794818233731_293X293.jpg","title":["免息"],"name":"Galaxy S9 64GB版本","newprice":"5,199.00","oldprice":""},{"src":"https://res.samsungeshop.com.cn/resources/2018/2/11/15183123601124046_293X293.jpg","title":["免息","立减"],"name":"Galaxy S8+","newprice":"3,499.00 ","oldprice":"4,499.00"}]
 
 
