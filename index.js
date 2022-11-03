
// 找到申请人数
var nav_money = document.getElementById('nav-money')
// 找到剩余台数
var nav_num = document.getElementById('nav-num')
// 找到剩余时间
var nav_time = document.getElementById('nav-time')
// 找到立即申请
var apply = document.getElementById('apply')

apply.onclick = function () {
    nav_money.innerHTML++
    nav_num.innerHTML--
    if (nav_num.innerHTML <= 0) {
        nav_num.innerHTML = 0
        apply.style.backgroundColor = 'gray'
        apply.disabled = true
        alert('亲！库存不足啦! ! ! ')
    }
}


function fn() {
    //获取当前时间
    var time = new Date()

    //设置目标时间
    var goTime = new Date(2022, 10, 11)

    // 获取时间差
    var surplusTime = goTime - time

    // 获取剩余 日 时 分 秒
    var day = Math.floor(surplusTime / 1000 / 60 / 60 / 24)
    day = day >= 10 ? day : '0' + day
    var hours = Math.floor(surplusTime / 1000 / 60 / 60 % 24)
    hours = hours >= 10 ? hours : '0' + hours
    var minutes = Math.floor(surplusTime / 1000 / 60 % 60)
    minutes = minutes >= 10 ? minutes : '0' + minutes
    var seconds = Math.floor(surplusTime / 1000 % 60)
    seconds = seconds >= 10 ? seconds : '0' + seconds

    // 时间拼接
    var newTime = (day + '天' + hours + '时' + minutes + '分' + seconds + '秒');

    // 向页面元素插入内容
    nav_time.innerHTML = newTime

    // 到时间 解除计时器
    if (day <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        nav_time.innerHTML = '活动已结束 ！'
        clearInterval(timer)
    }
}
var timer = setInterval(fn, 1000)


// 返回顶部
var div_return = document.getElementById('div-return')

onscroll = function () {

    // 获取 屏幕向上滚动了多少
    var top = document.documentElement.scrollTop
    // 获取 屏幕设备可见高度
    var height_ = document.documentElement.clientHeight
    // 判断 可见高度向上滚动的距离让返回按钮显示
    if (top > height_) {
        div_return.style.display = 'block'
    } else {
        div_return.style.display = 'none'
    }
}
//  点击回到顶部
div_return.onclick = function () {

    timer = setInterval(function () {
        // 获取当前屏幕滚动的距离
        var scroll_t = document.documentElement.scrollTop

        // 获取步长
        var step = scroll_t / 10

        // 每隔 10 毫秒 就向上滚动
        document.documentElement.scrollTop = scroll_t - step

        // 判断 向上滚动的距离 为 0 的时候停下来
        if (scroll_t <= 0) {
            clearInterval(timer)
        }
    }, 10)
}



//  ==============  报告精选 ====================
//  点赞 
var zan_1 = document.getElementsByClassName('zan-1')
//  信息
var xinxi_1 = document.getElementsByClassName('xinxi-1')

for (var i = 0; i < zan_1.length; i++) {
    zan_1[i].setAttribute('index', i)
    //  用来判断是偶数还是奇数
    let judge = 1   // 控制心
    zan_1[i].onclick = function () {
        var index = this.getAttribute('index')
        judge++
        if (judge % 2 == 0) {
            zan_1[index].style.backgroundImage = 'url(./img/use5.png)'
            zan_1[index].innerHTML++
        } else {
            zan_1[index].style.backgroundImage = 'url(./img/zan.png)'
            zan_1[index].innerHTML--
        }
    }
}
for (var k = 0; k < xinxi_1.length; k++) {
    xinxi_1[k].setAttribute('index', k)
    xinxi_1[k].onclick = function () {
        var index = this.getAttribute('index')
        xinxi_1[index].innerHTML++
    }
}

// ============  导购精选  ===============
//  点赞 
var zan_2 = document.getElementsByClassName('zan-2')
//  信息
var xinxi_2 = document.getElementsByClassName('xinxi-2')

for (var i = 0; i < zan_2.length; i++) {
    zan_2[i].setAttribute('index', i)
    //  用来判断是偶数还是奇数
    let judge = 1   // 控制心
    zan_2[i].onclick = function () {
        var index = this.getAttribute('index')
        judge++
        if (judge % 2 == 0) {
            zan_2[index].style.backgroundImage = 'url(./img/xinRedh.png)'
            zan_2[index].innerHTML++
        } else {
            zan_2[index].style.backgroundImage = 'url(./img/xin.png)'
            zan_2[index].innerHTML--
        }
    }
}
for (var k = 0; k < xinxi_2.length; k++) {
    xinxi_2[k].setAttribute('index', k)
    xinxi_2[k].onclick = function () {
        var index = this.getAttribute('index')
        xinxi_2[index].innerHTML++
    }
}

//  ==================  发现酷玩  =================
//  点赞 
var zan_3 = document.getElementsByClassName('zan-3')
//  信息
var xinxi_3 = document.getElementsByClassName('xinxi-3')

for (var i = 0; i < zan_3.length; i++) {
    zan_3[i].setAttribute('index', i)
    //  用来判断是偶数还是奇数
    let judge = 1   // 控制心
    zan_3[i].onclick = function () {
        var index = this.getAttribute('index')
        judge++
        if (judge % 2 == 0) {
            zan_3[index].style.backgroundImage = 'url(./img/xinRedh.png)'
            zan_3[index].innerHTML++
        } else {
            zan_3[index].style.backgroundImage = 'url(./img/xin.png)'
            zan_3[index].innerHTML--
        }
    }
}
for (var k = 0; k < xinxi_3.length; k++) {
    xinxi_3[k].setAttribute('index', k)
    xinxi_3[k].onclick = function () {
        var index = this.getAttribute('index')
        xinxi_3[index].innerHTML++
    }
}

// ================ 渲染数据 ============
// 找到加载更多
var more = document.getElementById('jzgd')
var more_1 = document.getElementById('jzgd_1')
var more_2 = document.getElementById('jzgd_2')


var dataList = []

more.onclick = function () {
    more.style.display = 'none'
    more_1.style.display = 'block'
    setTimeout(getdata, 500)
}

function getdata() {
    more.style.display = 'block'
    more_1.style.display = 'none'
    var ajax = new XMLHttpRequest() || new ActiveXObject()
    ajax.open('get', 'http://127.0.0.1:3000/play/new')
    ajax.send()
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                dataList = JSON.parse(ajax.responseText)
                console.log(dataList);
                show()
            } else {
                console.log('失败');
            }
        }
    }
}

// 找到ul
var box_3_more = document.getElementById('box-3-more')

var index = -1
var flg = true

function show() {
    if (flg) {
        index++
        if (index >= dataList.length - 1) {
            more.style.display = 'none'
            more_1.style.display = 'none'
            more_2.style.display = 'block'
            return flg = false
        }

        var str = ''

        for (var item of dataList[index]) {
            str += `
            <li>
                <a href="">
                    <img src="${item.img}" alt="">
                </a>
                <p>${item.text}</p>
                <p>${item.description}</p>
                <p>
                    <span class="money">${item.price}</span>
                    <span class="zan-4" onclick=newZan(this)>${item.like}</span>
                    <span class="xinxi-4" onclick=newXingXi(this)>${item.words}</span>
                </p>
            </li>`
        }
        box_3_more.innerHTML += str
    }
}
var newZan_sum = 1
function newZan(that) {
    newZan_sum++
    if (newZan_sum % 2 == 0) {
        that.style.backgroundImage = 'url(./img/xinRedh.png)'
        that.innerHTML++
    } else {
        that.style.backgroundImage = 'url(./img/xinRedo.png)'
        that.innerHTML--
    }
}
function newXingXi(that) {
    that.innerHTML++
}
