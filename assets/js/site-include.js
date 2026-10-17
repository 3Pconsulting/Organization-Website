(function(){
  function inject(id, url, after){
    var el = document.getElementById(id);
    if(!el) return;
    fetch(url).then(function(r){ return r.text(); }).then(function(html){
      el.outerHTML = html;
      if(after) after();
    }).catch(function(){});
  }

  inject('site-header-mount', '/partials/header.html?v=web001-uniform-brand-darkgold-20261016', function(){
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('siteMenu');
    if(toggle && menu){
      toggle.addEventListener('click', function(){
        var open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function(e){
        if(!menu.contains(e.target) && !toggle.contains(e.target)){
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
    var here = location.pathname.replace(/\/index\.html$/, '/');
    document.querySelectorAll('header.site-header a[href]').forEach(function(a){
      var href = a.getAttribute('href').replace(/\/index\.html$/, '/');
      if(href === here) a.classList.add('active');
    });
  });

  inject('site-footer-mount', '/partials/footer.html?v=web001-profit-footer-20261016');
})();
