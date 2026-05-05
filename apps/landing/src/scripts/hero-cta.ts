/**
 * Hero CTA tilt-handoff: navigates to the demo page (`data-demo-href`) on
 * click/Enter/Space and stashes the click position in sessionStorage so the
 * destination page can replay the tilt as a continuity cue.
 *
 * Bundled (not `is:inline`) to keep CSP `script-src 'unsafe-inline'` blast
 * radius minimal — see apps/landing/CLAUDE.md inline-script hygiene.
 */

const target = document.querySelector<HTMLElement>("[data-tilt-target]");

if (target) {
  const writeHandoff = (x: number, y: number): void => {
    sessionStorage.setItem(
      "iam:tilt:handoff",
      JSON.stringify({ x, y, t: Date.now() }),
    );
  };

  const navigate = (): void => {
    const href = target.dataset["demoHref"];
    if (href === undefined || href.length === 0) return;
    window.location.href = href;
  };

  target.addEventListener("click", (e) => {
    const r = target.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    writeHandoff(py * -3, px * 3);
    requestAnimationFrame(navigate);
  });

  target.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    writeHandoff(0, 0);
    requestAnimationFrame(navigate);
  });
}
