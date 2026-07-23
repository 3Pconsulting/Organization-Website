(function(){
  const params=new URLSearchParams(location.search);
  const slug=params.get('offer');
  const catalog=window.THREE_P_PRODUCT_CATALOG;
  const config=window.THREE_P_CHECKOUT_CONFIG||{formspreeEndpoint:"",paymentLinks:{}};
  const product=catalog.products.find(p=>p.slug===slug);
  if(!product){
    document.title="Fix Not Found | 3P Help Me";
    document.querySelector('.checkout-card').innerHTML=`<div class="eyebrow">FIX NOT FOUND</div><h1>That fix isn't currently offered.</h1><p>The link may be out of date or the fix has been retired. See the fixes 3P currently offers below.</p><a class="button" href="business-fixes.html">View Current Business Fixes</a>`;
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
        form.innerHTML='<div class="notice"><strong>Your request was received.</strong><br>3P will confirm scope and send the secure invoice and post-payment intake instructions.</div><div class="card-actions"><a class="button secondary" href="business-fixes.html">Return to Business Fixes</a><a class="button secondary" href="operational-snapshot.html">Complete the Operational Snapshot</a></div>';
      }catch(err){submit.disabled=false;submit.textContent=original;let box=form.querySelector('[data-form-error]');if(!box){box=document.createElement('div');box.dataset.formError='true';box.className='notice';form.appendChild(box)}box.textContent='The request did not send. Please try again or email info@3phelpme.com.'}
    });
  }
  if(!paymentUrl&&!config.formspreeEndpoint)notice.classList.remove('hidden');
})();
