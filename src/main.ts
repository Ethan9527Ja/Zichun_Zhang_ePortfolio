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
          <p class="requirement-text">
            A 3–4 minute video critically reflecting on the funds of knowledge I bring to teaching the arts to middle years learners—values, cultural and linguistic heritage, attitudes, interests, skills and knowledge—including strengths and limitations. The video uses visual, aural and linguistic modes, face-to-camera presentation, and in-text references to course theory and literature.
          </p>
          <div class="video-wrapper">
            <div class="video-frame" id="video-window">
              <div class="video-placeholder" id="video-placeholder">
                <div class="placeholder-content">
                  <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p>Embed your Funds of Knowledge video here</p>
                  <span class="placeholder-hint">3–4 min · Use iframe (YouTube/Bilibili) or &lt;video&gt; for local file</span>
                </div>
              </div>
              <!-- Replace placeholder with your embed, e.g.:
              <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Funds of Knowledge Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              or <video src="/your-video.mp4" controls></video> -->
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
