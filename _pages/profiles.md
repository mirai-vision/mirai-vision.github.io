---
layout: profiles
permalink: /people/
title: people
description:
nav: true
nav_order: 2
alumni_link: /people/alumni/
_styles: |
  .people-directory {
    text-align: center;
  }

  .people-alumni-link {
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .people-section {
    margin-top: 2rem;
  }

  .people-section-title {
    margin-bottom: 1.4rem;
    text-transform: lowercase;
  }

  .people-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 1.1rem;
    align-items: start;
  }

  .people-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .people-card figure {
    margin: 0 0 0.7rem 0;
  }

  .people-card-image {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
  }

  .people-card-name {
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 1.35;
    color: var(--global-theme-color);
  }

  .people-card-role {
    margin-top: 0.35rem;
    color: var(--global-text-color-light);
    line-height: 1.4;
  }

  @media (min-width: 992px) {
    .people-grid {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
directory_sections:
  - title: faculty
    members:
      - name: Sudhakar Kumawat
        role: Assistant Professor
        image: sudhakar_pic.jpg
      - name: Manisha Verma
        role: Assistant Professor
        image: manisha_pic.jpg
  - title: phd
    members:
      - name: Research Member
        role: Research Scholar
        image: prof_pic.jpg
      - name: Research Member
        role: PhD Scholar
        image: prof_pic_color.png
  - title: masters
    members:
      - name: Master Student
        role: Masters Student
        image: prof_pic.jpg
      - name: Master Student
        role: Masters Student
        image: prof_pic_color.png
---
