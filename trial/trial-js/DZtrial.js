// DZtrial加载数据
var btn = document.querySelector('.more button'); //找到a
var ul = document.querySelector('.all ul'); //找到ul

// window.onload = function() {
// setTimeout(getData, 1500);
//     getData();
// }

var dataList = [];
btn.onclick = function getData() {
        var ajax_ = new XMLHttpRequest() || new ActiveXObject('')
        ajax_.open('get', 'http://127.0.0.1:3000/useing/master')
        ajax_.send()
        ajax_.onreadystatechange = function() {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    data = ajax_.responseText;
                    dataList = JSON.parse(data)
                    show()
                } else {
                    console.log('加载错误');
                }
            }
        }
    }
    // 渲染数据
var index = -1; // ajax获取数据数组  index作为起始下标
var flg = true; //开关
function show() {
    if (flg) {
        index++;
        // console.log(index);
        // console.log(dataList.length);
        if (index >= dataList.length) {
            //数据加载完成让按钮隐藏
            btn.style.display = 'none';
            //数据加载完成创建一个div并追加到more中
            var more_ = document.getElementsByClassName('more')[0];
            var div_ = document.createElement('div');
            div_.setAttribute('class', 'over');
            more_.appendChild(div_);
            div_.innerHTML = '数据加载完毕';
            return flg = false;
        }
    }


    btn.innerHTML = '正在加载中';
}