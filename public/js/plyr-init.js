(function(){
  function initPlyr(){
    if (typeof Plyr === 'undefined') return;
    var videos = Array.prototype.slice.call(document.querySelectorAll('video.plyr'));
    videos.forEach(function(v){
      if (v.dataset.plyrMounted === 'true') return;
      try {
        new Plyr(v);
        v.dataset.plyrMounted = 'true';
      } catch (e) {
        // fail silently
      }
    });
  }

  // Initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlyr);
  } else {
    initPlyr();
  }

  // Re-run on Astro page navigations (view transitions)
  window.addEventListener('astro:page-load', initPlyr);
})();

