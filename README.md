# Arts Inquiry Portfolio · 艺术探究档案

EDUC X232 Assessment 1 — Part A: Funds of Knowledge Video and Provocation Mind Map.  
**Zichun Zhang** · Student ID 1913483.

Single-page ePortfolio built with Vite + TypeScript. Submit your ePortfolio URL in a Word document to the Canvas assessment portal.

## Run locally

```bash
npm install
npm run dev    # dev server with HMR
npm run build  # production build
npm run preview # preview production build
```

## Part A (1) — Embed your Funds of Knowledge video

In `src/main.ts`, find the **video** section (`id="video-window"`). Replace the placeholder `<div class="video-placeholder">...</div>` with one of:

- **YouTube:**  
  `<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Funds of Knowledge Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

- **Bilibili:**  
  `<iframe src="https://player.bilibili.com/player.html?bvid=YOUR_BV_ID" title="Funds of Knowledge Video" allowfullscreen></iframe>`

- **Local file:** Put the video in `public/` (e.g. `public/funds-of-knowledge.mp4`) and use:  
  `<video src="/funds-of-knowledge.mp4" controls></video>`

Video should be 3–4 minutes, with face-to-camera, in-text references to course theory/literature, and a balance of visual, aural and linguistic modes.

## Part A (2) — Add your Provocation Mind Map

In `src/main.ts`, find the **mind map** section (`id="mindmap-window"`). Replace the placeholder with your mind map:

- **Image:** Save your mind map as an image (e.g. PNG/JPG), put it in `public/` (e.g. `public/mindmap.png`), then use:  
  `<img src="/mindmap.png" alt="Provocation Mind Map for middle years arts inquiry" />`

- Or embed a link to Miro/Canva/etc. by wrapping an iframe or link in the same container.

## Project structure

- `index.html` — page shell, meta, fonts
- `src/main.ts` — all page content (Part A video + mind map)
- `src/style.css` — layout and styling

Edit `src/main.ts` to change wording, add Part B later, or update student info.
