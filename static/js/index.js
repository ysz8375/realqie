//index.js
/*function*/
function sleep(n) {
        var start = new Date().getTime();
        //  console.log('休眠前：' + start);
        while (true) {
            if (new Date().getTime() - start > n) {
                break;
            }
        }
        // console.log('休眠后：' + new Date().getTime());
}
const title = document.getElementById("title");
const down = document.getElementById("down");
title.innerHTML += `叶盛泽&企鹅呱呱\n官网`;
down.innerHTML += `
我是叶盛泽，会编程
`;