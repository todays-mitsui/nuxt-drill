# Nuxt.js Drill

20181103 JavaScript つまみ食いハンズオン用

## 準備

### Node インストール

Node.js (npm) のインストールが必要です。  
インストールされていない人は [公式サイト](https://nodejs.org/ja/) からダウンロードしてインストールしてください。

### vue-cli インストール

vue-cli のインストールが必要です。  
コマンドライン(ターミナル or コマンドプロンプト)から下記のコマンドを打ってインストールします。

```
npm install -g @vue/cli @vue/cli-init
```

## Step.1 - Nuxt.js プロジェクトを立ち上げる


コマンドラインから以下のコマンドを打って、プロジェクトフォルダを作成します。

```
$ vue init nuxt-community/starter-template sample-vue-app
```

フォルダが作成されたら、カレントディレクトリをフォルダ内に移動して依存ライブラリをインストールしましょう。

```
$ cd sample-nuxt-app
$ npm install
```

## Step.2 - ローカルサーバーを立ち上げる


ブラウザからアプリを触る前にサーバーが必要です。  
Nuxt.js にはローカルサーバーを立ち上げるためのコマンドが用意されています。

```
$ npm run dev
```

しばらく待ってサーバーが立ち上がったら、 http://localhost:3000 にアクセスしてみましょう。


## Step.3 - ルーティング


Nuxt.js のルーティングは pages フォルダのファイルと連動します。


動作を確認するために、

- pages/index.vue
- pages/users/index.vue
- pages/users/register.vue

というファイルを作り、それぞれアクセスしてみます。


動的ルーティングをするためには .vue ファイルの名前をアンダースコア _ から始めます。
今回は

- pages/users/_id.vue

を作って確かめてみましょう。


## Step.4 - API へのアクセス、データの取得


axios を使って Qiita API からデータを取得します。
まずは axios のインストールをしましょう。

```
$ npm install @nuxtjs/axios
```

インストールが完了したら nuxt.config.js に設定を追記します。

また、 pages/index.vue を編集してデータの取得をしていきましょう。

## Step.5 - SSR(サーバーサイドレンダリング) への対応

Nuxt.js を使うと SSR への対応もスムーズに行うことができます。

## Step.6 - Vuex の利用

Nuxt.js は Vuex を使った状態管理ともスムーズに連携します。  
この章は余力があれば、
