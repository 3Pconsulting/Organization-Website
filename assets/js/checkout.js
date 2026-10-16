(function(){
  const params=new URLSearchParams(location.search);
  const slug=params.get('offer');
  if(slug==='7-day-system-build'||slug==='systems-design-improvement'){location.replace('/systems-automation-integration.html');return;}

  const catalog=window.THREE_P_PRODUCT_CATALOG;
  const config=window.THREE_P_CHECKOUT_CONFIG||{formspreeEndpoint:"",paymentLinks:{}};
  const product=catalog.products.find(p=>p.slug===slug);
  if(!product){
    document.title="Fix Not Found | 3P Help Me";
    document.querySelector('.checkout-card').innerHTML=`<section class="sec sec--dark"><div class="wrap stack-24"><span class="label">Fix not found</span><h1>That fix isn't currently offered.</h1><p class="soft">The link may be out of date or the fix has been retired. See the fixes 3P currently offers below.</p><a class="btn" href="/#offers">See the Business Fixes <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 64 64" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="29" fill="#F6F5EF" stroke="#F6B519" stroke-width="2.2" /><g transform="translate(32 32) scale(0.96842105) translate(-30.65000000 -32.00000000)"><g fill="none" stroke="#05233E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" transform="scale(2.6666666666666665)"><path d="M4 12h15M13 6l6 6-6 6" /></g></g></svg></a></div></section>`;
    return;
  }
  document.title=product.name+" | Purchase | 3P Help Me";
  document.getElementById('offerName').textContent=product.name;
  document.getElementById('offerHeadline').textContent=product.headline;
  document.getElementById('offerPrice').textContent="$"+product.price.toLocaleString();
  document.getElementById('offerTimeline').textContent=product.timeline;
  document.getElementById('offerSlug').value=product.slug;
  document.getElementById('offerDisplay').value=product.name+" — $"+product.price.toLocaleString();
  const paymentUrl=(config.paymentLinks||{})[product.slug]||"";
  const payButton=document.getElementById('payButton');
  const form=document.getElementById('invoiceForm');
  const notice=document.getElementById('configNotice');
  if(paymentUrl){payButton.href=paymentUrl;payButton.classList.remove('hidden')}
  if(config.formspreeEndpoint){
    form.action=config.formspreeEndpoint;form.classList.remove('hidden');
    form.addEventListener('submit',async e=>{
      e.preventDefault();const submit=form.querySelector('button[type="submit"]');const original=submit.textContent;
      submit.disabled=true;submit.textContent='Sending...';
      const data=new FormData(form);data.append('request_type','3P Business Fix secure invoice request');data.append('product_price',"$"+product.price.toLocaleString());data.append('product_timeline',product.timeline);
      try{
        const response=await fetch(form.action,{method:'POST',body:data,headers:{Accept:'application/json'}});if(!response.ok)throw new Error();
        form.innerHTML='<div class="form-note"><strong>Your request was received.</strong><br>3P will confirm scope and send the secure invoice and post-payment intake instructions.</div><div class="stack-16"><a class="btn btn--2" href="/#offers">Return to Business Fixes <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 64 64" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="29" fill="#F6F5EF" stroke="#F6B519" stroke-width="2.2" /><g transform="translate(32 32) scale(0.96842105) translate(-30.65000000 -32.00000000)"><g fill="none" stroke="#05233E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" transform="scale(2.6666666666666665)"><path d="M4 12h15M13 6l6 6-6 6" /></g></g></svg></a><a class="btn btn--2" href="free-business-health-check.html">Get My Free Health Check <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 64 64" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="29" fill="#F6F5EF" stroke="#F6B519" stroke-width="2.2" /><g transform="translate(32 32) scale(0.96842105) translate(-30.65000000 -32.00000000)"><g fill="none" stroke="#05233E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" transform="scale(2.6666666666666665)"><path d="M4 12h15M13 6l6 6-6 6" /></g></g></svg></a></div>';
      }catch(err){submit.disabled=false;submit.textContent=original;let box=form.querySelector('[data-form-error]');if(!box){box=document.createElement('div');box.dataset.formError='true';box.className='form-note';form.appendChild(box)}box.textContent='The request did not send. Please try again or email info@3phelpme.com.'}
    });
  }
  if(!paymentUrl&&!config.formspreeEndpoint)notice.classList.remove('hidden');
})();
