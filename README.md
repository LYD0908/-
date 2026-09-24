# 廖亚铎 · 个人简历网站

一个**纯静态、零构建**的个人简历网站：黑金科技风、全卡片式布局、PPT 分屏节奏，支持**中英双语一键切换**。

没有 npm、没有打包工具、没有框架依赖 —— 双击 `index.html` 就能看。

- 技术栈：原生 HTML / CSS / JavaScript（ES5 语法，兼容性拉满）
- 部署目标：GitHub Pages
- 全站内容集中在一个文件：`assets/js/data.js`

---

## 一、目录结构

```
.
├── index.html          首页（Hero + 亮点数据 + 自我介绍 + 精选项目）
├── education.html      教育背景（时间线 + 主修课程 + 荣誉）
├── skills.html         技能栈（分组进度条 + 荣誉认定）
├── projects.html       项目列表（支持按技术标签筛选）
├── project.html        项目详情页（通过 ?id=xxx 访问）
├── experience.html     实践经历（天翼创业社 / 校园渠道）
├── about.html          关于我（个人故事 + 成长时间线 + 兴趣）
├── contact.html        联系方式（邮箱 / 电话 / GitHub，一键复制）
├── blog.html           博客占位页（导航入口标注 ·Soon）
│
├── assets/
│   ├── css/style.css   设计系统（配色、卡片、动效、响应式、打印样式）
│   ├── js/data.js      ★ 全站内容唯一数据源
│   ├── js/main.js      渲染引擎（导航注入 / 双语 / 动效 / 交互）
│   └── images/         头像与配图（约 785KB）
│
└── .workbuddy/         项目辅助文件（可忽略，不建议提交到仓库）
    ├── memory/         工作日志与长期记忆
    ├── smoke.js        渲染冒烟测试
    ├── fetch_images.py 配图下载脚本
    └── extract_pdf.py  PDF 简历文本提取脚本
```

---

## 二、怎么改内容（只需要动一个文件）

打开 **`assets/js/data.js`**，里面就是全部文案，改完刷新页面即可生效。

### 双语怎么写

需要中英两套的字段，写成对象：

```js
name: { zh: "廖亚铎", en: "Liao Yaduo" }
```

不需要翻译的（如技术标签、日期、数字），直接写字符串：

```js
period: "2025.10 — 2026.03",
tags: ["Vue3", "Python", "MySQL"],
```

`main.js` 里的 `t()` 函数会自动取当前语言。所有页面右上角可切换「中文 / EN」，选择记在 `localStorage` 的 `resume-lang` 键里。

### 常用修改对照表

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名 / 一句话简介 / 联系方式 | `profile` |
| 首页 4 个亮点数字 | `profile.highlights` |
| 自我介绍段落 | `profile.intro` |
| 学校 / 课程 / 获奖 | `education` |
| 技能与熟练度 | `skills`（`level` 是 0-100 自评） |
| 项目（增删改） | `projects`，`id` 决定详情页链接 |
| 实习与校园经历 | `experience`（`typeLabel` 是左上角类型标签） |
| 关于我的故事与时间线 | `about` |
| 联系卡片 | `contact` |
| 页面横幅配图 | `banners` |
| 页脚图片来源声明 | `meta.imageCredit` |

### 新增一个项目

在 `projects` 数组里加一项即可，列表页、筛选按钮、首页「精选项目」会自动出现：

```js
{
  id: "my-new-project",              // 详情页链接 project.html?id=my-new-project
  name: { zh: "项目名", en: "Project Name" },
  cover: "AI",                       // 没配图时显示的字母
  coverImage: "./assets/images/xxx.jpg",  // 有配图时优先用
  coverBadge: "AI",                  // 封面左下角英文角标
  coverAlt: { zh: "图片说明", en: "Alt text" },
  coverCredit: "来源与授权",          // 详情页图下小字
  period: "2026.03 — 2026.06",
  role: { zh: "职责", en: "Role" },
  tags: ["Vue3", "Python"],
  summary: { zh: "一句话概述", en: "One-line summary" },
  highlights: [
    { zh: "亮点一，尽量带数字", en: "Highlight one, quantified" }
  ],
  links: [{ label: "GitHub", url: "https://github.com/xxx" }]
}
```

---

## 三、本地预览

**最简单**：直接双击 `index.html`。

项目刻意不使用 `fetch` 加载 JSON（`file://` 协议下会被浏览器 CORS 拦截），所以本地打开和线上访问表现完全一致。

如果想用本地服务器（推荐，更接近真实环境）：

```bash
python -m http.server 8000
# 然后访问 http://localhost:8000
```

---

## 四、部署到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `resume`），把本目录推上去：

```bash
git init
git add .
git commit -m "init: personal resume site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/resume.git
git push -u origin main
```

2. 仓库页面 → **Settings → Pages** → Source 选 `main` 分支、目录选 `/ (root)` → Save。

3. 一分钟后访问 `https://<你的用户名>.github.io/resume/` 即可。

> 全部资源都用的相对路径，所以放在子路径（`/resume/`）下也能正常显示。
>
> 建议先加一个 `.gitignore` 忽略 `.workbuddy/`（里面是辅助脚本和日志，不属于网站内容）。

---

## 五、设计风格约定

改样式前先知道这套规则，避免改崩：

- **黑金科技风**：底色 `#07080c`，金色 `#e8b923 / #ffd75e / #b8860b`。`--brand` 变量已指向金色，改一处即整体变色。
- **全卡片式**：所有内容模块都承载在 `.card` 上（含 Hero 大卡、时间线项、课程标签云）。
- **PPT 分屏节奏**：用 CSS counter 给每个 `.section` 自动编号 `01 / 02 / 03`，区块间是金色渐变分隔线，标题为金色渐变文字。增删区块不需要手动改编号。
- **打印样式**：深色站直接打印会全黑，`@media print` 里做了白底反转，`Ctrl+P` 可直接导出 PDF 简历。

---

## 六、后续扩展（已预留）

### 1. 博客板块

导航里的「博客 · Soon」和 `blog.html` 都是占位。渲染函数 `renderBlog()` 已经就位，写好文章后替换该函数即可上线。

### 2. 接后端 / 数据库

`data.js` 底部有 `API_CONFIG`，`main.js` 的 `loadRemoteData()` 已实现「拉取远程数据覆盖本地」的逻辑。接入时只改这里，其他代码不用动：

```js
API_CONFIG: {
  enabled: true,                          // 改成 true
  endpoint: "https://api.example.com/resume",
  timeout: 5000
}
```

远程接口返回一个与 `SITE_DATA` 同结构的 JSON 对象即可。

### 3. 留言表单

目前用联系方式卡片 + 一键复制。若要真表单，静态站可接 Formspree / Getform 等第三方服务。

---

## 七、图片与授权

头像：`assets/images/avatar.jpg`（卡通版，27KB）；原证件照备份在 `assets/images/avatar-photo.jpg`，想换回改 `profile.avatar` 即可。

配图均来自 **Wikimedia Commons**，属免费授权，详情页图下与页脚均标注了来源：

| 文件 | 用于 | 授权 |
| --- | --- | --- |
| `proj-ai-match.jpg` | AI-match 项目封面 | CC BY-SA 4.0 |
| `proj-telecom-ai.jpg` | AI 提效系统封面 | CC0 |
| `proj-library.jpg` | 图书管理系统封面 | CC BY 4.0 |
| `edu-campus.jpg` | 教育页横幅 | CC BY 4.0 |
| `about-campus.jpg` | 关于页横幅 | CC BY-SA 3.0 |

换图脚本：`.workbuddy/fetch_images.py`（按关键词搜索 Commons → 按授权过滤 → 裁剪压缩）。改脚本里的 `TASKS` 搜索词重跑即可。

---

## 八、改动后自检

项目带一个 jsdom 冒烟测试，会渲染中英双语全部 9 个页面并检查关键节点：

```bash
npm install jsdom        # 首次需要
node .workbuddy/smoke.js
```

全部输出 `PASS` 即正常；改完 `data.js` 或 `main.js` 跑一遍最稳妥。
