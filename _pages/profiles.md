---
layout: profiles
permalink: /people/
title: people
description:
nav: true
nav_order: 2
_styles: |
  .people-directory {
    --people-name-color: #b22222;
  }

  html[data-theme="dark"] .people-directory {
    --people-name-color: #ff6b6b;
  }

  .people-directory {
    text-align: center;
  }

  .people-alumni-link {
    margin-top: 3rem;
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  .people-section {
    margin-top: 2.6rem;
  }

  .people-section-title {
    margin-bottom: 1.4rem;
    text-transform: lowercase;
  }

  .people-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.3rem 2.8rem;
    align-items: flex-start;
  }

  .people-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
  }

  .people-card-link {
    color: inherit;
    text-decoration: none;
  }

  .people-card figure {
    margin: 0 0 0.7rem 0;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    border-radius: 50%;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.22);
    overflow: hidden;
  }

  .people-card-image {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    border: 0;
    background: transparent;
    display: block;
  }

  .people-card-link:hover figure {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.3);
  }

  .people-card-name {
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.35;
    color: var(--people-name-color);
  }

  .people-card-role {
    margin-top: 0.35rem;
    color: var(--global-text-color-light);
    line-height: 1.4;
  }

  .people-card-tenure {
    color: var(--global-text-color-light);
    line-height: 1.35;
  }

  @media (min-width: 992px) {
    .people-grid {
      justify-content: center;
    }
  }
---
