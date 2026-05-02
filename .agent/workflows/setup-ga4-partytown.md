# AstroプロジェクトへのGA4最適化導入手順（Partytown使用）

Astroサイトにおいて、PageSpeed Insightsのスコア（TBT等の指標）を落とさずにGoogle Analytics 4 (GA4) を導入するためのベストプラクティス手順です。Astro公式のPartytownインテグレーションを使用します。

## 1. パッケージのインストール

プロジェクトのルートディレクトリで、`@astrojs/partytown` パッケージをインストールします。

```bash
npm install @astrojs/partytown
```

## 2. Astro設定ファイル（astro.config.mjs）の更新

`astro.config.mjs` を編集し、Partytownをインテグレーションに追加します。この時、GA4が使用する `dataLayer.push` イベントをPartytown経由でフォワード（転送）するように設定します。

```javascript
import { defineConfig } from 'astro/config';
// ... 他のインポート
import partytown from '@astrojs/partytown';

export default defineConfig({
  // ... 他の設定
  integrations: [
    // ... 他のインテグレーション
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
```

## 3. 共通レイアウトファイルへのタグ設置

サイト全体で読み込まれる共通のレイアウトファイル（例: `src/layouts/Layout.astro`）の `<head>` タグ内に、GA4のスクリプトを設置します。

**重要**: 標準の `<script>` タグではなく、`type="text/partytown"` を付与することで、スクリプトの実行をメインスレッドからWeb Workerへとオフロードします。

```html
<head>
  <!-- ... 他のメタデータなど ... -->

  <!-- Google tag (gtag.js) via Partytown -->
  <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script type="text/partytown">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```
※ `G-XXXXXXXXXX` の部分は実際のGA4測定IDに置き換えてください。

## 4. 動作確認

ローカルサーバーを起動するか本番環境へデプロイした後、ブラウザの開発者ツールを開き、Networkタブでスクリプトが読み込まれていること、およびGoogle Analyticsのリアルタイムレポートで自身のアクセスが計測されていることを確認します。
