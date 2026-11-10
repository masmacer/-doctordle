
const messages = {
  preview: ['Preview Share Card','Anteprima della scheda','Prévia do cartão'],
  back: ['Back to Result','Torna al risultato','Voltar ao resultado'],
  save: ['Save Image','Salva immagine','Salvar imagem'],
  share: ['Share Image','Condividi immagine','Compartilhar imagem'],
  loading: ['Creating your share card…','Creazione della scheda…','Criando seu cartão…'],
  failed: ['Could not create the image. Please try again.','Impossibile creare l’immagine. Riprova.','Não foi possível criar a imagem. Tente novamente.'],
  noShare: ['Image sharing is unavailable here. Use Save Image instead.','La condivisione di immagini non è disponibile qui. Usa Salva immagine.','Não é possível compartilhar imagens aqui. Use Salvar imagem.'],
  saved: ['Image download started.','Download dell’immagine avviato.','Download da imagem iniciado.']
};

// This controller only reads supplied scores. It never writes game progress.
export function installShareCardPreview({body,footer,data,filename='doctordle-result.png'}) {
  const language = data.locale==='it'?1:data.locale==='pt'?2:0;
  const label = key=>messages[key][language];
  const button = (key,icon)=>{
    const node=document.createElement('button');node.type='button';node.className='btn-share';
    node.innerHTML=`<svg class="ui-icon" aria-hidden="true"><use href="/images/ui-icons.svg#${icon}"/></svg><span></span>`;
    node.querySelector('span').textContent=label(key);return node;
  };
  const trigger=button('preview','image');trigger.dataset.action='preview-card';footer.appendChild(trigger);
  let url=null,disposed=false,version=0;
  const release=()=>{if(url){URL.revokeObjectURL(url);url=null;}};
  trigger.addEventListener('click', async()=>{
    const generation=++version;
    const originalBody=[...body.children],originalButtons=[...footer.children];
    const box=body.closest('.modal-box'),scroll=box?.scrollTop||0;
    originalBody.forEach(n=>n.hidden=true);originalButtons.forEach(n=>n.hidden=true);
    const panel=document.createElement('section');panel.className='share-card-preview';
    const heading=document.createElement('h3');heading.textContent=label('preview');panel.appendChild(heading);
    const status=document.createElement('p');status.setAttribute('role','status');status.textContent=label('loading');panel.appendChild(status);body.appendChild(panel);
    const back=button('back','arrow'),save=button('save','download'),share=button('share','share');
    back.dataset.action='back-result';save.dataset.action='save-image';share.dataset.action='share-image';
    save.disabled=share.disabled=true;footer.append(back,save,share);
    back.addEventListener('click',()=>{
      ++version;release();panel.remove();back.remove();save.remove();share.remove();
      originalBody.forEach(n=>n.hidden=false);originalButtons.forEach(n=>n.hidden=false);
      if(box)box.scrollTop=scroll;trigger.focus({preventScroll:true});
    });
    if(box)box.scrollTop=0;back.focus({preventScroll:true});
    try {
      const {renderShareCard,buildShareCardCaption}=await import('./share-card.js');
      const caption=buildShareCardCaption(data);
      const blob=await renderShareCard(data);
      if(disposed||generation!==version)return;
      release();url=URL.createObjectURL(blob);
      const preview=document.createElement('img');preview.width=900;preview.height=1200;preview.src=url;preview.alt=label('preview');panel.insertBefore(preview,status);status.textContent='';
      const file=new File([blob],filename,{type:'image/png'});
      save.disabled=false;
      save.addEventListener('click',()=>{
        const link=document.createElement('a');link.href=url;link.download=filename;link.click();status.textContent=label('saved');
      });
      let canShare=false;
      try {canShare=!!navigator.share&&!!navigator.canShare?.({files:[file]});}catch{}
      share.hidden=!canShare;share.disabled=!canShare;
      share.addEventListener('click',async()=>{
        share.disabled=true;
        try {await navigator.share({files:[file],title:'Doctordle',text:caption});}
        catch(error){if(error.name!=='AbortError')status.textContent=label('noShare');}
        finally{share.disabled=false;}
      });
    }catch{if(!disposed&&generation===version){status.textContent=label('failed');save.hidden=share.hidden=true;}}
  });
  return ()=>{disposed=true;++version;release();};
}
