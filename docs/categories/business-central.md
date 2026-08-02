---
layout: default
title: Business Central
permalink: /categories/business-central/
---

<h1>Business Central</h1>
<p>Integration and extension content for business operations and ERP workflows.</p>

<div class="card-grid">
  {% for post in site.posts %}
    {% if post.categories contains 'Business Central' %}
      <article class="info-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>
