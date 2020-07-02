'use strict';

function applyPickupView() {
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

    //TODO: Twitter からトップツイートを検索する

    // テスト
    const tag = '<img id="test-tag" src="https://pbs.twimg.com/profile_images/937300636638445568/6Zd5j5az_400x400.jpg" />';
    sidebar.insertAdjacentHTML('afterbegin', tag);
}

const observer = new MutationObserver(applyPickupView);
observer.observe(document.body, {childList: true, subtree: true});