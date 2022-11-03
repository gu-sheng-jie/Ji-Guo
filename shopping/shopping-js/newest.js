var btn = document.querySelector('.more button'); //找到按钮
var load = document.querySelector('.more .load'); //找到正在加载中~~~
var ul = document.querySelector('.all ul'); //找到ul

var dataList = [];

function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('')
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new')
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
        `                                                                               `
        str = `
            <a href="">
            <img src="${item.img}" alt="">
            </a>
            <p>${item.text}</p>
            <p><span class="sp1">${item.like}</span><span class="sp2">${item.words}</span></p>
            <div></div>
                    
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

//点击红心部分
//  用来判断是偶数还是奇数
var judge = 3 // 控制心
function fn(that) {
    var judge = that.innerHTML
    judge++
    if (judge % 2 == 0) {
        that.className = 'sp1_';
        that.innerHTML++
    } else {
        that.className = 'sp1'
        that.innerHTML--
    }
}



// /* 单机收藏 */
// function fn(that) {
//     that.className = 'sp1_';
//     that.innerHTML++;
// }
// /* 双击取消 */
// function show(that) {
//     that.className = 'sp1';
//     that.innerHTML -= 3;
// }