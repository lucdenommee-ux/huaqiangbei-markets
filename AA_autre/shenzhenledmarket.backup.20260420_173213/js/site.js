(function(){
  const fmt=(s)=>{try{const d=new Date(s);return d.toISOString().slice(0,10)}catch(e){return s}};
  function setActiveNav(key){document.querySelectorAll('nav a[data-nav]').forEach(a=>a.classList.toggle('active',a.getAttribute('data-nav')===key));}
  async function safeFetchJson(url){try{const r=await fetch(url,{cache:'no-store'});if(!r.ok)return [];return await r.json();}catch(e){return []}}
  function itemHtml(o, kind, marketTitle){
    const market=marketTitle?`<span class="badge">${marketTitle}</span>`:'';
    const date=o.date?`<span class="meta">${fmt(o.date)}</span>`:'';
    const src=o.source_url?`<a class="meta" href="${o.source_url}" target="_blank" rel="noopener">source</a>`:'';
    const link=o.url||o.link||'';
    const title=o.title||'(untitled)';
    const summary=o.summary||o.caption||o.note||'';
    const open=link?`<a href="${link}" target="_blank" rel="noopener" class="meta">open</a>`:'';
    const top=`<div class="top"><span class="title">${title}</span>${market}${date}${open}${src}</div>`;
    const body=summary?`<p class="muted">${summary}</p>`:'';
    if(kind==='photo'){
      const img=o.url?`<div style="margin-top:10px"><img src="${o.url}" alt="${title}" style="max-width:100%;border-radius:12px;border:1px solid var(--border)"></div>`:'';
      return `<div class="item">${top}${body}${img}</div>`;
    }
    return `<div class="item">${top}${body}</div>`;
  }
  async function loadConfig(){const c=await safeFetchJson('data/site-config.json');return c&&typeof c==='object'?c:{};}
  async function applyConfig(){
    const cfg=await loadConfig();
    const title=cfg.siteTitle||'Market Site';
    document.title=title;
    const t1=document.getElementById('site-title'); if(t1) t1.textContent=title;
    const mt=document.getElementById('market-title'); if(mt) mt.textContent=title;
    return title;
  }
  async function renderList(kind, id, limit){
    const marketTitle=await applyConfig();
    const el=document.getElementById(id); if(!el) return;
    el.innerHTML=`<div class="muted small">Loading…</div>`;
    const items=await safeFetchJson(`data/${kind}.json`);
    const arr=Array.isArray(items)?items:[];
    arr.sort((a,b)=>(new Date(b.date||0)).getTime()-(new Date(a.date||0)).getTime());
    const sliced=limit?arr.slice(0,limit):arr;
    el.innerHTML=sliced.length? sliced.map(o=>itemHtml(o,kind,marketTitle)).join('') : `<div class="muted small">No items yet. Add <span class="kbd">data/${kind}.json</span>.</div>`;
  }
  async function renderHome(){await renderList('news','home-news',5);await renderList('videos','home-videos',4);await renderList('photos','home-photos',4);}
  async function renderNews(){await renderList('news','news-list');}
  async function renderVideos(){await renderList('videos','videos-list');}
  async function renderPhotos(){await renderList('photos','photos-list');}
  window.SEM={setActiveNav,renderHome,renderNews,renderVideos,renderPhotos};
  applyConfig();
})();