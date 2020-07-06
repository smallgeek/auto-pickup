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
    div.id = 'test-tag';
    div.className = "css-1dbjc4n r-1u4rsef r-9cbz99 r-t23y2h r-1phboty r-rs99b7 r-ku1wi2 r-1bro5k0 r-1udh08x";
    div.innerHTML = buildViewHtml();
    contents[0].insertBefore(div, whoToFollow.parentElement);
}

/**
 * メディア表示欄のマークアップを構築する
 */
function buildViewHtml() {

    return `<aside aria-label="人気のメディア" role="complementary" class="css-1dbjc4n">
    <div class="css-1dbjc4n r-my5ep6 r-rull8r r-qklmqi r-1wtj0ep r-1j3t67a r-1w50u8q">
        <h2 aria-level="2" role="heading" class="css-4rbku5 css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
            <div dir="auto"
                class="css-901oao css-cens5h r-hkyrab r-1tl8opc r-1b6yd1w r-1vr29t4 r-ad9z0x r-bcqeeo r-qvutc0"
                style="-webkit-line-clamp: 3;"><span
                    class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">人気のメディア</span></div>
        </h2>
    </div>
    <!-- 繰り返し部分 -->
    <div class="css-1dbjc4n">
        <div role="button" data-focusable="true" tabindex="0"
            class="css-18t94o4 css-1dbjc4n r-my5ep6 r-rull8r r-qklmqi r-1ny4l3l r-1j3t67a r-1w50u8q r-o7ynqc r-6416eg"
            data-testid="PopularCell">
            <div class="r-18u37iz">
                <!-- -->
                <img alt="画像" draggable="true" src="https://pbs.twimg.com/media/DA1aNLzUIAA7JG-?format=jpg&amp;name=120x120" style="float: left;">
                <span>リツイート</span>
                <span>いいね</span>
            </div>
        </div>
    </div>
    <div role="button" class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1n0xq6e r-1vuscfd r-1dhvaqw r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" data-testid="tweetButton" data-focusable="true" tabindex="0">
        <div dir="auto" class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1tl8opc r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0">
            <span class="css-901oao css-16my406 css-bfa6kz r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">
                <span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">#自分のTwitterいいねTOP3をあげる</span>
            </span>
        </div>
    </div>
</aside>`;
}

const observer = new MutationObserver(applyPickupView);
observer.observe(document.body, {childList: true, subtree: true});