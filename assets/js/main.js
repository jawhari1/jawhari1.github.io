// Dark mode toggle with memory
(function () {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme'); // "light" | "dark" | null

  function apply(theme) {
    if (theme === 'dark') html.setAttribute('data-theme', 'dark');
    else if (theme === 'light') html.setAttribute('data-theme', 'light');
    else html.setAttribute('data-theme', 'auto');
  }

  apply(saved);
  if (btn) {
    btn.addEventListener('click', () => {
      const next =
        (html.getAttribute('data-theme') === 'dark') ? 'light' :
        (html.getAttribute('data-theme') === 'light') ? 'auto' : 'dark';
      localStorage.setItem('theme', next);
      apply(next);
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
