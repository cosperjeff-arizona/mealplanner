
// Shared rendering helpers
const ORDER = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
function cap(s){ return s? s[0].toUpperCase()+s.slice(1):''; }

export function dayCardHTML(d, plan){
  const m = (plan.meals||{})[d] || {};
  const mom = (plan.momDaily||{})[d] || {};
  const dinnerTitle = m.title || '';
  const dinnerSummary = (m.recipe && m.recipe.summary) ? m.recipe.summary : '';
  return `<article class="day" id="day-${d}" data-day="${d}">
    <header>
      <h3>${cap(d)}</h3>
      <span class="pill">Plan</span>
    </header>
    <div class="section">
      <div class="row"><div class="key">Dinner</div><div>${dinnerTitle || '<span class="muted">No dinner planned</span>'}</div></div>
      ${dinnerSummary ? `<div class="row"><div class="key">Notes</div><div class="muted">${dinnerSummary}</div></div>` : ''}
    </div>
    <div class="section">
      <div class="row"><div class="key">Breakfast</div><div>${mom.breakfast||''}</div></div>
      <div class="row"><div class="key">Lunch</div><div>${mom.lunch||''}</div></div>
      <div class="row"><div class="key">Snack (AM)</div><div>${mom.snackAM||''}</div></div>
      <div class="row"><div class="key">Snack (PM)</div><div>${mom.snackPM||''}</div></div>
      <div class="meta">~${mom.kcalEstimate||''} kcal · Protein ${mom.proteinEstimate||''}${mom.notes? ' · '+mom.notes:''}</div>
    </div>
  </article>`;
}

export function renderAll(target, plan){
  target.classList.remove('focus');
  target.innerHTML = ORDER.map(d => dayCardHTML(d, plan)).join('');
}

export function renderFocus(target, plan, day){
  target.classList.add('focus');
  target.innerHTML = dayCardHTML(day, plan);
  // keyboard nav
  window.onkeydown = (e)=>{
    const i = ORDER.indexOf(day);
    if(e.key==='ArrowRight'){ const next = ORDER[(i+1)%ORDER.length]; renderFocus(target, plan, next); }
    if(e.key==='ArrowLeft'){ const prev = ORDER[(i-1+ORDER.length)%ORDER.length]; renderFocus(target, plan, prev); }
  };
}

export function todayKey(){
  const map={0:'sunday',1:'monday',2:'tuesday',3:'wednesday',4:'thursday',5:'friday',6:'saturday'};
  return map[new Date().getDay()];
}
