$(() =>{
    let head = document.getElementsByClassName('registernav')[0];
    let navheight = $('.registernav').height();
    console.log(head);
    window.onscroll = function(){
    let y = window.scrollY;
        if(y > navheight){
           $(head).addClass('registernav fixed');
        }else{
           $(head).removeClass('fixed');
        }
    }
    $('.btn').click(function(){
        window.open('../html/register02.html');
    })
})