---
layout: home
title: Blog
permalink: /blog/
author_profile: false
---

<div class="blog-intro">
  <h1>Engineering notes and AI insights</h1>
  <p>Thoughtful articles on AI, software architecture, cloud delivery, and practical product work.</p>
</div>

<div class="card-grid">
  <article class="info-card">
    <h3>AI & automation</h3>
    <p>Explore prompts, copilots, and real-world implementation patterns.</p>
  </article>
  <article class="info-card">
    <h3>Cloud & architecture</h3>
    <p>Learn how to design robust systems with Azure and modern engineering practices.</p>
  </article>
  <article class="info-card">
    <h3>Business technology</h3>
    <p>See how .NET and Business Central can support practical business outcomes.</p>
  </article>
</div>

<div class="section-heading">
  <h2>Recent posts</h2>
</div>

<div class="card-grid">
  {% for post in site.posts %}
    <article class="info-card">
      <p class="post-card__meta">{{ post.date | date: "%b %d, %Y" }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
    </article>
  {% endfor %}
</div>
