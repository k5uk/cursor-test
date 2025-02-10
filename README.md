# Newt Hotel Tokyo - 予約システム

高品質なホテル予約ページのクローン（React/Tailwind使用）。フォーシーズンズホテル東京大手町の予約ページを参考にしたデモプロジェクトです。

## 機能

- 部屋タイプと料金の表示
- 位置情報とアクセス案内
- ホテルポリシーと予約規約の表示
- レスポンシブデザイン対応

## 技術スタック

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Express.js
- Database: PostgreSQL
- ORM: Drizzle
- その他: TanStack Query, Shadcn UI

## セットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/your-username/newt-hotel-tokyo.git
cd newt-hotel-tokyo
```

2. 依存関係のインストール:
```bash
npm install
```

3. 環境変数の設定:
`.env`ファイルをプロジェクトのルートに作成し、以下の変数を設定:
```env
DATABASE_URL=postgresql://user:password@host:port/dbname
```

4. データベースのセットアップ:
```bash
npm run db:push
```

5. 開発サーバーの起動:
```bash
npm run dev
```

## スクリーンショット

[スクリーンショットを追加予定]

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 注意事項

このプロジェクトは学習目的で作成されたデモアプリケーションです。実際のホテル予約システムとは異なります。
