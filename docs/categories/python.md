---
layout: default
title: Python
permalink: /categories/python/
---

<h1>Python</h1>
<p>Automation, scripting, and AI-oriented Python content.</p>

<div class="card-grid">
  {% for post in site.posts %}
    {% if post.categories contains 'Python' %}
      <article class="info-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>
