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