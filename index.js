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
                <div aria-haspopup="true" aria-label="4 リツイート. Retweet" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="retweet">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                        <div class="css-1dbjc4n r-xoduu5">
                            <div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg">
                            </div>
                            <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">
                                <g>
                                    <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="css-1dbjc4n r-xoduu5 r-1udh08x">
                            <span class="css-901oao css-16my406 r-1tl8opc r-n6v787 r-1sf4r6n r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">4</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div aria-label="13 いいねの数. Like" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="like">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                        <div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg">
                        </div>
                        <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">
                            <g>
                                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div class="css-1dbjc4n r-xoduu5 r-1udh08x">
                        <span class="css-901oao css-16my406 r-1tl8opc r-n6v787 r-1sf4r6n r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                            <span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">13</span>
                        </span>
                    </div>
                </div>
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