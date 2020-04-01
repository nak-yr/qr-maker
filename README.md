# qr-maker

入力文字列からQRコードを作成するwebアプリ。

## How to use

本アプリは主に以下のインターフェイスを持つ。
- ユーザからの入力を受け付けるフォーム領域
- フォームに入力された文字列をQRコードに変換して表示する領域

QRコードを生成するには、**フォームに任意の文字列を入力**する。

生成したQRコードを取得するには、表示されているQRコードを画像として保存する。

(スマートフォンの場合QRコード長押し、PCの場合QRコード右クリック)

## Technologies

- アプリ作成: `Node.js`、`React.js`
- QR生成処理: zpao氏が公開しているパッケージ[qrcode.react](https://www.npmjs.com/package/qrcode.react)を利用
- ホスティング: Firebase Hosting
