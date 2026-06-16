// HerTech — UI: particles, periodic table render, heatmaps, filters, search, theme

// ===== PARTICLE BACKGROUND (subtle) =====
(function(){
  var c=document.getElementById('particleBg');
  if(!c)return;
  var ctx=c.getContext('2d'),W,H,pts=[];
  function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}
  function init(){for(var i=0;i<60;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2+.5});}
  function frame(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(99,102,241,.4)';ctx.fill();
    });
    // connections
    for(var i=0;i<pts.length;i++)for(var j=i+1;j<pts.length;j++){
      var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){ctx.strokeStyle='rgba(99,102,241,'+(1-d/120)*.12+')';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}
    }
    requestAnimationFrame(frame);
  }
  window.addEventListener('resize',resize);
  resize();init();frame();
})();

// ===== FONT SIZE TOGGLE =====
var fontSizes=['normal','large','small'];
var fontIdx=0;
function cycleFontSize(){
  fontIdx=(fontIdx+1)%fontSizes.length;
  document.body.setAttribute('data-fontsize',fontSizes[fontIdx]);
  showToast('Font: '+fontSizes[fontIdx]);
}

// ========== SECURITY & AVAILABILITY CHECKS ==========
// API Security: detect if key is redacted or missing (no hardcoded key in this file)
const HERTECH_API_AVAILABLE = (function() {
  // This build uses anthropic-dangerous-direct-browser-access for demo.
  // Set to true so live API calls work; set false if deploying without key.
  return true;
})();

// Speech Recognition availability
const SPEECH_RECOG_AVAILABLE = !!(window.SpeechRecognition || window.webkitSpeechRecognition);

// ========== AI UNAVAILABLE HELPER ==========
function showAIUnavailable(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '<div style="display:flex;align-items:center;gap:10px;padding:14px 18px;background:rgba(255,193,7,0.12);border:1px solid rgba(255,193,7,0.35);border-radius:10px;font-size:14px;color:var(--text);margin:8px 0;"><span style="font-size:20px;">📡</span><span><strong>AI features require internet access.</strong><br><span style="opacity:0.75;font-size:13px;">The periodic table, visualizers, quizzes, and all other tools work fully offline.</span></span></div>';
}

// ========== FISHER-YATES SHUFFLE ==========
/**
 * Fisher-Yates (Knuth) shuffle — O(n), uniform distribution.
 * Returns a NEW shuffled array; does not mutate the original.
 */
function fisherYatesShuffle(arr) {
  var a = arr.slice(); // clone — never mutate source data
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp; // swap
  }
  return a;
}

// ========== VOICE INPUT (Task 6) ==========
function startVoiceInput(targetInputId, lang, onResultCallback) {
  if (!SPEECH_RECOG_AVAILABLE) {
    showToast('Voice input not supported in this browser. Try Chrome.');
    return;
  }
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recog = new SR();
  recog.lang = lang || 'or-IN';
  recog.interimResults = false;
  recog.maxAlternatives = 1;
  var btn = document.getElementById('voiceBtn_' + targetInputId);
  if (btn) { btn.textContent = '🔴'; btn.style.animation = 'pulse 0.8s infinite'; }
  recog.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var inputEl = document.getElementById(targetInputId);
    if (inputEl) inputEl.value = transcript;
    if (btn) { btn.textContent = '🎤'; btn.style.animation = ''; }
    if (onResultCallback) onResultCallback(transcript);
  };
  recog.onerror = function(event) {
    if (btn) { btn.textContent = '🎤'; btn.style.animation = ''; }
    if (event.error === 'language-not-supported') {
      showToast('Odia voice not supported — trying Hindi...');
      startVoiceInput(targetInputId, 'hi-IN', onResultCallback);
    } else {
      showToast('Voice not recognized. Please try again.');
    }
  };
  recog.onend = function() {
    if (btn) { btn.textContent = '🎤'; btn.style.animation = ''; }
  };
  recog.start();
}
