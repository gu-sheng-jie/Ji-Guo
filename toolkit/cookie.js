// -setCookie() —— 创建Cookie
//             键  值  几天后
function setCookie(key, val, time) {
    var date = new Date()
    date.setDate(date.getDate() + time)
    document.cookie = `${key}=${val};expires=${date}`
}

// getCookie() —— 获取Cookie
//              key
function getCookie(key) {
    var arry = document.cookie.split('; ')
    for (var item of arry) {
        var newArry = item.split('=')
        if (newArry[0] == key) {
            return newArry[1]
        }
    }
}

// removeCookie() —— 删除Cookie
function removeCookie(key) {
    // 调用当前的设置cookie  把时间  改成-1
    // function setCookie(key, val, time) 
    this.setCookie(key, '', -1)
}

// 清空 cookie
function clearCookie() {
    var arry = document.cookie.split('; ')
    for (var item of arry) {
        newAeey = item.split('=')
        this.setCookie(newAeey[0], '', -1)
    }
}