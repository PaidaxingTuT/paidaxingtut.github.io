(function () {
  const overlay = document.getElementById("introOverlay");
  if (!overlay) return;

  const logoWrapper = overlay.querySelector(".intro-logo-wrapper");
  const navLogo = document.querySelector(".nav-logo");

  document.documentElement.style.overflow = "hidden";

  logoWrapper.style.transition = "none";
  logoWrapper.style.animation = "none";
  logoWrapper.style.transform = "scale(0.5)";
  logoWrapper.style.opacity = "0";
  void logoWrapper.offsetHeight;

  requestAnimationFrame(function () {
    logoWrapper.style.transition =
      "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    logoWrapper.style.transform = "scale(1)";
    logoWrapper.style.opacity = "1";
  });

  setTimeout(function () {
    logoWrapper.style.transition = "none";
    void logoWrapper.offsetHeight;

    var navRect = navLogo.getBoundingClientRect();
    var logoRect = logoWrapper.getBoundingClientRect();

    var translateX =
      navRect.left + navRect.width / 2 - (logoRect.left + logoRect.width / 2);
    var translateY =
      navRect.top + navRect.height / 2 - (logoRect.top + logoRect.height / 2);
    var targetScale = navRect.width / logoRect.width;

    requestAnimationFrame(function () {
      logoWrapper.style.transition =
        "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
      logoWrapper.style.transform =
        "translate(" +
        translateX.toFixed(3) +
        "px, " +
        translateY.toFixed(3) +
        "px) scale(" +
        targetScale.toFixed(4) +
        ")";
    });
  }, 600);

  setTimeout(function () {
    overlay.classList.add("fade-out");

    setTimeout(function () {
      overlay.style.display = "none";

      document.documentElement.style.overflow = "";
      document.body.classList.remove("intro-active");
    }, 300);
  }, 1450);
})();

const nav = document.getElementById("nav");
const footer = document.querySelector("footer");
const checkNav = () => {
  const scrolled = window.scrollY > 50;
  nav.classList.toggle("scrolled", scrolled);
  footer.classList.toggle("scrolled", scrolled);
};

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

const isMobile = () => {
  const shortSide = Math.min(window.innerWidth, window.innerHeight);
  const coarsePointer =
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches;
  return window.innerWidth <= 768 || (coarsePointer && shortSide <= 900);
};

const journeySection = document.getElementById("journey");
const rocketWrapper = document.getElementById("rocketWrapper");
const trackProgress = document.getElementById("trackProgress");
const track = document.getElementById("journeyTrack");
const milestones = document.querySelectorAll(".milestone");

const modal = document.getElementById("logModal");
if (modal) {
  window.addEventListener(
    "wheel",
    (e) => {
      if (modal.classList.contains("active")) {
        e.preventDefault();
      }
    },
    { passive: false },
  );
}

function updateJourney() {
  if (isMobile()) return;

  const rect = journeySection.getBoundingClientRect();
  const sectionHeight = journeySection.offsetHeight;
  const viewportHeight = window.innerHeight;

  const scrolled = -rect.top;
  const scrollableDistance = sectionHeight - viewportHeight;

  const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

  const trackWidth = track.offsetWidth;
  const rocketWidth = 68;
  const maxX = trackWidth - rocketWidth;
  const rocketX = progress * maxX;
  rocketWrapper.style.left = rocketX + "px";

  trackProgress.style.width = rocketX + "px";

  const rocketCenter = rocketX + rocketWidth / 2;
  milestones.forEach((ms) => {
    const msX = ms.offsetLeft;

    if (rocketCenter >= msX - 15) {
      ms.classList.add("visible");
    } else {
      ms.classList.remove("visible");
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

function resetMilestonesForMobile() {
  const mobile = isMobile();
  milestones.forEach((ms, index) => {
    ms.classList.toggle("is-left", index % 2 === 0);
    ms.classList.toggle("is-right", index % 2 !== 0);
    if (mobile) {
      ms.classList.add("visible");
    } else {
      ms.classList.remove("visible");
    }
  });
}
resetMilestonesForMobile();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener(
  "scroll",
  () => {
    requestAnimationFrame(() => {
      updateJourney();
      checkNav();
    });
  },
  { passive: true },
);

window.addEventListener("resize", () => {
  requestAnimationFrame(() => {
    updateJourney();
    resetMilestonesForMobile();
  });

  if (navToggle && navLinks) {
    navToggle.classList.remove("active");
    navLinks.classList.remove("open");
  }
});

function copyQQ() {
  const qqNumber = "428488368";
  const tempInput = document.createElement("input");
  tempInput.value = qqNumber;
  tempInput.style.position = "fixed";
  tempInput.style.opacity = "0";
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  try {
    const successful = document.execCommand("copy");
    document.body.removeChild(tempInput);
    if (successful) {
      alert("由于QQ限制，已复制派大星QQ，请手动添加，感谢理解");
    } else {
      prompt("复制失败，请手动复制QQ号：", qqNumber);
    }
  } catch (err) {
    document.body.removeChild(tempInput);
    prompt("复制失败，请手动复制QQ号：", qqNumber);
  }
}

function show_runtime() {
  const start = new Date("2025/11/10 00:00:00");
  const now = new Date();
  const diff = now - start;
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const span = document.getElementById("runtime_span");
  if (span) {
    span.textContent = `本站勉强运行: ${days}天${hours}小时${minutes}分${seconds}秒`;
  }
  setTimeout(show_runtime, 1000);
}

async function fetchHitokoto() {
  const textEl = document.querySelector(".hitokoto-text");
  const fromEl = document.querySelector(".hitokoto-from");

  try {
    const response = await fetch("https://v1.hitokoto.cn/?c=a&c=c");
    const data = await response.json();
    if (textEl && fromEl) {
      textEl.textContent = data.hitokoto;
      fromEl.textContent = `— 「 ${data.from} 」`;
    }
  } catch (err) {
    textEl.textContent = "代码与创意永不停歇。";
    fromEl.textContent = "— Paidaxing Studio";
  }
}

function development() {
  alert("功能开发中，敬请期待！");
}

function tobedecided() {
  alert("敬请期待！");
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.getElementById("logTrigger");
  const modal = document.getElementById("logModal");
  const closeBtn = document.querySelector(".modal-close");
  const overlay = document.querySelector(".modal-overlay");
  const logBody = document.getElementById("logBody");

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("active");

    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");

    fetch("log.md")
      .then((response) => {
        if (!response.ok) throw new Error("File not found");
        return response.text();
      })
      .then((data) => {
        if (typeof marked !== "undefined") {
          logBody.innerHTML = marked.parse(data);
        } else {
          logBody.innerText = data;
        }
      })
      .catch((err) => {
        logBody.innerHTML = "<p>读取失败</p>";
      });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
});

function setupPageViewCounterFallback() {
  const container = document.getElementById("busuanzi_container_site_pv");
  const value = document.getElementById("busuanzi_value_site_pv");
  if (!container || !value) return;

  let settled = false;
  const revealWhenReady = () => {
    const text = (value.textContent || "").trim();
    if (!text) return false;
    container.style.display = "inline";
    settled = true;
    return true;
  };

  if (revealWhenReady()) return;

  const poll = setInterval(() => {
    if (revealWhenReady()) clearInterval(poll);
  }, 300);

  setTimeout(() => {
    if (settled) return;
    clearInterval(poll);
    container.style.display = "inline";
    value.textContent = "--";
    container.title = "PV counter unavailable";
  }, 4500);
}

window.onload = () => {
  checkNav();
  updateJourney();
  show_runtime();
  fetchHitokoto();
  setupPageViewCounterFallback();
};
