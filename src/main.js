export function initMain() {
  // ============ NAVBAR SCROLL STATE ============
  const navbar = document.querySelector('.navbar');
  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ============ MOBILE MENU TOGGLE ============
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // toggle dropdown on tap for mobile
    document.querySelectorAll('.has-dropdown > a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });
  }

  // ============ SCROLL REVEAL ============
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // stagger children automatically within any [data-stagger] container
  document.querySelectorAll('[data-stagger]').forEach(container => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.setProperty('--d', `${i * 0.08}s`);
    });
  });

  // ============ TIMELINE LINE DRAW ============
  const tlLine = document.querySelector('.timeline-svg-line');
  if (tlLine && 'IntersectionObserver' in window) {
    const tlObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          tlObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    tlObserver.observe(tlLine);
  }

  // individual timeline items reveal + dot fill
  const tlItems = document.querySelectorAll('.tl-item');
  if (tlItems.length && 'IntersectionObserver' in window) {
    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          itemObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    tlItems.forEach(item => itemObserver.observe(item));
  }
}
