var myFirstPromise = new Promise(function (resolve, reject) {
    // 当异步代码执行成功时, 我们才会调用resolve(...), 
    // 当异步代码失败时就会调用reject(...)
    // 在示例中, 我们使用setTimeout(...) 来模拟异步代码, 实际编码时可能是XHR请求或是HTML5的一些API
    setTimeout(function () {
        resolve("成功!"); // 代码正常执行
    }, 250);
});

myFirstPromise.then(function (successMessage) {
    // successMessage的值是上面调用resolve(...)方法传入的值
    // 注意: successMessage 参数不一定非要是字符串类型, 这里只是举个例子
    console.log('Yay! ' + successMessage);
});


'use strict';
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;
    var log = document.getElementById("log");
    log.insertAdjacentHTML('beforeend', thisPromiseCount + 
    ') Started (<small> Sync code started</small>)<br/>');

    // 新建一个promise对象
    var p1 = new Promise(function(resolve, reject) {
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
        // 模拟异步代码
        window.setTimeout(function() {
            // 填充 (fulfilled) promise
            resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
    });
    
    // 通过调用then() 方法, 我们定义当promise被成功解析(resolved) / 填充(fulfilled) 时要执行的代码
    // 而catch() 方法则定义了当promise 被拒绝(rejected) 时要执行的代码
    p1.then(
        // 记录被填充的值
        function (val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        }).catch(
            // 记录被拒绝的理由 (异常信息)
            function (reason) { 
                console.log('Handle rejected promise ('+reason+') here.');
            }
        );

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');

}