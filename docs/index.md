---
layout: default
title: Home
---

<div class="hero">

# Techie.Work

### AI • .NET • Business Central • Cloud • Automation

Helping businesses build modern software solutions.

</div>

<div class="page-grid">

<div class="content">

# Latest Articles

{% for post in site.posts limit:10 %}

<div class="post-card">

## [{{ post.title }}]({{ post.url }})

📅 {{ post.date | date: "%d %b %Y" }}

{{ post.excerpt }}

<a class="readmore" href="{{ post.url }}">Read More →</a>

</div>

{% endfor %}

</div>

{% include sidebar.html %}

</div>