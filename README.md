# My Portfolio

Next.js や Laravel を使った開発実績・個人制作物をまとめたポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) 15（App Router）
- **UI**: [MUI](https://mui.com/)（Material UI）、[Tailwind CSS](https://tailwindcss.com/）
- **アニメーション**: [Framer Motion](https://www.framer.com/motion/)
- **状態管理**: [Jotai](https://jotai.org/)、[Zustand](https://zustand-demo.pmnd.rs/)
- **お問い合わせ**: [EmailJS](https://www.emailjs.com/)（ブラウザから送信）
- **デプロイ連携**: [Vercel Edge Config](https://vercel.com/docs/storage/edge-config)（`middleware.ts` でメンテナンスフラグ等を参照可能）

## 前提条件

- [Node.js](https://nodejs.org/)（LTS 推奨）

## セットアップ

```bash
npm install
```

## 環境変数

プロジェクトルートに `.env.local` を作成し、お問い合わせフォーム用に次を設定します（[EmailJS](https://www.emailjs.com/) のダッシュボードで取得）。

| 変数名                             | 説明                  |
| ---------------------------------- | --------------------- |
| `NEXT_PUBLIC_Email_JS_SERVICE_ID`  | EmailJS の Service ID |
| `NEXT_PUBLIC_Email_JS_TEMPLATE_ID` | テンプレート ID       |
| `NEXT_PUBLIC_Email_JS_PUBLIC_KEY`  | 公開キー              |

本番で Edge Config を使う場合は、Vercel のプロジェクト設定で [Edge Config を接続](https://vercel.com/docs/storage/edge-config/get-started)し、`middleware.ts` 内の `get('maintenanceMode')` などと連携させます。ローカルでは未設定でも開発サーバーは起動できますが、Edge Config への接続が必要な処理は環境に依存します。

## コマンド

| コマンド        | 説明                                                           |
| --------------- | -------------------------------------------------------------- |
| `npm run dev`   | 開発サーバー（[http://localhost:3000](http://localhost:3000)） |
| `npm run build` | 本番用ビルド                                                   |
| `npm run start` | 本番ビルドの起動                                               |
| `npm run lint`  | ESLint と TypeScript チェック                                  |
