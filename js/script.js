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