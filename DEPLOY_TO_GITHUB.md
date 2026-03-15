# 将网站传到 GitHub

仓库地址：<https://github.com/Ethan9527Ja/Zichun_Zhang_ePortfolio.git>

## 1. 安装 Git（若尚未安装）

- 下载：<https://git-scm.com/download/win>
- 安装时勾选 “Add Git to PATH”

## 2. 在项目文件夹中打开终端

在 VS Code / Cursor 中可：`终端` → `新建终端`，并确认当前目录为 `Portfolio`。

## 3. 依次执行以下命令

```bash
# 初始化 Git（若尚未初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/Ethan9527Ja/Zichun_Zhang_ePortfolio.git

# 若之前已经 add 过 origin 且地址不对，可先删除再添加：
# git remote remove origin
# git remote add origin https://github.com/Ethan9527Ja/Zichun_Zhang_ePortfolio.git

# 添加所有文件（.gitignore 已排除 node_modules、dist）
git add .

# 提交
git commit -m "Arts Inquiry Portfolio - Part A"

# 推送到 GitHub（首次推送并设置上游分支）
git branch -M main
git push -u origin main
```

若 GitHub 要求登录，按提示在浏览器中完成认证，或使用 Personal Access Token 作为密码。

## 4. 部署为 GitHub Pages（可选，获得访问链接）

1. 打开仓库：<https://github.com/Ethan9527Ja/Zichun_Zhang_ePortfolio>
2. `Settings` → 左侧 `Pages`
3. 在 **Source** 选择 `Deploy from a branch`
4. **Branch** 选 `main`，文件夹选 `/ (root)` 或 `docs`（若你把构建结果放在 `docs`）
5. 若选 root：先在本机执行 `npm run build`，把 `dist` 里的内容单独提交到一个分支或把 `dist` 内容复制到项目根目录再提交（或使用 GitHub Actions 自动构建）

**本项目已包含 GitHub Actions 工作流**（`.github/workflows/deploy.yml`），推送到 `main` 后会自动构建并把结果推到 `gh-pages` 分支。

**避免空白页——请按下面设置：**

1. 打开 <https://github.com/Ethan9527Ja/Zichun_Zhang_ePortfolio>
2. 进入 **Settings** → 左侧 **Pages**
3. 在 **Build and deployment** 的 **Source** 中选择 **Deploy from a branch**（不要选 GitHub Actions）
4. **Branch** 选 **gh-pages**，**Folder** 选 **/ (root)**，点 Save
5. 若还没有 `gh-pages` 分支，先推送一次代码到 `main`，等 Actions 跑完（约 1–2 分钟）再保存上述设置

部署完成后，网站地址为：  
**https://ethan9527ja.github.io/Zichun_Zhang_ePortfolio/**
