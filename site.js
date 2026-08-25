/* 낮은 목소리 / Low Voice — 세 페이지 공통 스크립트 */

/* 스크롤을 내리면 요소가 천천히 떠오른다.
   빠르게 튀지 않고 1초에 걸쳐 올라오도록 해, 페이지 자체가 서두르지 않게 한다. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    'section .head, .visit .grid > div, .voices li, .senses li, ' +
    '.split .text, .split .frame, .brief li, .gallery li, ' +
    '.signature > li, .combo, .posts li, .form-card, .channel, ' +
    '.notice h2, .notice .lines, .pricelist'
  );
  if (!targets.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(targets, function (el, i) {
    el.classList.add('reveal');
    // 같은 줄에 놓인 것들은 아주 조금씩 시차를 둔다
    el.style.transitionDelay = (i % 4) * 90 + 'ms';
    io.observe(el);
  });
})();

/* 어두운 화면이 기본. 버튼으로 밝은 화면으로 바꿀 수 있고, 선택은 브라우저에 저장된다. */
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  if (!button) return;

  function paint(isDark) {
    button.textContent = isDark ? '☀️' : '🌙';
    var label = isDark ? '밝은 화면으로 바꾸기' : '어두운 화면으로 바꾸기';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  paint(root.getAttribute('data-theme') !== 'light');

  button.addEventListener('click', function () {
    var toLight = root.getAttribute('data-theme') !== 'light';
    if (toLight) {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    paint(!toLight);
    try {
      localStorage.setItem('lowvoice-theme', toLight ? 'light' : 'dark');
    } catch (e) {}
  });
})();
