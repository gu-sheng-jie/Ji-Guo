// 体验师专享
var a_ = document.querySelectorAll('.nav-b1  a');

for (var i = 0; i < a_.length; i++) {
    a_[i].setAttribute('index', i);

    a_[i].onclick = function() {

        var index = this.getAttribute('index');
        for (var j = 0; j < a_.length; j++) {

            a_[j].className = '';
            a_[index].className = 'clr';
        }
        return false;
    }

}



// 数据加载

var btn = document.querySelector('.more button'); //找到按钮
var load = document.querySelector('.more .load'); //找到正在加载中~~~
var ul = document.querySelector('.all ul'); //找到ul


var dataList = [];

function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('')
    ajax_.open('get', 'http://127.0.0.1:3000/useing/master')
    ajax_.send()
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = ajax_.responseText;
                dataList = JSON.parse(data)


                btn.style.display = 'none';
                load.style.display = 'block';
                // 当点击后 1秒后再调用show
                setTimeout(function() {
                    show()
                }, 1000)


            } else {
                console.log('加载错误');
            }
        }
    }
}
// 渲染数据
var flg = true; //开关

function show() {
    // var str = '';
    for (var item of dataList) {
        // str += `
        // <li>
        //     <a href="">
        //     <span>${item.info_ty}</span>
        //     <img src="${item.img}">
        //     <div class="all-btm">
        //         <h2>${item.text}</h2>
        //         <p><span>${item.totalnum}</span><span>${item.num}台</span></p>
        //         <p><span>${item.apply}</span>申请</p>
        //         <p>剩余时间2天</p>
        //     </div>
        //     </a>
        // </li>
        // `
        // console.log(item);
        // ul.innerHTML = str;

        var li_ = document.createElement('li');
        var a_ = document.createElement('a');
        var span1_ = document.createElement('span');
        span1_.innerHTML = item.info_ty;

        var img_ = document.createElement('img');
        img_.setAttribute('class', 'pic');
        img_.src = item.img;

        var div_ = document.createElement('div');
        div_.setAttribute('class', 'all-btm');

        var h2_ = document.createElement('h2');
        h2_.innerHTML = item.text;

        var p1_ = document.createElement('p');
        var span2_ = document.createElement('span');
        span2_.innerHTML = item.totalnum;
        var span3_ = document.createElement('span');
        span3_.innerHTML = item.num;

        var p2_ = document.createElement('p');
        var span4_ = document.createElement('span');
        span4_.innerHTML = item.apply;

        var p3_ = document.createElement('p');
        p3_.innerHTML = '剩余时间2天';

        li_.appendChild(a_);

        a_.appendChild(span1_);
        a_.appendChild(img_);
        a_.appendChild(div_);

        div_.appendChild(h2_);
        div_.appendChild(p1_);
        div_.appendChild(p2_);
        div_.appendChild(p3_);

        p1_.appendChild(span2_);
        p1_.appendChild(span3_);
        p2_.appendChild(span4_);

        ul.appendChild(li_);

    }

    if (flg) {
        load.style.display = 'none';
        //数据加载完成创建一个div并追加到more中
        var more_ = document.getElementsByClassName('more')[0];
        var div_ = document.createElement('div');
        div_.setAttribute('class', 'over');
        more_.appendChild(div_);
        div_.innerHTML = '数据加载完毕';
        return flg = false;
    }

}