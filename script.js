:root{
  --bg: #f6f7fb;
  --card: rgba(255,255,255,0.72);
  --card2: rgba(255,255,255,0.88);
  --card3: rgba(255,255,255,0.58);

  --text: rgba(15,23,42,0.92);
  --muted: rgba(15,23,42,0.62);

  --soft: rgba(15,23,42,0.06);
  --line: rgba(15,23,42,0.12);

  --accent: #68b8a6;   /* calm teal */
  --accent2: #c7a5de;  /* soft lavender */

  --shadow: 0 18px 60px rgba(15,23,42,0.12);
  --radius: 18px;
  --radius2: 24px;
  --max: 1120px;

  --font: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --serif: "Playfair Display", Georgia, serif;
}

*{ box-sizing: border-box; }
html{ scroll-behavior: smooth; }
body{
  margin:0;
  font-family: var(--font);
  background:
    radial-gradient(1100px 700px at 18% -10%, rgba(104,184,166,0.22), transparent 55%),
    radial-gradient(900px 600px at 92% 5%, rgba(199,165,222,0.20), transparent 52%),
    var(--bg);
  color: var(--text);
}

img{ max-width:100%; display:block; }
a{ color: inherit; text-decoration: none; }
.container{
  width: min(var(--max), calc(100% - 40px));
  margin: 0 auto;
}

.sr-only{
  position:absolute;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;clip:rect(0,0,0,0);
  border:0;
}

.muted{ color: var(--muted); }
.small{ font-size: 13px; line-height: 1.5; }
.center{ text-align: center; }
.mt-20{ margin-top: 20px; }

/* Topbar */
.topbar{
  border-bottom: 1px solid var(--line);
  background: var(--card3);
  backdrop-filter: blur(10px);
}
.topbar-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 14px;
  padding: 10px 0;
  flex-wrap: wrap;
}
.badge{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--line);
  font-weight: 600;
  font-size: 13px;
  color: rgba(15,23,42,0.86);
}
.topbar-left{
  display:flex;
  align-items:center;
  gap: 12px;
  flex-wrap: wrap;
}
.topbar-right{
  display:flex;
  align-items:center;
  gap: 10px;
  flex-wrap: wrap;
}
.toplink{
  font-size: 13px;
  color: rgba(15,23,42,0.78);
}
.dot{ opacity: 0.7; }

/* Header */
.header{
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--line);
  background: var(--card3);
  backdrop-filter: blur(14px);
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 14px 0;
  gap: 18px;
}
.logo{
  display:flex;
  align-items:center;
  gap: 12px;
  min-width: 220px;
}
.logo-mark{
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: radial-gradient(circle at 30% 20%, rgba(104,184,166,0.95), rgba(199,165,222,0.75));
  box-shadow: 0 10px 26px rgba(104,184,166,0.20);
  border: 1px solid rgba(15,23,42,0.08);
}
.logo-text{
  font-weight: 700;
  letter-spacing: 0.2px;
}
.logo-sub{
  display:block;
  font-size: 12px;
  color: var(--muted);
  margin-top: 2px;
}

.nav{
  display:flex;
  align-items:center;
  gap: 10px;
  position: relative;
}
.nav-panel{
  display:flex;
  align-items:center;
  gap: 18px;
}
.nav-link{
  font-size: 14px;
  color: rgba(15,23,42,0.78);
  padding: 10px 10px;
  border-radius: 10px;
  transition: background 160ms ease, color 160ms ease;
}
.nav-link:hover{
  background: var(--soft);
  color: rgba(15,23,42,0.92);
}
.nav-cta{
  background: rgba(104,184,166,0.14);
  border: 1px solid rgba(104,184,166,0.26);
}
.nav-cta:hover{
  background: rgba(104,184,166,0.18);
}

.nav-socials{
  display:flex;
  align-items:center;
  gap: 8px;
  margin-left: 6px;
}

/* Icon links */
.icon-link{
  width: 40px;
  height: 40px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card);
  transition: transform 160ms ease, background 160ms ease;
}
.icon-link:hover{
  transform: translateY(-1px);
  background: var(--card2);
}
.icon-link svg{
  width: 18px;
  height: 18px;
  fill: rgba(15,23,42,0.82);
}

.nav-toggle{
  display:none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--card);
  cursor: pointer;
}
.nav-toggle-lines{
  width: 18px;
  height: 12px;
  display:inline-block;
  position: relative;
}
.nav-toggle-lines::before,
.nav-toggle-lines::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  height:2px;
  background: rgba(15,23,42,0.70);
  border-radius: 2px;
}
.nav-toggle-lines::before{ top: 0; }
.nav-toggle-lines::after{ bottom: 0; }

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid transparent;
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
  user-select:none;
}
.btn:hover{ transform: translateY(-1px); }
.btn:active{ transform: translateY(0px); }

.btn-primary{
  background: linear-gradient(135deg, rgba(104,184,166,0.95), rgba(199,165,222,0.85));
  color: rgba(10,12,16,0.95);
  border-color: rgba(15,23,42,0.08);
}
.btn-ghost{
  background: var(--card);
  border-color: var(--line);
  color: rgba(15,23,42,0.88);
}
.btn-sm{
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 13px;
}
.btn-full{ width:100%; }

/* Hero */
.hero{
  position: relative;
  padding: 56px 0 26px;
  overflow: hidden;
}
.hero-inner{
  display:grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: start;
}
.kicker{
  display:inline-block;
  font-size: 13px;
  color: rgba(15,23,42,0.66);
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card);
  margin: 0 0 14px;
}
.hero-title{
  font-family: var(--serif);
  font-weight: 600;
  letter-spacing: -0.4px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.04;
  margin: 0 0 14px;
}
.hero-lead{
  font-size: 16px;
  line-height: 1.7;
  color: rgba(15,23,42,0.72);
  margin: 0 0 22px;
  max-width: 60ch;
}
.hero-actions{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.trust-row{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}
.trust-pill{
  display:inline-flex;
  align-items:center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--line);
  font-size: 13px;
  color: rgba(15,23,42,0.74);
}
.trust-icon{
  width: 18px;
  height: 18px;
  border-radius: 6px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  background: rgba(104,184,166,0.18);
  color: rgba(15,23,42,0.88);
}

/* Hero Card */
.hero-card{
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.hero-image-wrap{
  height: 260px;
  background: rgba(15,23,42,0.03);
}
.hero-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-card-body{
  padding: 18px 18px 18px;
}
.card-title{
  margin: 0 0 8px;
  font-size: 16px;
  letter-spacing: -0.2px;
}
.card-text{
  margin: 0 0 14px;
  color: rgba(15,23,42,0.72);
  line-height: 1.65;
  font-size: 14px;
}
.card-actions{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.hero-bg{
  position:absolute;
  inset: -220px -180px auto auto;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(104,184,166,0.22), transparent 55%),
    radial-gradient(circle at 60% 70%, rgba(199,165,222,0.18), transparent 60%);
  filter: blur(6px);
  pointer-events:none;
}

/* Sections */
.section{
  padding: 64px 0;
}
.section-alt{
  background: rgba(255,255,255,0.46);
  border-top: 1px solid rgba(15,23,42,0.08);
  border-bottom: 1px solid rgba(15,23,42,0.08);
}
.section-head{
  max-width: 760px;
  margin: 0 auto 26px;
  text-align: center;
}
.section-title{
  font-family: var(--serif);
  letter-spacing: -0.2px;
  font-size: 34px;
  margin: 0 0 10px;
}
.section-lead{
  margin: 0;
  color: rgba(15,23,42,0.68);
  line-height: 1.75;
}

/* Split layout */
.split{
  display:grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
  align-items: start;
}

/* Bio media */
.bio-media{
  display:grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 12px;
  margin: 0 0 18px;
}
.bio-photo,
.bio-tile{
  border-radius: var(--radius2);
  overflow:hidden;
  border: 1px solid var(--line);
  background: var(--card);
  box-shadow: 0 10px 28px rgba(15,23,42,0.08);
}
.bio-photo img{
  width:100%;
  height:100%;
  object-fit: cover;
  aspect-ratio: 16 / 11;
}
.bio-side{
  display:grid;
  gap: 12px;
}
.bio-tile{
  display:flex;
  align-items:center;
  justify-content:center;
  min-height: 124px;
}
.bio-placeholder{
  background:
    radial-gradient(260px 180px at 20% 10%, rgba(104,184,166,0.16), transparent 55%),
    radial-gradient(240px 180px at 80% 20%, rgba(199,165,222,0.14), transparent 55%),
    rgba(255,255,255,0.62);
}
.bio-placeholder span{
  font-size: 13px;
  color: rgba(15,23,42,0.58);
  border: 1px dashed rgba(15,23,42,0.18);
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.65);
}

/* Bullets */
.bullets{
  margin-top: 18px;
  display:grid;
  gap: 14px;
}
.bullet{
  display:flex;
  gap: 12px;
  padding: 14px;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--line);
}
.bullet-dot{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 7px;
  background: linear-gradient(135deg, rgba(104,184,166,0.95), rgba(199,165,222,0.80));
}

/* Info card */
.info-card{
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
  padding: 18px;
  box-shadow: var(--shadow);
}
.info-title{
  margin: 0 0 12px;
  font-size: 16px;
}
.info-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
.info-item{
  padding: 12px;
  border-radius: 14px;
  background: rgba(15,23,42,0.03);
  border: 1px solid rgba(15,23,42,0.08);
}
.info-k{
  margin: 0 0 6px;
  font-size: 12px;
  color: rgba(15,23,42,0.58);
}
.info-v{
  margin: 0;
  font-size: 14px;
  color: rgba(15,23,42,0.82);
}

/* Cards grid */
.cards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.card{
  padding: 18px;
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
}
.card-h{
  margin: 0 0 8px;
  font-size: 16px;
  letter-spacing: -0.2px;
}
.card-p{
  margin: 0 0 10px;
  color: rgba(15,23,42,0.70);
  line-height: 1.65;
}
.card-meta{
  margin: 0;
  font-size: 13px;
  color: rgba(15,23,42,0.56);
}
.card-highlight{
  background: rgba(104,184,166,0.10);
  border: 1px solid rgba(104,184,166,0.26);
}
.card-cta-row{
  margin-top: 12px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Steps */
.steps{
  margin-top: 18px;
  display:grid;
  gap: 12px;
}
.step{
  display:flex;
  gap: 12px;
  padding: 14px;
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
}
.step-n{
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight: 700;
  background: rgba(199,165,222,0.18);
  border: 1px solid rgba(15,23,42,0.10);
}
.step-h{
  margin: 0 0 6px;
  font-size: 15px;
}
.step-p{
  margin: 0;
  color: rgba(15,23,42,0.68);
  line-height: 1.65;
}

/* Quote card */
.quote-card{
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
  padding: 18px;
  box-shadow: var(--shadow);
}
.quote{
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(15,23,42,0.82);
}
.quote-meta{
  display:flex;
  align-items:center;
  gap: 12px;
  margin-bottom: 14px;
}
.avatar{
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: radial-gradient(circle at 30% 20%, rgba(104,184,166,0.62), rgba(199,165,222,0.40));
  border: 1px solid rgba(15,23,42,0.10);
}
.quote-name{
  margin: 0;
  font-weight: 700;
}
.mini-trust{
  display:grid;
  gap: 10px;
}
.mini-trust-item{
  display:flex;
  gap: 10px;
  align-items:center;
  font-size: 13px;
  color: rgba(15,23,42,0.70);
}
.mini-icon{
  width: 18px;
  height: 18px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius: 8px;
  background: rgba(104,184,166,0.12);
  border: 1px solid rgba(15,23,42,0.10);
}

/* Testimonials */
.testimonials{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.tcard{
  margin:0;
  padding: 18px;
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
}
.tquote{
  margin: 0 0 12px;
  line-height: 1.7;
  color: rgba(15,23,42,0.78);
}
.tmeta{
  color: rgba(15,23,42,0.56);
  font-size: 13px;
}

/* Pricing */
.pricing{
  margin-top: 16px;
  display:grid;
  gap: 12px;
}
.pricebox{
  padding: 16px;
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
}
.price-h{
  margin: 0 0 8px;
  font-size: 15px;
}
.price-v{
  margin: 0 0 8px;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.4px;
  color: rgba(15,23,42,0.92);
}
.price-p{
  margin: 0;
  color: rgba(15,23,42,0.68);
  line-height: 1.65;
  font-size: 14px;
}

/* CTA card */
.cta-card{
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
  padding: 18px;
  box-shadow: var(--shadow);
}
.cta-h{
  margin: 0 0 10px;
  font-size: 18px;
}
.cta-p{
  margin: 0 0 14px;
  color: rgba(15,23,42,0.68);
  line-height: 1.7;
}
.cta-mini{
  display:grid;
  gap: 10px;
  margin-bottom: 14px;
}
.cta-mini-row{
  display:flex;
  align-items:center;
  gap: 10px;
  color: rgba(15,23,42,0.72);
  font-size: 13px;
}
.cta-dot{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(104,184,166,0.95), rgba(199,165,222,0.80));
}

/* Accordion */
.accordion{
  max-width: 860px;
  margin: 0 auto;
  display:grid;
  gap: 10px;
}
.acc-item{
  width: 100%;
  text-align: left;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 14px;
  padding: 16px;
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
  color: rgba(15,23,42,0.90);
  cursor:pointer;
  font: inherit;
}
.acc-q{
  font-weight: 650;
  letter-spacing: -0.2px;
}
.acc-ic{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgba(15,23,42,0.14);
  background: rgba(15,23,42,0.04);
  position: relative;
}
.acc-ic::before,
.acc-ic::after{
  content:"";
  position:absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 2px;
  background: rgba(15,23,42,0.78);
  transform: translate(-50%,-50%);
  border-radius: 2px;
}
.acc-ic::after{
  width: 2px;
  height: 10px;
}
.acc-a{
  padding: 0 16px 16px;
  margin-top: -6px;
  border-radius: 0 0 var(--radius2) var(--radius2);
  background: rgba(255,255,255,0.45);
  border: 1px solid rgba(15,23,42,0.10);
  border-top: none;
}
.acc-a p{
  margin: 10px 0 0;
  color: rgba(15,23,42,0.68);
  line-height: 1.75;
}

/* Contact */
.contact-block{
  margin-top: 18px;
  display:grid;
  gap: 12px;
}
.contact-line{
  display:flex;
  gap: 12px;
  padding: 14px;
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
}
.cicon{
  width: 36px;
  height: 36px;
  border-radius: 14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(104,184,166,0.12);
  border: 1px solid rgba(15,23,42,0.10);
}
.ck{
  margin: 0 0 4px;
  font-size: 12px;
  color: rgba(15,23,42,0.56);
}
.cv{
  margin: 0;
  color: rgba(15,23,42,0.90);
  font-weight: 650;
}

.map{
  margin-top: 14px;
  border-radius: var(--radius2);
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(15,23,42,0.03);
  height: 260px;
}
.map iframe{
  width: 100%;
  height: 100%;
  border: 0;
}

.form{
  border-radius: var(--radius2);
  background: var(--card);
  border: 1px solid var(--line);
  padding: 18px;
  box-shadow: var(--shadow);
}
.form-title{
  margin: 0 0 14px;
  font-size: 16px;
}
.field{
  display:block;
  margin-bottom: 12px;
}
.label{
  display:block;
  margin-bottom: 8px;
  font-size: 12px;
  color: rgba(15,23,42,0.62);
}
.input{
  width: 100%;
  border-radius: 14px;
  padding: 12px 12px;
  border: 1px solid rgba(15,23,42,0.14);
  background: rgba(255,255,255,0.78);
  color: rgba(15,23,42,0.92);
  outline: none;
  font: inherit;
}
.input:focus{
  border-color: rgba(104,184,166,0.55);
  box-shadow: 0 0 0 4px rgba(104,184,166,0.14);
}
.textarea{
  resize: vertical;
  min-height: 120px;
}
.error{
  display:block;
  margin-top: 6px;
  font-size: 12px;
  color: rgba(196,60,60,0.95);
  min-height: 16px;
}

/* Footer */
.footer{
  border-top: 1px solid rgba(15,23,42,0.10);
  padding: 34px 0;
  background: var(--card3);
}
.footer-inner{
  display:grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  gap: 18px;
}
.foot-brand{
  margin: 0 0 6px;
  font-weight: 800;
}
.foot-links{
  display:flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}
.foot-link{
  font-size: 13px;
  color: rgba(15,23,42,0.70);
  padding: 10px 10px;
  border-radius: 12px;
}
.foot-link:hover{
  background: var(--soft);
  color: rgba(15,23,42,0.90);
}
.foot-legal{
  text-align: right;
}

.socials{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.social-pill{
  background: var(--card);
  border: 1px solid var(--line);
}

/* Scroll to top */
.to-top{
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: var(--card);
  color: rgba(15,23,42,0.90);
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  box-shadow: 0 14px 40px rgba(15,23,42,0.18);
  opacity: 0;
  pointer-events:none;
  transform: translateY(10px);
  transition: opacity 160ms ease, transform 160ms ease, background 160ms ease;
}
.to-top.show{
  opacity: 1;
  pointer-events:auto;
  transform: translateY(0);
}
.to-top:hover{
  background: var(--card2);
}

/* Responsive */
@media (max-width: 980px){
  .hero-inner{ grid-template-columns: 1fr; }
  .split{ grid-template-columns: 1fr; }
  .cards{ grid-template-columns: 1fr 1fr; }
  .testimonials{ grid-template-columns: 1fr; }
  .footer-inner{ grid-template-columns: 1fr; text-align: left; }
  .foot-legal{ text-align: left; }
  .foot-links{ justify-content: flex-start; }
}
@media (max-width: 760px){
  .nav-toggle{ display:inline-flex; align-items:center; justify-content:center; }

  .nav-panel{
    position: absolute;
    right: 0;
    top: 64px;
    width: min(340px, calc(100vw - 24px));
    border-radius: 18px;
    padding: 10px;
    background: rgba(246,247,251,0.92);
    border: 1px solid rgba(15,23,42,0.16);
    box-shadow: var(--shadow);
    display:none;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }
  .nav-panel.open{ display:flex; }
  .nav-link{ padding: 12px 12px; }
  .nav-cta{ text-align:center; }

  .nav-socials{
    margin-left: 0;
    margin-top: 6px;
    padding-top: 10px;
    border-top: 1px solid rgba(15,23,42,0.10);
    justify-content: flex-start;
  }

  .cards{ grid-template-columns: 1fr; }
  .info-grid{ grid-template-columns: 1fr; }
  .hero{ padding-top: 42px; }

  .bio-media{
    grid-template-columns: 1fr;
  }
  .bio-side{
    grid-template-columns: 1fr 1fr;
  }
}
