# js-inserter

## What's This?

特定のjavascriptコードを、表示中のページ内に差し込むChrome Extension。
jsコード差し込みのon/offを、chrome拡張のボタンで切り替えが可能です。
トラッキングコードのテストなどにご利用ください。


## Install

1. Chromeの設定画面から、"拡張機能"タブをクリック
2. 拡張機能のデベロッパーモードにチェックが入っていなければ、チェックを入れる
3. 本リポジトリをcloneしておく
4. "パッケージ化されていない拡張機能を読み込む..."ボタンをクリックし、cloneした本リポジトリのパスを指定する

インストールが完了すると、本Chrome拡張のボタン(小さい赤い丸)が、ブラウザのメニューバーに表示される。

![本Chrome拡張のボタン](/readme-imgs/browser-action-icon.png?raw=true "本Chrome拡張のボタン")


## Configure

本Chrome Extensionのインストールが完了すると、Chromeの設定画面、"拡張機能"タブ内にJs Inserterと表示される。  
その中に、"オプション"というリンクがあるので、それをクリックし設定画面を開く。

![設定画面へのリンク](/readme-imgs/option-page-link.png?raw=true "設定画面へのリンク")


設定画面内で、挿入するjsのコードを記入し保存ボタンを押すと、挿入するjsのコードが設定された状態となる。

![設定画面 表示例](/readme-imgs/setting-page.png?raw=true "設定画面 表示例")


## Activate/Deactivate

開いているページに設定したjsコードを挿入するには、本Chrome拡張のボタン(小さい赤い丸)をクリックする。
ボタンが小さい緑の丸に変化したら、開いているページにjsコードの挿入を行う。

なお、ボタンはトグルボタンになっており、一度jsコードを挿入する設定(緑のボタン)にしたら、
以後、再度ボタンをクリックしない限り、常に新たに表示するページにjsコードを挿入する。


## License

MIT
