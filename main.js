function sayHello() {
    console.log("Hello, Git World!");
    console.log("今日も良い一日を！");
    
    // ページにも表示
    const output = document.getElementById('output');
    output.innerHTML += '<div>Hello, Git World!</div>';
    output.innerHTML += '<div>今日も良い一日を！</div>';
}

function showTime() {
    const now = new Date().toLocaleString('ja-JP');
    console.log(now);
    
    // ページにも表示
    const output = document.getElementById('output');
    output.innerHTML += '<div>現在時刻: ' + now + '</div>';
}
