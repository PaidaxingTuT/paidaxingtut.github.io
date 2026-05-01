/**
 * Back to Top Button
 */
(function() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const threshold = 300;
    let ticking = false;

    function updateVisibility() {
        if (window.scrollY > threshold) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateVisibility);
            ticking = true;
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateVisibility();
})();
