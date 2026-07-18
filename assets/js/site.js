(function(){
  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  if(menu && nav){
    menu.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }
})();
