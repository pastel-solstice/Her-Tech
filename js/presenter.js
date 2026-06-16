// HerTech — Presenter mode overlay with timer and cue cards

var _presenterStep = 0;
var _presenterTimerInterval = null;
var _presenterSeconds = 0;
var _presenterOpen = false;

var PRESENTER_STEPS = [
  {
    badge: '1 / 3',
    title: 'The Problem',
    time: '(15 sec)',
    text: 'Meet Ananya, Class 11, Kandhamal district. NEET exam: March 15. No chemistry lab in her school. She downloads one file — this file — for free.',
    cue: 'CUE: Show the hero splash / About tab'
  },
  {
    badge: '2 / 3',
    title: 'The Solution',
    time: '(45 sec)',
    text: "She searches for Sodium — clicks it — sees the 3D atom, asks the AI 'Why does Na react with water?' in her own language. The AI explains in Odia. No tutor needed.",
    cue: "CUE: Search 'Na' → open modal → switch to Odia → type in AI chat"
  },
  {
    badge: '3 / 3',
    title: 'The Depth',
    time: '(30 sec)',
    text: 'She opens the Virtual Lab — drags sodium into water — sees the reaction. Then takes the quiz, earns a streak, and her best score is saved for tomorrow.',
    cue: 'CUE: Tools → Virtual Lab → drag Na → Challenge tab → show saved score'
  }
];

function renderPresenterStep() {
  var s = PRESENTER_STEPS[_presenterStep];
  document.getElementById('presenterStep').innerHTML =
    '<div style="display:inline-flex;align-items:center;gap:6px;margin-bottom:8px;">'
    + '<span style="background:rgba(99,102,241,.3);color:#a5b4fc;border-radius:20px;padding:2px 9px;font-size:9px;font-weight:800;">' + s.badge + '</span>'
    + '<span style="font-size:11px;font-weight:700;color:rgba(255,255,255,.85);">' + s.title + '</span>'
    + '<span style="font-size:9px;color:rgba(255,255,255,.35);">' + s.time + '</span>'
    + '</div>'
    + '<p style="font-size:12px;line-height:1.7;color:rgba(255,255,255,.8);margin:0 0 10px 0;">' + s.text + '</p>'
    + '<div style="background:rgba(99,102,241,.1);border-left:2px solid #6366f1;padding:6px 10px;border-radius:0 6px 6px 0;font-size:10px;color:#a5b4fc;line-height:1.5;">' + s.cue + '</div>';
  document.getElementById('presenterStepNum').textContent = s.badge;
  document.getElementById('presenterPrevBtn').style.opacity = _presenterStep === 0 ? '0.3' : '1';
  document.getElementById('presenterNextBtn').style.opacity = _presenterStep === 2 ? '0.3' : '1';
}

function presenterNext() { if (_presenterStep < 2) { _presenterStep++; renderPresenterStep(); } }
function presenterPrev() { if (_presenterStep > 0) { _presenterStep--; renderPresenterStep(); } }

function openPresenter() {
  _presenterOpen = true;
  _presenterStep = 0;
  _presenterSeconds = 0;
  document.getElementById('presenterOverlay').style.display = 'block';
  renderPresenterStep();
  _presenterTimerInterval = setInterval(function() {
    _presenterSeconds++;
    var m = Math.floor(_presenterSeconds / 60);
    var s = _presenterSeconds % 60;
    var timerEl = document.getElementById('presenterTimer');
    if (timerEl) timerEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
  }, 1000);
}

function closePresenter() {
  _presenterOpen = false;
  document.getElementById('presenterOverlay').style.display = 'none';
  if (_presenterTimerInterval) { clearInterval(_presenterTimerInterval); _presenterTimerInterval = null; }
}

document.addEventListener('keydown', function(e) {
  if (e.shiftKey && e.key === 'P') {
    if (_presenterOpen) closePresenter(); else openPresenter();
  }
});


// ========== TASK 4: PRESENTER MODE ==========
var _presenterStep = 0;
var _presenterTimerInterval = null;
var _presenterSeconds = 0;

var PRESENTER_STEPS = [
  {
    badge: '1 / 3 — The Problem (15 sec)',
    text: 'Meet Ananya, Class 11, Kandhamal district. NEET exam: March 15. No chemistry lab in her school. She downloads one file — this file — for free.',
    cue: '▶ CUE: Show the hero splash / About tab'
  },
  {
    badge: '2 / 3 — The Solution (45 sec)',
    text: 'She searches for Sodium — clicks it — sees the 3D atom, asks the AI "Why does Na react with water?" in her own language. The AI explains in Odia. No tutor needed.',
    cue: '▶ CUE: Search "Na" → open modal → switch to Odia → type in AI chat'
  },
  {
    badge: '3 / 3 — The Depth (30 sec)',
    text: 'She opens the Virtual Lab — drags sodium into water — sees the reaction. Then takes the quiz, earns a streak, and her best score is saved for tomorrow.',
    cue: '▶ CUE: Tools → Virtual Lab → drag Na → Challenge tab → show saved score'
  }
];

function renderPresenterStep() {
  var s = PRESENTER_STEPS[_presenterStep];
  document.getElementById('presenterStepContent').innerHTML =
    '<div class="presenter-step-badge">' + s.badge + '</div>' +
    '<div style="line-height:1.6;margin-bottom:4px;">' + s.text + '</div>' +
    '<div class="presenter-cue">' + s.cue + '</div>';
}

function presenterNext() {
  _presenterStep = Math.min(_presenterStep + 1, PRESENTER_STEPS.length - 1);
  renderPresenterStep();
}

function presenterPrev() {
  _presenterStep = Math.max(_presenterStep - 1, 0);
  renderPresenterStep();
}

function togglePresenter() {
  var ov = document.getElementById('presenterOverlay');
  var isActive = ov.classList.toggle('active');
  if (isActive) {
    _presenterStep = 0;
    _presenterSeconds = 0;
    renderPresenterStep();
    _presenterTimerInterval = setInterval(function() {
      _presenterSeconds++;
      var m = Math.floor(_presenterSeconds / 60);
      var s = _presenterSeconds % 60;
      document.getElementById('presenterTimer').textContent =
        m + ':' + (s < 10 ? '0' : '') + s;
    }, 1000);
  } else {
    if (_presenterTimerInterval) { clearInterval(_presenterTimerInterval); _presenterTimerInterval = null; }
  }
}

document.addEventListener('keydown', function(e) {
  if (e.shiftKey && e.key === 'P') { e.preventDefault(); togglePresenter(); }
});
