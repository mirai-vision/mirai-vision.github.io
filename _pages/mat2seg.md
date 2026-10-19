---
layout: page
permalink: /datasets/mat2seg/
title: "Mat2Seg: An RGB-NIR Dataset and Benchmark for Material Segmentation of Household Objects"
description: RGB-NIR material segmentation for household objects.
nav: false
_styles: |
  .mat2seg-hero {
    margin: 2.2rem 0 3.25rem;
    overflow: hidden;
    border: 1px solid rgba(128, 128, 128, 0.24);
    border-radius: 0.7rem;
    background: #0d1e2c;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  }

  .mat2seg-hero img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .mat2seg-intro {
    display: grid;
    grid-template-columns: minmax(0, 1.55fr) minmax(255px, 0.8fr);
    gap: 3rem;
    align-items: start;
  }

  .mat2seg-section {
    margin-top: 3.9rem;
  }

  .mat2seg-section-title {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.15;
  }

  .mat2seg-copy {
    max-width: 48rem;
    color: var(--global-text-color);
    font-size: 1.08rem;
    line-height: 1.72;
  }

  .mat2seg-facts {
    display: grid;
    gap: 0.75rem;
  }

  .mat2seg-fact {
    padding: 1rem 1.1rem;
    border-left: 3px solid #148ca6;
    background: rgba(20, 140, 166, 0.08);
  }

  .mat2seg-fact-label {
    display: block;
    margin-bottom: 0.18rem;
    color: var(--global-text-color-light);
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .mat2seg-fact-value {
    font-size: 1rem;
    line-height: 1.35;
  }

  .mat2seg-modality-grid,
  .mat2seg-benchmark-grid {
    display: grid;
    gap: 1rem;
  }

  .mat2seg-modality-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mat2seg-benchmark-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .mat2seg-modality,
  .mat2seg-benchmark-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 0.6rem;
    background: var(--global-card-bg-color);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }

  .mat2seg-modality {
    min-height: 164px;
    padding: 1.2rem;
  }

  .mat2seg-modality-mark {
    display: block;
    width: 2.5rem;
    height: 0.35rem;
    margin-bottom: 1.15rem;
    border-radius: 999px;
  }

  .mat2seg-modality:nth-child(1) .mat2seg-modality-mark { background: #c87948; }
  .mat2seg-modality:nth-child(2) .mat2seg-modality-mark { background: #168ca8; }

  .mat2seg-modality h3,
  .mat2seg-benchmark-card h3 {
    margin: 0 0 0.4rem;
    color: var(--global-text-color);
    font-size: 1.05rem;
    font-weight: 500;
  }

  .mat2seg-modality p,
  .mat2seg-benchmark-card p {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .mat2seg-benchmark-card {
    padding: 1.2rem;
  }

  .mat2seg-benchmark-number {
    display: block;
    margin-bottom: 1.1rem;
    color: #148ca6;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .mat2seg-release-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.75rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.7rem;
    background: linear-gradient(125deg, rgba(20, 140, 166, 0.14), var(--global-card-bg-color) 48%);
  }

  html[data-theme="dark"] .mat2seg-release-panel {
    background: linear-gradient(125deg, rgba(34, 176, 202, 0.2), var(--global-card-bg-color) 56%);
  }

  .mat2seg-release-panel h3 {
    margin: 0 0 0.35rem;
    color: var(--global-text-color);
    font-size: 1.2rem;
    font-weight: 500;
  }

  .mat2seg-release-panel p {
    margin: 0;
    color: var(--global-text-color-light);
  }

  .mat2seg-download-button {
    display: inline-flex;
    align-items: center;
    min-height: 2.55rem;
    padding: 0.55rem 0.9rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.3rem;
    color: var(--global-text-color);
    background: var(--global-card-bg-color);
    font-size: 0.88rem;
    text-decoration: none !important;
    white-space: nowrap;
  }

  .mat2seg-download-button:hover,
  .mat2seg-download-button:focus {
    color: var(--global-text-color);
    text-decoration: none !important;
  }

  .mat2seg-download-button[aria-disabled="true"] {
    cursor: default;
  }

  .mat2seg-citation {
    overflow-x: auto;
    padding: 1rem 1.15rem;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 0.5rem;
    background: rgba(128, 128, 128, 0.07);
  }

  .mat2seg-citation code {
    color: var(--global-text-color);
    font-size: 0.88rem;
  }

  @media (max-width: 767.98px) {
    .mat2seg-hero {
      margin: 1.5rem 0 2.5rem;
    }

    .mat2seg-hero img {
      aspect-ratio: 16 / 10;
    }

    .mat2seg-intro,
    .mat2seg-benchmark-grid {
      grid-template-columns: 1fr;
    }

    .mat2seg-intro {
      gap: 2rem;
    }

    .mat2seg-section {
      margin-top: 3rem;
    }

    .mat2seg-section-title {
      font-size: 1.75rem;
    }

    .mat2seg-release-panel {
      align-items: flex-start;
      flex-direction: column;
      gap: 1.25rem;
    }
  }
---

<figure class="mat2seg-hero">
  <img
    src="{{ '/assets/img/datasets/mat2seg-hero-v1.png' | relative_url }}"
    alt="Household objects shown in paired RGB and near-infrared views"
  >
</figure>

<div class="mat2seg-intro">
  <section>
    <h2 class="mat2seg-section-title">Overview</h2>
    <p class="mat2seg-copy">
      Mat2Seg is an RGB-NIR dataset and benchmark for material segmentation of household objects. It combines visible
      and near-infrared imagery to study how complementary sensing can improve the delineation of material regions.
    </p>
    <p class="mat2seg-copy">
      The benchmark focuses on material boundaries within everyday object scenes, supporting the evaluation of methods
      that reason about materials at the pixel level rather than assigning a single label to an entire image.
    </p>
  </section>

  <aside class="mat2seg-facts" aria-label="Mat2Seg at a glance">
    <div class="mat2seg-fact">
      <span class="mat2seg-fact-label">Task</span>
      <span class="mat2seg-fact-value">Material segmentation</span>
    </div>
    <div class="mat2seg-fact">
      <span class="mat2seg-fact-label">Sensing modalities</span>
      <span class="mat2seg-fact-value">RGB and NIR</span>
    </div>
    <div class="mat2seg-fact">
      <span class="mat2seg-fact-label">Focus</span>
      <span class="mat2seg-fact-value">Household objects and material boundaries</span>
    </div>
  </aside>
</div>

<section class="mat2seg-section">
  <h2 class="mat2seg-section-title">Paired RGB-NIR Capture</h2>
  <div class="mat2seg-modality-grid">
    <article class="mat2seg-modality">
      <span class="mat2seg-modality-mark" aria-hidden="true"></span>
      <h3>RGB</h3>
      <p>Visible-spectrum color, texture, and appearance cues from everyday object scenes.</p>
    </article>
    <article class="mat2seg-modality">
      <span class="mat2seg-modality-mark" aria-hidden="true"></span>
      <h3>NIR</h3>
      <p>Near-infrared observations that offer complementary signatures for distinguishing material regions.</p>
    </article>
  </div>
</section>

<section class="mat2seg-section">
  <h2 class="mat2seg-section-title">Benchmark</h2>
  <div class="mat2seg-benchmark-grid">
    <article class="mat2seg-benchmark-card">
      <span class="mat2seg-benchmark-number">01</span>
      <h3>Material regions</h3>
      <p>Evaluate pixel-level delineation of different materials within a shared household scene.</p>
    </article>
    <article class="mat2seg-benchmark-card">
      <span class="mat2seg-benchmark-number">02</span>
      <h3>Multimodal comparison</h3>
      <p>Compare RGB-only, NIR-only, and fused RGB-NIR approaches under a common segmentation task.</p>
    </article>
    <article class="mat2seg-benchmark-card">
      <span class="mat2seg-benchmark-number">03</span>
      <h3>Household contexts</h3>
      <p>Study material boundaries across familiar objects, surfaces, and mixed-material arrangements.</p>
    </article>
  </div>
</section>

<section class="mat2seg-section" id="downloads">
  <h2 class="mat2seg-section-title">Release</h2>
  <div class="mat2seg-release-panel">
    <div>
      <h3>Mat2Seg release package</h3>
      <p>Access the Mat2Seg dataset, annotations, and benchmark materials.</p>
    </div>
    <div aria-label="Mat2Seg downloads">
      {% if site.mat2seg_download.google_form_url %}
        <a
          class="mat2seg-download-button"
          href="{{ site.mat2seg_download.google_form_url | escape }}"
          target="_blank"
          rel="noopener noreferrer"
        >Download dataset</a>
      {% else %}
        <span class="mat2seg-download-button" aria-disabled="true">Download dataset</span>
      {% endif %}
    </div>
  </div>
</section>

<section class="mat2seg-section">
  <h2 class="mat2seg-section-title">Citation</h2>
  <p class="mat2seg-copy">Citation details will be published with the official Mat2Seg release.</p>
  <pre class="mat2seg-citation"><code>@misc{mat2seg,
  title = {Mat2Seg: An RGB-NIR Dataset and Benchmark for Material Segmentation of Household Objects},
  note = {Dataset release in preparation}
}</code></pre>
</section>
