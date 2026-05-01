/**
 * Mouse trail feather effect
 */
(function() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = document.createElement('div');
    container.className = 'feather-container';
    document.body.appendChild(container);

    let lastTime = 0;
    const throttle = 80;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < throttle) return;
        lastTime = now;

        const feather = document.createElement('div');
        feather.className = 'feather trail';
        feather.style.left = (e.clientX - 9) + 'px';
        feather.style.top = (e.clientY - 9) + 'px';
        container.appendChild(feather);

        setTimeout(() => feather.remove(), 1500);
    });
})();
