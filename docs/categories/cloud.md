---
layout: default
title: Cloud
permalink: /categories/cloud/
---

<h1>Cloud</h1>
<p>Infrastructure, migration, and modern operations content for distributed systems.</p>

<div class="card-grid">
  {% for post in site.posts %}
    {% if post.categories contains 'Cloud' %}
      <article class="info-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>
