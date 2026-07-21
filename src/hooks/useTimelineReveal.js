import { useEffect } from "react";

export function useTimelineReveal() {
  useEffect(() => {
    console.log("ini jalan kan");
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
  }, [])
}
