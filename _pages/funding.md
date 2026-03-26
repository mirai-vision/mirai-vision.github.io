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
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.2rem;
    margin-top: 2rem;
    align-items: center;
  }

  .funding-logo-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .funding-logo-item {
    height: 145px;
    border: 1px solid rgba(128, 128, 128, 0.22);
    border-radius: 1rem;
    background: #ffffff !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .funding-logo-link:hover .funding-logo-item {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }

  .funding-logo-item img {
    max-width: 180px;
    height: 72px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .funding-commercialization-note {
    margin-top: 1.25rem;
  }

  .funding-section-title {
    margin-top: 4.5rem;
    margin-bottom: 0.85rem;
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: 300;
  }

  .funding-projects {
    margin-top: 1.75rem;
  }

  .funding-projects .card {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    min-height: 240px;
  }

  .funding-projects .funding-project-media {
    width: 48%;
    min-width: 48%;
  }

  .funding-projects .funding-project-media figure,
  .funding-projects .funding-project-media picture {
    width: 100%;
    height: 100%;
    margin: 0;
    display: block;
  }

  .funding-projects .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .funding-projects .card-body {
    width: 52%;
    padding: 1.6rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .funding-projects .card-title {
    font-size: 2rem;
    line-height: 1.1;
    margin-bottom: 0.85rem;
  }

  .funding-projects .card-text {
    margin-bottom: 0;
  }

  @media (max-width: 767.98px) {
    .funding-section-title {
      font-size: 2.8rem;
    }

    .funding-projects .card {
      flex-direction: column;
      min-height: unset;
    }

    .funding-projects .funding-project-media,
    .funding-projects .card-body {
      width: 100%;
      min-width: 100%;
    }

    .funding-projects .card-img-top {
      height: 220px;
    }
  }
---

Our lab is generously supported by various organizations whose contributions enable us to advance research in artificial intelligence, computer vision, computational photography, and allied areas.

<div class="funding-logos">
  <a class="funding-logo-link" href="https://www.anrfonline.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding/funding-anrf.png' | relative_url }}" alt="ANRF logo">
    </div>
  </a>
  <a class="funding-logo-link" href="https://www.iitism.ac.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding/funding-iitism.png' | relative_url }}" alt="IIT ISM logo">
    </div>
  </a>
  <a class="funding-logo-link" href="https://indiaai.gov.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding/funding-indiaai.png' | relative_url }}" alt="IndiaAI logo">
    </div>
  </a>
  <a class="funding-logo-link" href="https://texmin.in/" target="_blank" rel="noopener noreferrer">
    <div class="funding-logo-item">
      <img src="{{ '/assets/img/funding/funding-texmin.jpg' | relative_url }}" alt="TexMin logo">
    </div>
  </a>
</div>

<h2 class="funding-section-title">research translation opportunities</h2>

<div class="funding-commercialization-note">
  <p>
    We are actively looking to commercialize our research works. Following are the projects for which we are looking for
    funding for commercialization.
  </p>
</div>

<div class="funding-projects">
  <div class="row row-cols-1 row-cols-lg-2">
    {% for project in site.data.commercialization_projects %}
      <div class="col mb-4">
        <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer">
          <div class="card h-100 hoverable">
            {% if project.img %}
              <div class="funding-project-media">
                {%
                  include figure.liquid
                  loading="eager"
                  path=project.img
                  sizes="250px"
                  alt=project.title
                  class="card-img-top"
                %}
              </div>
            {% endif %}
            <div class="card-body">
              <h2 class="card-title">{{ project.title }}</h2>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

<!--
Put your logo files in:
assets/img/funding/

Add more logos by duplicating a block above with image markup like:

<div class="funding-logo-item">
  <img src="{{ '/assets/img/funding/funding-anrf.png' | relative_url }}" alt="ANRF logo">
</div>
-->
