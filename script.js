'use strict';
(function(){
  const menuButton=document.querySelector('.menu-button');
  const mobileNav=document.getElementById('mobile-nav');
  if(menuButton&&mobileNav){
    function closeMenu(){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Menü öffnen');}
    menuButton.addEventListener('click',function(){const isOpen=menuButton.getAttribute('aria-expanded')==='true';mobileNav.hidden=isOpen;menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.setAttribute('aria-label',isOpen?'Menü öffnen':'Menü schließen');});
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  }
  const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
  const serviceSelect=document.getElementById('service');
  document.querySelectorAll('[data-service]').forEach(btn=>btn.addEventListener('click',()=>{if(serviceSelect){serviceSelect.value=btn.dataset.service;document.getElementById('kontakt')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}}));
  const form=document.getElementById('contact-form');const fallback=document.getElementById('email-fallback');const status=document.getElementById('form-status');let prepared='';
  if(form){form.addEventListener('submit',function(e){e.preventDefault();if(!form.reportValidity())return;const f=new FormData(form);const line=(key)=>String(f.get(key)||'').trim();const name=line('name'),email=line('email'),phone=line('phone'),service=line('service'),city=line('city'),message=line('message');const subject='Anfrage über die Website – '+service+' – '+name;prepared=['Guten Tag Rund ums Haus,','','ich möchte folgende Leistung anfragen:','', 'Leistung: '+service,'Name: '+name,'E-Mail: '+email,'Telefon: '+(phone||'Nicht angegeben'),'Einsatzort / PLZ: '+(city||'Nicht angegeben'),'','Meine Anfrage:',message,'','Mit freundlichen Grüßen',name].join('\n');const link='mailto:info.ums.haus@web.de?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(prepared);if(fallback)fallback.hidden=false;if(status)status.textContent='Die E-Mail ist vorbereitet. Bitte prüfen und senden Sie die Nachricht in Ihrem E-Mail-Programm.';window.location.href=link;});}
  const copy=document.getElementById('copy-email');if(copy){copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(prepared);copy.textContent='Anfragetext kopiert ✓';}catch(err){const area=document.createElement('textarea');area.value=prepared;area.setAttribute('readonly','');area.style.position='fixed';area.style.left='-9999px';document.body.appendChild(area);area.select();const ok=document.execCommand('copy');document.body.removeChild(area);copy.textContent=ok?'Anfragetext kopiert ✓':'Text kann hier nicht kopiert werden';}});}
})();
