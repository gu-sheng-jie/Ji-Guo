
// 获取手机号输入框
var phone = document.getElementById('phone')
// 获取图片验证码
var verify_1 = document.getElementById('verify-1')
// 获取4位验证码
var verify_2 = document.getElementById('verify-2')
// 获取验证码按钮
var verify_button = document.getElementById('verify_button')
// 获取用户名
var username = document.getElementById('username')
// 获取新密码
var pass = document.getElementById('pass')
// 获取确定密码
var newPass = document.getElementById('newPass')
// 立即注册
var zc = document.getElementById('zc')
// 获取后面的提示语句
var h_span = document.getElementsByClassName('h-span')

// 手机号正则
var phone_z = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/

// 手机号获得焦点
phone.onfocus = function () {
    h_span[0].innerHTML = '请输入11位手机号'
    h_span[0].style.color = 'grey'
}
//  手机号失去焦点
phone.onblur = function () {
    if (phone_z.test(phone.value)) {
        h_span[0].innerHTML = '输入正确'
        h_span[0].style.color = 'green'
    } else {
        h_span[0].innerHTML = '输入有误！'
        h_span[0].style.color = 'red'
    }
}
// 图片验证码  验证
verify_1.onfocus = function () {
    h_span[1].innerHTML = '请输入图中校验码'
    h_span[1].style.color = 'grey'
}
verify_1.onblur = function () {
    if (verify_1.value == 'r2B7' || verify_1.value == 'r2b7') {
        h_span[1].innerHTML = '输入正确'
        h_span[1].style.color = 'green'
    } else {
        h_span[1].innerHTML = '输入有误！'
        h_span[1].style.color = 'red'
    }
}
//  4位验证码 验证
var str = 0
var num = 60
var timer
verify_button.onclick = function () {
    clearInterval(timer)
    timer = setInterval(function () {
        num--
        verify_button.innerHTML = `${num}秒后重新发送`
        if (num == 57) {
            str = Math.round(Math.random() * 10000)
            str > 1000 ? str : str += 1000
            alert('验证码为:' + str)
        }

    }, 1000)
}
verify_2.onfocus = function () {
    h_span[2].innerHTML = '请输入验证码'
    h_span[2].style.color = 'grey'
}
verify_2.onblur = function () {
    if (verify_2.value == '') {
        h_span[2].innerHTML = '输入有误！'
        h_span[2].style.color = 'red'
    } else if (verify_2.value == str) {
        h_span[2].innerHTML = '输入正确'
        h_span[2].style.color = 'green'
    } else {
        h_span[2].innerHTML = '输入有误！'
        h_span[2].style.color = 'red'
    }
}

//  用户名正则
var user_z = /^[a-z]+$/i

// 用户名  验证
username.onfocus = function () {
    h_span[3].innerHTML = '只能由英文字符组成'
    h_span[3].style.color = 'grey'
}
username.onblur = function () {
    if (user_z.test(username.value)) {
        h_span[3].innerHTML = '输入正确'
        h_span[3].style.color = 'green'
    } else {
        h_span[3].innerHTML = '输入有误！'
        h_span[3].style.color = 'red'
    }
}

//  密码正则
var pass_z = /^\d{6,12}$/

pass.onfocus = function () {
    h_span[4].innerHTML = '请输入6-12位数字'
}
pass.onblur = function () {
    if (pass_z.test(pass.value)) {
        h_span[4].innerHTML = '输入正确'
        h_span[4].style.color = 'green'
    } else {
        h_span[4].innerHTML = '输入有误'
        h_span[4].style.color = 'red'
    }
}

// 确认密码
newPass.onfocus = function () {
    h_span[5].innerHTML = '请和以上密码保持一致'
}
newPass.onblur = function () {
    if (newPass.value == '') {
        h_span[5].innerHTML = '密码不能为空'
        h_span[5].style.color = 'red'
    } else if (newPass.value == pass.value) {
        h_span[5].innerHTML = '输入正确'
        h_span[5].style.color = 'green'
    } else {
        h_span[5].innerHTML = '两次密码不一致'
        h_span[5].style.color = 'red'
    }
}
// 立即注册
zc.onclick = function () {
    if (phone_z.test(phone.value) && (verify_1.value == 'r2B7' || verify_1.value == 'r2b7') && verify_2.value == str && user_z.test(username.value) && pass_z.test(pass.value) && newPass.value == pass.value) {
        alert('注册成功！')
        location.href = './login.html'
        setCookie('user', username.value)
        setCookie('phone', phone.value)
        setCookie('pass', pass.value)
    } else {
        alert('注册失败！请完善信息……')
    }
}