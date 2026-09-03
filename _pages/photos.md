---
layout: page
permalink: /photos/
title: photos
description:
nav: true
nav_order: 7
_styles: |
  .photos-carousel {
    max-width: 980px;
    margin: 0 auto;
  }

  .photos-carousel .carousel-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--global-divider-color);
    border-radius: 1rem;
    overflow: hidden;
  }

  .photos-carousel img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    display: block;
  }

  .photos-carousel .carousel-caption {
    position: static;
    padding: 1rem 1.25rem 1.25rem;
    color: var(--global-text-color);
    background: var(--global-bg-color);
    text-align: left;
  }

  .photos-carousel .carousel-caption h5 {
    margin-bottom: 0.35rem;
  }

  .photos-carousel .carousel-control-prev,
  .photos-carousel .carousel-control-next {
    width: 8%;
  }

  .photos-carousel .carousel-indicators {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 768px) {
    .photos-carousel img {
      height: 320px;
    }
  }
---

{% assign photo_files = site.static_files | where_exp: "file", "file.path contains '/assets/img/photos/'" | sort: "name" %}

<div id="labPhotosCarousel" class="carousel slide photos-carousel" data-ride="carousel" data-interval="3500">
  <ol class="carousel-indicators">
    {% for photo in photo_files %}
      <li
        data-target="#labPhotosCarousel"
        data-slide-to="{{ forloop.index0 }}"
        {% if forloop.first %}
          class="active"
        {% endif %}
      ></li>
    {% endfor %}
  </ol>

  <div class="carousel-inner">
    {% for photo in photo_files %}
      {% assign photo_meta = site.data.photos | where: "file", photo.name | first %}
      <div
        class="carousel-item{% if forloop.first %} active{% endif %}"
      >
        <img src="{{ photo.path | relative_url }}" alt="{{ photo_meta.title | default: photo.name }}">
        <div class="carousel-caption">
          <h5>{{ photo_meta.title | default: photo.name }}</h5>
          <p>{{ photo_meta.caption | default: "Add a caption for this image in _data/photos.yml." }}</p>
        </div>
      </div>
    {% endfor %}
  </div>

  <a class="carousel-control-prev" href="#labPhotosCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#labPhotosCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
