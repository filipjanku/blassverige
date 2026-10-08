document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('main-navigation');
  if (!toggle || !nav) return;
  function closeMenu() { toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Öppna menyn'); nav.classList.remove('is-open'); }
  toggle.addEventListener('click', function () {
    const opening = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Stäng menyn' : 'Öppna menyn');
    nav.classList.toggle('is-open', opening);
  });
  nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',closeMenu)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
  document.addEventListener('click',function(e){if(!toggle.contains(e.target)&&!nav.contains(e.target))closeMenu()});
  window.addEventListener('resize',function(){if(window.innerWidth>900)closeMenu()});
});
