let cookieall = {
    setcookie(key,value,day){
            if(day){
                let daytime = new Date();
                daytime.setDate(daytime.getDate() + day);
                document.cookie = key + '=' + value + ";expires=" + daytime;
            }else{
                document.cookie = key + '=' + value;
            }
        },
        //读取cookie里面的内容
    getcookie(key){
            let arr = document.cookie.split("; ");
            // let getarr = [];
            for(let i = 0;i < arr.length;i++){
                let arr1 = arr[i].split("=");
                if(arr1[0] == key){
                    return arr1[1];
                }
            }
        },
        //删除cookie
    removecookie(key){
            //设置当前cookie为当前时间的前一天
            setcookie(key,'',-1);
        },
        //清除所有cookie
    clearcookie(){
            //获取所有的cookie
            let cookiedata = getcookie();
            // console.log(cookiedata);
            cookiedata.forEach(element =>{
                setcookie(element,'',-1);
            });
        }
}

