(function(){
var d=document,ar=d.documentElement.lang==='ar';if(location.hash==='#shot')d.documentElement.classList.remove('js');
var b=d.querySelector('.burger'),n=d.getElementById('nav');
if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
function chips(sel,attr,items,attr2){
  var cs=d.querySelectorAll(sel);if(!cs.length)return;
  cs.forEach(function(c){c.addEventListener('click',function(){
    cs.forEach(function(x){x.setAttribute('aria-pressed',x===c)});
    var f=c.getAttribute(attr),shown=0;
    d.querySelectorAll(items).forEach(function(i){var ok=f==='all'||i.getAttribute(attr2)===f;i.style.display=ok?'':'none';if(ok)shown++});
    var e=d.getElementById('empty');if(e)e.style.display=shown?'none':'block';
  })});
}
chips('[data-f]','data-f','#pk .pk','data-cat');
chips('[data-h]','data-h','#hl .hotel','data-city');
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
d.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});
var nf=new Intl.NumberFormat(ar?'ar-EG':'en-US');
var cio='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;cio.unobserve(e.target);var t=+e.target.getAttribute('data-count'),s=performance.now();
 (function f(now){var p=Math.min((now-s)/1200,1);e.target.textContent=nf.format(Math.round(t*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)})(s)})}):null;
d.querySelectorAll('[data-count]').forEach(function(el){if(cio)cio.observe(el)});
var f=d.getElementById('bk');
if(f){
  var m=window.__msg||{};
  var q=new URLSearchParams(location.search).get('package');if(q&&f.pkg)f.pkg.value=q;
  function setErr(k,t){var el=f.querySelector('.err[data-for='+k+']'),i=f.elements[k];if(el)el.textContent=t||'';if(i)i.setAttribute('aria-invalid',t?'true':'false')}
  function check(){
    var ok=true,v=f.elements;
    function bad(k,t){setErr(k,t);ok=false}
    ['name','phone','pkg','n'].forEach(function(k){setErr(k,'')});setErr('email','');
    if(!v.name.value.trim())bad('name',m.req);
    var ph=v.phone.value.replace(/[\s\-+()]/g,'').replace(/[٠-٩]/g,function(c){return c.charCodeAt(0)-1632});
    if(!ph)bad('phone',m.req);else if(!/^\d{8,15}$/.test(ph))bad('phone',m.phone);
    if(v.email.value&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email.value))bad('email',m.email);
    if(!v.pkg.value)bad('pkg',m.req);
    var n=+v.n.value;if(!(n>=1&&n<=50))bad('n',m.n);
    return ok;
  }
  f.addEventListener('submit',function(e){e.preventDefault();if(!check()){var x=f.querySelector('[aria-invalid=true]');if(x)x.focus();return}
    var ref='SK-'+Math.random().toString(36).slice(2,7).toUpperCase();
    try{var a=JSON.parse(localStorage.getItem('sakina-requests')||'[]');a.push({ref:ref,pkg:f.pkg.value,n:f.n.value,at:Date.now()});localStorage.setItem('sakina-requests',JSON.stringify(a))}catch(_){}
    d.getElementById('ref').textContent=ref;f.style.display='none';var ok=d.getElementById('ok');ok.classList.add('show');ok.focus&&ok.setAttribute('tabindex','-1');ok.focus();
  });
}
})();
