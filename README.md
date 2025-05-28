# monorepo-env

本環境は Turborepo を使用して構築した Monorepo の開発環境です。

## 📦 Setup

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 開発サーバーの起動

以下のコマンドで、バックエンドと Web フロントエンドの両方を立ち上げます：

```bash
turbo run dev
```

## 🛠 Technology

- [Turborepo](https://turbo.build/repo)

## 📝 Notes

- Node.js / npm のバージョン管理には [Volta](https://volta.sh/) の使用を推奨します。
- バージョンの違いによるトラブルを避けるため、`.node-version` や `package.json` の `engines` フィールドの指定も検討してください。
