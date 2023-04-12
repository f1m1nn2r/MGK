


var sc01_img = document.querySelectorAll('.section01-inner .lf > div');
var sc01_bcbg = document.querySelectorAll('.division');
window.addEventListener('scroll', function(){
    
    for(var i=0; i<sc01_img.length; i++){
        for(var j=0; j<sc01_bcbg.length; j++){
            var sc01_img_ot = sc01_img[i].offsetTop;
            if(window.scrollY >= sc01_img_ot - 250){
                sc01_img[i].classList.add('filter');
                sc01_bcbg[i].classList.add('show_');
            }else{
                sc01_img[i].classList.remove('filter');
                sc01_bcbg[i].classList.remove('show_');
            }
        }
        
    }
});