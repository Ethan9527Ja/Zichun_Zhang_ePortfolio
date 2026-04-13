import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
const base = import.meta.env.BASE_URL;
const partBDocUrl = `${base}Arts%204%20Secondary%20Teaching%201%20March%202026%20(1).docx`;

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
              <img class="mindmap-img" id="mindmap-img" src="${base}mind.png" alt="Provocation Mind Map for middle years arts inquiry" />
            </div>
          </div>
          <div class="mindmap-lightbox" id="mindmap-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged mind map" aria-hidden="true">
            <div class="mindmap-lightbox-backdrop" id="mindmap-lightbox-backdrop"></div>
            <button type="button" class="mindmap-lightbox-close" id="mindmap-lightbox-close" aria-label="Close">×</button>
            <div class="mindmap-lightbox-inner">
              <img src="${base}mind.png" alt="Provocation Mind Map for middle years arts inquiry (enlarged)" />
            </div>
            <p class="mindmap-lightbox-hint">Click outside or press Esc to close</p>
          </div>
        </div>
      </section>
      <section class="section partb-section" id="part-b" aria-labelledby="part-b-heading">
        <div class="container">
          <h2 id="part-b-heading" class="section-title">
            <span class="title-en">Part B (Week 6)</span>
            <span class="title-zh">Draft Lesson / Learning Experience</span>
          </h2>
          <p class="requirement-text">
            Part B lesson plan document is attached below for review.
          </p>
          <div class="partb-card">
            <p class="partb-file-name">Arts 4 Secondary Teaching 1 March 2026 (1).docx</p>
            <div class="partb-actions">
              <a class="partb-btn" href="${partBDocUrl}" target="_blank" rel="noopener noreferrer">Open Part B</a>
              <a class="partb-btn partb-btn-secondary" href="${partBDocUrl}" download>Download .docx</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section references-section" id="references" aria-labelledby="references-heading">
        <div class="container">
          <h2 id="references-heading" class="section-title">Reference List</h2>
          <div class="references-list">
            <p class="ref-entry">
              Australian Curriculum, Assessment and Reporting Authority. (2022). <i>Australian curriculum: The arts</i> (Version 9.0). <a href="https://www.australiancurriculum.edu.au/curriculum-information/understand-this-learning-area/the-arts/" target="_blank" rel="noopener noreferrer">https://www.australiancurriculum.edu.au/curriculum-information/understand-this-learning-area/the-arts/</a>
            </p>
            <p class="ref-entry">
              Dinham, J. (2023). <i>Delivering authentic arts education</i> (5th ed.). Cengage.
            </p>
            <p class="ref-entry">
              Shi, Y. (2025). Multimodal teaching in digital media arts education: Insights and challenges from teachers' perspectives. <i>Cogent Education</i>, <i>12</i>(1). <a href="https://doi.org/10.1080/2331186X.2025.2590849" target="_blank" rel="noopener noreferrer">https://doi.org/10.1080/2331186X.2025.2590849</a>
            </p>
            <p class="ref-entry">
              Tam, C. O. (2023). Integrating creative thinking skills pedagogies into a higher education visual arts course. <i>The International Journal of Art &amp; Design Education</i>, <i>42</i>(1), 16–32. <a href="https://doi.org/10.1111/jade.12452" target="_blank" rel="noopener noreferrer">https://doi.org/10.1111/jade.12452</a>
            </p>
            <p class="ref-entry">
              Yuan, Y., &amp; Yang, J. (2024). An investigation of the effects of using audio-visual language education integrated art teaching on students' learning motivation and outcome. <i>Revista de Cercetare Şi Intervenţie Socială</i>, <i>87</i>(87), 252–264. <a href="https://doi.org/10.33788/rcis.87.15" target="_blank" rel="noopener noreferrer">https://doi.org/10.33788/rcis.87.15</a>
            </p>
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
