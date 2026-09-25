/* ============================================================
   数据层 · 全站内容集中在这里（廖亚铎 · 个人简历网站）
   ------------------------------------------------------------
   1) 所有需要中英双语的字段写成 { zh: "中文", en: "English" }
      只写字符串也行（会中英文都显示同一句）
   2) 图片放 assets/images/ 下，引用写 ./assets/images/xxx.png
   3) 以后想接数据库，只改下面 API_CONFIG，其他代码不用动
   ============================================================ */

window.SITE_DATA = {
  /* ---------- 站点基本信息 ---------- */
  meta: {
    brand: { zh: "yaduo", en: " },
    logoText: "LYD",
    footerNote: {
      zh: "用 HTML / CSS / JavaScript AI生成 · 托管于 GitHub Pages",
      en: "Handcrafted with HTML / CSS / JavaScript · Hosted on GitHub Pages",
    },
    imageCredit: {
      zh: "配图来自 Wikimedia Commons（CC0 / CC BY / CC BY-SA 免费授权）",
      en: "Images from Wikimedia Commons (CC0 / CC BY / CC BY-SA)",
    },
  },

  /* ---------- 个人档案（首页 Hero） ---------- */
  profile: {
    name: { zh: "廖亚铎", en: "Liao Yaduo" },
    title: {
      zh: "计算机科学与技术 · 2027 届本科生 ｜ AI 应用开发 & 全栈",
      en: "Computer Science & Technology · Class of 2027 ｜ AI Application & Full-stack",
    },
    tagline: {
      zh: "用 AI 把重复的活干掉，把零散的经验沉淀成可复用的流程。三年校园一线实战：带过 50 余人的团队，服务过 3000 多名用户，也独立做过基于 LangChain 的 AI 提效系统。",
      en: "I use AI to kill repetitive work and turn scattered experience into reusable process. Three years on the front line: led a team of 50+, served 3,000+ users, and independently built a LangChain-powered productivity system.",
    },
    avatar: "./assets/images/avatar.jpg",
    meta: [
      { icon: "📍", text: { zh: "江西 · 赣州", en: "Ganzhou, Jiangxi" } },
      { icon: "🎓", text: { zh: "南昌航空大学科技学院 · 2023 级", en: "Nanchang Hangkong University STC · Class of 2023" } },
      { icon: "📮", text: { zh: "liaoyaduo@163.com", en: "liaoyaduo@163.com" } },
      { icon: "🎯", text: { zh: "求职意向：AI 应用开发 / 全栈（实习）", en: "Target: AI Application / Full-stack Internship" } },
    ],
    highlights: [
      { value: "50+", label: { zh: "带领团队规模（从 5 人起）", en: "Team Size Led (from 5)" } },
      { value: "3000+", label: { zh: "累计服务校园用户", en: "Campus Users Served" } },
      { value: "350+", label: { zh: "单季发展用户 · 校区第一", en: "Users in One Season · No.1" } },
      { value: "2 年", label: { zh: "电信「优秀销售」连续获评", en: "Consecutive \"Top Sales\" Awards" } },
    ],
    intro: {
      zh: [
        "我是廖亚铎，南昌航空大学科技学院计算机科学与技术专业 2023 级本科生。我的成长路径有点特别：一半在代码里，一半在真实的校园市场一线。",
        "大一入学那年我加入中国电信校园创业团队，从发传单的一线成员做到天翼创业社社长，带出 50 余人的团队，累计服务校园用户 3000 余人。这段经历让我养成了一个习惯——先搞清楚对方真正在意什么，再想用什么方案解决。",
        "也正是这段经历，让我发现了最值得用技术解决的问题：团队内容产能跟不上、新人话术不统一。于是我用 LangChain + LangGraph + FastAPI 独立做了一套 AI 提效系统，把需求梳理、Agent 流程设计、服务部署到团队落地推广的完整闭环跑了一遍。",
        "现在，我希望把「懂业务 + 能落地」这两件事继续做深，寻找 AI 应用开发 / 全栈方向的实习机会。",
      ],
      en: [
        "I'm Liao Yaduo, a Computer Science & Technology undergraduate (Class of 2023) at Nanchang Hangkong University Science & Technology College. My path is a bit unusual: half of it lives in code, the other half on the real front line of campus business.",
        "In my freshman year I joined China Telecom's campus entrepreneurship team and grew from a frontline promoter to president of the Tianyi Entrepreneurship Club — leading 50+ people and serving over 3,000 campus users. That experience taught me a habit: first understand what people truly care about, then decide what solution to build.",
        "It also showed me the problem most worth solving with technology: the team couldn't produce content fast enough, and new members' pitches were inconsistent. So I built an AI productivity system with LangChain + LangGraph + FastAPI, running the entire loop myself — from requirement analysis and agent design to deployment and team-wide rollout.",
        "Now I want to go deeper on both \"understanding the business\" and \"making it actually ship\", and I'm looking for an internship in AI application development or full-stack engineering.",
      ],
    },
  },

  /* ---------- 页面横幅配图（图片均来自 Wikimedia Commons 免费授权） ---------- */
  banners: {
    education: {
      image: "./assets/images/edu-campus.jpg",
      alt: { zh: "大学校园建筑与草坪", en: "University campus building and lawn" },
      credit: "Denny Hall, University of Washington by Guywelch2000 / Wikimedia Commons · CC BY 4.0",
    },
    about: {
      image: "./assets/images/about-campus.jpg",
      alt: { zh: "大学校园中的学生", en: "Students on a university campus" },
      credit: "Campus WU by P e z i / Wikimedia Commons · CC BY-SA 3.0",
    },
  },

  /* ---------- 教育经历 ---------- */
  education: [
    {
      school: { zh: "南昌航空大学科技学院", en: "Nanchang Hangkong University STC" },
      degree: { zh: "工学学士 · 计算机科学与技术（全日制本科）", en: "B.Eng. in Computer Science & Technology (Full-time)" },
      period: "2023.09 — 2027.06",
      location: { zh: "江西 · 九江共青城", en: "Gongqingcheng, Jiujiang, Jiangxi" },
      gpa: { zh: "2023 级 · 在读", en: "Class of 2023" },
      desc: {
        zh: "系统学习计算机核心课程，同时把课堂知识用到校园市场的真实业务里——用 AI 解决实际问题的能力，是我这几年收获最大的部分。",
        en: "Built a solid foundation in core CS courses while applying classroom knowledge to real campus business — learning to solve real problems with AI is the biggest gain of these years.",
      },
      courses: [
        { zh: "数据结构", en: "Data Structures" },
        { zh: "操作系统", en: "Operating Systems" },
        { zh: "计算机网络", en: "Computer Networks" },
        { zh: "数据库系统原理", en: "Database Systems" },
        { zh: "软件工程", en: "Software Engineering" },
        { zh: "人工智能导论", en: "Introduction to AI" },
        { zh: "面向对象程序设计", en: "Object-Oriented Programming" },
        { zh: "离散数学", en: "Discrete Mathematics" },
        { zh: "计算机组成原理", en: "Computer Organization" },
      ],
      honors: [
        { zh: "中国电信股份有限公司共青城分公司「优秀销售」称号（2025 年度，连续两年获评）", en: "\"Top Sales\" Award, China Telecom Gongqingcheng Branch (FY2025, two consecutive years)" },
        { zh: "带领社团团队业绩居校区第一，2026 年秋季开学季单季发展用户 350 余户", en: "Led the club to No.1 performance on campus, with 350+ users acquired in the autumn 2026 season" },
      ],
    },
  ],

  /* ---------- 技能 ---------- */
  skills: [
    {
      category: { zh: "AI 应用开发", en: "AI Application Development" },
      icon: "🤖",
      items: [
        { name: "LangChain / LangGraph", level: 88, note: { zh: "链式调用、状态图、多 Agent", en: "LCEL, StateGraph, Multi-Agent" } },
        { name: "Prompt Engineering", level: 90, note: { zh: "模板管理与效果调优", en: "Templates & Tuning" } },
        { name: "大模型 API 调用", level: 88, note: { zh: "DeepSeek / OpenAI", en: "DeepSeek / OpenAI" } },
        { name: "RAG 检索增强生成", level: 85, note: { zh: "Chroma 向量库、语义检索", en: "Chroma, Semantic Search" } },
        { name: "AI Agent 开发", level: 80, note: { zh: "ReAct、Plan-and-Execute", en: "ReAct, Plan-and-Execute" } },
        { name: "AI 辅助开发", level: 92, note: { zh: "Cursor / Claude 融入工作流", en: "Cursor / Claude Workflow" } },
      ],
    },
    {
      category: { zh: "编程语言", en: "Languages" },
      icon: "⌨️",
      items: [
        { name: "Python", level: 90, note: { zh: "主力语言", en: "Primary" } },
        { name: "JavaScript", level: 75, note: { zh: "前端与接口联调", en: "Frontend & API" } },
        { name: "Java / C++", level: 65, note: { zh: "课程与项目级", en: "Course & Project" } },
        { name: "SQL", level: 78, note: { zh: "建表与查询优化", en: "Schema & Queries" } },
      ],
    },
    {
      category: { zh: "Web 与工程工具", en: "Web & Engineering Tools" },
      icon: "🛠",
      items: [
        { name: "Vue3", level: 75, note: { zh: "组件开发与页面搭建", en: "Components & Pages" } },
        { name: "Flask / FastAPI", level: 80, note: { zh: "RESTful 接口开发", en: "RESTful APIs" } },
        { name: "MySQL / Redis", level: 78, note: { zh: "数据持久化与缓存", en: "Storage & Cache" } },
        { name: "Git / Linux", level: 72, note: { zh: "版本管理与日常运维", en: "Version Control & Ops" } },
        { name: "Docker", level: 62, note: { zh: "服务容器化部署", en: "Containerization" } },
        { name: "数据处理", level: 85, note: { zh: "Excel 透视 / Python 清洗可视化", en: "Excel / Python Analysis" } },
      ],
    },
  ],

  /* ---------- 荣誉与认定 ---------- */
  certificates: [
    {
      name: { zh: "「优秀销售」称号 · 2025 年度", en: "\"Top Sales\" Award · FY2025" },
      issuer: { zh: "中国电信股份有限公司共青城分公司", en: "China Telecom Gongqingcheng Branch" },
      date: "2025",
    },
    {
      name: { zh: "「优秀销售」称号 · 2024 年度", en: "\"Top Sales\" Award · FY2024" },
      issuer: { zh: "中国电信股份有限公司共青城分公司", en: "China Telecom Gongqingcheng Branch" },
      date: "2024",
    },
  ],

  /* ---------- 项目经历（最核心的一块） ---------- */
  projects: [
    {
      id: "ai-match",
      name: { zh: "AI-match 智能匹配系统", en: "AI-match Intelligent Matching System" },
      cover: "AI",
      coverImage: "./assets/images/proj-ai-match.jpg",
      coverBadge: "AI Matching",
      coverAlt: { zh: "龙脊梯田 · 乡村振兴主题配图", en: "Rice terraces · rural revitalization" },
      coverCredit: "Longsheng Rice Terraces by King of Hearts / Wikimedia Commons · CC BY-SA 4.0",
      period: "2025.10 — 2026.03",
      role: { zh: "全栈开发（AI 辅助）· 乡村振兴专家匹配平台", en: "Full-stack Developer (AI-assisted) · Rural Revitalization Expert Matching Platform" },
      tags: ["Vue3", "Python", "MySQL", "JWT", "AI Matching", "Dashboard"],
      summary: {
        zh: "面向乡村振兴场景的三端分离专家匹配平台，让村集体需求与农业专家精准对接。设计「领域标签 + AI 语义分析」双算法匹配机制，并搭建管理端数据看板；全功能开发完成，测试通过率 100%，即将上线部署。",
        en: "A three-frontend expert matching platform for rural revitalization that precisely connects village needs with agricultural experts. Designed a dual matching mechanism (domain tags + AI semantic analysis) and built a management dashboard; all features completed with a 100% test pass rate, about to go live.",
      },
      highlights: [
        {
          zh: "采用 Vue3 + Python + MySQL 架构，实现专家端、村集体端、管理端三端分离的复杂业务系统",
          en: "Built a complex three-tier system (expert side, village side, admin side) on a Vue3 + Python + MySQL stack",
        },
        {
          zh: "设计并实现 JWT 双 Token 认证机制，保障多端会话安全与令牌自动续期",
          en: "Designed a JWT dual-token authentication mechanism for secure multi-client sessions and automatic token refresh",
        },
        {
          zh: "研发「专家领域标签 + AI 语义分析」双算法匹配，实现专家与村集体需求的精准对接",
          en: "Developed a dual matching algorithm (expert domain tags + AI semantic analysis) for precise demand-expert pairing",
        },
        {
          zh: "开发数据可视化模块，为管理端提供匹配成功率、专家分布等关键指标看板",
          en: "Built a data visualization module showing match success rates and expert distribution for the admin side",
        },
        {
          zh: "借助 AI 辅助完成前端组件、后端接口与数据库优化，显著提升开发效率",
          en: "Leveraged AI-assisted development for frontend components, backend APIs and database optimization, greatly improving efficiency",
        },
      ],
      links: [],
    },
    {
      id: "telecom-ai",
      name: { zh: "校园电话卡 AI 提效系统", en: "Campus SIM AI Productivity System" },
      cover: "AI",
      coverImage: "./assets/images/proj-telecom-ai.jpg",
      coverBadge: "AI Workflow",
      coverAlt: { zh: "笔记本电脑上的代码编辑界面", en: "Code editor on a laptop" },
      coverCredit: "Laptop coding programs (Unsplash) / Wikimedia Commons · CC0",
      period: "2025 — 至今",
      role: { zh: "发起人 / 主开发（个人项目）", en: "Founder / Lead Developer (Personal Project)" },
      tags: ["LangChain", "LangGraph", "FastAPI", "DeepSeek", "RAG"],
      summary: {
        zh: "针对校园团队「内容产能不足、新人话术不统一」两个真实痛点，构建 AI 工具实现宣传内容批量生成与标准话术推荐。独立完成需求梳理 → Agent 流程设计 → 服务部署 → 团队落地推广的完整闭环。",
        en: "An AI tool built for two real pain points of the campus team: insufficient content output and inconsistent new-member pitches. It generates marketing content in bulk and recommends standardized talk tracks. I owned the full loop: requirements, agent design, deployment and team rollout.",
      },
      highlights: [
        {
          zh: "识别真实业务问题并用技术给出可交付方案：先跑通最小可用版本，再用真实反馈迭代",
          en: "Identified a real business problem and delivered a workable technical solution, starting from an MVP and iterating on real feedback",
        },
        {
          zh: "基于 LangChain / LangGraph 设计 Agent 流程，接入 DeepSeek 大模型完成内容生成与话术推荐",
          en: "Designed the agent workflow with LangChain / LangGraph and integrated the DeepSeek model for content generation and pitch recommendation",
        },
        {
          zh: "用 RAG 检索增强 + 标准化话术库，保证输出内容符合团队统一口径",
          en: "Used RAG retrieval plus a standardized talk-track library to keep all output consistent with the team's messaging",
        },
        {
          zh: "用 FastAPI 提供服务接口，在团队内落地推广并整理使用文档，新人上手周期明显缩短",
          en: "Served the tool via FastAPI, rolled it out across the team with docs, and noticeably shortened the onboarding cycle for new members",
        },
      ],
      links: [],
    },
    {
      id: "library",
      name: { zh: "智能图书管理系统", en: "Smart Library Management System" },
      cover: "BS",
      coverImage: "./assets/images/proj-library.jpg",
      coverBadge: "Library",
      coverAlt: { zh: "大学图书馆阅览室", en: "University library reading room" },
      coverCredit: "Suzzallo Reading Room, University of Washington by Guywelch2000 / Wikimedia Commons · CC BY 4.0",
      period: "2025.06 — 2025.07",
      role: { zh: "独立开发 · B/S 架构图书借还平台", en: "Solo Developer · B/S Library Platform" },
      tags: ["Flask", "MySQL", "PyMySQL", "RESTful API", "权限校验"],
      summary: {
        zh: "独立完成的 B/S 架构图书借还平台，覆盖图书、读者、借阅记录三大核心业务，实现完整的增删改查与基于角色的权限校验，系统稳定运行。",
        en: "A B/S library platform built entirely on my own, covering books, readers and borrowing records with full CRUD operations and role-based access control. Runs stably.",
      },
      highlights: [
        {
          zh: "独立负责 B/S 架构系统设计，采用 Flask 搭建后端服务，搭配 MySQL 实现数据持久化",
          en: "Owned the whole B/S system design: Flask backend services with MySQL persistence",
        },
        {
          zh: "完成图书、读者、借阅记录等核心数据表设计，通过 PyMySQL 封装数据库连接层",
          en: "Designed core tables for books, readers and loans, and abstracted the DB connection layer with PyMySQL",
        },
        {
          zh: "开发图书管理、读者管理、借还登记等完整 CRUD 接口与业务逻辑",
          en: "Implemented complete CRUD APIs and business logic for book, reader and borrow/return management",
        },
        {
          zh: "实现基于角色的权限校验机制，保障不同用户角色的数据访问安全",
          en: "Implemented role-based authorization to secure data access for different user roles",
        },
      ],
      links: [],
    },
  ],

  /* ---------- 实习与实践经历 ---------- */
  experience: [
    {
      org: { zh: "天翼创业社（中国电信校园创业社团）", en: "Tianyi Entrepreneurship Club (China Telecom Campus Club)" },
      role: { zh: "社长", en: "President" },
      period: "2024.09 — 至今",
      typeLabel: { zh: "创业实践", en: "Entrepreneurship" },
      points: [
        {
          zh: "团队管理：统筹 50 余人的招募、培训、分工与考核，建立「新人带教 + 周度复盘」机制，团队从我接手时的 5 人稳步拓展到 50 余人，形成可自我运转的人才梯队",
          en: "Team management: ran recruitment, training, role assignment and review for 50+ people; built a \"mentorship + weekly retro\" mechanism and grew the team from 5 to 50+, forming a self-sustaining talent pipeline",
        },
        {
          zh: "经营业绩：任职期间累计服务校园用户 3000 余人；2026 年秋季开学季单季发展用户 350 余户，业绩居校区第一",
          en: "Business results: served 3,000+ campus users in total; acquired 350+ users in the autumn 2026 season alone, ranking No.1 on campus",
        },
        {
          zh: "售前沟通：面向客户开展产品介绍与需求确认，积累大量面对面宣讲与一对一咨询经验，能依据客户关注点灵活调整表达重点",
          en: "Pre-sales communication: handled product pitches and requirement confirmation, gaining extensive face-to-face and one-on-one consulting experience and the ability to adapt messaging to client concerns",
        },
        {
          zh: "方案设计：针对新生、在校生、毕业生等不同人群设计差异化产品组合与推荐方案",
          en: "Solution design: created differentiated product bundles and recommendation plans for freshmen, current students and graduates",
        },
        {
          zh: "标准沉淀：牵头建立标准化的新人培训流程与客户应答口径，把个人经验转化为团队可复用的资产",
          en: "Standardization: led the creation of a standardized onboarding process and client talk tracks, turning personal experience into reusable team assets",
        },
      ],
    },
    {
      org: { zh: "校园渠道合作与市场拓展", en: "Campus Channel Partnership & Market Development" },
      role: { zh: "负责人（社会实践）", en: "Lead (Social Practice)" },
      period: "2023.10 — 至今",
      typeLabel: { zh: "社会实践", en: "Social Practice" },
      points: [
        {
          zh: "对接院系、班级、宿舍楼栋、学生组织等多类渠道资源，建立稳定合作网络",
          en: "Developed stable partnerships across faculties, classes, dormitory buildings and student organizations",
        },
        {
          zh: "负责活动策划、物料准备、现场执行与效果回收全流程，形成可复制的校园活动执行方法",
          en: "Owned the full cycle of event planning, materials, on-site execution and result review, forming a repeatable campus campaign playbook",
        },
      ],
    },
  ],

  /* ---------- 关于我 ---------- */
  about: {
    story: {
      zh: [
        "我的大学生活有两条线：一条是计算机专业的课堂与代码，另一条是校园市场的一线实战。大一入学那年，我加入了中国电信的校园创业团队，从最基础的地推做起。",
        "两年后我成为天翼创业社社长，带着 50 余人的团队在开学季打硬仗。这段经历教会我三件事：把复杂目标拆成每个人当天能执行的动作；用标准化的流程替代对「能人」的依赖；以及——听完对方真正在意什么，再谈方案。",
        "也正是带团队的过程中，我发现了最值得解决的两个问题：团队内容产能跟不上开学季的节奏，新人话术五花八门。于是我把课上学的 AI 知识用到了自己的业务上，用 LangChain + LangGraph + FastAPI 做了一套 AI 提效系统，独立跑完从需求梳理到团队落地的全流程。",
        "后来我又接手了 AI-match 乡村振兴专家匹配平台的全栈开发，负责三端分离架构、JWT 双 Token 认证和「领域标签 + AI 语义」双算法匹配。",
        "我始终相信一件事：技术只有落到真实场景里，才算真的学会了。这也是我未来想做的事——做能被人真正用起来的 AI 应用。",
      ],
      en: [
        "My university life runs on two tracks: coursework and code in computer science, and hands-on practice on the campus market front line. In my freshman year I joined China Telecom's campus entrepreneurship team, starting from the most basic street-level promotion.",
        "Two years later I became president of the Tianyi Entrepreneurship Club, leading a 50+ person team through the intense back-to-school season. That experience taught me three things: break a complex goal into actions each person can execute today; replace dependence on \"star performers\" with standardized process; and — listen for what the other side actually cares about before pitching a solution.",
        "Running that team also revealed the two problems most worth solving: content output couldn't keep up with the back-to-school rhythm, and new members' pitches were all over the place. So I applied the AI knowledge from my courses to my own business — building an AI productivity system with LangChain + LangGraph + FastAPI and driving the whole process from requirement analysis to team rollout on my own.",
        "I then took on full-stack development for AI-match, a rural revitalization expert matching platform, where I owned the three-tier architecture, JWT dual-token authentication and a dual matching algorithm combining domain tags with AI semantics.",
        "I firmly believe technology only counts as learned when it lands in a real scenario. That's what I want to keep doing: building AI applications that people actually use.",
      ],
    },
    timeline: [
      {
        year: "2023",
        title: { zh: "入学 & 埋下第一颗种子", en: "Enrollment & The First Seed" },
        desc: {
          zh: "考入南昌航空大学科技学院计算机科学与技术专业；同年 10 月加入中国电信校园创业团队，从一线地推做起。",
          en: "Entered the CS program at Nanchang Hangkong University STC; joined China Telecom's campus team in October, starting from frontline promotion.",
        },
      },
      {
        year: "2024",
        title: { zh: "成为社长，开始带团队", en: "Becoming President, Leading a Team" },
        desc: {
          zh: "接任天翼创业社社长，建立新人带教与周度复盘机制，获评中国电信「优秀销售」。",
          en: "Became president of the Tianyi Club, built the mentorship and weekly retro system, and received China Telecom's \"Top Sales\" award.",
        },
      },
      {
        year: "2025",
        title: { zh: "把 AI 用进自己的业务", en: "Bringing AI Into My Own Business" },
        desc: {
          zh: "启动校园电话卡 AI 提效系统；接手 AI-match 智能匹配平台全栈开发；连续第二年获评「优秀销售」。",
          en: "Launched the campus SIM AI productivity system; took over full-stack development of the AI-match platform; earned the \"Top Sales\" award for a second year.",
        },
      },
      {
        year: "2026",
        title: { zh: "团队 50 人，单季校区第一", en: "50-Person Team, No.1 on Campus" },
        desc: {
          zh: "秋季开学季带团队单季发展用户 350 余户，业绩居校区第一；AI-match 项目全功能完成，测试通过率 100%。",
          en: "Led the team to 350+ new users in the autumn season, ranking No.1 on campus; completed all AI-match features with a 100% test pass rate.",
        },
      },
    ],
    interests: [
      { icon: "🧠", name: { zh: "AI 工具深度使用者（Cursor / Claude / DeepSeek）", en: "Heavy AI Tool User (Cursor / Claude / DeepSeek)" } },
      { icon: "✍️", name: { zh: "方案撰写与流程文档沉淀", en: "Solution Writing & Process Documentation" } },
      { icon: "🎤", name: { zh: "产品宣讲与新人培训带教", en: "Product Pitching & Team Mentoring" } },
      { icon: "🤝", name: { zh: "校园团队管理与渠道拓展", en: "Campus Team Management & Channel Growth" } },
    ],
  },

  /* ---------- 联系方式 ---------- */
  contact: {
    note: {
      zh: "欢迎聊实习机会、AI 应用开发合作，或者交流校园市场那些事。我看到消息一般会尽快回复。",
      en: "Feel free to reach out about internships, AI application projects, or campus marketing in general. I reply as soon as I see the message.",
    },
    items: [
      {
        icon: "📮",
        label: { zh: "邮箱", en: "Email" },
        value: "liaoyaduo@163.com",
        hint: { zh: "点击复制", en: "Click to copy" },
        copyable: true,
        href: "mailto:liaoyaduo@163.com",
      },
      {
        icon: "📱",
        label: { zh: "电话 / 微信", en: "Phone / WeChat" },
        value: "188-7070-5221",
        hint: { zh: "微信同号，可随时到岗", en: "Same for WeChat · Available immediately" },
        copyable: true,
      },
      {
        icon: "🐙",
        label: "GitHub",
        value: "github.com/LYD0908",
        hint: { zh: "查看我的代码", en: "Check out my code" },
        href: "https://github.com/LYD0908",
      },
      {
        icon: "🎯",
        label: { zh: "求职意向", en: "Job Target" },
        value: { zh: "AI 应用开发 / 全栈开发（实习）", en: "AI Application / Full-stack (Internship)" },
        hint: { zh: "可随时到岗 · 全职实习", en: "Available immediately · Full-time" },
      },
    ],
  },

  /* ---------- 预留：以后接后端 / 数据库只改这里 ----------
     用法：把 enabled 改成 true，endpoint 填你的接口地址，
     main.js 中的 loadRemoteData() 会自动尝试拉取远程数据覆盖本地。 */
  API_CONFIG: {
    enabled: false,
    endpoint: "", // 例： "https://api.example.com/resume"
    timeout: 5000,
  },
};
