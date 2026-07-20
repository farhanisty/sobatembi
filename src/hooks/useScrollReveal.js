import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );

      revealEls.forEach((el) => revealObserver.observe(el));

      // Cleanup observer saat komponen dilepas
      return () => revealObserver.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add('in'));
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
  }, []);
}
