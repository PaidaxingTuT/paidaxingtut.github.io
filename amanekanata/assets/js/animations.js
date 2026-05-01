/**
 * Scroll Reveal Animations
 */
class ScrollReveal {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                el.classList.add('revealed');
            });
            return;
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.revealDelay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal-on-scroll').forEach((el, index) => {
            if (el.closest('.reveal-group')) {
                el.dataset.revealDelay = index * 100;
            }
            this.observer.observe(el);
        });
    }

    destroy() {
        if (this.observer) this.observer.disconnect();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollReveal = new ScrollReveal();
});
