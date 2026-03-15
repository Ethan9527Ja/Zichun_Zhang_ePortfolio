import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
const base = import.meta.env.BASE_URL;

app.innerHTML = `
  <div class="portfolio">
    <header class="hero" id="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-flow" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="hero-label">EDUC X232 · Assessment 1</p>
        <h1 class="hero-title">Arts Inquiry Portfolio</h1>
        <p class="hero-meta">Zichun Zhang · Student ID 1913483</p>
        <a href="#video" class="hero-cta">View Part A</a>
      </div>
      <div class="hero-scroll" aria-hidden="true">
        <span class="scroll-line"></span>
      </div>
    </header>

    <main>
      <section class="section video-section" id="video" aria-labelledby="video-heading">
        <div class="container">
          <h2 id="video-heading" class="section-title">
            <span class="title-en">Part A (1)</span>
            <span class="title-zh">Funds of Knowledge Video</span>
          </h2>
          <div class="video-wrapper">
            <div class="video-frame" id="video-window">
              <iframe src="https://www.youtube.com/embed/3KpeY0FAnEI" title="Funds of Knowledge Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="section mindmap-section" id="mindmap" aria-labelledby="mindmap-heading">
        <div class="container">
          <h2 id="mindmap-heading" class="section-title">
            <span class="title-en">Part A (2)</span>
            <span class="title-zh">Mind Map</span>
          </h2>
          <div class="mindmap-wrapper">
            <div class="mindmap-frame" id="mindmap-window" role="button" tabindex="0" aria-label="Click to enlarge mind map">
              <img class="mindmap-img" id="mindmap-img" src="${base}mindmap.png" alt="Provocation Mind Map for middle years arts inquiry" />
            </div>
          </div>
          <div class="mindmap-lightbox" id="mindmap-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged mind map" aria-hidden="true">
            <div class="mindmap-lightbox-backdrop" id="mindmap-lightbox-backdrop"></div>
            <button type="button" class="mindmap-lightbox-close" id="mindmap-lightbox-close" aria-label="Close">×</button>
            <div class="mindmap-lightbox-inner">
              <img src="${base}mindmap.png" alt="Provocation Mind Map for middle years arts inquiry (enlarged)" />
            </div>
            <p class="mindmap-lightbox-hint">Click outside or press Esc to close</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p><strong>Zichun Zhang</strong> · Student ID 1913483 · EDUC X232 · Arts Inquiry Portfolio</p>
    </footer>
  </div>
`;

function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  const portfolio = app.querySelector('.portfolio');
  if (!portfolio) return;

  portfolio.querySelectorAll('.section').forEach((el) => observer.observe(el));
  const footer = portfolio.querySelector('.footer');
  if (footer) observer.observe(footer);
}

initScrollAnimations();
initMindmapLightbox();

function initMindmapLightbox(): void {
  const trigger = app.querySelector('#mindmap-window');
  const lightbox = app.querySelector('#mindmap-lightbox') as HTMLElement;
  const backdrop = app.querySelector('#mindmap-lightbox-backdrop');
  const closeBtn = app.querySelector('#mindmap-lightbox-close');

  function open(): void {
    if (!lightbox) return;
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => (closeBtn as HTMLElement)?.focus());
  }

  function close(): void {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  trigger?.addEventListener('click', open);
  trigger?.addEventListener('keydown', (e: Event) => {
    const ev = e as KeyboardEvent;
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      open();
    }
  });
  backdrop?.addEventListener('click', close);
  closeBtn?.addEventListener('click', close);

  document.addEventListener('keydown', (e: Event) => {
    const ev = e as KeyboardEvent;
    if (ev.key === 'Escape' && lightbox?.classList.contains('is-open')) close();
  });
}
