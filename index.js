'use strict';

function applyPickupView() {
    // プロフィールのページ以外を対象としない
    const nav = document.querySelector("[data-testid='UserProfileHeader_Items']");
    if (!nav) {
        return;
    }

    // サイドバーを取得する
    const sidebar = document.querySelector("[data-testid='sidebarColumn']");
    if (!sidebar) {
        return;
    }

    // すでに挿入されているビューを取得する
    const view = sidebar.querySelector("[id='test-tag']");
    if (view) {
        return;
    }

    // 挿入先を取得する
    const contents = sidebar.getElementsByClassName("css-1dbjc4n r-1l5qxre r-m611by");
    if (contents.length === 0) {
        return;
    }
    const whoToFollow = sidebar.querySelector("[role='complementary']");
    if (!whoToFollow) {
        return;
    }
    
    // 仮の画像を挿入
    const div = document.createElement("div");
    div.innerHTML = '<img id="test-tag" src="https://pbs.twimg.com/profile_images/937300636638445568/6Zd5j5az_400x400.jpg" />';
    contents[0].insertBefore(div, whoToFollow.parentElement);
}

const observer = new MutationObserver(applyPickupView);
observer.observe(document.body, {childList: true, subtree: true});