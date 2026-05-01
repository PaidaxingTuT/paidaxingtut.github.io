/**
 * Gallery - 展示 images/ 文件夹中的图片
 *
 * 添加新图片：在下方 images 数组中加入新条目即可
 * 格式：{ src: 'images/文件名', caption: '说明（可选）' }
 */
const Gallery = {
  // ========================================
  // 在这里添加图片，除了 kanata-header.png
  // ========================================
  images: [
    { src: "images/knt.jpg", caption: "" },
    { src: "images/ph.jpg", caption: "" },
  ],

  container: null,
  lightbox: null,
  emptyEl: null,
  currentIndex: 0,

  init() {
    this.container = document.getElementById("gallery-grid");
    this.lightbox = document.getElementById("lightbox");
    this.emptyEl = document.getElementById("gallery-empty");
    if (!this.container) return;

    this.setupLightbox();

    if (this.images.length === 0) {
      this.container.innerHTML = "";
      if (this.emptyEl) this.emptyEl.style.display = "block";
      return;
    }

    if (this.emptyEl) this.emptyEl.style.display = "none";
    this.render();
    this.setupLazyLoading();
  },

  render() {
    this.container.innerHTML = this.images
      .map((item, index) => {
        const caption = item.caption || "";
        return `
                <div class="gallery-item" data-index="${index}">
                    <img
                        data-src="${this.escapeHtml(item.src)}"
                        alt="${this.escapeHtml(caption)}"
                        class="gallery-image lazy"
                        loading="lazy"
                    >
                    ${caption ? `<div class="gallery-overlay"><p class="gallery-caption">${this.escapeHtml(caption)}</p></div>` : ""}
                </div>
            `;
      })
      .join("");

    this.container.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        this.openLightbox(parseInt(item.dataset.index));
      });
    });
  },

  setupLazyLoading() {
    const images = this.container.querySelectorAll("img.lazy");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              observer.unobserve(img);
            }
          });
        },
        { rootMargin: "50px" },
      );
      images.forEach((img) => observer.observe(img));
    } else {
      images.forEach((img) => {
        img.src = img.dataset.src;
        img.classList.remove("lazy");
      });
    }
  },

  setupLightbox() {
    if (!this.lightbox) return;

    this.lightbox.addEventListener("click", (e) => {
      if (
        e.target === this.lightbox ||
        e.target.classList.contains("lightbox-close")
      ) {
        this.closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!this.lightbox.classList.contains("active")) return;
      if (e.key === "Escape") this.closeLightbox();
      if (e.key === "ArrowLeft") this.navigate(-1);
      if (e.key === "ArrowRight") this.navigate(1);
    });

    this.lightbox
      .querySelector(".lightbox-prev")
      ?.addEventListener("click", () => this.navigate(-1));
    this.lightbox
      .querySelector(".lightbox-next")
      ?.addEventListener("click", () => this.navigate(1));

    let touchStartX = 0;
    const content = this.lightbox.querySelector(".lightbox-content");
    if (content) {
      content.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );
      content.addEventListener(
        "touchend",
        (e) => {
          const delta = e.changedTouches[0].screenX - touchStartX;
          if (Math.abs(delta) > 50) {
            this.navigate(delta > 0 ? -1 : 1);
          }
        },
        { passive: true },
      );
    }
  },

  openLightbox(index) {
    if (!this.lightbox || !this.images.length) return;
    this.currentIndex = index;
    this.updateLightboxContent();
    this.lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeLightbox() {
    if (!this.lightbox) return;
    this.lightbox.classList.remove("active");
    document.body.style.overflow = "";
  },

  navigate(direction) {
    const total = this.images.length;
    this.currentIndex = (this.currentIndex + direction + total) % total;
    this.updateLightboxContent();
  },

  updateLightboxContent() {
    const item = this.images[this.currentIndex];
    const imgContainer = this.lightbox.querySelector(".lightbox-image");
    const infoContainer = this.lightbox.querySelector(".lightbox-info");

    if (imgContainer) {
      imgContainer.innerHTML = `<img src="${this.escapeHtml(item.src)}" alt="${this.escapeHtml(item.caption || "")}">`;
    }
    if (infoContainer) {
      const caption = item.caption || "";
      infoContainer.innerHTML = caption
        ? `<p class="lightbox-caption">${this.escapeHtml(caption)}</p>`
        : "";
    }

    const showNav = this.images.length > 1;
    const prev = this.lightbox.querySelector(".lightbox-prev");
    const next = this.lightbox.querySelector(".lightbox-next");
    if (prev) prev.style.display = showNav ? "" : "none";
    if (next) next.style.display = showNav ? "" : "none";
  },

  escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  },
};

document.addEventListener("DOMContentLoaded", () => Gallery.init());
