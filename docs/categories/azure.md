---
layout: default
title: Azure
permalink: /categories/azure/
---

<h1>Azure</h1>
<p>Cloud architecture, deployment, and reliability guidance for modern solutions.</p>

<div class="card-grid">
  {% for post in site.posts %}
    {% if post.categories contains 'Azure' %}
      <article class="info-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>
