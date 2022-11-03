
// 友情链接
var a_right = document.getElementsByClassName('a_right')
// 厂商合作
var a_right_1 = document.getElementsByClassName('a_right-1')

for (var i = 0; i < a_right.length; i++) {
    a_right[i].onclick = function () {
        parent.location.href = './b-mf-a.html'
    }
}

for (var i = 0; i < a_right_1.length; i++) {
    a_right_1[i].onclick = function () {
        parent.location.href = './b-sw-a.html'
    }
}
// 联系我们
var a_right_11 = document.getElementsByClassName('a_right-11')[0]
a_right_11.onclick = function () {
    parent.location.href = './b-sw-a.html#sw'
}
// 如何提高成功率
var a1_right = document.getElementsByClassName('a1_right')[0]
a1_right.onclick = function () {
    parent.location.href = './b-mf-a.html#mf'
}