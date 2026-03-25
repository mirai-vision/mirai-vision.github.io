---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 3
_styles: |
  .publications-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .publications-view-toggle {
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }

  .publications-view-link {
    border: 0;
    background: transparent;
    color: var(--global-text-color-light);
    padding: 0;
    cursor: pointer;
  }

  .publications-view-link.active {
    color: var(--global-theme-color);
  }

  .bibsearch-form-input {
    width: min(100%, 360px);
  }
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">
  {% bibliography %}
</div>
