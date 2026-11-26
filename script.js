
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

document.querySelectorAll('.vp').forEach(b=>b.addEventListener('click',()=>{
 const v=document.createElement('video');v.src='videos/'+b.dataset.v+'.mp4';v.controls=true;v.autoplay=true;v.playsInline=true;v.preload='metadata';
 const img=b.querySelector('img');if(img)v.poster=img.getAttribute('src');
 b.replaceWith(v);}));

(function(){const r=document.getElementById('rv');if(!r)return;const M=JSON.parse(r.dataset.m),U=r.dataset.u+'/rest/v1/reviews',H={apikey:r.dataset.k,Authorization:'Bearer '+r.dataset.k,'Content-Type':'application/json'};
const list=document.getElementById('rv-list'),sum=document.getElementById('rv-sum'),form=document.getElementById('rv-form'),msg=document.getElementById('rv-msg'),box=r.querySelector('.stars');let st=0;
const star=n=>'★'.repeat(n)+'☆'.repeat(5-n);
for(let i=1;i<=5;i++){const b=document.createElement('button');b.type='button';b.textContent='★';b.setAttribute('role','radio');b.setAttribute('aria-label',i+'/5');b.onclick=()=>{st=i;[...box.children].forEach((x,j)=>x.classList.toggle('on',j<i))};box.appendChild(b)}
document.getElementById('rv-open').onclick=function(){form.hidden=false;this.hidden=true;document.getElementById('rv-n').focus()};
function render(rows){list.textContent='';if(!rows.length){sum.hidden=true;return}
 const a=rows.reduce((s,x)=>s+x.stars,0)/rows.length;sum.textContent='';const s1=document.createElement('span');s1.className='s';s1.textContent=star(Math.round(a));sum.append(s1,' '+a.toFixed(1)+' · '+M.avg+' '+rows.length+' '+(rows.length==1?M.rv:M.rvs));sum.hidden=false;
 rows.slice(0,20).forEach(x=>{const li=document.createElement('li'),s=document.createElement('div'),w=document.createElement('span'),d=document.createElement('span'),p=document.createElement('p');
  s.className='s';s.textContent=star(x.stars);w.className='w';w.textContent=x.name;d.className='d';d.textContent=' · '+new Date(x.created_at).toLocaleDateString(M.lang=='ar'?'ar-EG':'en-GB',{year:'numeric',month:'short',day:'numeric'});p.textContent=x.comment;
  const h=document.createElement('div');h.append(w,d);li.append(s,h,p);list.appendChild(li)})}
function load(){fetch(U+'?select=id,created_at,name,stars,comment&order=created_at.desc&limit=200',{headers:H}).then(x=>x.ok?x.json():[]).then(render).catch(()=>{})}
load();
form.addEventListener('submit',e=>{e.preventDefault();msg.textContent='';if(document.getElementById('rv-h').value)return;if(!st){msg.textContent=M.pick;return}
 const btn=form.querySelector('button[type=submit]');btn.disabled=true;
 fetch(U,{method:'POST',headers:Object.assign({Prefer:'return=minimal'},H),body:JSON.stringify({name:document.getElementById('rv-n').value.trim(),stars:st,comment:document.getElementById('rv-c').value.trim(),lang:M.lang})}).then(x=>x.json().catch(()=>({})).then(j=>({ok:x.ok,j}))).then(o=>{btn.disabled=false;
  if(o.ok){msg.textContent=M.ok;form.reset();st=0;[...box.children].forEach(x=>x.classList.remove('on'));load()}
  else{const m=(o.j&&o.j.message)||'';msg.textContent=/wait/.test(m)?M.wait:/link/.test(m)?M.link:M.err}}).catch(()=>{btn.disabled=false;msg.textContent=M.err})});
})();
