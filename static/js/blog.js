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
title.innerHTML += `叶盛泽&企鹅呱呱\n博客`;
down.innerHTML += `
<h2>我的第一篇文章</h2>
aaa,终于做好网站了！\n
发布于2021.10.16 17：46\n
`;