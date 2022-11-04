
// 获取手机号
var phone = document.getElementById('phone')
// 获取新密码
var pass = document.getElementById('pass')
// 立即注册
var zc = document.getElementById('zc')
// 获取后面的提示语句
var h_span = document.getElementsByClassName('h-span')

var phone_ = getCookie('phone')
var pass_ = getCookie('pass')

zc.onclick = function () {
    if (phone.value == phone_ && pass.value == pass_) {
        alert('登录成功！')
        setCookie('win', true)
        location.href = './index.html'
    } else {
        alert('用户名不存在,或密码不正确')
    }
}