// Basic client-side search using Lunr and the prebuilt `store` variable (lunr-store.js)
document.addEventListener('DOMContentLoaded', function(){
  var input = document.getElementById('search-box');
  var results = document.getElementById('search-results');
  if(!input || !results) return;

  function renderResults(matches){
    if(!matches || matches.length===0){ results.innerHTML = '<p class="search-none">No results</p>'; return; }
    var html = '<ul>';
    matches.forEach(function(m){
      html += '<li><a href="'+m.url+'">'+m.title+'</a><p class="excerpt">'+m.excerpt+'</p></li>';
    });
    html += '</ul>';
    results.innerHTML = html;
  }

  input.addEventListener('input', function(e){
    var q = this.value.trim();
    if(!q){ results.innerHTML = ''; return; }
    try{
      if(typeof lunr === 'undefined' || typeof store === 'undefined'){
        results.innerHTML = '<p class="search-error">Search not available.</p>';
        return;
      }
      var idx = lunr(function(){
        this.ref('url');
        this.field('title');
        this.field('excerpt');
        var that = this;
        store.forEach(function(doc){ that.add(doc); });
      });
      var hits = idx.search(q);
      var mapped = hits.map(function(h){
        var doc = store.find(function(s){ return s.url === h.ref; });
        return doc || {title:h.ref, url:h.ref, excerpt:''};
      });
      renderResults(mapped);
    }catch(err){ console.error(err); results.innerHTML = '<p class="search-error">Search error</p>'; }
  });
});
