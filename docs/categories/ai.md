---
layout: default
title: AI
permalink: /categories/ai/
---

<h1>AI</h1>
<p>Articles focused on practical AI systems, prompt design, automation, and experimentation.</p>

<div class="card-grid">
  {% for post in site.posts %}
    {% if post.categories contains 'AI' %}
      <article class="info-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>
