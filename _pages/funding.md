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

  .funding-logo-item {
    min-height: 140px;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 1rem;
    background: #ffffff !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.35rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .funding-logo-item img {
    max-width: 100%;
    max-height: 96px;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }
---

Our lab is generously supported by various organizations whose contributions enable us to advance research in artificial intelligence, computer vision, computational photography, and allied areas.

<div class="funding-logos">
  <div class="funding-logo-item">
    <img src="{{ '/assets/img/funding-anrf.png' | relative_url }}" alt="ANRF logo">
  </div>
  <div class="funding-logo-item">
    <img src="{{ '/assets/img/funding-iitism.png' | relative_url }}" alt="IIT ISM logo">
  </div>
  <div class="funding-logo-item">
    <img src="{{ '/assets/img/funding-indiaai.png' | relative_url }}" alt="IndiaAI logo">
  </div>
  <div class="funding-logo-item">
    <img src="{{ '/assets/img/funding-texmin.jpg' | relative_url }}" alt="TexMin logo">
  </div>
</div>

<!--
Put your logo files in:
assets/img/

Add more logos by duplicating a block above with image markup like:

<div class="funding-logo-item">
  <img src="{{ '/assets/img/funding-anrf.png' | relative_url }}" alt="ANRF logo">
</div>
-->
