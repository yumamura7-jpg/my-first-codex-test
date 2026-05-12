# my-first-codex-test

独創性と視認性を強めた、静的HTML/CSSのイベントフライヤーです。

## ローカル確認手順

### 1. このブランチを checkout する

```sh
git checkout work
```

### 2. ローカルサーバーを起動する

```sh
python3 -m http.server 8000
```

### 3. ブラウザで開く

以下のURLをブラウザで開いて、フライヤーを確認してください。

http://localhost:8000/index.html

## GitHub Pagesで公開する手順（初心者向け）

このリポジトリは、ルート直下に `index.html` がある静的サイトです。GitHub Pagesでは、公開元に選んだブランチのルートにある `index.html` をトップページとして表示できます。

### 1. 変更をGitHubへpushする

まだGitHubに変更を送っていない場合は、以下を実行します。

```sh
git push origin work
```

### 2. GitHub上でPRを作成してmainへマージする

1. GitHubでこのリポジトリのページを開きます。
2. `Compare & pull request` が表示されていればクリックします。
3. 内容を確認してPRを作成します。
4. 問題なければ `Merge pull request` をクリックして、`main` ブランチへ取り込みます。

> `main` 以外のブランチから公開したい場合は、次の手順でそのブランチを選んでも構いません。ただし、初心者には `main` から公開する方法が分かりやすいです。

### 3. GitHub Pagesを有効化する

1. GitHubでこのリポジトリを開きます。
2. 上部メニューの `Settings` をクリックします。
3. 左メニューの `Pages` をクリックします。
4. `Build and deployment` の `Source` で `Deploy from a branch` を選びます。
5. `Branch` で `main` を選び、フォルダは `/ (root)` を選びます。
6. `Save` をクリックします。

### 4. 公開URLを開く

設定後、数十秒〜数分待つと `Pages` 画面に公開URLが表示されます。通常は以下の形式です。

```text
https://<GitHubユーザー名>.github.io/<リポジトリ名>/
```

このリポジトリ名のまま公開する場合は、以下のようなURLになります。

```text
https://<GitHubユーザー名>.github.io/my-first-codex-test/
```

トップページとして `index.html` が表示されるため、通常はURL末尾に `index.html` を付けなくてもフライヤーを見られます。直接開きたい場合は以下の形式でも確認できます。

```text
https://<GitHubユーザー名>.github.io/my-first-codex-test/index.html
```

### 5. うまく表示されない場合

- GitHub Pagesの反映には少し時間がかかることがあります。数分待ってから再読み込みしてください。
- `Settings` → `Pages` で、Branch が `main`、フォルダが `/ (root)` になっているか確認してください。
- `index.html` がリポジトリのルート直下にあることを確認してください。
- 404になる場合は、PRが `main` にマージ済みか、または公開元に選んだブランチに `index.html` が存在するか確認してください。

## Preview

`index.html` をブラウザで開くと、ネオンカラー、斜めのコピー、抽象的な出演者ビジュアルを使ったフライヤーを確認できます。

## スクリーンショット検証について

スクリーンショット検証を行う場合は、`npx playwright ...` のように実行時にPlaywrightをインストールする運用は避けてください。必要な依存関係は、事前にセットアップスクリプトや開発環境の準備手順でインストールしてから実行してください。
