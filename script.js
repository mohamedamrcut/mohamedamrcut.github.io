
const lb=document.getElementById('lb'),lbi=document.getElementById('lbi');
document.querySelectorAll('[data-zoom]').forEach(i=>i.addEventListener('click',()=>{lbi.src=i.src;lbi.alt=i.alt;lb.classList.add('open')}));
lb.addEventListener('click',()=>lb.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{
 document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('on',x===c));
 const f=c.dataset.f;document.querySelectorAll('.work').forEach(w=>w.classList.toggle('hide',f!=='all'&&w.dataset.t!==f));}));
function openHash(){const h=location.hash.slice(1);if(!h)return;const d=document.getElementById(h);if(d&&d.tagName==='DETAILS'){d.open=true;setTimeout(()=>d.scrollIntoView({behavior:'smooth',block:'center'}),50)}}
openHash();addEventListener('hashchange',openHash);
const form=document.getElementById('pf');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);
 const t=form.dataset.pre+'\n'+form.dataset.ln+': '+d.get('n')+'\n'+form.dataset.lt+': '+d.get('t')+'\n'+form.dataset.lm+': '+d.get('m');
 window.open('https://wa.me/201210699651?text='+encodeURIComponent(t),'_blank','noopener');});
const cp=document.getElementById('cp');
if(cp)cp.addEventListener('click',()=>{navigator.clipboard&&navigator.clipboard.writeText('+201210699651');const o=cp.textContent;cp.textContent=cp.dataset.done;setTimeout(()=>cp.textContent=o,1600)});
(function(){const s=new URLSearchParams(location.search).get('s'),sel=document.getElementById('t');if(s&&sel){const m={edit:0,sub:1,tr:2,web:3};if(m[s]!==undefined)sel.selectedIndex=m[s]}})();
