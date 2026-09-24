/* ============================================================
   渲染引擎 · 中英双语 / 导航 / 动效 / 数据加载
   依赖：assets/js/data.js（全局变量 SITE_DATA）
   ============================================================ */
(function () {
  "use strict";

  var D = window.SITE_DATA || {};
  var LANG_KEY = "resume-lang";

  /* ---------- 界面固定文案 ---------- */
  var UI = {
    home: { zh: "首页", en: "Home" },
    education: { zh: "教育背景", en: "Education" },
    skills: { zh: "技能栈", en: "Skills" },
    projects: { zh: "项目经历", en: "Projects" },
    experience: { zh: "实习经历", en: "Experience" },
    about: { zh: "关于我", en: "About" },
    blog: { zh: "博客", en: "Blog" },
    contact: { zh: "联系", en: "Contact" },
    projectDetail: { zh: "项目详情", en: "Project Detail" },

    viewResume: { zh: "查看完整简历", en: "View Full Resume" },
    getInTouch: { zh: "联系我", en: "Get in Touch" },
    seeProjects: { zh: "看看我的项目", en: "See My Projects" },
    all: { zh: "全部", en: "All" },
    viewDetail: { zh: "查看详情", en: "View Details" },
    backToList: { zh: "返回项目列表", en: "Back to Projects" },
    intro: { zh: "自我介绍", en: "About Me" },
    quickLinks: { zh: "快速导航", en: "Quick Links" },
    exploreMore: { zh: "了解更多", en: "Explore More" },
    featuredProjects: { zh: "精选项目", en: "Featured Projects" },
    mainCourses: { zh: "主修课程", en: "Core Courses" },
    honors: { zh: "荣誉奖项", en: "Honors & Awards" },
    certificates: { zh: "荣誉与认定", en: "Honors & Recognition" },
    myStory: { zh: "我的故事", en: "My Story" },
    growth: { zh: "成长时间线", en: "Growth Timeline" },
    interests: { zh: "兴趣爱好", en: "Interests" },
    highlights: { zh: "项目亮点", en: "Highlights" },
    reachOut: { zh: "联系方式", en: "Reach Out" },
    blogSoon: { zh: "博客板块正在建设中，敬请期待 ✨", en: "Blog section is under construction — stay tuned ✨" },
    blogSoonDesc: {
      zh: "页面结构与渲染逻辑已经预留好，写好第一篇文章后即可上线。",
      en: "The structure and rendering logic are ready — it goes live as soon as the first post is written.",
    },
    notFound: { zh: "没有找到这个项目", en: "Project not found" },
    copied: { zh: "已复制！", en: "Copied!" },
    photoCredit: { zh: "图片来源：", en: "Photo: " },
    tInternship: { zh: "实习", en: "Internship" },
    tCampus: { zh: "校园经历", en: "Campus" },
    top: { zh: "顶部", en: "Top" },
  };

  var NAV = [
    { key: "home", href: "./index.html" },
    { key: "education", href: "./education.html" },
    { key: "skills", href: "./skills.html" },
    { key: "projects", href: "./projects.html" },
    { key: "experience", href: "./experience.html" },
    { key: "about", href: "./about.html" },
    { key: "blog", href: "javascript:void(0)", soon: true },
    { key: "contact", href: "./contact.html" },
  ];

  /* ---------- 工具 ---------- */
  var lang = (function () {
    try {
      return localStorage.getItem(LANG_KEY) || "zh";
    } catch (e) {
      return "zh";
    }
  })();

  function t(v) {
    if (v == null) return "";
    if (typeof v === "object") return v[lang] || v.zh || v.en || "";
    return v;
  }
  function ui(key) {
    return t(UI[key] || key);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  /* ---------- 导航 & 页脚 ---------- */
  function renderChrome(activeKey) {
    var brand = t(D.meta && D.meta.brand);
    var logo = (D.meta && D.meta.logoText) || "ME";

    var links = NAV.map(function (n) {
      var cls = "nav__link" + (n.key === activeKey ? " is-active" : "") + (n.soon ? " is-soon" : "");
      return (
        '<a class="' + cls + '" href="' + n.href + '"' +
        (n.soon ? ' data-soon="1"' : "") + ">" + ui(n.key) + (n.soon ? " · Soon" : "") + "</a>"
      );
    }).join("");

    var nav = document.createElement("header");
    nav.className = "nav";
    nav.innerHTML =
      '<div class="nav__inner">' +
      '<a class="nav__brand" href="./index.html"><span class="nav__logo">' + esc(logo) + "</span>" + esc(brand) + "</a>" +
      '<button class="nav__toggle" aria-label="menu">☰</button>' +
      '<nav class="nav__links" id="navLinks">' + links +
      '<div class="lang-switch">' +
      '<button data-lang="zh" class="' + (lang === "zh" ? "is-active" : "") + '">中文</button>' +
      '<button data-lang="en" class="' + (lang === "en" ? "is-active" : "") + '">EN</button>' +
      "</div></nav></div>";
    document.body.insertBefore(nav, document.body.firstChild);

    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML =
      '<div class="container"><div class="footer__inner"><div>' + esc(t(D.meta && D.meta.footerNote)) + "</div>" +
      '<div class="footer__links"><a href="./index.html">' + ui("home") + "</a>" +
      '<a href="./projects.html">' + ui("projects") + "</a>" +
      '<a href="./contact.html">' + ui("contact") + "</a></div></div>" +
      (D.meta && D.meta.imageCredit
        ? '<div style="margin-top:10px;font-size:12px;color:var(--muted-2)">' +
          esc(t(D.meta.imageCredit)) + "</div>"
        : "") +
      "</div>";
    document.body.appendChild(footer);

    // 移动端菜单
    var toggle = $(".nav__toggle", nav);
    toggle.addEventListener("click", function () {
      $("#navLinks", nav).classList.toggle("is-open");
    });

    // 语言切换
    qsa(".lang-switch button", nav).forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });

    // 博客（建设中）提示
    qsa('[data-soon="1"]', nav).forEach(function (a) {
      a.addEventListener("click", function () {
        alert(ui("blogSoon"));
      });
    });

    // 返回顶部
    var top = document.createElement("button");
    top.className = "to-top";
    top.innerHTML = "↑";
    top.title = ui("top");
    document.body.appendChild(top);
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", function () {
      top.classList.toggle("is-show", window.scrollY > 400);
    });
  }

  function setLang(l) {
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch (e) {}
    location.reload();
  }

  /* ---------- 动效 ---------- */
  function initReveal() {
    var items = qsa(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-in");
      });
      fillBars();
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            fillBars(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
    setTimeout(function () {
      items.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-in");
          fillBars(el);
        }
      });
    }, 60);
  }

  function fillBars(root) {
    qsa(".skill__fill", root).forEach(function (bar) {
      bar.style.width = bar.getAttribute("data-level") + "%";
    });
  }

  function revealWrap(i) {
    return 'class="reveal" style="transition-delay:' + Math.min(i * 60, 300) + 'ms"';
  }

  /* ---------- 页面：首页 ---------- */
  function renderHome() {
    var p = D.profile || {};
    var metaHtml = (p.meta || [])
      .map(function (m) {
        return "<span>" + m.icon + " " + esc(t(m.text)) + "</span>";
      })
      .join("");
    var statsHtml = (p.highlights || [])
      .map(function (s, i) {
        return (
          '<div class="stat" ' + revealWrap(i) + '><div class="stat__value">' +
          esc(s.value) + '</div><div class="stat__label">' + esc(t(s.label)) + "</div></div>"
        );
      })
      .join("");
    var introList = t(p.intro);
    if (!Array.isArray(introList)) introList = introList ? [introList] : [];
    var introHtml = introList
      .map(function (x) {
        return '<p style="margin-bottom:12px">' + esc(x) + "</p>";
      })
      .join("");

    var quick = [
      { key: "education", href: "./education.html", icon: "🎓", desc: { zh: "专业课程、成绩与荣誉", en: "Courses, GPA and honors" } },
      { key: "skills", href: "./skills.html", icon: "🛠", desc: { zh: "语言、框架与工具栈", en: "Languages, frameworks and tools" } },
      { key: "projects", href: "./projects.html", icon: "🚀", desc: { zh: "做过的项目与亮点", en: "What I built and why it matters" } },
      { key: "experience", href: "./experience.html", icon: "💼", desc: { zh: "实习与校园经历", en: "Internships and campus roles" } },
    ]
      .map(function (q, i) {
        return (
          '<a class="card" ' + revealWrap(i) + ' href="' + q.href + '" style="display:block">' +
          '<div style="font-size:22px;margin-bottom:8px">' + q.icon + "</div>" +
          '<h3 style="font-size:16px;margin-bottom:4px">' + ui(q.key) + "</h3>" +
          '<p style="font-size:13.5px;color:var(--muted)">' + esc(t(q.desc)) + "</p></a>"
        );
      })
      .join("");

    return (
      '<section class="hero"><div class="container"><div class="card hero-card"><div class="hero__inner">' +
      '<div><h1 class="hero__name">' + esc(t(p.name)) + "</h1>" +
      '<div class="hero__title">' + esc(t(p.title)) + "</div>" +
      '<p class="hero__tagline">' + esc(t(p.tagline)) + "</p>" +
      '<div class="hero__meta">' + metaHtml + "</div>" +
      '<div class="hero__actions">' +
      '<a class="btn btn--primary" href="./projects.html">' + ui("seeProjects") + "</a>" +
      '<a class="btn btn--ghost" href="./contact.html">' + ui("getInTouch") + "</a>" +
      "</div></div>" +
      '<div class="avatar"><img src="' + esc(p.avatar) + '" alt="' + esc(t(p.name)) + '"></div>' +
      "</div>" +
      '<div class="stats">' + statsHtml + "</div></div></div></section>" +

      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("intro") + "</span>" +
      '<div class="grid grid--2" style="grid-template-columns:1.6fr 1fr;align-items:start;gap:32px">' +
      '<div class="card reveal" style="font-size:15px;color:var(--ink-2)">' + introHtml + "</div>" +
      '<div class="card reveal" style="background:var(--bg-soft)">' +
      '<h3 style="font-size:15px;margin-bottom:12px">' + ui("quickLinks") + "</h3>" +
      '<div style="display:grid;gap:10px">' +
      NAV.filter(function (n) {
        return ["education", "skills", "projects", "experience"].indexOf(n.key) > -1;
      })
        .map(function (n) {
          return '<a href="' + n.href + '" style="display:flex;justify-content:space-between;font-size:14.5px;font-weight:500">' +
            ui(n.key) + "<span style=\"color:var(--muted-2)\">→</span></a>";
        })
        .join("") +
      "</div></div></div></div></section>" +

      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("projects") + "</span>" +
      '<h2 class="section__title">' + ui("featuredProjects") + "</h2>" +
      '<div class="grid grid--2" style="margin-top:18px">' +
      (D.projects || []).slice(0, 2).map(projectCard).join("") +
      "</div>" +
      '<div style="margin-top:16px"><a class="btn btn--ghost" href="./projects.html">' +
      ui("seeProjects") + " →</a></div></div></section>" +

      '<section class="section section--soft"><div class="container">' +
      '<span class="eyebrow">' + ui("exploreMore") + "</span>" +
      '<h2 class="section__title">' + ui("exploreMore") + "</h2>" +
      '<div class="grid grid--2" style="margin-top:18px">' + quick + "</div></div></section>"
    );
  }

  /* ---------- 页面：教育 ---------- */
  function renderEducation() {
    var eduHtml = (D.education || [])
      .map(function (e, i) {
        return (
          '<div class="tl-item" ' + revealWrap(i) + ">" +
          '<div class="tl-item__head"><span class="tl-item__title">' + esc(t(e.school)) + "</span>" +
          '<span class="tl-item__sub">' + esc(t(e.degree)) + "</span>" +
          '<span class="tl-item__date">' + esc(e.period) + "</span></div>" +
          '<div class="tl-item__sub" style="margin-bottom:8px">📍 ' + esc(t(e.location)) +
          (e.gpa ? " · " + esc(t(e.gpa)) : "") + "</div>" +
          '<p class="tl-item__desc">' + esc(t(e.desc)) + "</p></div>"
        );
      })
      .join("");

    var courses = [];
    (D.education || []).forEach(function (e) {
      courses = courses.concat(e.courses || []);
    });
    var courseHtml = courses
      .map(function (c) {
        return '<span class="tag tag--plain">' + esc(t(c)) + "</span>";
      })
      .join("");

    var honors = [];
    (D.education || []).forEach(function (e) {
      honors = honors.concat(e.honors || []);
    });
    var honorHtml = honors
      .map(function (h) {
        return '<li style="margin-bottom:6px">' + esc(t(h)) + "</li>";
      })
      .join("");

    return (
      '<section class="section"><div class="container">' +
      bannerHtml("education", "education") +
      '<span class="eyebrow">' + ui("education") + "</span>" +
      '<h2 class="section__title">' + ui("education") + "</h2>" +
      '<div class="timeline" style="margin-top:26px">' + eduHtml + "</div></div></section>" +

      '<section class="section section--soft"><div class="container">' +
      '<span class="eyebrow">' + ui("mainCourses") + "</span>" +
      '<h2 class="section__title">' + ui("mainCourses") + "</h2>" +
      '<div class="card reveal" style="margin-top:16px"><div class="tag-row">' + courseHtml + "</div></div></div></section>" +

      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("honors") + "</span>" +
      '<h2 class="section__title">' + ui("honors") + "</h2>" +
      '<div class="card reveal" style="margin-top:16px"><ul style="color:var(--ink-2)">' + honorHtml + "</ul></div></div></section>"
    );
  }

  /* ---------- 页面：技能 ---------- */
  function renderSkills() {
    var groups = (D.skills || [])
      .map(function (g, i) {
        var items = (g.items || [])
          .map(function (s) {
            return (
              '<div class="skill"><div class="skill__head"><span>' + esc(s.name) +
              ' <span style="color:var(--muted);font-size:12.5px">' + esc(t(s.note)) + "</span></span>" +
              '<span class="skill__level">' + s.level + "%</span></div>" +
              '<div class="skill__bar"><div class="skill__fill" data-level="' + s.level + '"></div></div></div>'
            );
          })
          .join("");
        return (
          '<div class="card skill-group" ' + revealWrap(i) + ">" +
          '<h3 class="skill-group__title"><span class="skill-group__icon">' + (g.icon || "•") + "</span>" +
          esc(t(g.category)) + "</h3>" + items + "</div>"
        );
      })
      .join("");

    var certs = (D.certificates || [])
      .map(function (c, i) {
        return (
          '<div class="card" ' + revealWrap(i) + ' style="display:flex;justify-content:space-between;align-items:center;gap:12px">' +
          '<div><div style="font-weight:600">' + esc(t(c.name)) + "</div>" +
          '<div style="font-size:13px;color:var(--muted)">' + esc(t(c.issuer)) + "</div></div>" +
          '<span class="tag tag--plain">' + esc(c.date) + "</span></div>"
        );
      })
      .join("");

    return (
      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("skills") + "</span>" +
      '<h2 class="section__title">' + ui("skills") + "</h2>" +
      '<p class="section__desc" style="margin-top:6px">' +
      (lang === "zh" ? "百分比为自评熟练度，仅供参考。" : "Percentages are self-assessed proficiency, for reference only.") +
      "</p>" +
      '<div class="grid grid--3" style="margin-top:26px">' + groups + "</div></div></section>" +

      (certs
        ? '<section class="section section--soft"><div class="container">' +
          '<span class="eyebrow">' + ui("certificates") + "</span>" +
          '<h2 class="section__title">' + ui("certificates") + "</h2>" +
          '<div class="grid" style="margin-top:18px;gap:12px">' + certs + "</div></div></section>"
        : "")
    );
  }

  /* ---------- 项目卡片（列表页复用） ---------- */
  function coverHtml(p) {
    if (!p.coverImage) return esc(p.cover || "◆");
    return (
      '<img src="' + esc(p.coverImage) + '" alt="' + esc(t(p.coverAlt)) + '" loading="lazy">' +
      (p.coverBadge ? '<span class="cover-badge">' + esc(p.coverBadge) + "</span>" : "")
    );
  }

  function bannerHtml(key, titleKey) {
    var b = D.banners && D.banners[key];
    if (!b) return "";
    return (
      '<div class="page-banner reveal"><img src="' + esc(b.image) + '" alt="' + esc(t(b.alt)) + '">' +
      '<div class="page-banner__text"><h2>' + ui(titleKey) + "</h2>" +
      (b.credit ? "<p>" + esc(b.credit) + "</p>" : "") +
      "</div></div>"
    );
  }

  function projectCard(p, i) {
    var pid = p.id || "p" + i;
    return (
      '<a class="card project" ' + revealWrap(i) + ' href="./project.html?id=' + esc(pid) + '" data-tags="' +
      esc((p.tags || []).join(",")) + '" style="display:flex">' +
      '<div class="project__cover">' + coverHtml(p) + "</div>" +
      '<div class="project__body">' +
      '<h3 class="project__title">' + esc(t(p.name)) + "</h3>" +
      '<div class="project__meta">' + esc(p.period) + " · " + esc(t(p.role)) + "</div>" +
      '<p class="project__summary">' + esc(t(p.summary)) + "</p>" +
      '<div class="tag-row">' +
      (p.tags || [])
        .map(function (x) {
          return '<span class="tag">' + esc(x) + "</span>";
        })
        .join("") +
      "</div>" +
      '<div class="project__foot"><span class="project__link">' + ui("viewDetail") + " →</span></div>" +
      "</div></a>"
    );
  }

  function renderProjects() {
    var all = D.projects || [];
    var tags = [];
    all.forEach(function (p) {
      (p.tags || []).forEach(function (x) {
        if (tags.indexOf(x) < 0) tags.push(x);
      });
    });
    var filters =
      '<button class="filter is-active" data-filter="*">' + ui("all") + "</button>" +
      tags
        .map(function (x) {
          return '<button class="filter" data-filter="' + esc(x) + '">' + esc(x) + "</button>";
        })
        .join("");

    return (
      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("projects") + "</span>" +
      '<h2 class="section__title">' + ui("projects") + "</h2>" +
      '<p class="section__desc" style="margin-top:6px">点击任意卡片查看项目详情。</p>' +
      '<div class="filters" style="margin-top:20px">' + filters + "</div>" +
      '<div class="grid grid--2" id="projectGrid">' +
      all.map(projectCard).join("") +
      "</div></div></section>"
    );
  }

  function bindFilters() {
    var grid = $("#projectGrid");
    if (!grid) return;
    qsa(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        qsa(".filter").forEach(function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        var f = btn.getAttribute("data-filter");
        qsa(".project", grid).forEach(function (card) {
          var show = f === "*" || (card.getAttribute("data-tags") || "").indexOf(f) > -1;
          card.style.display = show ? "flex" : "none";
        });
      });
    });
  }

  /* ---------- 页面：项目详情 ---------- */
  function renderProjectDetail() {
    var id = param("id");
    var p = null;
    (D.projects || []).forEach(function (x) {
      if ((x.id || "") === id) p = x;
    });
    if (!p) {
      return (
        '<section class="section"><div class="container"><div class="empty">' +
        '<div class="empty__icon">🔍</div><div class="empty__title">' + ui("notFound") + "</div>" +
        '<a class="btn btn--ghost" href="./projects.html">' + ui("backToList") + "</a></div></div></section>"
      );
    }
    var links = (p.links || [])
      .map(function (l) {
        return '<a class="btn btn--ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + "</a>";
      })
      .join("");

    return (
      '<section class="section"><div class="container">' +
      '<a href="./projects.html" style="font-size:14px;color:var(--muted)">← ' + ui("backToList") + "</a>" +
      '<div style="margin-top:18px" class="reveal">' +
      (p.coverImage
        ? '<div class="detail-cover"><img src="' + esc(p.coverImage) + '" alt="' + esc(t(p.coverAlt)) + '"></div>' +
          (p.coverCredit ? '<div class="credit">' + ui("photoCredit") + esc(p.coverCredit) + "</div>" : "")
        : '<div class="project__cover" style="height:180px;border-radius:var(--radius);border:1px solid var(--line)">' +
          esc(p.cover || "◆") + "</div>") +
      '<h1 style="font-size:30px;margin:20px 0 6px">' + esc(t(p.name)) + "</h1>" +
      '<div style="color:var(--muted);margin-bottom:14px">' + esc(p.period) + " · " + esc(t(p.role)) + "</div>" +
      '<div class="tag-row" style="margin-bottom:20px">' +
      (p.tags || [])
        .map(function (x) {
          return '<span class="tag">' + esc(x) + "</span>";
        })
        .join("") +
      "</div>" +
      '<p style="font-size:16px;color:var(--ink-2);margin-bottom:26px">' + esc(t(p.summary)) + "</p>" +
      '<h3 style="font-size:17px;margin-bottom:12px">' + ui("highlights") + "</h3>" +
      '<div class="card" style="margin-bottom:24px"><ul style="color:var(--ink-2)">' +
      (p.highlights || [])
        .map(function (h) {
          return '<li style="margin-bottom:8px">' + esc(t(h)) + "</li>";
        })
        .join("") +
      "</ul></div>" +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' + links + "</div>" +
      "</div></div></section>"
    );
  }

  /* ---------- 页面：经历 ---------- */
  function renderExperience() {
    var items = (D.experience || [])
      .map(function (e, i) {
        return (
          '<div class="tl-item" ' + revealWrap(i) + ">" +
          '<div class="tl-item__head"><span class="tl-item__title">' + esc(t(e.role)) + "</span>" +
          '<span class="tl-item__sub">' + esc(t(e.org)) + "</span>" +
          '<span class="tl-item__date">' + esc(e.period) + "</span></div>" +
          '<span class="tag tag--plain" style="margin:6px 0 8px">' +
          esc(t(e.typeLabel) || (e.type === "internship" ? ui("tInternship") : ui("tCampus"))) +
          "</span>" +
          '<ul class="tl-item__points">' +
          (e.points || [])
            .map(function (x) {
              return "<li>" + esc(t(x)) + "</li>";
            })
            .join("") +
          "</ul></div>"
        );
      })
      .join("");

    return (
      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("experience") + "</span>" +
      '<h2 class="section__title">' + ui("experience") + "</h2>" +
      '<div class="timeline" style="margin-top:28px">' + items + "</div></div></section>"
    );
  }

  /* ---------- 页面：关于我 ---------- */
  function renderAbout() {
    var storyList = t(D.about && D.about.story);
    if (!Array.isArray(storyList)) storyList = storyList ? [storyList] : [];
    var story = storyList
      .map(function (x) {
        return '<p style="margin-bottom:12px">' + esc(x) + "</p>";
      })
      .join("");
    var tl = ((D.about && D.about.timeline) || [])
      .map(function (x, i) {
        return (
          '<div class="tl-item" ' + revealWrap(i) + ">" +
          '<div class="tl-item__head"><span class="tl-item__title">' + esc(x.year) + " · " + esc(t(x.title)) + "</span></div>" +
          '<p class="tl-item__desc">' + esc(t(x.desc)) + "</p></div>"
        );
      })
      .join("");
    var interests = ((D.about && D.about.interests) || [])
      .map(function (x, i) {
        return (
          '<div class="card" ' + revealWrap(i) + ' style="display:flex;gap:12px;align-items:center">' +
          '<span style="font-size:22px">' + x.icon + "</span>" +
          '<span style="font-weight:500">' + esc(t(x.name)) + "</span></div>"
        );
      })
      .join("");

    return (
      '<section class="section"><div class="container">' +
      bannerHtml("about", "about") +
      '<span class="eyebrow">' + ui("about") + "</span>" +
      '<h2 class="section__title">' + ui("myStory") + "</h2>" +
      '<div class="card reveal" style="margin-top:18px;font-size:15.5px;color:var(--ink-2);max-width:78ch">' + story + "</div></div></section>" +

      '<section class="section section--soft"><div class="container">' +
      '<span class="eyebrow">' + ui("growth") + "</span>" +
      '<h2 class="section__title">' + ui("growth") + "</h2>" +
      '<div class="timeline" style="margin-top:24px">' + tl + "</div></div></section>" +

      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("interests") + "</span>" +
      '<h2 class="section__title">' + ui("interests") + "</h2>" +
      '<div class="grid grid--2" style="margin-top:18px">' + interests + "</div></div></section>"
    );
  }

  /* ---------- 页面：联系 ---------- */
  function renderContact() {
    var cards = ((D.contact && D.contact.items) || [])
      .map(function (c, i) {
        var val = esc(t(c.value));
        var inner =
          '<div><div class="contact-card__label">' + esc(t(c.label)) + "</div>" +
          '<div class="contact-card__value">' + val + "</div>" +
          '<div class="contact-card__hint">' + esc(t(c.hint)) + "</div>" +
          (c.copyable ? '<button class="copy-btn" data-copy="' + val + '">' + (lang === "zh" ? "复制" : "Copy") + "</button>" : "") +
          "</div>";
        var wrap = c.href
          ? '<a class="card contact-card" ' + revealWrap(i) + ' href="' + esc(c.href) + '"' +
            (c.href.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + ">"
          : '<div class="card contact-card" ' + revealWrap(i) + ">";
        return wrap + '<div class="contact-card__icon">' + c.icon + "</div>" + inner + (c.href ? "</a>" : "</div>");
      })
      .join("");

    return (
      '<section class="section"><div class="container">' +
      '<span class="eyebrow">' + ui("contact") + "</span>" +
      '<h2 class="section__title">' + ui("reachOut") + "</h2>" +
      '<p class="section__desc" style="margin-top:8px">' + esc(t(D.contact && D.contact.note)) + "</p>" +
      '<div class="contact-grid" style="margin-top:26px">' + cards + "</div>" +
      '<div class="card reveal" style="margin-top:26px;background:var(--brand-soft);border-color:var(--gold-line)">' +
      "<strong>💡</strong> " + ui("blogSoon") + " — " + ui("blogSoonDesc") +
      "</div></div></section>"
    );
  }

  function bindCopy() {
    qsa(".copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var text = btn.getAttribute("data-copy");
        var done = function () {
          var old = btn.textContent;
          btn.textContent = ui("copied");
          setTimeout(function () {
            btn.textContent = old;
          }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fallback);
        } else {
          fallback();
        }
        function fallback() {
          var ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand("copy");
            done();
          } catch (err) {}
          document.body.removeChild(ta);
        }
      });
    });
  }

  /* ---------- 页面：博客（占位） ---------- */
  function renderBlog() {
    return (
      '<section class="section"><div class="container"><div class="empty">' +
      '<div class="empty__icon">✍️</div>' +
      '<div class="empty__title">' + ui("blogSoon") + "</div>" +
      '<p style="margin-bottom:20px">' + ui("blogSoonDesc") + "</p>" +
      '<a class="btn btn--ghost" href="./index.html">' + ui("home") + "</a></div></div></section>"
    );
  }

  /* ---------- 预留：远程数据（接后端/数据库时启用） ---------- */
  function loadRemoteData(cb) {
    var cfg = D.API_CONFIG || {};
    if (!cfg.enabled || !cfg.endpoint || !window.fetch) return cb();
    var timer = setTimeout(cb, cfg.timeout || 5000);
    fetch(cfg.endpoint)
      .then(function (r) {
        return r.json();
      })
      .then(function (json) {
        clearTimeout(timer);
        if (json && typeof json === "object") {
          Object.keys(json).forEach(function (k) {
            D[k] = json[k];
          });
        }
        cb();
      })
      .catch(function () {
        clearTimeout(timer);
        cb();
      });
  }

  /* ---------- 启动 ---------- */
  var RENDERERS = {
    home: renderHome,
    education: renderEducation,
    skills: renderSkills,
    projects: renderProjects,
    project: renderProjectDetail,
    experience: renderExperience,
    about: renderAbout,
    contact: renderContact,
    blog: renderBlog,
  };

  function boot() {
    var main = $("#main");
    if (!main) return;
    var page = document.body.getAttribute("data-page") || "home";
    var navKey = page === "project" ? "projects" : page;
    var titleKey = page === "project" ? "projectDetail" : page;

    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.title = ui(titleKey) + " · " + t(D.meta && D.meta.brand);

    loadRemoteData(function () {
      renderChrome(navKey);
      var fn = RENDERERS[page] || renderHome;
      main.innerHTML = fn();
      bindFilters();
      bindCopy();
      initReveal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
