# 開発メモ
## JavaScript
- MutationObserver...指定したコールバック関数を DOM の変更時に実行させる

## manifest.json
- content_scripts に css を指定するとマッチするページに自動で適用される
- content_scripts の実行タイミングを manifest.json の [run_at](https://developer.chrome.com/extensions/content_scripts#run_time) プロパティで設定できる 