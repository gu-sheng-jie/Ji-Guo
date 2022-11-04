// 找到button
var playMore_ = document.querySelectorAll('button')[0];
// 点击事件
playMore_.onclick = function () {
    var playMore_ = document.querySelectorAll('button')[0];
    playMore_.setAttribute('class', 'loading')
    playMore_ = setTimeout(function () {
        Get()
        var playMore_ = document.querySelectorAll('button')[0];
        playMore_.setAttribute('class', 'more-btn')
    }, 2000)
}
clearInterval(playMore_)

// ajax
var dataList = [];
function Get() {

    var ajax_ = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP");
    ajax_.open('get', 'http://127.0.0.1:3000/guid/hot', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var json_ = ajax_.responseText;
                dataList = JSON.parse(json_);
                show();
                console.log(dataList);
            } else {
                console.log('error');
            }
        }
    }
}
// var index = 0
var ul_ = document.getElementsByTagName('ul')[1]
function show() {
    // 拼接字符串

    var str = '';
    for (var item of dataList) {

        str += `
                <li>
                <a href="./Coldplay-a.html">
               <img src="${item.img}" width="220" height="130" >
               <div class="info">
               <p class='name'>
               ${item.text}
               <span >搭载自动避障系统</span>
                 <div class="txe">
                 <span class="txe-1">
                 ￥ 433
                </span>
                <div class="txe-2">
                <span class="xin"><img src="../img/xin.png">${item.like}</span>
                <span class="xin2"><img src="../img/xin.png"> ${item.words}</span>
                 </div>
                 </div>
                </p>
                </div>
                </a> 
               </li>
                `

        ul_.innerHTML += str

    }
    index++;
    if (index == 4) {
        // console.log('111111111');
        // // playMore_.innerHTML = '页面加载完毕'
        // playMore_.style.display = "none";
        setTimeout(function () {
            var playMore_ = document.querySelectorAll('button')[0];
            playMore_.style.opacity = 0;
        }, 500)

    }
}
// 找到心点击
var xin = document.getElementsByClassName('xin');
var xin1 = document.getElementsByClassName('xin_');
console.log(xin);
let sun_ = 1
for (var i = 0; i < xin1.length; i++) {
    xin[i].setAttribute('index',i)
    xin[i].onclick = function () {
        sun_++
        var index = this.getAttribute('index')
        if(sun_%2==0){
            console.log(index);
            xin[index].background= 'url()no-repeat 0px center'
            // alert('11')
        }else{
            // xin1[index].className = 'xin1_'
            xin[index].src= '../../img/xin.png'
        }
    }
}


