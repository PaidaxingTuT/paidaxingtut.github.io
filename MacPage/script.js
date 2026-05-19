// ===== App Registry =====
const appRegistry = {
  about: {
    title: "个人简介",
    label: "关于我",
    icon: "fa-regular fa-address-card",
    width: 880,
    height: 560,
    render: () => `
      <section class="hero-panel">
        <article class="glass-card hero-card">
          <h3>派大星 / Paidaxing</h3>
          <p>这是一个仿 macOS 桌面的个人主页版本。现在它更强调桌面感和窗口交互，而不是普通落地页式的单向浏览。</p>
          <div class="tag-row">
            <span class="tag">Java 后端</span>
            <span class="tag">Python AI</span>
            <span class="tag">前端体验</span>
            <span class="tag">动漫 / 游戏 / 编程</span>
          </div>
        </article>
        <aside class="glass-card">
          <h3>桌面速览</h3>
          <ul class="stat-list">
            <li>界面方向：macOS desktop</li>
            <li>内容来源：原首页导航、项目、友链、联系与 footer</li>
            <li>窗口逻辑：关闭、最小化到 Dock、放大与还原</li>
            <li>壁纸位置：<code>MacPage/assets/wallpaper.jpg</code></li>
          </ul>
        </aside>
      </section>
    `,
  },
  journey: {
    title: "我的历程",
    label: "历程",
    icon: "fa-solid fa-timeline",
    width: 760,
    height: 560,
    render: () => `
      <section class="section-card">
        <h3>编程旅程</h3>
        <div class="timeline">
          <div class="timeline-item"><strong>2018 · 初识编程</strong><p>第一次接触编程，开始参加区级竞赛，对"自己做出东西"这件事产生兴趣。</p></div>
          <div class="timeline-item"><strong>2020 · 深入学习</strong><p>开始系统学习基础知识，逐步补齐语言、算法和工程实践。</p></div>
          <div class="timeline-item"><strong>2021 · 独立建站</strong><p>开始自己搭站，把兴趣、内容和项目变成可以公开展示的作品。</p></div>
          <div class="timeline-item"><strong>2025 · 体系重构</strong><p>更认真地整理 Java 后端与全栈能力，希望输出更完整的工程作品。</p></div>
          <div class="timeline-item"><strong>至今 · AI 方向进阶</strong><p>继续扩展 Python 与 AI 应用，希望把工具、内容和想法打磨成真正的产品。</p></div>
        </div>
      </section>
    `,
  },
  stack: {
    title: "技术能力",
    label: "技术栈",
    icon: "fa-solid fa-code-branch",
    width: 820,
    height: 560,
    render: () => `
      <section class="stack-columns">
        <article class="glass-card stack-group">
          <h3>前端</h3>
          <div class="chip-list">
            <span class="chip">HTML</span>
            <span class="chip">CSS</span>
            <span class="chip">JavaScript</span>
            <span class="chip">Vue</span>
          </div>
        </article>
        <article class="glass-card stack-group">
          <h3>后端</h3>
          <div class="chip-list">
            <span class="chip">Java</span>
            <span class="chip">Spring Boot</span>
            <span class="chip">MySQL</span>
            <span class="chip">Python</span>
          </div>
        </article>
        <article class="glass-card stack-group">
          <h3>工程能力</h3>
          <div class="chip-list">
            <span class="chip">Linux</span>
            <span class="chip">Git</span>
            <span class="chip">Docker</span>
            <span class="chip">Android</span>
          </div>
        </article>
        <article class="glass-card stack-group">
          <h3>关注方向</h3>
          <div class="chip-list">
            <span class="chip">AI 工具</span>
            <span class="chip">个人产品</span>
            <span class="chip">网站体验</span>
            <span class="chip">自动化</span>
          </div>
        </article>
      </section>
    `,
  },
  projects: {
    title: "项目展示",
    label: "项目",
    icon: "fa-regular fa-folder-open",
    width: 860,
    height: 600,
    render: () => `
      <section class="section-card">
        <h3>作品展示</h3>
        <div class="project-grid">
          <article class="project-item">
            <strong>Ciallo Printer</strong>
            <p>像素绘画创作工具。</p>
            <p><a href="https://github.com/PaidaxingTuT/Ciallo_Printer" target="_blank" rel="noreferrer">打开 GitHub</a></p>
          </article>
          <article class="project-item">
            <strong>PopWord</strong>
            <p>浏览器插件式英语学习助手。</p>
            <p><a href="../popword" target="_blank" rel="noreferrer">打开页面</a></p>
          </article>
          <article class="project-item">
            <strong>DAX-AI</strong>
            <p>个人 AI 助手计划，当前状态：开发中。</p>
            <p><a href="#" data-dev-placeholder="true">敬请期待</a></p>
          </article>
          <article class="project-item">
            <strong>DAX-BLOG</strong>
            <p>派大星博客，当前状态：开发中。</p>
            <p><a href="#" data-dev-placeholder="true">敬请期待</a></p>
          </article>
        </div>
      </section>
    `,
  },
  friends: {
    title: "友情链接",
    label: "友链",
    icon: "fa-solid fa-user-group",
    width: 820,
    height: 540,
    render: () => `
      <section class="section-card">
        <h3>我的伙伴</h3>
        <div class="friend-grid">
          <article class="friend-item">
            <strong>会飞的鱼</strong>
            <p>Java 后端开发见习生。</p>
            <p><a href="https://fishdum.github.io" target="_blank" rel="noreferrer">访问站点</a></p>
          </article>
          <article class="friend-item">
            <strong>少年科技</strong>
            <p>彼方尚有荣光在。</p>
            <p><a href="https://www.snkj.xyz" target="_blank" rel="noreferrer">访问站点</a></p>
          </article>
          <article class="friend-item">
            <strong>Amadeus</strong>
            <p>个人网站与内容空间。</p>
            <p><a href="http://amadeuscristina.site" target="_blank" rel="noreferrer">访问站点</a></p>
          </article>
          <article class="friend-item">
            <strong>花马我靠</strong>
            <p>爱折腾、爱分享的朋友。</p>
            <p><a href="http://www.gaoguang.xin/" target="_blank" rel="noreferrer">访问站点</a></p>
          </article>
        </div>
      </section>
    `,
  },
  contact: {
    title: "联系方式",
    label: "联系",
    icon: "fa-regular fa-envelope",
    width: 760,
    height: 560,
    render: () => `
      <section class="section-card">
        <h3>找到我</h3>
        <div class="contact-grid">
          <article class="contact-item">
            <strong>QQ</strong>
            <p>点击复制 QQ 号码。</p>
            <p><a href="#" data-copy="428488368">复制 428488368</a></p>
          </article>
          <article class="contact-item">
            <strong>Bilibili</strong>
            <p>派大星TuT</p>
            <p><a href="https://space.bilibili.com/317050115" target="_blank" rel="noreferrer">打开主页</a></p>
          </article>
          <article class="contact-item">
            <strong>GitHub</strong>
            <p>PaidaxingTuT</p>
            <p><a href="https://github.com/PaidaxingTuT" target="_blank" rel="noreferrer">查看仓库</a></p>
          </article>
          <article class="contact-item">
            <strong>Email</strong>
            <p><code>paidaxing_tut@outlook.com</code></p>
            <p><a href="mailto:paidaxing_tut@outlook.com">发送邮件</a></p>
          </article>
          <article class="contact-item">
            <strong>交流群</strong>
            <p>加入 QQ 交流频道。</p>
            <p><a href="https://qm.qq.com/cgi-bin/qm/qr?k=IsRlx2v8D6K43iCryyy5kfRGckQSkepa&jump_from=webapi&authKey=Nk4t+qYsYUnrUhIaykPtS7O78KR5/f5LKj0DeL+bWIrqY+LOzQD4tIQ+PHJBMxXa" target="_blank" rel="noreferrer">加入群聊</a></p>
          </article>
        </div>
      </section>
    `,
  },
  log: {
    title: "更新日志",
    label: "日志",
    icon: "fa-regular fa-file-lines",
    width: 760,
    height: 520,
    render: () => `
      <section class="section-card">
        <h3>站点日志</h3>
        <div class="terminal" id="logTerminal">
          <p class="terminal-line">$ cat ../log.md</p>
          <p class="terminal-line">正在读取日志...</p>
        </div>
      </section>
    `,
    onOpen: async (windowEl) => {
      const terminal = windowEl.querySelector("#logTerminal");
      if (!terminal) return;
      try {
        const response = await fetch("../log.md");
        if (!response.ok) throw new Error("load failed");
        const text = await response.text();
        terminal.innerHTML = text
          .split(/\r?\n/)
          .filter(Boolean)
          .map((line) => `<p class="terminal-line">${escapeHtml(line)}</p>`)
          .join("");
      } catch {
        terminal.innerHTML =
          '<p class="terminal-line">日志读取失败，请检查 ../log.md 是否可访问。</p>';
      }
    },
  },
};

// ===== DOM Refs =====
const desktop = document.getElementById("desktop");
const desktopIcons = document.getElementById("desktopIcons");
const windowLayer = document.getElementById("windowLayer");
const windowTemplate = document.getElementById("windowTemplate");
const dock = document.getElementById("dock");
const dockPinned = document.getElementById("dockPinned");
const dockSeparator = document.getElementById("dockSeparator");
const dockMinimized = document.getElementById("dockMinimized");
const contextMenu = document.getElementById("contextMenu");
const contextMenuInner = document.getElementById("contextMenuInner");
const menuTitle = document.getElementById("menuTitle");

// ===== State =====
const windowMap = new Map();
const minimizedMap = new Map();
const hiddenApps = new Set();
const dockItemMap = new Map();
let zCounter = 30;
let cascadeIndex = 0;

// ===== Grid Config =====
const GRID = { startX: 32, startY: 32, cellW: 108, cellH: 100 };
const ICON_POSITION_KEY = "macpage-icon-positions-v4";

// ===== Init =====
function init() {
  buildDock();
  initDesktopIcons();
  bindDesktopTriggers();
  setupDockMagnification();
  setupGlobalListeners();
  fetchHitokoto();
  updateClockAndDate();
  updateRuntime();
  setupPvFallback();
  window.setInterval(updateClockAndDate, 1000);
  window.setInterval(updateRuntime, 1000);
  window.addEventListener("resize", handleResize);
}

// ===== Dock Construction =====
function buildDock() {
  dockPinned.innerHTML = "";
  const appKeys = Object.keys(appRegistry);

  appKeys.forEach((appKey) => {
    const config = appRegistry[appKey];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dock-item dock-app";
    btn.dataset.dockApp = appKey;
    btn.setAttribute("aria-label", config.label);
    btn.innerHTML = `
      <span class="dock-icon app-${appKey}"><i class="${config.icon}"></i></span>
      <span class="dock-dot"></span>
      <span class="dock-label">${config.label}</span>
    `;

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      handleDockClick(appKey);
    });

    btn.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
      showDockContextMenu(event.clientX, event.clientY, appKey);
    });

    dockPinned.appendChild(btn);
    dockItemMap.set(appKey, btn);
  });

  syncDockSeparator();
}

// ===== Dock Click Handler (macOS behavior) =====
function handleDockClick(appKey) {
  const win = windowMap.get(appKey);
  const config = appRegistry[appKey];
  if (!config) return;

  if (!win) {
    openApp(appKey);
    return;
  }

  if (win.dataset.state === "minimized") {
    restoreWindow(win);
    return;
  }

  if (hiddenApps.has(appKey)) {
    showWindow(win);
    return;
  }

  if (win.classList.contains("is-focused")) {
    pulseDockItem(dockItemMap.get(appKey));
    return;
  }

  focusWindow(win);
}

// ===== App Lifecycle =====
function openApp(appKey, sourceEl) {
  const config = appRegistry[appKey];
  if (!config) return null;

  const existing = windowMap.get(appKey);
  if (existing) {
    if (existing.dataset.state === "minimized") {
      restoreWindow(existing);
    } else if (hiddenApps.has(appKey)) {
      showWindow(existing);
    } else {
      focusWindow(existing);
    }
    return existing;
  }

  const fragment = windowTemplate.content.cloneNode(true);
  const win = fragment.querySelector(".mac-window");
  const contentEl = win.querySelector(".window-content");

  contentEl.innerHTML = config.render();

  const pos = getNextWindowPosition(config);
  win.dataset.appKey = appKey;
  win.dataset.state = "open";
  win.dataset.maximized = "false";
  win.style.width = `${config.width}px`;
  win.style.height = `${config.height}px`;
  win.style.left = `${pos.left}px`;
  win.style.top = `${pos.top}px`;

  attachWindowActions(win);
  wireContentActions(win);
  windowLayer.appendChild(win);
  windowMap.set(appKey, win);
  hiddenApps.delete(appKey);
  focusWindow(win);
  updateDockState(appKey);
  removeMinimizedEntry(appKey);
  updateMenuBarTitle(config.title);

  if (typeof config.onOpen === "function") {
    config.onOpen(win);
  }

  const origin = getSourceRect(sourceEl, win);
  animateWindowOpen(win, origin);
  return win;
}

function closeWindow(win) {
  const appKey = win.dataset.appKey;
  removeMinimizedEntry(appKey);
  hiddenApps.add(appKey);
  win.style.display = "none";
  win.classList.remove("is-focused");
  updateDockState(appKey);
  focusTopWindow();
}

function showWindow(win) {
  const appKey = win.dataset.appKey;
  const dockItem = dockItemMap.get(appKey);
  const origin = dockItem ? dockItem.getBoundingClientRect() : win.getBoundingClientRect();

  hiddenApps.delete(appKey);
  win.style.display = "flex";
  win.dataset.state = "open";
  focusWindow(win);
  updateDockState(appKey);
  updateMenuBarTitle(appRegistry[appKey]?.title || null);
  animateExpandFromDock(win, origin);
}

function minimizeWindow(win) {
  if (win.dataset.state === "minimized") return;
  const appKey = win.dataset.appKey;
  const preview = ensureMinimizedEntry(win);

  win.dataset.state = "minimized";
  hiddenApps.delete(appKey);
  win.classList.remove("is-focused");
  updateDockState(appKey);
  syncDockSeparator();

  animateSuckToDock(win, preview.getBoundingClientRect(), () => {
    win.style.display = "none";
  });
  focusTopWindow();
}

function restoreWindow(win) {
  const appKey = win.dataset.appKey;
  const preview = minimizedMap.get(appKey);
  const origin = preview ? preview.getBoundingClientRect() : win.getBoundingClientRect();

  win.style.display = "flex";
  win.dataset.state = "open";
  hiddenApps.delete(appKey);
  removeMinimizedEntry(appKey);
  focusWindow(win);
  updateDockState(appKey);
  updateMenuBarTitle(appRegistry[appKey]?.title || null);
  animateExpandFromDock(win, origin);
}

function quitApp(appKey) {
  const win = windowMap.get(appKey);
  if (win) {
    removeMinimizedEntry(appKey);
    hiddenApps.delete(appKey);
    win.remove();
    windowMap.delete(appKey);
  }
  updateDockState(appKey);
  focusTopWindow();
}

// ===== Dock State =====
function updateDockState(appKey) {
  const dockItem = dockItemMap.get(appKey);
  if (!dockItem) return;

  const win = windowMap.get(appKey);
  const isRunning = !!win && !hiddenApps.has(appKey);
  const isFocused = !!win && win.classList.contains("is-focused") && !hiddenApps.has(appKey);

  dockItem.classList.toggle("is-running", isRunning);
  dockItem.classList.toggle("is-open", isFocused);
}

function pulseDockItem(dockItem) {
  if (!dockItem) return;
  dockItem.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-26px)", offset: 0.22 },
      { transform: "translateY(-6px)",  offset: 0.55 },
      { transform: "translateY(-12px)", offset: 0.72 },
      { transform: "translateY(0)" },
    ],
    { duration: 640, easing: "ease-out" },
  );
}

// ===== Minimized Entries =====
function ensureMinimizedEntry(win) {
  const appKey = win.dataset.appKey;
  const config = appRegistry[appKey];
  const existing = minimizedMap.get(appKey);
  if (existing) {
    updateMinimizedPreview(win, existing);
    return existing;
  }

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "dock-item dock-preview";
  btn.dataset.appKey = appKey;
  btn.setAttribute("aria-label", `恢复${config.label}`);
  btn.innerHTML = `
    <span class="dock-preview-frame">
      <span class="dock-preview-titlebar">
        <span class="dock-preview-light"></span>
        <span class="dock-preview-light"></span>
        <span class="dock-preview-light"></span>
      </span>
      <span class="dock-preview-canvas"></span>
    </span>
    <span class="dock-label">${config.label}</span>
  `;
  btn.addEventListener("click", () => {
    const target = windowMap.get(appKey);
    if (target && target.dataset.state === "minimized") {
      restoreWindow(target);
    }
  });
  dockMinimized.appendChild(btn);
  minimizedMap.set(appKey, btn);
  updateMinimizedPreview(win, btn);
  syncDockSeparator();
  return btn;
}

function updateMinimizedPreview(win, entry) {
  const canvas = entry.querySelector(".dock-preview-canvas");
  const clone = win.cloneNode(true);
  clone.classList.remove("is-focused");
  clone.classList.add("dock-preview-window");
  clone.querySelectorAll("button, a").forEach((node) => {
    node.removeAttribute("data-open-app");
  });
  const scale = Math.min(56 / win.offsetWidth, 45 / win.offsetHeight);
  clone.style.width = `${win.offsetWidth}px`;
  clone.style.height = `${win.offsetHeight}px`;
  clone.style.transform = `scale(${scale})`;
  clone.style.left = "0";
  clone.style.top = "0";
  canvas.innerHTML = "";
  canvas.appendChild(clone);
}

function removeMinimizedEntry(appKey) {
  const entry = minimizedMap.get(appKey);
  if (!entry) return;
  entry.remove();
  minimizedMap.delete(appKey);
  syncDockSeparator();
}

function syncDockSeparator() {
  dock.classList.toggle("has-minimized", minimizedMap.size > 0);
  dockSeparator.style.display = minimizedMap.size > 0 ? "block" : "none";
}

// ===== Window Actions =====
function attachWindowActions(win) {
  const titlebar = win.querySelector(".window-titlebar");
  const closeBtn = win.querySelector('[data-action="close"]');
  const minimizeBtn = win.querySelector('[data-action="minimize"]');
  const maximizeBtn = win.querySelector('[data-action="maximize"]');

  [closeBtn, minimizeBtn, maximizeBtn].forEach((btn) => {
    btn.addEventListener("pointerdown", (e) => e.stopPropagation());
    btn.addEventListener("mousedown", (e) => e.stopPropagation());
    btn.addEventListener("dblclick", (e) => e.stopPropagation());
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeWindow(win);
  });

  minimizeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    minimizeWindow(win);
  });

  maximizeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleZoom(win);
  });

  titlebar.addEventListener("dblclick", () => toggleZoom(win));
  win.addEventListener("mousedown", () => focusWindow(win));
  enableWindowDrag(win, titlebar);
}

function focusWindow(win) {
  windowMap.forEach((w) => w.classList.remove("is-focused"));
  zCounter += 1;
  win.style.zIndex = String(zCounter);
  win.classList.add("is-focused");
  win.dataset.state = "open";
  hiddenApps.delete(win.dataset.appKey);

  const appKey = win.dataset.appKey;
  updateDockState(appKey);
  updateMenuBarTitle(appRegistry[appKey]?.title || null);

  windowMap.forEach((w, key) => {
    if (key !== appKey) updateDockState(key);
  });
}

function focusTopWindow() {
  let topWin = null;
  let topZ = -1;
  windowMap.forEach((w) => {
    if (w.dataset.state === "open" && !hiddenApps.has(w.dataset.appKey)) {
      const z = parseInt(w.style.zIndex) || 0;
      if (z > topZ) { topZ = z; topWin = w; }
    }
  });
  if (topWin) {
    focusWindow(topWin);
  } else {
    windowMap.forEach((w) => w.classList.remove("is-focused"));
    updateMenuBarTitle(null);
  }
}

function toggleZoom(win) {
  if (window.innerWidth <= 900) return;

  if (win.dataset.maximized === "true") {
    win.style.left = win.dataset.restoreLeft;
    win.style.top = win.dataset.restoreTop;
    win.style.width = win.dataset.restoreWidth;
    win.style.height = win.dataset.restoreHeight;
    win.dataset.maximized = "false";
    win.classList.remove("is-maximized");
  } else {
    win.dataset.restoreLeft = win.style.left;
    win.dataset.restoreTop = win.style.top;
    win.dataset.restoreWidth = win.style.width;
    win.dataset.restoreHeight = win.style.height;
    win.style.left = "0px";
    win.style.top = "0px";
    win.style.width = `${windowLayer.clientWidth}px`;
    win.style.height = `${windowLayer.clientHeight}px`;
    win.dataset.maximized = "true";
    win.classList.add("is-maximized");
  }

  win.style.transition =
    "left 220ms cubic-bezier(0.2, 0.9, 0.18, 1), top 220ms cubic-bezier(0.2, 0.9, 0.18, 1), width 220ms cubic-bezier(0.2, 0.9, 0.18, 1), height 220ms cubic-bezier(0.2, 0.9, 0.18, 1)";
  setTimeout(() => { win.style.transition = ""; }, 240);
  focusWindow(win);
}

function enableWindowDrag(win, handle) {
  let dragging = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;

  handle.addEventListener("pointerdown", (event) => {
    if (window.innerWidth <= 900) return;
    if (event.target.closest(".traffic")) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startY = event.clientY;
    originLeft = win.offsetLeft;
    originTop = win.offsetTop;
    focusWindow(win);
    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    if (win.dataset.maximized === "true" && moved) {
      toggleZoom(win);
      originLeft = win.offsetLeft;
      originTop = win.offsetTop;
      startX = event.clientX;
      startY = event.clientY;
    }
    const minX = -(win.offsetWidth - 64);
    const maxX = windowLayer.clientWidth - 64;
    const minY = -(win.offsetHeight - 40);
    const maxY = windowLayer.clientHeight - 40;
    win.style.left = `${clamp(originLeft + dx, minX, maxX)}px`;
    win.style.top = `${clamp(originTop + dy, minY, maxY)}px`;
  });

  const stopDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    handle.releasePointerCapture(event.pointerId);
  };
  handle.addEventListener("pointerup", stopDrag);
  handle.addEventListener("pointercancel", stopDrag);
}

// ===== Desktop Icons =====
function initDesktopIcons() {
  const saved = loadIconPositions();
  const icons = [...desktopIcons.querySelectorAll(".desktop-icon")];

  icons.forEach((icon, index) => {
    const key = icon.dataset.appKey;
    const defaults = getDefaultGridPositions();
    const pos = saved[key] || defaults[index] || { left: GRID.startX, top: GRID.startY + index * GRID.cellH };
    placeIcon(icon, pos.left, pos.top);
    attachDesktopIconEvents(icon);
  });
}

function getDefaultGridPositions() {
  const positions = [];
  for (let i = 0; i < 20; i++) {
    const row = i;
    positions.push({
      left: GRID.startX,
      top: GRID.startY + row * GRID.cellH,
    });
  }
  return positions;
}

function attachDesktopIconEvents(icon) {
  let dragging = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;

  icon.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startY = event.clientY;
    originLeft = icon.offsetLeft;
    originTop = icon.offsetTop;
    icon.classList.add("dragging");
    icon.setPointerCapture(event.pointerId);
    selectDesktopIcon(icon);
  });

  icon.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      moved = true;
      icon.dataset.dragMoved = "true";
    }
    const bounds = getIconBounds(icon);
    placeIcon(icon, clamp(originLeft + dx, 8, bounds.maxLeft), clamp(originTop + dy, 8, bounds.maxTop));
  });

  const stopDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    icon.classList.remove("dragging");
    icon.releasePointerCapture(event.pointerId);
    if (moved) {
      snapIconToGrid(icon);
    }
    saveIconPositions();
    setTimeout(() => { icon.dataset.dragMoved = moved ? "true" : "false"; }, 0);
  };
  icon.addEventListener("pointerup", stopDrag);
  icon.addEventListener("pointercancel", stopDrag);
}

function snapIconToGrid(icon) {
  const left = icon.offsetLeft;
  const top = icon.offsetTop;
  const col = Math.round((left - GRID.startX) / GRID.cellW);
  const row = Math.round((top - GRID.startY) / GRID.cellH);
  const snappedLeft = Math.max(8, GRID.startX + col * GRID.cellW);
  const snappedTop = Math.max(8, GRID.startY + row * GRID.cellH);
  placeIcon(icon, snappedLeft, snappedTop);
}

function snapAllIconsToGrid() {
  const icons = [...desktopIcons.querySelectorAll(".desktop-icon")];
  icons.forEach((icon) => snapIconToGrid(icon));
  saveIconPositions();
}

function selectDesktopIcon(icon) {
  desktopIcons.querySelectorAll(".desktop-icon").forEach((item) => {
    item.classList.toggle("selected", item === icon);
  });
}

function selectDesktopIconByApp(appKey) {
  const icon = desktopIcons.querySelector(`.desktop-icon[data-app-key="${appKey}"]`);
  if (icon) selectDesktopIcon(icon);
}

function clearDesktopSelection() {
  desktopIcons.querySelectorAll(".desktop-icon").forEach((item) => {
    item.classList.remove("selected");
  });
}

function placeIcon(icon, left, top) {
  icon.style.left = `${left}px`;
  icon.style.top = `${top}px`;
}

function getIconBounds(icon) {
  return {
    maxLeft: Math.max(8, window.innerWidth - icon.offsetWidth - 8),
    maxTop: Math.max(8, window.innerHeight - icon.offsetHeight - 8),
  };
}

function saveIconPositions() {
  const pos = {};
  desktopIcons.querySelectorAll(".desktop-icon").forEach((icon) => {
    pos[icon.dataset.appKey] = { left: icon.offsetLeft, top: icon.offsetTop };
  });
  localStorage.setItem(ICON_POSITION_KEY, JSON.stringify(pos));
}

function loadIconPositions() {
  try { return JSON.parse(localStorage.getItem(ICON_POSITION_KEY) || "{}"); } catch { return {}; }
}

// ===== Desktop Triggers =====
function bindDesktopTriggers() {
  document.querySelectorAll("[data-open-app]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      if (trigger.dataset.dragMoved === "true") {
        trigger.dataset.dragMoved = "false";
        return;
      }
      selectDesktopIconByApp(trigger.dataset.openApp);
      openApp(trigger.dataset.openApp, event.currentTarget);
    });
  });

  const appleBtn = document.getElementById("appleButton");
  if (appleBtn) {
    appleBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      openApp("about", event.currentTarget);
    });
  }
}

// ===== Global Listeners =====
function setupGlobalListeners() {
  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".desktop-icon") && !event.target.closest(".dock-item")) {
      clearDesktopSelection();
    }
    if (!event.target.closest(".context-menu")) {
      closeContextMenu();
    }
  });

  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest(".context-menu")) {
      return;
    }
    const dockPreview = event.target.closest(".dock-preview");
    if (dockPreview) {
      event.preventDefault();
      showMinimizedContextMenu(event.clientX, event.clientY, dockPreview.dataset.appKey);
      return;
    }
    const desktopIcon = event.target.closest(".desktop-icon");
    if (desktopIcon) {
      event.preventDefault();
      showDesktopIconContextMenu(event.clientX, event.clientY, desktopIcon.dataset.appKey);
      return;
    }
    const targetWindow = event.target.closest(".mac-window");
    if (targetWindow) {
      event.preventDefault();
      showWindowContextMenu(event.clientX, event.clientY, targetWindow.dataset.appKey);
      return;
    }
    if (event.target.closest(".dock-item")) {
      return;
    }
    if (event.target.closest(".desktop-icons") || event.target.closest(".desktop") && !event.target.closest(".mac-window")) {
      event.preventDefault();
      showDesktopContextMenu(event.clientX, event.clientY);
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "q") {
      const focused = document.querySelector(".mac-window.is-focused");
      if (focused) {
        event.preventDefault();
        closeWindow(focused);
      }
    }
  });
}

// ===== Context Menu =====
function showDockContextMenu(x, y, appKey) {
  const config = appRegistry[appKey];
  const win = windowMap.get(appKey);
  const isRunning = !!win && !hiddenApps.has(appKey);

  let html = `<div class="context-menu-item" style="opacity:0.6">${config.label}</div>`;
  html += '<div class="context-menu-divider"></div>';

  if (isRunning) {
    if (win.dataset.state === "minimized") {
      html += `<button class="context-menu-item" data-cmd="restore" data-app="${appKey}">恢复</button>`;
    } else {
      html += `<button class="context-menu-item" data-cmd="minimize" data-app="${appKey}">最小化</button>`;
    }
    html += `<button class="context-menu-item" data-cmd="quit" data-app="${appKey}">退出</button>`;
  } else if (hiddenApps.has(appKey)) {
    html += `<button class="context-menu-item" data-cmd="show" data-app="${appKey}">显示窗口</button>`;
    html += `<button class="context-menu-item" data-cmd="quit" data-app="${appKey}">退出</button>`;
  } else {
    html += `<button class="context-menu-item" data-cmd="open" data-app="${appKey}">打开</button>`;
  }

  contextMenuInner.innerHTML = html;
  showContextMenuAt(x, y);

  contextMenuInner.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd;
      const key = btn.dataset.app;
      if (cmd === "open") openApp(key);
      else if (cmd === "show") showWindow(windowMap.get(key));
      else if (cmd === "minimize") minimizeWindow(windowMap.get(key));
      else if (cmd === "restore") restoreWindow(windowMap.get(key));
      else if (cmd === "quit") quitApp(key);
      closeContextMenu();
    });
  });
}

function showDesktopContextMenu(x, y) {
  const html = `
    <button class="context-menu-item" data-cmd="cleanup">整理桌面</button>
    <div class="context-menu-divider"></div>
    <button class="context-menu-item" data-cmd="about">关于本页面</button>
  `;
  contextMenuInner.innerHTML = html;
  showContextMenuAt(x, y);

  contextMenuInner.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.cmd === "cleanup") snapAllIconsToGrid();
      else if (btn.dataset.cmd === "about") openApp("about");
      closeContextMenu();
    });
  });
}

function showDesktopIconContextMenu(x, y, appKey) {
  const config = appRegistry[appKey];
  const html = `
    <div class="context-menu-item" style="opacity:0.6">${config.label}</div>
    <div class="context-menu-divider"></div>
    <button class="context-menu-item" data-cmd="open" data-app="${appKey}">打开</button>
    <button class="context-menu-item" data-cmd="align" data-app="${appKey}">对齐到网格</button>
  `;
  contextMenuInner.innerHTML = html;
  showContextMenuAt(x, y);

  contextMenuInner.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd;
      const key = btn.dataset.app;
      if (cmd === "open") openApp(key);
      if (cmd === "align") {
        const icon = desktopIcons.querySelector(`.desktop-icon[data-app-key="${key}"]`);
        if (icon) {
          snapIconToGrid(icon);
          saveIconPositions();
        }
      }
      closeContextMenu();
    });
  });
}

function showWindowContextMenu(x, y, appKey) {
  const win = windowMap.get(appKey);
  if (!win) return;
  const zoomLabel = win.dataset.maximized === "true" ? "还原" : "放大";
  const html = `
    <div class="context-menu-item" style="opacity:0.6">${appRegistry[appKey].label}</div>
    <div class="context-menu-divider"></div>
    <button class="context-menu-item" data-cmd="minimize" data-app="${appKey}">最小化</button>
    <button class="context-menu-item" data-cmd="zoom" data-app="${appKey}">${zoomLabel}</button>
    <button class="context-menu-item" data-cmd="close" data-app="${appKey}">关闭窗口</button>
  `;
  contextMenuInner.innerHTML = html;
  showContextMenuAt(x, y);

  contextMenuInner.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd;
      const key = btn.dataset.app;
      const target = windowMap.get(key);
      if (!target) return;
      if (cmd === "minimize") minimizeWindow(target);
      if (cmd === "zoom") toggleZoom(target);
      if (cmd === "close") closeWindow(target);
      closeContextMenu();
    });
  });
}

function showMinimizedContextMenu(x, y, appKey) {
  const html = `
    <div class="context-menu-item" style="opacity:0.6">${appRegistry[appKey].label}</div>
    <div class="context-menu-divider"></div>
    <button class="context-menu-item" data-cmd="restore" data-app="${appKey}">恢复</button>
    <button class="context-menu-item" data-cmd="close" data-app="${appKey}">关闭窗口</button>
  `;
  contextMenuInner.innerHTML = html;
  showContextMenuAt(x, y);

  contextMenuInner.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd;
      const key = btn.dataset.app;
      const target = windowMap.get(key);
      if (!target) return;
      if (cmd === "restore") restoreWindow(target);
      if (cmd === "close") closeWindow(target);
      closeContextMenu();
    });
  });
}

function showContextMenuAt(x, y) {
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  const rect = contextMenu.getBoundingClientRect();
  if (rect.right > window.innerWidth) contextMenu.style.left = `${x - rect.width}px`;
  if (rect.bottom > window.innerHeight) contextMenu.style.top = `${y - rect.height}px`;
  contextMenu.classList.add("is-open");
  contextMenu.setAttribute("aria-hidden", "false");
}

function closeContextMenu() {
  contextMenu.classList.remove("is-open");
  contextMenu.setAttribute("aria-hidden", "true");
}

// ===== Window Animations =====
function getSourceRect(sourceEl, fallbackWin) {
  if (sourceEl) return sourceEl.getBoundingClientRect();
  return fallbackWin ? fallbackWin.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
}

function animateWindowOpen(win, sourceRect) {
  const finalRect = win.getBoundingClientRect();
  const tx = sourceRect.left + sourceRect.width / 2 - (finalRect.left + finalRect.width / 2);
  const ty = sourceRect.top + sourceRect.height / 2 - (finalRect.top + finalRect.height / 2);
  const sx = clamp(sourceRect.width / finalRect.width, 0.22, 0.94);
  const sy = clamp(sourceRect.height / finalRect.height, 0.22, 0.94);

  win.animate(
    [
      { opacity: 0.16, transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`, filter: "blur(6px)" },
      { opacity: 1, transform: "translate(0, 0) scale(1.01)", filter: "blur(0)", offset: 0.78 },
      { opacity: 1, transform: "translate(0, 0) scale(1)", filter: "blur(0)" },
    ],
    { duration: 340, easing: "cubic-bezier(0.16, 0.86, 0.24, 1)", fill: "both" },
  );
}

function animateSuckToDock(win, targetRect, onFinish) {
  const cr = win.getBoundingClientRect();
  const tx = targetRect.left + targetRect.width / 2 - (cr.left + cr.width / 2);
  const dockBottom = window.innerHeight - 12;
  const scaleY = clamp(targetRect.height / cr.height, 0.03, 0.18);
  const finalBottom = targetRect.top + targetRect.height * 0.5 + (cr.height * scaleY) * 0.5;
  const yBias = finalBottom > dockBottom ? dockBottom - finalBottom : 0;
  const ty = targetRect.top + targetRect.height / 2 - (cr.top + cr.height / 2) + yBias;
  const sx = clamp(targetRect.width / cr.width, 0.03, 0.18);
  const sy = scaleY;

  win.classList.add("is-closing");
  win.animate(
    [
      { opacity: 1, transform: "translate(0, 0) scale(1)", filter: "blur(0)" },
      { opacity: 0.55, transform: "translate(0, 0) scale(0.92)", filter: "blur(1px)", offset: 0.2 },
      { opacity: 0.08, transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`, filter: "blur(5px)" },
    ],
    { duration: 380, easing: "cubic-bezier(0, 0.55, 0.15, 1)", fill: "both" },
  ).finished.finally(() => {
    win.classList.remove("is-closing");
    if (onFinish) onFinish();
  });
}

function animateExpandFromDock(win, sourceRect) {
  const fr = win.getBoundingClientRect();
  const tx = sourceRect.left + sourceRect.width / 2 - (fr.left + fr.width / 2);
  const ty = sourceRect.top + sourceRect.height / 2 - (fr.top + fr.height / 2);
  const sx = clamp(sourceRect.width / fr.width, 0.04, 0.18);
  const sy = clamp(sourceRect.height / fr.height, 0.04, 0.18);

  win.animate(
    [
      { opacity: 0.08, transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`, filter: "blur(5px)" },
      { opacity: 0.7, transform: `translate(0, 0) scale(1.03)`, filter: "blur(0)", offset: 0.72 },
      { opacity: 1, transform: "translate(0, 0) scale(1)", filter: "blur(0)" },
    ],
    { duration: 400, easing: "cubic-bezier(0.45, 0, 0.8, 0.4)", fill: "both" },
  );
}

// ===== Dock Magnification (rAF lerp, macOS-style spring physics) =====
function setupDockMagnification() {
  const BASE_SIZE = 57.6;                 // 3.6rem
  const MAX_SIZE = BASE_SIZE * 1.8;        // ~104px at peak
  const DIST_LIMIT = BASE_SIZE * 6;       // 336px range

  // Interpolation control points
  const distKnots = [0, DIST_LIMIT / 2, DIST_LIMIT / 1.25, DIST_LIMIT];
  const sizeKnots = [MAX_SIZE, BASE_SIZE * 1.414, BASE_SIZE * 1.1, BASE_SIZE];

  function getTargetSize(absD) {
    if (absD >= DIST_LIMIT) return BASE_SIZE;
    for (let i = 0; i < distKnots.length - 1; i++) {
      if (absD >= distKnots[i] && absD <= distKnots[i + 1]) {
        const t = (absD - distKnots[i]) / (distKnots[i + 1] - distKnots[i]);
        return sizeKnots[i] + (sizeKnots[i + 1] - sizeKnots[i]) * t;
      }
    }
    return BASE_SIZE;
  }

  const currentSizes = new Map();
  let mouseX = null;
  let rafId = null;

  function getItems() {
    return [...dock.querySelectorAll(".dock-item")];
  }

  function animate() {
    const items = getItems();
    let allSettled = true;

    items.forEach((item) => {
      // Find the visual element to measure center
      const visual = item.querySelector(".dock-icon") || item.querySelector(".dock-preview-frame");
      if (!visual) return;

      // Target size based on current (animated) visual position → feedback loop
      let target = BASE_SIZE;
      if (mouseX !== null) {
        const rect = visual.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        target = getTargetSize(Math.abs(mouseX - cx));
      }

      let current = currentSizes.get(item);
      if (current === undefined) {
        current = BASE_SIZE;
        currentSizes.set(item, current);
      }

      // Asymmetric lerp: faster toward cursor, slower decay
      const lerp = target > current ? 0.32 : 0.18;
      const next = current + (target - current) * lerp;
      currentSizes.set(item, next);
      item.style.setProperty("--item-size", `${next.toFixed(1)}px`);

      if (Math.abs(next - BASE_SIZE) > 0.15 || mouseX !== null) {
        allSettled = false;
      }

      // Magnified class (for label tooltip)
      if (mouseX !== null) {
        const rect = visual.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        if (Math.abs(mouseX - cx) < 42) {
          item.classList.add("is-magnified");
        } else {
          item.classList.remove("is-magnified");
        }
      } else {
        item.classList.remove("is-magnified");
      }
    });

    if (!allSettled) {
      rafId = requestAnimationFrame(animate);
    } else {
      rafId = null;
    }
  }

  function startLoop() {
    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  }

  dock.addEventListener("pointerenter", (event) => {
    mouseX = event.clientX;
    startLoop();
  });

  dock.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    startLoop();
  });

  dock.addEventListener("pointerleave", () => {
    mouseX = null;
    startLoop();
  });
}

// ===== Menu Bar =====
function updateMenuBarTitle(title) {
  if (title) {
    menuTitle.textContent = title;
    menuTitle.style.fontWeight = "600";
  } else {
    menuTitle.textContent = "Paidaxing Studio";
    menuTitle.style.fontWeight = "400";
  }
}

// ===== Content Actions =====
function wireContentActions(win) {
  win.querySelectorAll("[data-copy]").forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        await navigator.clipboard.writeText(link.dataset.copy);
        link.textContent = `已复制 ${link.dataset.copy}`;
      } catch {
        link.textContent = `复制失败，请手动复制 ${link.dataset.copy}`;
      }
    });
  });

  win.querySelectorAll("[data-dev-placeholder]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      link.textContent = "开发中，敬请期待";
    });
  });
}

// ===== Position Helpers =====
function getNextWindowPosition(config) {
  const maxLeft = Math.max(20, windowLayer.clientWidth - config.width - 12);
  const maxTop = Math.max(20, windowLayer.clientHeight - config.height - 12);
  const left = clamp(52 + (cascadeIndex % 5) * 32, 12, maxLeft);
  const top = clamp(36 + (cascadeIndex % 4) * 26, 12, maxTop);
  cascadeIndex += 1;
  return { left, top };
}

// ===== Resize Handler =====
function handleResize() {
  desktopIcons.querySelectorAll(".desktop-icon").forEach((icon) => {
    const bounds = getIconBounds(icon);
    placeIcon(icon, clamp(icon.offsetLeft, 8, bounds.maxLeft), clamp(icon.offsetTop, 8, bounds.maxTop));
  });
  saveIconPositions();

  windowMap.forEach((win) => {
    if (win.dataset.state === "minimized" || hiddenApps.has(win.dataset.appKey)) return;
    if (win.dataset.maximized === "true") {
      win.style.width = `${windowLayer.clientWidth}px`;
      win.style.height = `${windowLayer.clientHeight}px`;
      return;
    }
    const minX = -(win.offsetWidth - 64);
    const maxX = windowLayer.clientWidth - 64;
    const minY = -(win.offsetHeight - 40);
    const maxY = windowLayer.clientHeight - 40;
    win.style.left = `${clamp(win.offsetLeft, minX, maxX)}px`;
    win.style.top = `${clamp(win.offsetTop, minY, maxY)}px`;
  });

  minimizedMap.forEach((entry, appKey) => {
    const win = windowMap.get(appKey);
    if (win) updateMinimizedPreview(win, entry);
  });
}

// ===== Background Tasks =====
async function fetchHitokoto() {
  const el = document.getElementById("hitokotoText");
  try {
    const res = await fetch("https://v1.hitokoto.cn/?c=a&c=c");
    if (!res.ok) throw new Error("request failed");
    const data = await res.json();
    el.textContent = `${data.hitokoto} · ${data.from || "未知出处"}`;
  } catch {
    el.textContent = "代码与创意永不停止。";
  }
}

function updateClockAndDate() {
  const now = new Date();
  document.getElementById("dateText").textContent = new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric", weekday: "short" }).format(now);
  document.getElementById("clockText").textContent = new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(now);
}

function updateRuntime() {
  const days = Math.floor((Date.now() - new Date("2025-11-10T00:00:00").getTime()) / 86400000);
  document.getElementById("runtimeText").textContent = `网站已运行 ${days} 天`;
}

function setupPvFallback() {
  const pvNode = document.getElementById("busuanzi_value_site_pv");
  let settled = false;
  const timer = setInterval(() => {
    if ((pvNode.textContent || "").trim() && pvNode.textContent !== "--") { settled = true; clearInterval(timer); }
  }, 300);
  setTimeout(() => { if (!settled) { clearInterval(timer); pvNode.textContent = "--"; } }, 4000);
}

// ===== Utilities =====
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// ===== Boot =====
init();
