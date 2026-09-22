---
layout: page
permalink: /datasets/matsense/
title: "MatSense: A Multimodal Dataset and Benchmark for Material Classification"
description: Multimodal material understanding with RGB, NIR, Polar, and Thermal imagery.
nav: false
_styles: |
  .matsense-hero {
    margin: 2.2rem 0 3.25rem;
    overflow: hidden;
    border: 1px solid rgba(128, 128, 128, 0.24);
    border-radius: 0.7rem;
    background: #19201e;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  }

  .matsense-hero img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 7;
    object-fit: cover;
  }

  .matsense-intro {
    display: grid;
    grid-template-columns: minmax(0, 1.55fr) minmax(255px, 0.8fr);
    gap: 3rem;
    align-items: start;
  }

  .matsense-section {
    margin-top: 3.9rem;
  }

  .matsense-section-title {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.15;
  }

  .matsense-copy {
    max-width: 48rem;
    color: var(--global-text-color);
    font-size: 1.08rem;
    line-height: 1.72;
  }

  .matsense-facts {
    display: grid;
    gap: 0.75rem;
  }

  .matsense-fact {
    padding: 1rem 1.1rem;
    border-left: 3px solid var(--global-theme-color);
    background: rgba(128, 128, 128, 0.08);
  }

  .matsense-fact-label {
    display: block;
    margin-bottom: 0.18rem;
    color: var(--global-text-color-light);
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .matsense-fact-value {
    font-size: 1rem;
    line-height: 1.35;
  }

  .matsense-modality-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .matsense-modality {
    min-height: 148px;
    padding: 1.15rem;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 0.6rem;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }

  .matsense-modality-mark {
    display: block;
    width: 2.4rem;
    height: 0.35rem;
    margin-bottom: 1.2rem;
    border-radius: 999px;
  }

  .matsense-modality:nth-child(1) .matsense-modality-mark { background: #c75c4f; }
  .matsense-modality:nth-child(2) .matsense-modality-mark { background: #637ea5; }
  .matsense-modality:nth-child(3) .matsense-modality-mark { background: #719768; }
  .matsense-modality:nth-child(4) .matsense-modality-mark { background: #d8953b; }

  .matsense-modality h3 {
    margin: 0 0 0.35rem;
    color: #111111;
    font-size: 1.05rem;
    font-weight: 500;
  }

  .matsense-modality p {
    margin: 0;
    color: #5f6368;
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .matsense-download-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.75rem;
    border: 1px solid rgba(128, 128, 128, 0.24);
    border-radius: 0.7rem;
    background: linear-gradient(125deg, rgba(202, 53, 43, 0.08), rgba(255, 255, 255, 0.95) 46%);
  }

  .matsense-download-panel h3 {
    margin: 0 0 0.35rem;
    color: #111111;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .matsense-download-panel p {
    margin: 0;
    color: #5f6368;
  }

  .matsense-download-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: flex-end;
  }

  .matsense-download-button {
    display: inline-flex;
    align-items: center;
    min-height: 2.55rem;
    padding: 0.55rem 0.9rem;
    border: 1px solid rgba(128, 128, 128, 0.28);
    border-radius: 0.3rem;
    color: #6b6b6b;
    background: rgba(255, 255, 255, 0.76);
    font-size: 0.88rem;
    white-space: nowrap;
  }

  .matsense-download-button[aria-disabled="true"] {
    cursor: default;
  }

  .matsense-citation {
    overflow-x: auto;
    padding: 1rem 1.15rem;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 0.5rem;
    background: rgba(128, 128, 128, 0.07);
  }

  .matsense-citation code {
    color: var(--global-text-color);
    font-size: 0.88rem;
  }

  @media (max-width: 767.98px) {
    .matsense-hero {
      margin: 1.5rem 0 2.5rem;
    }

    .matsense-hero img {
      aspect-ratio: 16 / 10;
    }

    .matsense-intro {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .matsense-section {
      margin-top: 3rem;
    }

    .matsense-section-title {
      font-size: 1.75rem;
    }

    .matsense-modality-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .matsense-download-panel {
      align-items: flex-start;
      flex-direction: column;
      gap: 1.25rem;
    }

    .matsense-download-actions {
      justify-content: flex-start;
    }
  }
---

<figure class="matsense-hero">
  <img
    src="{{ '/assets/img/datasets/matsense-hero.png' | relative_url }}"
    alt="Illustration of material samples viewed through multiple sensing modalities"
  >
</figure>

<div class="matsense-intro">
  <section>
    <h2 class="matsense-section-title">Overview</h2>
    <p class="matsense-copy">
      MatSense is a multimodal dataset and benchmark for material classification. It brings together RGB, NIR, Polar,
      and Thermal imagery to support research on visual material understanding under complementary sensing conditions.
    </p>
    <p class="matsense-copy">
      The benchmark is designed to make it easier to study how different sensing modalities contribute to robust material
      recognition, while providing a clear foundation for comparable future methods and evaluations.
    </p>
  </section>

  <aside class="matsense-facts" aria-label="MatSense at a glance">
    <div class="matsense-fact">
      <span class="matsense-fact-label">Task</span>
      <span class="matsense-fact-value">Material classification</span>
    </div>
    <div class="matsense-fact">
      <span class="matsense-fact-label">Sensing modalities</span>
      <span class="matsense-fact-value">RGB, NIR, Polar, Thermal</span>
    </div>
    <div class="matsense-fact">
      <span class="matsense-fact-label">Status</span>
      <span class="matsense-fact-value">Dataset release in preparation</span>
    </div>
  </aside>
</div>

<section class="matsense-section">
  <h2 class="matsense-section-title">Multimodal Capture</h2>
  <div class="matsense-modality-grid">
    <article class="matsense-modality">
      <span class="matsense-modality-mark" aria-hidden="true"></span>
      <h3>RGB</h3>
      <p>Visible-spectrum color and appearance information.</p>
    </article>
    <article class="matsense-modality">
      <span class="matsense-modality-mark" aria-hidden="true"></span>
      <h3>NIR</h3>
      <p>Near-infrared sensing for complementary material cues.</p>
    </article>
    <article class="matsense-modality">
      <span class="matsense-modality-mark" aria-hidden="true"></span>
      <h3>Polar</h3>
      <p>Polarimetric information that captures surface behavior.</p>
    </article>
    <article class="matsense-modality">
      <span class="matsense-modality-mark" aria-hidden="true"></span>
      <h3>Thermal</h3>
      <p>Thermal imagery for temperature-related visual structure.</p>
    </article>
  </div>
</section>

<section class="matsense-section" id="downloads">
  <h2 class="matsense-section-title">Downloads</h2>
  <div class="matsense-download-panel">
    <div>
      <h3>MatSense release package</h3>
      <p>Dataset files, annotations, benchmark protocol, and baseline resources will be made available here.</p>
    </div>
    <div class="matsense-download-actions" aria-label="MatSense downloads">
      <span class="matsense-download-button" aria-disabled="true">Dataset download</span>
      <span class="matsense-download-button" aria-disabled="true">Annotations</span>
      <span class="matsense-download-button" aria-disabled="true">Benchmark code</span>
    </div>
  </div>
</section>

<section class="matsense-section">
  <h2 class="matsense-section-title">Citation</h2>
  <p class="matsense-copy">Citation details will be published together with the official MatSense release.</p>
  <pre class="matsense-citation"><code>@misc{matsense,
  title = {MatSense: A Multimodal Dataset and Benchmark for Material Classification},
  note = {Dataset release in preparation}
}</code></pre>
</section>
