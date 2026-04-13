(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`),t=`/Zichun_Zhang_ePortfolio/`,n=`${t}Arts%204%20Secondary%20Teaching%201%20March%202026%20(1).docx`;e.innerHTML=`
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
              <img class="mindmap-img" id="mindmap-img" src="${t}mind.png" alt="Provocation Mind Map for middle years arts inquiry" />
            </div>
          </div>
          <div class="mindmap-lightbox" id="mindmap-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged mind map" aria-hidden="true">
            <div class="mindmap-lightbox-backdrop" id="mindmap-lightbox-backdrop"></div>
            <button type="button" class="mindmap-lightbox-close" id="mindmap-lightbox-close" aria-label="Close">×</button>
            <div class="mindmap-lightbox-inner">
              <img src="${t}mind.png" alt="Provocation Mind Map for middle years arts inquiry (enlarged)" />
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
              <a class="partb-btn" href="${n}" target="_blank" rel="noopener noreferrer">Open Part B</a>
              <a class="partb-btn partb-btn-secondary" href="${n}" download>Download .docx</a>
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
`;function r(){let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`in-view`)})},{threshold:.12,rootMargin:`0px 0px -40px 0px`}),n=e.querySelector(`.portfolio`);if(!n)return;n.querySelectorAll(`.section`).forEach(e=>t.observe(e));let r=n.querySelector(`.footer`);r&&t.observe(r)}r(),i();function i(){let t=e.querySelector(`#mindmap-window`),n=e.querySelector(`#mindmap-lightbox`),r=e.querySelector(`#mindmap-lightbox-backdrop`),i=e.querySelector(`#mindmap-lightbox-close`);function a(){n&&(n.setAttribute(`aria-hidden`,`false`),n.classList.add(`is-open`),document.body.style.overflow=`hidden`,requestAnimationFrame(()=>i?.focus()))}function o(){n&&(n.classList.remove(`is-open`),n.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``)}t?.addEventListener(`click`,a),t?.addEventListener(`keydown`,e=>{let t=e;(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),a())}),r?.addEventListener(`click`,o),i?.addEventListener(`click`,o),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n?.classList.contains(`is-open`)&&o()})}