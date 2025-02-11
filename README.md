git clone https://github.com/k5uk/cursor-test.git
cd cursor-test
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