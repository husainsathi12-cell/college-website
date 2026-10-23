/* ===== SITE CONFIG: change the homepage banner by editing ONLY heroBannerUrl ===== */
const SITE_CONFIG = {
  heroBannerUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=70",
  heroFallbackUrl: "images/hero.svg" /* local image used if the URL above fails */
};
(function(){
var $=function(s,e){return(e||document).querySelector(s)},$$=function(s,e){return Array.prototype.slice.call((e||document).querySelectorAll(s))};
var y=$('#yr');if(y)y.textContent=new Date().getFullYear();
var tb=$('.th'),rt=document.documentElement;
if(tb){tb.setAttribute('aria-pressed',rt.dataset.theme==='dark');tb.addEventListener('click',function(){var t=rt.dataset.theme==='dark'?'light':'dark';rt.dataset.theme=t;tb.setAttribute('aria-pressed',t==='dark');try{localStorage.setItem('theme',t)}catch(e){}})}
var mb=$('.mb'),nav=$('#nav');
if(mb&&nav){var set=function(o){nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',o)};
mb.addEventListener('click',function(){set(!nav.classList.contains('open'))});
nav.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)})}
var hero=$('#hero');
if(hero){var hu=SITE_CONFIG.heroBannerUrl,hi=new Image(),put=function(u){hero.style.backgroundImage='url("'+u+'")'};
hi.onload=function(){put(hu)};hi.onerror=function(){put(SITE_CONFIG.heroFallbackUrl)};hi.src=hu;
var hd=$('.hd'),sc=function(){hd.classList.toggle('sc',window.scrollY>40)};sc();window.addEventListener('scroll',sc,{passive:true})}
var cat='all',q='',items=$$('[data-cat]');
function apply(){var n=0;items.forEach(function(i){var ok=(cat==='all'||i.dataset.cat===cat)&&i.textContent.toLowerCase().indexOf(q)>-1;i.hidden=!ok;if(ok)n++});var none=$('#none');if(none)none.hidden=n>0}
$$('[data-f]').forEach(function(b){b.addEventListener('click',function(){cat=b.dataset.f;$$('[data-f]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});apply()})});
var s=$('#q');if(s)s.addEventListener('input',function(){q=s.value.trim().toLowerCase();apply()});
var lb=$('#lb');if(lb&&lb.showModal){var im=$('img',lb),cur=0,vis=function(){return $$('.gi').filter(function(i){return!i.hidden})};
var show=function(n){var v=vis();cur=(n+v.length)%v.length;var a=$('img',v[cur]);im.src=v[cur].dataset.full;im.alt=a.alt};
$$('.gi').forEach(function(g){g.addEventListener('click',function(){show(vis().indexOf(g));lb.showModal()})});
lb.addEventListener('click',function(e){var a=e.target.dataset.a;if(a==='x'||e.target===lb)lb.close();if(a==='p')show(cur-1);if(a==='n')show(cur+1)});
lb.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)})}
})();

/* Animated homepage stats and real photographic imagery across content sections. */
(function(){
  var stats=document.querySelectorAll('.stats .grid b');
  if(stats.length && 'IntersectionObserver' in window){
    stats.forEach(function(el){
      var original=el.textContent.trim(),match=original.match(/^([\\d,]+)(.*)$/);
      if(!match)return;
      var target=parseInt(match[1].replace(/,/g,''),10),suffix=match[2]||'';
      if(!Number.isFinite(target))return;
      el.textContent='0'+suffix;
      var observer=new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(!entry.isIntersecting)return;
          var start=null,duration=1400;
          function tick(now){if(!start)start=now;var p=Math.min((now-start)/duration,1),eased=1-Math.pow(1-p,3);el.textContent=Math.round(target*eased).toLocaleString('en-US')+suffix;if(p<1)requestAnimationFrame(tick);else el.textContent=original;}
          requestAnimationFrame(tick);observer.unobserve(el);
        });
      },{threshold:.35});observer.observe(el);
    });
  }
  var photos=[
    {keys:/librar|book|reading/i,url:'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80',alt:'College library and books'},
    {keys:/computer|technology|coding|digital|lab|science|physics|chemistry/i,url:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',alt:'Students learning in a laboratory'},
    {keys:/class|lecture|faculty|teacher|academic|course|program|student|education/i,url:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',alt:'University students on campus'},
    {keys:/sport|cricket|basketball|fitness|ground/i,url:'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80',alt:'College sports and activities'},
    {keys:/event|fest|culture|orientation|notice|announcement/i,url:'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80',alt:'Students at a campus event'},
    {keys:/contact|map|location|campus|building|environment|vision|mission|about|philosophy/i,url:'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',alt:'College campus building'}
  ];
  function addImage(container,context,sectionMode){
    if(container.querySelector(':scope > .card-visual, :scope > img'))return;
    var chosen=photos.find(function(p){return p.keys.test(context)});
    if(!chosen)chosen=photos[5];
    var img=document.createElement('img');img.src=chosen.url;img.alt=chosen.alt;img.loading='lazy';img.className='card-visual';
    if(sectionMode){var heading=container.querySelector('h2,h3');if(heading&&heading.nextSibling)heading.parentNode.insertBefore(img,heading.nextSibling);else container.insertBefore(img,container.firstChild);}
    else container.insertBefore(img,container.firstChild);
  }
  document.querySelectorAll('.card').forEach(function(card){
    if(card.querySelector('img'))return;
    addImage(card,card.textContent,false);
  });
  document.querySelectorAll('main .sec').forEach(function(section){
    if(section.querySelector('img, .photos, .map, form, .gi'))return;
    var heading=section.querySelector('h2,h3');
    if(!heading)return;
    var context=heading.textContent+' '+section.textContent;
    var target=section.querySelector('.c')||section;
    addImage(target,context,true);
  });
})();