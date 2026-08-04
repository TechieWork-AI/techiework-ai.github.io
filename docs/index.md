---
layout: home
author_profile: false
title: Techie.Work
header:
  overlay_color: "#0f172a"
  overlay_filter: "0.4"
  overlay_image: /assets/images/banner.jpg
---

<div class="site-hero">
  <div class="site-hero__content">
    <p class="eyebrow">AI • .NET • Azure • Business Central</p>
    <h1>Build smart software that scales.</h1>
    <p>We help founders and teams turn ideas into reliable, AI-powered products with cloud-native architecture and practical delivery.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="/blog/">Explore the blog</a>
      <a class="btn btn-secondary" href="https://github.com/techiework-ai" target="_blank" rel="noopener">View GitHub</a>
    </div>
  </div>
  <div class="site-hero__panel">
    <h3>What we deliver</h3>
    <ul>
      <li>AI assistants and automation</li>
      <li>Modern .NET and Azure solutions</li>
      <li>Business Central integrations</li>
      <li>Cloud migration and optimization</li>
    </ul>
  </div>
</div>

<div class="section-heading">
  <h2>Services</h2>
  <p>Practical solutions for modern product teams.</p>
</div>

<div class="card-grid">
  <article class="info-card">
    <h3>AI Strategy</h3>
    <p>Shape useful AI experiences with clear goals, solid prompts, and dependable workflows.</p>
  </article>
  <article class="info-card">
    <h3>.NET Engineering</h3>
    <p>Build reliable systems with .NET, cloud services, and scalable architecture.</p>
  </article>
  <article class="info-card">
    <h3>Business Central</h3>
    <p>Connect your operations with integrations, automation, and modern data flows.</p>
  </article>
  <article class="info-card">
    <h3>Azure & Cloud</h3>
    <p>Deploy resilient and cost-aware solutions using the Microsoft cloud platform.</p>
  </article>
  <article class="info-card">
    <h3>Python & Data</h3>
    <p>Automate repetitive work and support analytics or AI experiments with Python.</p>
  </article>
  <article class="info-card">
    <h3>Product Delivery</h3>
    <p>Move from concept to launch with actionable planning, implementation, and support.</p>
  </article>
</div>

<div class="section-heading">
  <h2>Featured projects</h2>
  <p>Examples of digital products and technology work delivered with focus and clarity.</p>
</div>

<div class="card-grid">
  <article class="info-card">
    <h3>AI Copilot Experience</h3>
    <p>Conversational workflows that improve productivity and reduce manual effort.</p>
  </article>
  <article class="info-card">
    <h3>Cloud Modernization</h3>
    <p>Migration and optimization work that improves performance, resilience, and cost control.</p>
  </article>
  <article class="info-card">
    <h3>Business App Integration</h3>
    <p>Custom integrations that connect business systems and streamline daily work.</p>
  </article>
</div>

<div class="section-heading">
  <h2>Latest from the blog</h2>
  <p>Recent posts on AI, software engineering, and cloud delivery.</p>
</div>

<div class="card-grid">
  {% for post in paginator.posts %}
    <article class="info-card">
      <p class="post-card__meta">
        {{ post.date | date: "%b %d, %Y" }}
      </p>
      <h3>
        <a href="{{ post.url | relative_url }}">
          {{ post.title }}
        </a>
      </h3>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </article>
  {% endfor %}
</div>


<div class="cta-banner">
  <h2>Ready to build something impactful?</h2>
  <p>From MVPs to enterprise-ready systems, the focus stays on clarity, speed, and measurable results.</p>
  <a class="btn btn-primary" href="/blog/">Read the latest posts</a>
</div>
