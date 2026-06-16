// HerTech — Chemistry tools: molar mass, equation balancer, solubility table, unit converter

// ===== TOOLS =====
function togTool(id,btn){
  var t=document.getElementById(id);
  var wasOpen=t.classList.contains('on');
  // Close all other tools first
  document.querySelectorAll('.tool-content.on').forEach(function(tc){
    if(tc.id!==id){
      tc.classList.remove('on');
      var prevBtn=tc.previousElementSibling;
      // find the open button for this card
      var card=tc.closest('.tool-card');
      if(card){var ob=card.querySelector('button:last-child');if(ob)ob.textContent='Open →';}
    }
  });
  if(!wasOpen){
    t.classList.add('on');
    if(btn)btn.textContent='Close ×';
    t.scrollIntoView({behavior:'smooth',block:'nearest'});
  } else {
    t.classList.remove('on');
    if(btn)btn.textContent='Open →';
  }
}
var eqDB={'H2 + O2 → H2O':{b:'2H₂ + O₂ → 2H₂O',type:'Combination',steps:['Need 2H₂O to balance 2H on each','O: 2O in O₂ = 2O in H₂O×2 ✓','Balanced: 2H₂ + O₂ → 2H₂O']},'Na + Cl2 → NaCl':{b:'2Na + Cl₂ → 2NaCl',type:'Combination',steps:['Cl₂ = 2Cl → need 2NaCl','2NaCl needs 2Na ✓','Balanced: 2Na + Cl₂ → 2NaCl']},'CH4 + O2 → CO2 + H2O':{b:'CH₄ + 2O₂ → CO₂ + 2H₂O',type:'Combustion',steps:['C: 1 CH₄ → 1 CO₂ ✓','H: 4H → 2H₂O ✓','O: 2+2=4O → 2O₂ ✓']},'Fe + O2 → Fe2O3':{b:'4Fe + 3O₂ → 2Fe₂O₃',type:'Combination',steps:['Fe₂O₃ has 2Fe & 3O','LCM: 4Fe, 3O₂ → 2Fe₂O₃ ✓','Balanced: 4Fe + 3O₂ → 2Fe₂O₃']},'Na + H2O → NaOH + H2':{b:'2Na + 2H₂O → 2NaOH + H₂↑',type:'Displacement',steps:['Balance Na: 2Na each side','Balance H: 2H₂O gives 2OH + H₂','Balanced: 2Na + 2H₂O → 2NaOH + H₂']}};
function balEq(){var inp=document.getElementById('eqIn').value.trim();var res=document.getElementById('eqRes');var f=eqDB[inp];if(f){res.innerHTML='<div style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--accent);margin-bottom:7px;">✅ '+f.b+'</div><div style="font-size:10px;color:var(--muted);margin-bottom:5px;font-weight:600;">Type: '+f.type+'</div>'+f.steps.map(function(s,i){return'<div style="font-size:11px;padding:3px 7px;background:var(--s2);border-radius:4px;margin:2px 0;"><b>'+(i+1)+'.</b> '+s+'</div>';}).join('');}else{res.innerHTML='<div style="font-size:11px;color:var(--muted);">Try: "H2 + O2 → H2O", "Na + Cl2 → NaCl", "CH4 + O2 → CO2 + H2O", "Fe + O2 → Fe2O3", "Na + H2O → NaOH + H2"</div>';}res.classList.add('on');}
var mM={H:1.008,He:4.003,Li:6.941,Be:9.012,B:10.81,C:12.01,N:14.01,O:16.00,F:19.00,Ne:20.18,Na:22.99,Mg:24.31,Al:26.98,Si:28.09,P:30.97,S:32.07,Cl:35.45,Ar:39.95,K:39.10,Ca:40.08,Fe:55.85,Cu:63.55,Zn:65.38,Br:79.90,Ag:107.9,I:126.9,Au:197.0,Hg:200.6};
function calcMM(){var f=document.getElementById('mmIn').value.trim().toUpperCase();var res=document.getElementById('mmRes');var cnts={};var tot=0;var re=/([A-Z][a-z]?)(\d*)/g;var m;while((m=re.exec(f))!==null){var sym=m[1][0]+(m[1][1]?m[1][1].toLowerCase():'');var cnt=m[2]?+m[2]:1;cnts[sym]=(cnts[sym]||0)+cnt;}var lines=[];Object.keys(cnts).forEach(function(sym){var mass=mM[sym];if(!mass){lines.push('<div style="color:var(--red);font-size:11px;">Unknown: '+sym+'</div>');return;}var c=mass*cnts[sym];tot+=c;lines.push('<div style="display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid var(--border);font-size:11px;"><span>'+sym+' × '+cnts[sym]+'</span><span style="font-family:var(--mono);">'+c.toFixed(3)+'</span></div>');});res.innerHTML=lines.join('')+'<div style="display:flex;justify-content:space-between;margin-top:7px;font-weight:700;font-size:12px;"><span>Total Molar Mass</span><span style="color:var(--accent);font-family:var(--mono);">'+tot.toFixed(3)+' g/mol</span></div>';res.classList.add('on');}
var solDB={'NaCl':'Soluble','AgCl':'Insoluble','BaSO4':'Insoluble','KNO3':'Soluble','CaCO3':'Insoluble','PbBr2':'Insoluble','NH4OH':'Soluble','Na2CO3':'Soluble','CuSO4':'Soluble','BaCl2':'Soluble','AgBr':'Insoluble','AgI':'Insoluble','Ca(OH)2':'Slightly Soluble','PbSO4':'Insoluble','FeSO4':'Soluble'};
function chkSol(){var f=document.getElementById('solIn').value.trim();var v=solDB[f]||solDB[f.replace(/\s/g,'')];var res=document.getElementById('solRes');if(v){var col=v==='Soluble'?'#16a34a':v==='Insoluble'?'#dc2626':'#d97706';res.innerHTML='<div style="font-size:13px;font-weight:700;color:'+col+';">'+(v==='Soluble'?'✅':v==='Slightly Soluble'?'⚠️':'❌')+' <b>'+v+'</b></div>';}else{res.innerHTML='<div style="font-size:11px;color:var(--muted);">Try: NaCl, AgCl, BaSO4, KNO3, CaCO3, CuSO4, AgBr, AgI, PbSO4...</div>';}res.classList.add('on');}
var solRList=[{ion:'NO₃⁻',sol:true,ex:'None'},{ion:'Cl⁻,Br⁻,I⁻',sol:true,ex:'Ag⁺, Pb²⁺, Hg₂²⁺ insol.'},{ion:'SO₄²⁻',sol:true,ex:'Ba²⁺, Pb²⁺, Ca²⁺ insol.'},{ion:'OH⁻',sol:false,ex:'Group 1, NH₄⁺ sol.'},{ion:'CO₃²⁻',sol:false,ex:'Group 1, NH₄⁺ sol.'},{ion:'PO₄³⁻',sol:false,ex:'Group 1, NH₄⁺ sol.'},{ion:'S²⁻',sol:false,ex:'Group 1, 2, NH₄⁺ sol.'}];
function initSolR(){var el=document.getElementById('solRules');if(el.children.length)return;el.innerHTML='<div style="font-size:10px;color:var(--muted);font-weight:600;margin-bottom:5px;">SOLUBILITY RULES</div>'+solRList.map(function(r){return'<div style="display:flex;gap:6px;align-items:center;padding:3px 0;border-bottom:1px solid var(--border);font-size:10px;"><span style="min-width:80px;font-family:var(--mono);">'+r.ion+'</span><span style="background:'+(r.sol?'#dcfce7':'#fee2e2')+';color:'+(r.sol?'#16a34a':'#dc2626')+';padding:1px 6px;border-radius:8px;font-size:9px;font-weight:700;flex-shrink:0;">'+(r.sol?'SOL.':'INSOL.')+'</span><span style="color:var(--muted);">'+r.ex+'</span></div>';}).join('');}
var bkTilted=false,liqType='water';
function tiltBk(){var svg=document.getElementById('bkSvg');bkTilted=!bkTilted;svg.style.transform=bkTilted?'rotate(-30deg)':'rotate(0deg)';var liq=document.getElementById('liq');document.getElementById('labMsg').textContent=bkTilted?(liqType==='acid'?'⚠ Acid pouring! Be careful!':'💧 Liquid pouring...'):'';if(bkTilted){liq.setAttribute('y','55');liq.setAttribute('height','30');}else{liq.setAttribute('y','90');liq.setAttribute('height','64');}}
function addLiq(t){liqType=t;document.getElementById('liq').setAttribute('fill',t==='acid'?'rgba(239,68,68,.5)':'rgba(99,102,241,.5)');document.getElementById('labMsg').textContent=t==='acid'?'Acid added 🔴':'Water added 💧';}
function rstBk(){bkTilted=false;document.getElementById('bkSvg').style.transform='rotate(0deg)';document.getElementById('liq').setAttribute('y','90');document.getElementById('liq').setAttribute('height','64');document.getElementById('liq').setAttribute('fill','rgba(99,102,241,.5)');document.getElementById('labMsg').textContent='';liqType='water';}

// ===== WORKSHEET =====
var wsN=10,wsD='medium';
function wsSN(n,btn){wsN=n;document.querySelectorAll('#wsN .ws-opt').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');}
function wsSD(d,btn){wsD=d;document.querySelectorAll('#wsD .ws-opt').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');}
var wsBank={s:[{q:'_Na + _Cl₂ → _NaCl',a:'2Na + Cl₂ → 2NaCl'},{q:'_H₂ + _O₂ → _H₂O',a:'2H₂ + O₂ → 2H₂O'},{q:'_N₂ + _H₂ → _NH₃',a:'N₂ + 3H₂ → 2NH₃'},{q:'_Mg + _O₂ → _MgO',a:'2Mg + O₂ → 2MgO'},{q:'_Ca + _O₂ → _CaO',a:'2Ca + O₂ → 2CaO'},{q:'_SO₂ + _O₂ → _SO₃',a:'2SO₂ + O₂ → 2SO₃'}],
d:[{q:'_H₂O → _H₂ + _O₂',a:'2H₂O → 2H₂ + O₂'},{q:'_CaCO₃ → _CaO + _CO₂',a:'CaCO₃ → CaO + CO₂'},{q:'_KClO₃ → _KCl + _O₂',a:'2KClO₃ → 2KCl + 3O₂'},{q:'_HgO → _Hg + _O₂',a:'2HgO → 2Hg + O₂'}],
sg:[{q:'_Zn + _HCl → _ZnCl₂ + _H₂',a:'Zn + 2HCl → ZnCl₂ + H₂'},{q:'_Na + _H₂O → _NaOH + _H₂',a:'2Na + 2H₂O → 2NaOH + H₂'},{q:'_Fe + _CuSO₄ → _FeSO₄ + _Cu',a:'Fe + CuSO₄ → FeSO₄ + Cu'}],
db:[{q:'_NaOH + _HCl → _NaCl + _H₂O',a:'NaOH + HCl → NaCl + H₂O'},{q:'_BaCl₂ + _Na₂SO₄ → _BaSO₄ + _NaCl',a:'BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl'},{q:'_AgNO₃ + _NaCl → _AgCl + _NaNO₃',a:'AgNO₃ + NaCl → AgCl + NaNO₃'}],
cb:[{q:'_CH₄ + _O₂ → _CO₂ + _H₂O',a:'CH₄ + 2O₂ → CO₂ + 2H₂O'},{q:'_C₂H₆ + _O₂ → _CO₂ + _H₂O',a:'2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O'},{q:'_C₃H₈ + _O₂ → _CO₂ + _H₂O',a:'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O'}]};
function genWS(){var pool=[];if(document.getElementById('wt1').checked)pool=pool.concat(wsBank.s);if(document.getElementById('wt2').checked)pool=pool.concat(wsBank.d);if(document.getElementById('wt3').checked)pool=pool.concat(wsBank.sg);if(document.getElementById('wt4').checked)pool=pool.concat(wsBank.db);if(document.getElementById('wt5').checked)pool=pool.concat(wsBank.cb);if(!pool.length){showToast('Select at least one reaction type');return;}pool=fisherYatesShuffle(pool);var sel=pool.slice(0,Math.min(wsN,pool.length));document.getElementById('wsEqL').innerHTML=sel.map(function(q,i){return'<div class="ws-eq"><span class="ws-eq-n">'+(i+1)+'.</span><span class="ws-eq-t">'+q.q+'</span></div>';}).join('');document.getElementById('wsAnsL').innerHTML=sel.map(function(q,i){return'<div class="ws-eq"><span class="ws-eq-n">'+(i+1)+'.</span><span class="ws-eq-t" style="color:var(--green);">'+q.a+'</span></div>';}).join('');document.getElementById('wsOut').style.display='block';document.getElementById('wsOut').scrollIntoView({behavior:'smooth'});}

// ===== TRENDS =====
var tProps={r:{lbl:'Atomic Radius (pm)',col:'#6366f1',pt:'Decreases → (more protons pull electrons in). Exception: N IE > O IE (half-filled 2p³ stability).',gt:'Increases ↓ (more electron shells). Largest: Cs at 265 pm.'},ie:{lbl:'Ionization Energy (kJ/mol)',col:'#f97316',pt:'Increases → (harder to remove electrons). Exception: N IE > O IE!',gt:'Decreases ↓ (outer electrons farther, easier to remove).'},en:{lbl:'Electronegativity (Pauling)',col:'#10b981',pt:'Increases →. F = 3.98 highest. Noble gases have no EN value.',gt:'Decreases ↓. Less nuclear pull on bonding electrons.'},ea:{lbl:'Electron Affinity (kJ/mol)',col:'#ec4899',pt:'Generally increases →. Halogens highest (Cl=349). Noble gases = 0.',gt:'Generally decreases ↓. Less tendency to gain electrons.'},metal:{lbl:'Metallic Character (%)',col:'#eab308',pt:'Decreases →. Na is metallic; Cl is not. Left = metals, right = nonmetals.',gt:'Increases ↓. Lower IE = more metallic. Cs most metallic.'}};
function drawT(prop,btn){document.querySelectorAll('#tBtns .fb').forEach(function(b){b.classList.remove('on');});if(btn)btn.classList.add('on');var pd=tProps[prop];document.getElementById('tTxtP').textContent=pd.pt;document.getElementById('tTxtG').textContent=pd.gt;var cv=document.getElementById('tChart');cv.width=cv.offsetWidth||800;cv.height=260;var ctx=cv.getContext('2d');var data=[];for(var z=1;z<=54;z++){var el=elMap[z];var v=el&&el[prop]!=null?el[prop]:estProp(z,prop);data.push({z:z,v:v||0});}var vals=data.map(function(d){return d.v;});var maxV=Math.max.apply(null,vals)||1;var minV=Math.min.apply(null,vals);var isDk=document.body.dataset.theme==='dark';ctx.fillStyle=isDk?'#1e293b':'#fff';ctx.fillRect(0,0,cv.width,cv.height);var pad={l:46,r:14,t:28,b:28};var W=cv.width-pad.l-pad.r,H=cv.height-pad.t-pad.b;for(var gi=0;gi<=5;gi++){var gv=minV+(maxV-minV)*gi/5;var gy=pad.t+H*(1-gi/5);ctx.strokeStyle=isDk?'rgba(255,255,255,.04)':'rgba(0,0,0,.04)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad.l,gy);ctx.lineTo(pad.l+W,gy);ctx.stroke();ctx.fillStyle=isDk?'rgba(255,255,255,.4)':'rgba(0,0,0,.4)';ctx.font='9px Inter';ctx.textAlign='right';ctx.fillText(Math.round(gv),pad.l-3,gy+3);}var path=new Path2D();data.forEach(function(d,i){var x=pad.l+(i/(data.length-1))*W;var y=pad.t+H*(1-(d.v-minV)/(maxV-minV));if(i===0)path.moveTo(x,y);else path.lineTo(x,y);});path.lineTo(pad.l+W,pad.t+H);path.lineTo(pad.l,pad.t+H);path.closePath();ctx.fillStyle=pd.col+'1e';ctx.fill(path);ctx.beginPath();data.forEach(function(d,i){var x=pad.l+(i/(data.length-1))*W;var y=pad.t+H*(1-(d.v-minV)/(maxV-minV));if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.strokeStyle=pd.col;ctx.lineWidth=2.2;ctx.stroke();[1,3,11,19,37].forEach(function(pn,pi){var idx=pn-1;var x=pad.l+(idx/(data.length-1))*W;var y=pad.t+H*(1-(data[idx].v-minV)/(maxV-minV));ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle=pd.col;ctx.fill();ctx.fillStyle=isDk?'rgba(255,255,255,.7)':'rgba(0,0,0,.7)';ctx.font='bold 8px Space Mono';ctx.textAlign='center';ctx.fillText('P'+(pi+1),x,y-10);});ctx.fillStyle=isDk?'rgba(255,255,255,.6)':'rgba(0,0,0,.6)';ctx.font='10px Inter';ctx.textAlign='left';ctx.fillText(pd.lbl+' (Z=1–54)',pad.l,16);ctx.textAlign='center';ctx.fillText('Atomic Number (Z)',pad.l+W/2,cv.height-4);}
function estProp(z,prop){var p=z<=2?1:z<=10?2:z<=18?3:z<=36?4:5;var g=z<=2?z:z<=10?z-2:z<=18?z-10:z<=36?(z<=20?z-18:z-18):z<=54?z-36:1;if(prop==='r')return Math.max(30,250-g*10+p*12);if(prop==='ie')return Math.max(376,400+g*70-p*30);if(prop==='en')return z<=2?null:Math.max(0.7,Math.min(3.98,0.7+g*0.13-p*0.03));if(prop==='ea')return z%18===0?0:Math.max(0,g===17?320:50+g*5);if(prop==='metal')return g<=2?90:g>=17?2:g>=13?40:75;return 0;}
setTimeout(function(){drawT('r',document.querySelector('#tBtns .fb.on'));},300);



// ===== TOAST =====
function showToast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');setTimeout(function(){t.classList.remove('on');},2500);}

// Attach legend hover listeners — avoids inline handler issues
(function(){
  document.querySelectorAll('.leg[data-hover-cat]').forEach(function(el){
    var cat = el.getAttribute('data-hover-cat');
    el.addEventListener('mouseenter', function(){ hoverCat(cat); });
    el.addEventListener('mouseleave', function(){ clearCat(); });
  });
})();



// ===== HERO CANVAS ANIMATION =====
(function(){
  var hc = document.getElementById('heroCanvas');
  if(!hc) return;
  var ctx = hc.getContext('2d');
  var W, H, cells = [], particles = [];
  var syms = ['H','He','Li','Be','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Fe','Cu','Zn','Ag','Au'];
  function resize(){ W=hc.width=window.innerWidth; H=hc.height=window.innerHeight; buildCells(); }
  function buildCells(){
    cells=[];
    var cw=46, ch=46, cols=Math.ceil(W/cw)+1, rows=Math.ceil(H/ch)+1;
    for(var r=0;r<rows;r++) for(var c=0;c<cols;c++){
      cells.push({x:c*cw+(r%2?cw/2:0), y:r*ch, sym:syms[Math.floor(Math.random()*syms.length)], op:Math.random()*.15+.02, speed:Math.random()*.3+.1});
    }
  }
  var t=0, pSpawnT=0;
  function addParticle(){ for(var i=0;i<3;i++) particles.push({x:Math.random()*W,y:H+10,vx:(Math.random()-.5)*1.5,vy:-Math.random()*2-1,r:Math.random()*3+1,op:1,col:['#6366f1','#8b5cf6','#06b6d4','#10b981'][Math.floor(Math.random()*4)]}); }
  function frame(){
    t+=.5; pSpawnT++;
    if(pSpawnT%8===0) addParticle();
    ctx.clearRect(0,0,W,H);
    // bg gradient
    var bg=ctx.createLinearGradient(0,0,W,H);
    bg.addColorStop(0,'#020817'); bg.addColorStop(.5,'#0d1b3e'); bg.addColorStop(1,'#020817');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    // draw element cells
    cells.forEach(function(c){
      c.y-=c.speed;
      if(c.y<-50){c.y=H+10;c.x=Math.random()*W;c.sym=syms[Math.floor(Math.random()*syms.length)];}
      ctx.save();
      ctx.globalAlpha=c.op+Math.sin(t*.02+c.x)*.05;
      ctx.strokeStyle='rgba(99,102,241,.18)';
      ctx.lineWidth=1;
      roundRect(ctx,c.x,c.y,42,42,6);
      ctx.stroke();
      ctx.fillStyle='rgba(99,102,241,.06)';
      ctx.fill();
      ctx.fillStyle='rgba(165,180,252,.5)';
      ctx.font='bold 12px Space Mono,monospace';
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      ctx.fillText(c.sym,c.x+21,c.y+21);
      ctx.restore();
    });
    // particles
    particles=particles.filter(function(p){return p.op>0;});
    particles.forEach(function(p){
      p.x+=p.vx; p.y+=p.vy; p.vy-=.01; p.op-=.008;
      ctx.save(); ctx.globalAlpha=p.op;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.col; ctx.fill();
      ctx.restore();
    });
    if(document.getElementById('heroSplash').style.display!=='none') requestAnimationFrame(frame);
  }
  function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}
  window.addEventListener('resize',resize);
  resize(); frame();
})();

function enterApp(){
  var s=document.getElementById('heroSplash');
  s.style.transition='opacity .6s ease, transform .6s ease';
  s.style.opacity='0';
  s.style.transform='scale(1.04)';
  s.style.pointerEvents='none';
  setTimeout(function(){
    s.style.display='none';
    s.style.visibility='hidden';
  },650);
}
