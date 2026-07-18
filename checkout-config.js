@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap');

:root{
  --navy-950:#071525;
  --navy-900:#0b1b2e;
  --navy-800:#122b45;
  --navy-700:#1a3b5d;
  --cream:#f5f0e7;
  --paper:#fffdf8;
  --gold:#c89b3c;
  --gold-light:#efd892;
  --ink:#132238;
  --muted:#5f6b78;
  --line:#d8d1c5;
  --success:#315d4c;
  --shadow:0 22px 60px rgba(7,21,37,.14);
  --max:1180px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:"Source Sans 3",Arial,sans-serif;
  color:var(--ink);
  background:var(--paper);
  line-height:1.6;
}
a{color:inherit}
img{max-width:100%}
.wrap{width:min(var(--max),calc(100% - 40px));margin:0 auto}
.site-header{
  position:sticky;top:0;z-index:50;
  background:rgba(7,21,37,.97);
  border-bottom:1px solid rgba(239,216,146,.38);
  backdrop-filter:blur(12px);
}
.header-row{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:30px}
.wordmark{display:flex;align-items:center;text-decoration:none}
.wordmark img{width:220px;height:auto}
.site-nav{display:flex;align-items:center;gap:24px}
.site-nav a{
  color:#f5f0e7;text-decoration:none;font-weight:600;font-size:15px;
  border-bottom:1px solid transparent;padding:8px 0;
}
.site-nav a:hover{color:var(--gold-light);border-color:var(--gold)}
.button, .site-nav .button{
  display:inline-flex;align-items:center;justify-content:center;
  text-decoration:none;border:1px solid var(--gold);background:var(--gold);
  color:var(--navy-950);padding:13px 18px;border-radius:4px;
  font-family:"IBM Plex Mono",monospace;font-size:13px;font-weight:600;
  letter-spacing:.02em;cursor:pointer;transition:.2s ease;
}
.button:hover,.site-nav .button:hover{background:var(--gold-light);border-color:var(--gold-light);color:var(--navy-950)}
.button.secondary{background:transparent;color:var(--navy-900);border-color:var(--navy-900)}
.button.secondary:hover{background:var(--navy-900);color:white}
.button.light{background:var(--cream);border-color:var(--cream);color:var(--navy-950)}
.button.disabled{opacity:.55;cursor:not-allowed;pointer-events:none}
.menu-toggle{display:none;background:none;border:1px solid rgba(255,255,255,.3);color:white;padding:9px 11px;border-radius:4px}

.hero{
  background:
    linear-gradient(115deg,rgba(7,21,37,.98),rgba(18,43,69,.92)),
    radial-gradient(circle at 78% 15%,rgba(200,155,60,.30),transparent 30%);
  color:white;padding:96px 0 88px;overflow:hidden;
}
.hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:64px;align-items:center}
.eyebrow{
  font-family:"IBM Plex Mono",monospace;text-transform:uppercase;
  letter-spacing:.16em;font-size:12px;color:var(--gold-light);margin-bottom:18px;
}
h1,h2,h3{font-family:"Source Serif 4",Georgia,serif;line-height:1.08;margin:0;color:inherit}
h1{font-size:clamp(46px,6vw,78px);max-width:900px}
h2{font-size:clamp(34px,4vw,52px)}
h3{font-size:26px}
.hero p{font-size:20px;max-width:700px;color:#dbe4ed;margin:24px 0 32px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.hero-proof{
  border:1px solid rgba(239,216,146,.4);
  background:rgba(255,255,255,.05);
  padding:32px;box-shadow:0 20px 50px rgba(0,0,0,.22)
}
.hero-proof strong{display:block;font-family:"Source Serif 4",serif;font-size:30px;margin-bottom:18px}
.hero-proof ul{margin:0;padding-left:22px;color:#e7edf3}
.section{padding:88px 0}
.section.cream{background:var(--cream)}
.section.navy{background:var(--navy-900);color:white}
.section-head{max-width:760px;margin-bottom:44px}
.section-head p{font-size:18px;color:var(--muted)}
.section.navy .section-head p{color:#cdd8e2}
.catalog-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.product-card{
  background:white;border:1px solid var(--line);padding:30px;
  display:flex;flex-direction:column;min-height:100%;box-shadow:0 12px 34px rgba(7,21,37,.06)
}
.product-card .category{
  font-family:"IBM Plex Mono",monospace;text-transform:uppercase;
  letter-spacing:.12em;font-size:11px;color:var(--gold);margin-bottom:12px;
}
.product-card h3{font-size:30px;color:var(--navy-900)}
.product-card .summary{color:var(--muted);font-size:17px;flex:1}
.price-row{display:flex;align-items:end;justify-content:space-between;gap:20px;border-top:1px solid var(--line);padding-top:20px;margin-top:20px}
.price{font-family:"Source Serif 4",serif;font-weight:700;font-size:42px;color:var(--navy-900);line-height:1}
.timeline{font-family:"IBM Plex Mono",monospace;font-size:12px;text-transform:uppercase;color:var(--muted);text-align:right}
.card-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}
.comparison{width:100%;border-collapse:collapse;background:white;border:1px solid var(--line)}
.comparison th,.comparison td{padding:16px 18px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
.comparison th{background:var(--navy-900);color:white;font-family:"IBM Plex Mono",monospace;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.comparison tr:last-child td{border-bottom:none}
.problem-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.problem-strip a{background:white;padding:24px;text-decoration:none;font-weight:700;color:var(--navy-900)}
.problem-strip a:hover{background:var(--navy-900);color:white}
.process{display:grid;grid-template-columns:repeat(5,1fr);gap:18px}
.process-step{border-top:4px solid var(--gold);background:white;color:var(--ink);padding:24px;min-height:170px}
.process-step span{font-family:"IBM Plex Mono",monospace;color:var(--gold);font-size:12px}
.process-step strong{display:block;font-family:"Source Serif 4",serif;font-size:23px;margin:10px 0}
.faq{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.faq-item{border:1px solid var(--line);background:white;padding:26px}
.faq-item h3{font-size:23px;color:var(--navy-900);margin-bottom:10px}
.guarantee{border-left:6px solid var(--gold);padding:28px 32px;background:white;color:var(--ink);box-shadow:var(--shadow)}
.cta-band{background:var(--gold);color:var(--navy-950);padding:58px 0}
.cta-row{display:flex;align-items:center;justify-content:space-between;gap:30px}
.cta-row h2{max-width:700px}
.site-footer{background:var(--navy-950);color:#cdd8e2;padding:34px 0;border-top:1px solid rgba(255,255,255,.1)}
.footer-row{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-family:"IBM Plex Mono",monospace;font-size:12px}
.detail-hero{padding:82px 0;background:var(--navy-900);color:white}
.detail-hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:50px;align-items:end}
.detail-hero h1{font-size:clamp(44px,5vw,68px)}
.detail-hero p{font-size:20px;color:#d6e0e9;max-width:720px}
.offer-box{background:white;color:var(--ink);padding:28px;border-top:6px solid var(--gold);box-shadow:var(--shadow)}
.offer-box .price{font-size:54px}
.offer-box dl{margin:18px 0 0}
.offer-box dt{font-family:"IBM Plex Mono",monospace;font-size:11px;text-transform:uppercase;color:var(--muted)}
.offer-box dd{margin:2px 0 14px;font-weight:700}
.content-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px}
.content-panel{border:1px solid var(--line);padding:30px;background:white}
.content-panel.full{grid-column:1/-1}
.content-panel h2{font-size:34px;color:var(--navy-900);margin-bottom:18px}
.content-panel ul{padding-left:20px;margin:0}
.content-panel li{margin:9px 0}
.outcome-panel{background:var(--navy-900);color:white;padding:34px}
.outcome-panel h2{color:white}
.checkout-wrap{max-width:820px;margin:0 auto}
.checkout-card{background:white;border:1px solid var(--line);padding:34px;box-shadow:var(--shadow)}
.checkout-summary{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:start;border-bottom:1px solid var(--line);padding-bottom:24px;margin-bottom:24px}
.checkout-summary h1{font-size:42px;color:var(--navy-900)}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.form-field{display:flex;flex-direction:column;gap:7px}
.form-field.full{grid-column:1/-1}
label{font-weight:700;color:var(--navy-900)}
input,textarea,select{
  width:100%;font:inherit;padding:13px 14px;border:1px solid #aeb7bf;border-radius:3px;background:white
}
textarea{min-height:120px;resize:vertical}
.notice{border-left:5px solid var(--gold);background:#fff8e7;padding:18px 20px;margin:22px 0}
.system-note{font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--muted)}
.hidden{display:none!important}
@media(max-width:900px){
  .hero-grid,.detail-hero-grid,.content-grid{grid-template-columns:1fr}
  .catalog-grid{grid-template-columns:1fr}
  .process{grid-template-columns:1fr 1fr}
  .problem-strip{grid-template-columns:1fr 1fr}
  .site-nav{display:none;position:absolute;top:72px;left:0;right:0;background:var(--navy-950);padding:18px 20px;flex-direction:column;align-items:stretch}
  .site-nav.open{display:flex}
  .menu-toggle{display:block}
}
@media(max-width:620px){
  .wrap{width:min(100% - 28px,var(--max))}
  .hero,.section{padding:64px 0}
  .problem-strip,.process,.faq,.form-grid{grid-template-columns:1fr}
  .cta-row,.checkout-summary{display:block}
  .cta-row .button{margin-top:20px}
  .wordmark img{width:180px}
  h1{font-size:44px}
}
