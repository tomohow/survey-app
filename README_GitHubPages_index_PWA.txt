# GitHub Pages 用 水準測量野帳 PWA 一式

## GitHubに置く場所
リポジトリ直下に、このZIPの中身をすべて置いてください。

- index.html
- sw.js
- manifest.webmanifest
- level-icon-180.png
- level-icon-192.png
- level-icon-512.png
- .nojekyll

## 置き換え方
古い index.html / sw.js / manifest.webmanifest / icon は、この一式で置き換えてください。
README.md は残してOKです。

## GitHub Pages設定
Settings → Pages → Deploy from a branch → main → / root

## iPhone確認手順
1. Safariで `https://ユーザー名.github.io/リポジトリ名/` を開く
2. 1回リロード
3. ホーム画面の古いアイコンを削除
4. Safariの共有から「ホーム画面に追加」
5. オンライン状態でホーム画面アプリを1回起動
6. 機内モードでホーム画面アプリから再起動確認

## 注意
- 測量データは localStorage と IndexedDB に保存されます。
- Service Workerはアプリ本体のオフライン起動用です。
- OCRは外部CDN依存のため、初回オフライン利用は未対応です。
