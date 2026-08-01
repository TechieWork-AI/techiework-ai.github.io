---
layout: default
title: Posts
---

# Posts

{% raw %}
{% for post in site.posts %}
- <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
{% endraw %}
