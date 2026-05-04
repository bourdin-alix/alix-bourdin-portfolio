import { useEffect } from "react";

export function useScrollReveal(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.querySelectorAll(".skill-fill").forEach((bar) => {
              (bar as HTMLElement).classList.add("animated");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    // Stagger siblings within each section
    document.querySelectorAll("section").forEach((sec) => {
      sec.querySelectorAll(".reveal").forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
      });
    });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
