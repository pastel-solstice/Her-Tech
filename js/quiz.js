// HerTech — Challenge mode quiz, Fisher-Yates shuffle, localStorage score persistence

// ========== QUIZ LOCALSTORAGE PERSISTENCE ==========
var QuizStorage = {
  KEYS: {
    bestScore:   'hertech_quiz_best_score',
    bestTotal:   'hertech_quiz_best_total',
    bestStreak:  'hertech_quiz_best_streak',
    sessions:    'hertech_quiz_sessions',
    lastDate:    'hertech_quiz_last_date'
  },
  get: function(key) {
    try { return JSON.parse(localStorage.getItem(QuizStorage.KEYS[key])); }
    catch(e) { return null; }
  },
  set: function(key, value) {
    try { localStorage.setItem(QuizStorage.KEYS[key], JSON.stringify(value)); }
    catch(e) { /* storage unavailable — fail silently */ }
  },
  getBestScore:  function() { return QuizStorage.get('bestScore')  || 0; },
  getBestStreak: function() { return QuizStorage.get('bestStreak') || 0; },
  getSessions:   function() { return QuizStorage.get('sessions')   || 0; },
  saveSession: function(score, total, streak) {
    var prev = QuizStorage.getBestScore();
    if (score > prev) {
      QuizStorage.set('bestScore',  score);
      QuizStorage.set('bestTotal',  total);
    }
    if (streak > QuizStorage.getBestStreak()) {
      QuizStorage.set('bestStreak', streak);
    }
    QuizStorage.set('sessions', QuizStorage.getSessions() + 1);
    QuizStorage.set('lastDate', new Date().toISOString());
  }
};

function renderQuizStats() {
  var best    = QuizStorage.getBestScore();
  var total   = QuizStorage.get('bestTotal') || 0;
  var streak  = QuizStorage.getBestStreak();
  var sessions = QuizStorage.getSessions();
  if (sessions === 0) return '';
  return '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;padding:14px;background:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.1);">'
    + '<div style="text-align:center;"><div style="font-size:22px;font-weight:600;color:var(--accent)">' + best + '/' + total + '</div><div style="font-size:11px;opacity:0.6;margin-top:3px;">Best score</div></div>'
    + '<div style="text-align:center;"><div style="font-size:22px;font-weight:600;color:#ffd700">🔥 ' + streak + '</div><div style="font-size:11px;opacity:0.6;margin-top:3px;">Best streak</div></div>'
    + '<div style="text-align:center;"><div style="font-size:22px;font-weight:600;color:var(--accent)">' + sessions + '</div><div style="font-size:11px;opacity:0.6;margin-top:3px;">Sessions</div></div>'
    + '</div>'
    + '<div style="text-align:center;margin-top:-10px;margin-bottom:12px;">'
    + '<a href="#" style="font-size:10px;color:var(--muted);text-decoration:underline;opacity:0.5;" '
    + 'onclick="event.preventDefault();'
    + '[&quot;bestScore&quot;,&quot;bestTotal&quot;,&quot;bestStreak&quot;,&quot;sessions&quot;,&quot;lastDate&quot;]'
    + '.forEach(function(k){localStorage.removeItem(&quot;hertech_quiz_&quot;+k);});'
    + 'document.getElementById(&quot;quizStatsPanel&quot;).innerHTML=renderQuizStats();'
    + 'document.getElementById(&quot;quizStatsPanel&quot;).innerHTML+=&quot;<div style=\'text-align:center;font-size:12px;color:var(--muted);\'>Progress reset.</div>&quot;;">'
    + 'Reset my progress</a>'
    + '</div>';
}

// ===== CHALLENGE MODE QUIZ =====
var quizDiff = 'easy';
var quizState = {q:0, score:0, streak:0, timer:null, timerVal:30, answers:[]};

var quizBank = {
  easy:[
    {q:'What is the chemical symbol for Gold?',opts:['Gd','Go','Au','Ag'],ans:2,exp:'Au comes from the Latin "Aurum". Gold has been prized since antiquity.'},
    {q:'How many protons does Carbon have?',opts:['4','6','8','12'],ans:1,exp:'Carbon (C) has atomic number 6, meaning 6 protons.'},
    {q:'Which element makes up 78% of air?',opts:['Oxygen','Nitrogen','Argon','Carbon dioxide'],ans:1,exp:'Nitrogen (N₂) is the most abundant gas in Earth\'s atmosphere at 78%.'},
    {q:'What is the atomic number of Hydrogen?',opts:['1','2','0','3'],ans:0,exp:'Hydrogen is the simplest element with just 1 proton.'},
    {q:'Which element is liquid at room temperature?',opts:['Gallium','Mercury','Bromine','Lead'],ans:1,exp:'Mercury (Hg) is the only metal that is liquid at room temperature.'},
    {q:'What is the symbol for Sodium?',opts:['So','Sd','Na','N'],ans:2,exp:'Na comes from the Latin "Natrium". Sodium is a highly reactive alkali metal.'},
    {q:'Which gas do plants use in photosynthesis?',opts:['O₂','N₂','CO₂','H₂'],ans:2,exp:'Plants absorb CO₂ and release O₂ during photosynthesis.'},
    {q:'What is the most abundant element in the human body by mass?',opts:['Carbon','Hydrogen','Oxygen','Calcium'],ans:2,exp:'Oxygen makes up about 65% of the human body by mass.'},
    {q:'Which element has the symbol Fe?',opts:['Fluorine','Francium','Iron','Fermium'],ans:2,exp:'Fe comes from the Latin "Ferrum" meaning iron.'},
    {q:'Noble gases are in which group?',opts:['Group 1','Group 17','Group 18','Group 2'],ans:2,exp:'Noble gases (He, Ne, Ar, etc.) occupy Group 18 — they are very stable.'}
  ],
  medium:[
    {q:'Which element has the highest electronegativity?',opts:['Oxygen','Chlorine','Fluorine','Nitrogen'],ans:2,exp:'Fluorine has the highest electronegativity (3.98 Pauling) of all elements.'},
    {q:'What is the electron configuration of Carbon?',opts:['1s²2s²2p⁴','1s²2s²2p²','1s²2s²2p⁶','1s²2s⁴'],ans:1,exp:'Carbon (Z=6) has configuration [He] 2s²2p², giving 4 valence electrons.'},
    {q:'Which reaction type is: A + BC → AC + B?',opts:['Synthesis','Decomposition','Single displacement','Double displacement'],ans:2,exp:'In single displacement, a more reactive element replaces a less reactive one in a compound.'},
    {q:'What does the ionization energy measure?',opts:['Energy to add an electron','Energy to remove an electron','Nuclear binding energy','Lattice energy'],ans:1,exp:'Ionization energy is the energy needed to remove an electron from a gaseous atom.'},
    {q:'Across a period, atomic radius generally:',opts:['Increases','Decreases','Stays same','Doubles'],ans:1,exp:'Atomic radius decreases across a period as more protons attract electrons more strongly.'},
    {q:'Which of these is a metalloid?',opts:['Aluminium','Silicon','Sulfur','Potassium'],ans:1,exp:'Silicon is a classic metalloid — it has properties of both metals and nonmetals.'},
    {q:'The Haber process produces which compound?',opts:['H₂SO₄','NH₃','NaCl','HNO₃'],ans:1,exp:'N₂ + 3H₂ → 2NH₃ (Haber process) is crucial for fertilizer production worldwide.'},
    {q:'What is the oxidation state of Cr in K₂Cr₂O₇?',opts:['+3','+6','+7','+4'],ans:1,exp:'In dichromate, Cr has oxidation state +6. It\'s a strong oxidizing agent.'},
    {q:'Which element was predicted by Mendeleev as "eka-silicon"?',opts:['Gallium','Scandium','Germanium','Technetium'],ans:2,exp:'Mendeleev predicted Germanium\'s existence and properties before it was discovered in 1886.'},
    {q:'In electrolysis of water, H₂ is produced at which electrode?',opts:['Anode','Cathode','Both','Neither'],ans:1,exp:'At the cathode (negative), 2H⁺ + 2e⁻ → H₂. Oxygen forms at the anode.'}
  ],
  hard:[
    {q:'What anomalous electron config does Copper have?',opts:['[Ar]3d¹⁰4s¹','[Ar]3d⁹4s²','[Ar]3d¹⁰4s²','[Ar]3d⁸4s²'],ans:0,exp:'Cu has [Ar]3d¹⁰4s¹ — one electron moves to fill the 3d orbital for extra stability.'},
    {q:'The spin-only magnetic moment of Fe³⁺ (5 unpaired e⁻) is approximately:',opts:['1.73 BM','3.87 BM','5.92 BM','4.90 BM'],ans:2,exp:'μ = √(n(n+2)) BM. For n=5: √35 ≈ 5.92 BM. Fe³⁺ is high-spin with 5 unpaired electrons.'},
    {q:'Which nuclear process occurs in the Sun?',opts:['Fission','Fusion','Radioactive decay','Electrolysis'],ans:1,exp:'The Sun fuses hydrogen nuclei into helium, releasing enormous energy (E=mc²).'},
    {q:'What is the bond order of O₂ according to MO theory?',opts:['1','2','3','2.5'],ans:1,exp:'O₂ has (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)² — bond order = (8-4)/2 = 2.'},
    {q:'Le Chatelier\'s principle states that a system at equilibrium:',opts:['Will always reach 100% conversion','Opposes any change imposed on it','Increases reaction rate with temperature','Favors exothermic reactions always'],ans:1,exp:'If a system at equilibrium is disturbed, it shifts to partially counteract that disturbance.'},
    {q:'What does the Aufbau principle describe?',opts:['Electron spin','Order electrons fill orbitals','Pauli exclusion','Heisenberg uncertainty'],ans:1,exp:'Aufbau (German: "building up") — electrons fill orbitals from lowest to highest energy.'},
    {q:'Which reaction has ΔH = -572 kJ/mol?',opts:['CH₄ combustion','2H₂ + O₂ → 2H₂O','HCl + NaOH neutralization','N₂ + 3H₂ → 2NH₃'],ans:1,exp:'The formation of 2 moles of water from H₂ and O₂ releases 572 kJ — the basis of H₂ fuel cells.'},
    {q:'Crystal field splitting energy (Δ) determines a complex\'s:',opts:['Polarity','Color and magnetic properties','Boiling point','Molecular geometry'],ans:1,exp:'Δ determines which d-d transitions are possible, causing color, and whether electrons pair (low/high spin).'},
    {q:'What is the lanthanide contraction?',opts:['Decreasing atomic radius across lanthanides','Shrinkage due to poor 4f shielding','Increase in nuclear charge','All of the above'],ans:3,exp:'All three describe lanthanide contraction — poor 4f shielding means 5d and 6s electrons feel more nuclear charge.'},
    {q:'Nernst equation relates EMF to:',opts:['Temperature only','Concentration and temperature','pH only','Activation energy'],ans:1,exp:'E = E° - (RT/nF)ln(Q). The Nernst equation accounts for non-standard conditions via concentration.'}
  ]
};

function setDiff(d, btn){
  quizDiff = d;
  document.querySelectorAll('.diff-btn').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
}

var quizCurrent = null, quizQIndex=0, quizCorrect=0, quizTotal=0, quizTimerInterval=null;

function startQuiz(){
  document.getElementById('quizStartScreen').style.display='none';
  document.getElementById('quizEndScreen').style.display='none';
  document.getElementById('quizArea').style.display='block';
  quizQIndex=0; quizCorrect=0; quizTotal=0;
  quizState.streak=0;
  updateQuizDisplay();
  loadQuestion();
}

function loadQuestion(){
  var pool = quizBank[quizDiff];
  var q = pool[quizQIndex % pool.length];
  quizCurrent = q;
  document.getElementById('quizQ').textContent = q.q;
  document.getElementById('quizQNum').textContent = 'Q'+(quizQIndex+1)+'/10';
  document.getElementById('quizProgressBar').style.width = (quizQIndex*10)+'%';
  document.getElementById('quizFeedback').style.display='none';

  var optsEl = document.getElementById('quizOpts');
  optsEl.innerHTML='';
  q.opts.forEach(function(opt, i){
    var btn = document.createElement('button');
    btn.className='quiz-opt';
    btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
    btn.onclick = function(){ answerQuiz(i, btn); };
    optsEl.appendChild(btn);
  });

  // Timer
  clearInterval(quizTimerInterval);
  var timeLeft = quizDiff==='easy'?30:quizDiff==='medium'?20:15;
  document.getElementById('quizTimer').textContent=timeLeft+'s';
  document.getElementById('quizTimer').style.color='var(--accent)';
  quizTimerInterval = setInterval(function(){
    timeLeft--;
    document.getElementById('quizTimer').textContent=timeLeft+'s';
    if(timeLeft<=5) document.getElementById('quizTimer').style.color='var(--red)';
    if(timeLeft<=0){ clearInterval(quizTimerInterval); answerQuiz(-1, null); }
  },1000);
}

function answerQuiz(chosen, btn){
  clearInterval(quizTimerInterval);
  var q = quizCurrent;
  var correct = chosen === q.ans;
  if(correct){ quizCorrect++; quizState.streak++; } else { quizState.streak=0; }
  quizTotal++;

  // Highlight options
  document.querySelectorAll('.quiz-opt').forEach(function(b, i){
    b.disabled=true;
    if(i===q.ans) b.classList.add('correct');
    else if(i===chosen) b.classList.add('wrong');
  });

  // Feedback
  var fb = document.getElementById('quizFeedback');
  fb.style.display='block';
  fb.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  var emoji = chosen===-1?'⏰':correct?'✅':'❌';
  document.getElementById('quizFeedbackText').innerHTML = emoji + ' ' + (chosen===-1?'Time\'s up! ':'') + (correct?'<strong>Correct!</strong> ':'<strong>Incorrect.</strong> ') + q.exp;

  updateQuizDisplay();
  if(quizQIndex>=9){ setTimeout(function(){endQuiz();},2000); }
}

function nextQuestion(){
  quizQIndex++;
  if(quizQIndex>=10){ endQuiz(); return; }
  loadQuestion();
}

function endQuiz(){
  clearInterval(quizTimerInterval);
  document.getElementById('quizArea').style.display='none';
  document.getElementById('quizEndScreen').style.display='block';
  var pct = Math.round(quizCorrect/10*100);
  var badge, emoji, title;
  if(pct>=90){badge='🏆 Grand Master';emoji='🌟';title='Outstanding!';}
  else if(pct>=70){badge='🥇 Chemistry Ace';emoji='🎉';title='Great Job!';}
  else if(pct>=50){badge='🥈 Apprentice';emoji='👍';title='Good effort!';}
  else{badge='🥉 Keep Studying';emoji='📚';title='Practice makes perfect!';}
  document.getElementById('quizEndEmoji').textContent=emoji;
  document.getElementById('quizEndTitle').textContent=title;
  document.getElementById('quizEndScore').textContent='You scored '+quizCorrect+'/10 ('+pct+'%) on '+quizDiff+' difficulty';
  var badgeEl=document.getElementById('quizBadge');
  badgeEl.textContent=badge;
  badgeEl.style.background=pct>=70?'rgba(16,185,129,.15)':'rgba(245,158,11,.12)';
  badgeEl.style.color=pct>=70?'var(--green)':'var(--yellow)';
  badgeEl.style.border='1px solid '+(pct>=70?'rgba(16,185,129,.3)':'rgba(245,158,11,.25)');
  saveLeaderboard(quizCorrect, pct, quizDiff);
  renderLeaderboard();
  // Task 3: persist quiz stats — record prev best BEFORE saving
  var prevBestBeforeSave = QuizStorage.getBestScore();
  var prevSessions = QuizStorage.getSessions();
  var streak3 = quizState ? quizState.streak : 0;
  QuizStorage.saveSession(quizCorrect, 10, streak3);
  // Show personal best comparison
  var pbEl = document.getElementById('quizPersonalBest');
  if (pbEl) {
    if (prevSessions === 0 || quizCorrect > prevBestBeforeSave) {
      pbEl.innerHTML = '<div style="color:var(--accent);font-weight:700;font-size:13px;margin-top:8px;">🏆 New personal best!</div>';
    } else {
      var pbTotal = QuizStorage.get('bestTotal') || 10;
      var pbPct = pbTotal > 0 ? Math.round((prevBestBeforeSave/pbTotal)*100) : 0;
      pbEl.innerHTML = '<div style="font-size:12px;color:var(--muted);margin-top:8px;">Your best: ' + prevBestBeforeSave + '/' + pbTotal + ' (' + pbPct + '%)</div>';
    }
  }
}

function updateQuizDisplay(){
  document.getElementById('streakCount').textContent=quizState.streak+(quizState.streak>=3?'🔥':'');
  document.getElementById('quizScore').textContent=quizCorrect;
}

function saveLeaderboard(score, pct, diff){
  var lb=JSON.parse(localStorage.getItem('quiz_lb')||'[]');
  lb.push({score:score,pct:pct,diff:diff,date:new Date().toLocaleDateString()});
  lb.sort(function(a,b){return b.score-a.score;});
  lb=lb.slice(0,10);
  localStorage.setItem('quiz_lb',JSON.stringify(lb));
}

function renderLeaderboard(){
  var lb=JSON.parse(localStorage.getItem('quiz_lb')||'[]');
  var el=document.getElementById('leaderboard');
  if(!lb.length){el.innerHTML='<div style="font-size:12px;color:var(--muted);text-align:center;padding:12px;">No scores yet. Take a quiz!</div>';return;}
  el.innerHTML=lb.map(function(e,i){
    return '<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;">'
      +'<span style="font-weight:700;min-width:18px;color:var(--muted);">'+(i+1)+'.</span>'
      +'<span style="flex:1;">'+e.score+'/10 ('+e.pct+'%)</span>'
      +'<span style="font-size:10px;padding:2px 7px;border-radius:6px;background:var(--s2);color:var(--muted);">'+e.diff+'</span>'
      +'<span style="font-size:10px;color:var(--muted2);">'+e.date+'</span>'
      +'</div>';
  }).join('');
}

// ===== REAL WORLD TAB =====
var realWorldData = [
  {el:'H',name:'Hydrogen',icon:'🔋',color:'#06b6d4',products:['Fuel cells','Rocket propellant','Hydrogenated oils'],industry:'Green energy & refining',env:'Clean fuel — only byproduct is water'},
  {el:'C',name:'Carbon',icon:'💎',color:'#1a202c',products:['Diamond','Graphite pencils','Carbon fibre bikes','Activated charcoal'],industry:'Steel, plastics, petrochemicals',env:'CO₂ from combustion drives climate change'},
  {el:'O',name:'Oxygen',icon:'🫁',color:'#06b6d4',products:['Medical O₂ tanks','Ozone layer','Rocket oxidizer'],industry:'Medical, steel, wastewater treatment',env:'Essential for all aerobic life; ozone protects from UV'},
  {el:'Si',name:'Silicon',icon:'💻',color:'#6366f1',products:['Microchips','Solar panels','Glass','Silicone rubber'],industry:'Electronics & photovoltaics',env:'Abundant & non-toxic; silicon mining has land impact'},
  {el:'Fe',name:'Iron',icon:'🏗️',color:'#8b5cf6',products:['Steel beams','Car bodies','Haemoglobin (blood)'],industry:'Construction, automotive, tools',env:'Rust (iron oxide) is natural; steel recycling saves energy'},
  {el:'Cu',name:'Copper',icon:'⚡',color:'#f97316',products:['Electrical wiring','Plumbing pipes','Coins','Bronze'],industry:'Electrical, construction, antimicrobial',env:'Copper leaching can be aquatically toxic; highly recyclable'},
  {el:'Au',name:'Gold',icon:'💰',color:'#eab308',products:['Jewelry','CPU connectors','Dental crowns'],industry:'Electronics, finance, jewelry',env:'Gold mining causes deforestation and mercury pollution'},
  {el:'Na',name:'Sodium',icon:'🧂',color:'#ef4444',products:['Table salt (NaCl)','Soap (NaOH)','Baking soda','Sodium lamps'],industry:'Food, chemical manufacturing',env:'Excess sodium in water can harm aquatic ecosystems'},
  {el:'Cl',name:'Chlorine',icon:'🏊',color:'#22c55e',products:['Swimming pool water','PVC plastic','Bleach','Disinfectants'],industry:'Chemicals, water treatment, plastics',env:'Chlorine gas is toxic; CFCs damaged ozone layer'},
  {el:'N',name:'Nitrogen',icon:'🌱',color:'#10b981',products:['Fertilizers (NH₃)','Explosives (TNT)','Food packaging','Liquid N₂'],industry:'Agriculture, food, mining',env:'Nitrogen runoff causes eutrophication in water bodies'},
  {el:'Al',name:'Aluminium',icon:'✈️',color:'#94a3b8',products:['Cans','Aircraft fuselage','Foil','Bicycle frames'],industry:'Aerospace, packaging, construction',env:'Bauxite mining is destructive; aluminium is infinitely recyclable'},
  {el:'Ca',name:'Calcium',icon:'🦴',color:'#f59e0b',products:['Bones & teeth','Cement','Chalk (CaCO₃)','Antacids'],industry:'Construction, medicine, food',env:'Calcium carbonate forms limestone landscapes and coral reefs'}
];

function buildRealWorld(){
  var grid = document.getElementById('realWorldGrid');
  if(!grid) return;
  grid.innerHTML = realWorldData.map(function(rw){
    return '<div class="rw-card">'
      +'<div class="rw-card-header">'
      +'<div style="display:flex;align-items:center;gap:10px;">'
      +'<div style="width:44px;height:44px;background:'+rw.color+'22;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;">'+rw.icon+'</div>'
      +'<div><div style="font-weight:700;font-size:15px;">'+rw.name+' ('+rw.el+')</div>'
      +'<div style="font-size:10px;color:var(--muted);">'+rw.industry+'</div></div></div></div>'
      +'<div class="rw-card-body">'
      +'<div style="font-size:11px;font-weight:600;color:var(--muted);margin-bottom:6px;">EVERYDAY PRODUCTS</div>'
      +'<div style="margin-bottom:10px;">'+rw.products.map(function(p){return '<span class="rw-tag">'+p+'</span>';}).join('')+'</div>'
      +'<div style="font-size:11px;color:var(--muted);line-height:1.5;">🌍 <strong>Environmental impact:</strong> '+rw.env+'</div>'
      +'</div></div>';
  }).join('');
}
setTimeout(buildRealWorld, 200);
setTimeout(renderLeaderboard, 200);

// ========== WHATSAPP SHARE ==========
function shareOnWhatsApp() {
  var hostedUrl = window.location.href.split('?')[0];
  var msg = encodeURIComponent(
    '🧪 *HerTech Chemistry* — Free interactive chemistry tool for Class 9–12 students!\n\n'
    + '✅ All 118 elements with 3D visualizers\n'
    + '✅ AI tutor that explains in Odia, Hindi & 6 more languages\n'
    + '✅ Virtual lab, equation balancer, NCERT notes\n'
    + '✅ Works offline — no app install needed\n\n'
    + '👉 Open here: ' + hostedUrl + '\n\n'
    + '_Spread this to every chemistry student you know! 🙏_'
  );
  window.open('https://wa.me/?text=' + msg, '_blank');
}

// ========== ELEMENT DISCOVERY DATES (Task 8) ==========
var ELEMENT_DISCOVERY_DATES = {
  "01-10": [38, "Strontium", "Adair Crawford", 1790, "Named after Strontian, a Scottish village"],
  "02-08": [92, "Uranium",   "Martin Klaproth", 1789, "The heaviest naturally-occurring element"],
  "03-01": [88, "Radium",    "Marie & Pierre Curie", 1898, "Marie Curie won two Nobel Prizes for this discovery"],
  "03-28": [86, "Radon",     "Friedrich Ernst Dorn", 1900, "First radioactive noble gas discovered"],
  "04-07": [44, "Ruthenium", "Karl Ernst Claus", 1844, "Named after Ruthenia, the Latin name for Russia"],
  "05-30": [2,  "Helium",    "Pierre Janssen", 1868, "First discovered in the Sun's spectrum, not on Earth"],
  "06-04": [91, "Protactinium", "Otto Hahn", 1913, "One of the rarest naturally occurring elements"],
  "07-02": [27, "Cobalt",    "Georg Brandt", 1735, "First metal shown to be magnetic besides iron"],
  "08-26": [18, "Argon",     "Lord Rayleigh & William Ramsay", 1894, "Name means 'lazy' in Greek"],
  "09-04": [78, "Platinum",  "Antonio de Ulloa", 1748, "More valuable than gold for industrial use"],
  "10-10": [1,  "Hydrogen",  "Henry Cavendish", 1766, "The most abundant element in the universe"],
  "11-08": [88, "Radium",    "Marie Curie", 1898, "Curie coined the term 'radioactivity'"],
  "12-01": [80, "Mercury",   "Known to ancients", 1500, "The only metal that is liquid at room temperature"]
};

function getChemistryDayCard() {
  var now  = new Date();
  var mm   = String(now.getMonth() + 1).padStart(2, '0');
  var dd   = String(now.getDate()).padStart(2, '0');
  var key  = mm + '-' + dd;
  var entry = ELEMENT_DISCOVERY_DATES[key];
  var label = 'On this day';
  if (!entry) {
    var today = now.getMonth() * 31 + now.getDate();
    var nearest = null, nearestDist = 999;
    Object.keys(ELEMENT_DISCOVERY_DATES).forEach(function(k) {
      var parts = k.split('-');
      var dist  = Math.abs((parseInt(parts[0]) - 1) * 31 + parseInt(parts[1]) - today);
      if (dist < nearestDist) { nearestDist = dist; nearest = k; }
    });
    entry = ELEMENT_DISCOVERY_DATES[nearest];
    label = 'This week in chemistry';
  }
  if (!entry) return '';
  var atomicNum = entry[0], name = entry[1], discoverer = entry[2], year = entry[3], fact = entry[4];
  var el = elMap[atomicNum];
  var color = '#7c9fff';
  if (el) {
    var catColors = {
      'alkali':'#ef4444','alkaline':'#f97316','transition-metal':'#8b5cf6',
      'post-transition':'#6366f1','metalloid':'#14b8a6','nonmetal':'#22c55e',
      'halogen':'#eab308','noble-gas':'#06b6d4','lanthanide':'#ec4899','actinide':'#f43f5e'
    };
    color = catColors[el.cat] || '#7c9fff';
  }
  return '<div id="chemistry-day-card" style="position:relative;background:linear-gradient(135deg,rgba(124,159,255,0.12),rgba(124,159,255,0.04));border:1px solid rgba(124,159,255,0.3);border-radius:14px;padding:16px 18px;margin-bottom:18px;cursor:pointer;transition:border-color 0.2s;overflow:hidden;" onclick="openEl(' + atomicNum + ')" onmouseover=\"this.style.borderColor=\'rgba(124,159,255,0.6)\'\" onmouseout=\"this.style.borderColor=\'rgba(124,159,255,0.3)\'\" title="Click to explore ' + name + '">'
    + '<div style="font-size:11px;font-weight:600;letter-spacing:0.07em;opacity:0.55;text-transform:uppercase;margin-bottom:8px;">📅 ' + label + '</div>'
    + '<div style="display:flex;align-items:center;gap:14px;">'
    + '<div style="font-size:36px;font-weight:800;color:' + color + ';line-height:1;min-width:60px;text-align:center;font-family:\'Space Mono\',monospace;">' + (el ? el.sym : '?') + '</div>'
    + '<div><div style="font-size:16px;font-weight:600;margin-bottom:3px;">' + name + ' was discovered</div>'
    + '<div style="font-size:13px;opacity:0.7;line-height:1.5;">by <strong>' + discoverer + '</strong> in ' + year + '<br><em style="opacity:0.8;font-size:12px;">' + fact + '</em></div></div>'
    + '</div>'
    + '<div style="position:absolute;right:16px;bottom:14px;font-size:11px;opacity:0.4;">Click to explore →</div>'
    + '</div>';
}
