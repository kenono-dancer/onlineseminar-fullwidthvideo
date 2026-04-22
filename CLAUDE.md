# GitHub更新フロー

## オンラインセミナー fullwidth video プロジェクトの公開・更新方法

### 更新手順

1. **ファイルを編集**
   - 対象ファイルを修正（例：`src/content/blog/post-XXXX.md`）

2. **コミット & プッシュ**
   ```bash
   git add <ファイル>
   git commit -m "変更内容の説明"
   git push -u origin <ブランチ名>
   ```

3. **GitHub PR作成 & マージ**
   - GitHub MCP ツール (`mcp__github__create_pull_request`) でPRを作成
     - head: 作業ブランチ（例：`claude/extract-blog-keywords-Fjqbi`）
     - base: マージ先ブランチ（例：`feature/fullscreen-hero-video`）
   - GitHub MCP ツール (`mcp__github__merge_pull_request`) でPRをマージ
     - merge_method: `squash` を使用

### リポジトリ情報

- **URL**: https://github.com/kenono-dancer/onlineseminar-fullwidthvideo
- **メインブランチ**: `feature/fullscreen-hero-video`
- **フレームワーク**: Astro + React + TailwindCSS
- **サイト**: https://itxdancer.com

### ブログ記事ファイル

- **配置**: `src/content/blog/post-XXXX.md`
- **形式**: Markdown + frontmatter（YAML）

### 関連するGitHub MCP ツール

- `mcp__github__create_pull_request`: PR作成
- `mcp__github__merge_pull_request`: PRマージ
- その他GitHub操作は対応する MCP ツールを使用
