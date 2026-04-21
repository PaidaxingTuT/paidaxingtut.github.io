window.onload = function () {
  const sections = document.querySelectorAll('section[class^="section"]');
  let currentIndex = 0;
  let wheelTimer = null;

  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();

      if (e.deltaY > 0) {
        if (currentIndex < sections.length - 1) {
          currentIndex++;
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
        }
      }

      performScroll(currentIndex);
    },
    { passive: false },
  );

  function performScroll(index) {
    const targetTop = index * window.innerHeight;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }
};
