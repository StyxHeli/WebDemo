// JavaScript source code
window.onload = function () {
    var topbtn = document.getElementById('main-top');
    var istop = true;
    var timer = null;
    topbtn.onclick = function () {
        timer = setInterval(function () {
            var ostop = document.documentElement.scrollTop || document.body.scrollTop;
            var topspeeder = ostop-ostop / 10;
            document.documentElement.scrollTop = document.body.scrollTop = topspeeder;
            istop = false;
            if (ostop === 0) {
                clearInterval(timer);
            }
        },30);
        
    }
    window.onscroll = function () {
        
        if (istop) {
           clearInterval(timer);
        }
        istop = true;
        
    }
    ////tab选项的实现
    //function getid(id) {
    //    return typeof id === 'string' ? document.getElementById('id') : id;
    //}
    //var tab_btn = document.getElementsByClassName('index-panel-btngroup')[0].getElementsByTagName('a');
    //var tab_box = document.getElementsByClassName('index - panel - body')[0].getElementsByTagName('div');
    //for (var i = 0; i < tab_btn.length; i++) {
    //    tab_btn[i].onclick = function () {
    //        for (var j = 0; j < tab_btn.length; j++) {
    //            tab_btn[j].className = 'btn';
    //            tab_box[j].style.display = 'none';
    //        }
    //        this.className = 'btn active';
    //        tab_box[i].style.display = 'block';
    //    }
    //}
}