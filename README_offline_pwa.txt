# 水準測量野帳 完全オフライン起動対応版

## ファイル構成
- index_marker_zoom_pointlist_added_split_graphline_affine_gesture_offline_pwa.html
- sw.js
- manifest.webmanifest
- level-icon-180.png
- level-icon-192.png
- level-icon-512.png

## iPhoneで完全オフライン起動させる条件
1. 上記ファイルを同じフォルダに置く。
2. HTTPSで配信する。file://で直接開いた場合、Service Workerは登録できません。
3. Safariで index_marker_zoom_pointlist_added_split_graphline_affine_gesture_offline_pwa.html を一度オンラインで開く。
4. Safariの共有から「ホーム画面に追加」。
5. 一度オンライン状態でホーム画面アプリを開き、Service Workerにキャッシュさせる。
6. その後はオフラインでもホーム画面アプリから起動可能です。

## 注意
- 測量データは従来通り localStorage と IndexedDB に保存します。
- CSVや写真は作業後にファイル保存/共有してください。
- OCRは外部CDNのTesseract.jsを使うため、完全オフライン初回利用は未対応です。
- GPS座標は取得できますが、住所変換はオンラインAPIのためオフラインでは座標表示になります。
