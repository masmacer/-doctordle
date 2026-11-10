(function () {
  const toggle=document.getElementById('nav-toggle'), drawer=document.getElementById('nav-drawer');
  if(!toggle || !drawer)return;
  const setOpen=open=>{
    toggle.setAttribute('aria-expanded',String(open));
    drawer.classList.toggle('nav-drawer--open',open);
  };
  toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
  document.addEventListener('click',event=>{if(!toggle.contains(event.target)&&!drawer.contains(event.target))setOpen(false);});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){setOpen(false);toggle.focus();}
  });
}());
