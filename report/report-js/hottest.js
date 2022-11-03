var btn = document.querySelector('.more button'); //找到按钮
var load = document.querySelector('.more .load'); //找到正在加载中~~~
var ul = document.querySelector('.box-l ul'); //找到ul


var dataList = [];

function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('')
    ajax_.open('get', 'http://127.0.0.1:3000/report/hot')
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
    for (var item of dataList) {
        str = `
        <a href="./report-a.html">
                <div class="angle">
                    <img src="${item.img}">
                    <div class="pic-txt">
                        <p>
                        ${item.text}
                        </p>
                        <div class="pic-con">
                            <p>
                                <span></span>
                                <span>${item.uName}</span>
                                <span>${item.endTime}</span>
                            </p>
                            <p>
                                <span>${item.totalnum}</span>
                                <span>${item.apply}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="li-btm">
                ${item.text}
                </div>
            </a>
        `
        var li_ = document.createElement('li');
        li_.innerHTML = str;
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