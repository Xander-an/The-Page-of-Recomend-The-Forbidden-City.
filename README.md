# 故宫单页网站作业

本项目对应《Web Front End Development Technology Assignment - 1》，以北京故宫为主题。页面为英文，便于按作业要求录制英文讲解。基础要求与两项加分挑战均已实现。

## 如何打开

最简单的方法：双击 `index.html`，用 Edge 或 Chrome 打开。页面文字、样式和照片均在本地，无须安装依赖。

推荐录屏预览方式：双击 `start-preview.cmd`，保持终端窗口开启，在浏览器访问 `http://127.0.0.1:4173`。也可在项目目录执行 `npm start`。需要电脑已安装 Node.js，无须执行 `npm install`。预览完毕在终端按 Ctrl+C 停止。

如果 4173 端口被占用，可在 PowerShell 执行 `$env:PORT=4174`，再执行 `node serve.mjs`，访问 `http://127.0.0.1:4174`。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `index.html` | 单页 HTML5 结构、内容、套餐表格与两个 iframe |
| `styles.css` | 配色、字体、布局、悬停效果及响应式断点 |
| `script.js` | 视频/地图标签页切换、键盘控制与导航高亮 |
| `assets/` | 本地实景照片与 SVG 网站图标 |
| `serve.mjs` | 无第三方依赖的可选本地预览服务 |
| `start-preview.cmd` | Windows 本地预览启动脚本 |
| `英文录屏讲解稿.md` | 建议在 6–8 分钟内完成的英文讲解稿与演示顺序 |

## 作业要求对应

| 要求 | 实现位置 |
| --- | --- |
| Header 与 Banner | `header.site-header` 和 `section.hero`，使用本地故宫全景图 |
| 使用 nav 导航 | `nav.main-nav`，通过 `#story` 等锚点跳转 |
| 标题、段落、图片介绍历史地点 | The story 部分；使用 `h1`、`h2`、`p`、`figure`、`img` |
| 旅游套餐表格 | Journeys 部分；包含套餐、天数、活动与示例费用 |
| 至少一个 table | `table`，含 `caption`、`thead`、`tbody` 和带 `scope` 的表头 |
| 至少一个 iframe | Bilibili 视频、Baidu Map 各一个，共两个 |
| 百度地图 | Explore & visit → Find your way 标签页 |
| 哔哩哔哩视频 | Explore & visit → Watch the film 标签页，故宫博物院官方百年视频 |
| 美化后的必游景点列表 | Must-see places 部分，使用 `ol` 和 `li` |
| 图片和链接 | 本地照片、官网、数字故宫、B 站、百度地图与电子邮件链接 |
| CSS 布局、字体、颜色、悬停 | CSS 变量、Grid、Flexbox、过渡、图像放大 |
| 加分：导航与表格行悬停 | `.main-nav a:hover`、`tbody tr:hover` |
| 加分：带联系方式和社交媒体的页脚 | 邮件、地址、Palace Museum on Bilibili 链接 |
| 可选：响应式设计 | 1100 / 800 / 600px 媒体查询；小屏表格可横向滚动 |

## 录屏与提交

作业文件要求提交不超过 10 分钟的视频，在视频中展示网页、用英语解释设计与代码，并将本人的照片放在画面右上角。网站本身不需要放个人照片。请参考 `英文录屏讲解稿.md`，自行录制本人讲解的视频。文档写明截止时间为 2026 年 11 月 1 日，提交 MP4 或同类视频，无须提交源码。

本项目不包含个人照片，也未生成或代替录制本人出镜的视频。

## 网络与素材

- 地图和视频依赖外部平台及网络环境；各自附有原站链接。若嵌入区域被平台限制，可使用原站链接。
- 网站提供的是学生作业示例套餐，价格不是故宫官方报价，没有接入支付或预约服务。
- 历史与公共联系方式来自故宫博物院；页面页脚的 Sources & photo credits 提供来源与照片授权。
- 四张照片来自 Wikimedia Commons。文件保留原始照片，页面用 `object-fit: cover` 进行展示裁切，作者与 CC 协议链接见网站页脚。
- 不需要数据库、账号、API 密钥或外部 CSS/字体/CDN。

## 常用修改

在 `index.html` 修改文案、表格与外部链接；在 `styles.css` 的 `:root` 中修改全站配色。替换照片时保留文件名，或同步修改对应 `src` 和 `alt`。如需填写姓名和学号，可修改页脚的学生项目说明。
