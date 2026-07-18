(function(){
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('offer');
  const catalog = window.THREE_P_PRODUCT_CATALOG;
  const config = window.THREE_P_CHECKOUT_CONFIG || {formspreeEndpoint:"",paymentLinks:{}};
  const product = catalog.products.find(p => p.slug === slug) || catalog.products[0];

  document.title = product.name + " | Purchase | 3P Business Optimization";
  document.getElementById('offerName').textContent = product.name;
  document.getElementById('offerHeadline').textContent = product.headline;
  document.getElementById('offerPrice').textContent = "$" + product.price.toLocaleString();
  document.getElementById('offerTimeline').textContent = product.timeline;
  document.getElementById('offerSlug').value = product.slug;
  document.getElementById('offerDisplay').value = product.name + " — $" + product.price.toLocaleString();

  const paymentUrl = (config.paymentLinks || {})[product.slug] || "";
  const payButton = document.getElementById('payButton');
  const invoiceForm = document.getElementById('invoiceForm');
  const configNotice = document.getElementById('configNotice');

  if(paymentUrl){
    payButton.href = paymentUrl;
    payButton.classList.remove('hidden');
  }
  if(config.formspreeEndpoint){
    invoiceForm.action = config.formspreeEndpoint;
    invoiceForm.classList.remove('hidden');
  }
  if(!paymentUrl && !config.formspreeEndpoint){
    configNotice.classList.remove('hidden');
  }
})();
