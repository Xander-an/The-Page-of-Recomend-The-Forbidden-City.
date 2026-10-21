'use strict';

const mediaTabs = Array.from(document.querySelectorAll('[role="tab"]'));
function activateTab(tab) {
  mediaTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
mediaTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % mediaTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + mediaTabs.length) % mediaTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = mediaTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateTab(mediaTabs[next]);
    mediaTabs[next].focus();
  });
});

const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
}
