---
layout: page
permalink: /datasets/
title: datasets
description:
nav: true
nav_order: 4
_styles: |
  .dataset-section {
    margin-top: 4.25rem;
  }

  .dataset-section:first-of-type {
    margin-top: 2.5rem;
  }

  .dataset-section-title {
    margin-bottom: 1.35rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.1;
  }

  .dataset-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .dataset-card {
    aspect-ratio: 2.4 / 1;
    overflow: hidden;
    display: flex;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 0.45rem;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .dataset-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }

  .dataset-card-visual {
    position: relative;
    width: 30%;
    min-width: 30%;
    overflow: hidden;
  }

  .dataset-card-visual::before,
  .dataset-card-visual::after {
    content: '';
    position: absolute;
  }

  .material-visual {
    background:
      radial-gradient(circle at 28% 22%, rgba(255, 255, 255, 0.7) 0 4%, transparent 5%),
      radial-gradient(circle at 72% 68%, rgba(255, 255, 255, 0.55) 0 6%, transparent 7%),
      linear-gradient(145deg, #b8cf9f 0%, #557a55 48%, #203c32 100%);
  }

  .material-visual::before {
    inset: 12% -30% 8% 10%;
    background: repeating-linear-gradient(120deg, transparent 0 11px, rgba(232, 244, 204, 0.72) 12px 15px, transparent 16px 26px);
    transform: rotate(-12deg);
  }

  .material-visual::after {
    width: 82%;
    aspect-ratio: 1;
    right: -22%;
    bottom: -15%;
    border: 2px solid rgba(239, 247, 217, 0.75);
    border-radius: 48% 52% 43% 57%;
  }

  .pose-visual {
    background: linear-gradient(145deg, #f4c6aa 0%, #d46d5d 48%, #5b2c4f 100%);
  }

  .pose-visual::before {
    width: 55%;
    height: 68%;
    left: 26%;
    top: 12%;
    border: 3px solid rgba(255, 248, 232, 0.9);
    border-radius: 48% 48% 42% 42%;
    clip-path: polygon(39% 0, 61% 0, 72% 21%, 100% 39%, 91% 51%, 67% 39%, 62% 63%, 87% 100%, 67% 100%, 49% 73%, 25% 100%, 4% 100%, 35% 62%, 31% 40%, 9% 54%, 0 40%, 27% 21%);
  }

  .pose-visual::after {
    width: 9px;
    height: 9px;
    left: 48%;
    top: 13%;
    border-radius: 50%;
    background: #fff8e8;
    box-shadow: -20px 35px 0 -1px #fff8e8, 20px 35px 0 -1px #fff8e8, 0 68px 0 -1px #fff8e8, -31px 112px 0 -1px #fff8e8, 30px 112px 0 -1px #fff8e8;
  }

  .dataset-card-body {
    width: 70%;
    padding: 1.1rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dataset-card-title {
    margin: 0 0 0.55rem;
    color: #111111;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.15;
  }

  .dataset-card-text {
    margin: 0;
    color: #5f6368;
    font-size: 1rem;
  }

  @media (max-width: 767.98px) {
    .dataset-section-title {
      font-size: 1.8rem;
    }

    .dataset-grid {
      grid-template-columns: 1fr;
    }

    .dataset-card {
      aspect-ratio: auto;
      height: auto;
      flex-direction: column;
    }

    .dataset-card-visual,
    .dataset-card-body {
      width: 100%;
      min-width: 100%;
    }

    .dataset-card-visual {
      height: 220px;
    }
  }
---

<section class="dataset-section">
  <h2 class="dataset-section-title">Material Understanding</h2>
  <div class="dataset-grid">
    <article class="dataset-card">
      <div class="dataset-card-visual material-visual" aria-hidden="true"></div>
      <div class="dataset-card-body">
        <h3 class="dataset-card-title">Material Understanding Dataset</h3>
        <p class="dataset-card-text">
          A curated resource for recognizing and reasoning about material appearance in real-world visual scenes.
        </p>
      </div>
    </article>
  </div>
</section>

<section class="dataset-section">
  <h2 class="dataset-section-title">Pose Understanding</h2>
  <div class="dataset-grid">
    <article class="dataset-card">
      <div class="dataset-card-visual pose-visual" aria-hidden="true"></div>
      <div class="dataset-card-body">
        <h3 class="dataset-card-title">Pose Understanding Dataset</h3>
        <p class="dataset-card-text">
          A benchmark for fine-grained human-pose understanding, designed for robust analysis across visual contexts.
        </p>
      </div>
    </article>
  </div>
</section>
