---
layout: page
permalink: /photos/
title: photos
description:
nav: true
nav_order: 6
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

<div id="labPhotosCarousel" class="carousel slide photos-carousel" data-ride="carousel" data-interval="3500">
  <ol class="carousel-indicators">
    <li data-target="#labPhotosCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#labPhotosCarousel" data-slide-to="1"></li>
    <li data-target="#labPhotosCarousel" data-slide-to="2"></li>
    <li data-target="#labPhotosCarousel" data-slide-to="3"></li>
  </ol>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="{{ '/assets/img/1.jpg' | relative_url }}" alt="Photo 1">
      <div class="carousel-caption">
        <h5>Research and exploration</h5>
        <p>A visual snapshot from the lab gallery.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="{{ '/assets/img/2.jpg' | relative_url }}" alt="Photo 2">
      <div class="carousel-caption">
        <h5>Creative experimentation</h5>
        <p>Moments that reflect the lab’s work and environment.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="{{ '/assets/img/3.jpg' | relative_url }}" alt="Photo 3">
      <div class="carousel-caption">
        <h5>Field and applied vision</h5>
        <p>Images can be updated here with your own project or event captions.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="{{ '/assets/img/4.jpg' | relative_url }}" alt="Photo 4">
      <div class="carousel-caption">
        <h5>Lab highlights</h5>
        <p>Each image appears one after another as a sliding gallery.</p>
      </div>
    </div>
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
