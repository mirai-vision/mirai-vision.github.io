---
layout: page
permalink: /funding/
title: funding
description:
nav: true
nav_order: 4
_styles: |
  .funding-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
    align-items: center;
  }

  .funding-logo-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .funding-logo-item {
    height: 180px;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 1rem;
    background: #ffffff !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.35rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .funding-logo-link:hover .funding-logo-item {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }

  .funding-logo-item img {
    max-width: 220px;
    height: 96px;
    width: auto;
    object-fit: contain;
    display: block;
  }
---

Our lab is generously supported by various organizations whose contributions enable us to advance research in artificial intelligence, computer vision, computational photography, and allied areas.

<div class="funding-logos">
  <a class="funding-logo-link" href="https://www.anrfonline.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding-anrf.png' | relative_url }}" alt="ANRF logo">
    </div>
  </a>
  <a class="funding-logo-link" href="https://www.iitism.ac.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding-iitism.png' | relative_url }}" alt="IIT ISM logo">
    </div>
  </a>
  <a class="funding-logo-link" href="https://indiaai.gov.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding-indiaai.png' | relative_url }}" alt="IndiaAI logo">
    </div>
  </a>
  <a class="funding-logo-link" href="https://texmin.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding-texmin.jpg' | relative_url }}" alt="TexMin logo">
    </div>
  </a>
</div>

<!--
Put your logo files in:
assets/img/

Add more logos by duplicating a block above with image markup like:

<div class="funding-logo-item">
  <img src="{{ '/assets/img/funding-anrf.png' | relative_url }}" alt="ANRF logo">
</div>
-->
