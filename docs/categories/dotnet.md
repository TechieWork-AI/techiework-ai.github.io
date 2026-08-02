---
layout: default
title: .NET
permalink: /categories/dotnet/
---

<h1>.NET</h1>
<p>Backend development, architecture, and modern application engineering.</p>

<div class="card-grid">
  {% for post in site.posts %}
    {% if post.categories contains 'dotnet' %}
      <article class="info-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endif %}
  {% endfor %}
</div>
