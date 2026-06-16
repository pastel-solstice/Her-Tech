// HerTech — Element modal, Three.js 3D atom viewer, Bohr model canvas renderer
/* global THREE */

// ===== ELEMENT MODAL — THREE.JS 3D WEBGL BOHR ENGINE =====
var currentEl=null;

// ── Three.js scene (created once, reused) ────────────────────────────────
var w3d={
  renderer:null,scene:null,camera:null,
  nucleusG:null,orbitG:null,electronG:null,glowG:null,
  electrons:[],
  playing:true,showOrbits:true,showGlow:true,spinCam:false,
  camAngle:0,camT:0,t:0,raf:null,
  ORBIT_R:[0,28,46,64,82,100,116,132],
  ORBIT_COLORS:[0x9d8fff,0x4ecdc4,0xf7c948,0xf97c7c,0xa8e6cf,0xffd3b6,0xff8b94],
  ORBIT_TILTS:[0,18,38,-22,52,-42,28],
  SPEEDS:[0,1.0,0.64,0.44,0.32,0.25,0.20,0.16],
  TRAIL_LEN:28
};

function w3dInit(){
  var cv=document.getElementById('bohrCv');
  var parent=cv.parentElement;
  var W=parent.offsetWidth||480;
  var H=parent.offsetHeight||520;
  if(!w3d.renderer){
    if(typeof THREE==='undefined'){return;}
    var renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    renderer.setClearColor(0x000000,0);
    w3d.renderer=renderer;
    var scene=new THREE.Scene();
    w3d.scene=scene;
    var camera=new THREE.PerspectiveCamera(50,W/H,0.1,1000);
    camera.position.set(0,50,165);
    camera.lookAt(0,0,0);
    w3d.camera=camera;
    // lighting
    scene.add(new THREE.AmbientLight(0x1a1a3e,2.5));
    var pl1=new THREE.PointLight(0x7c6af7,5,280);pl1.position.set(0,0,0);scene.add(pl1);
    var pl2=new THREE.PointLight(0x4ecdc4,2,200);pl2.position.set(70,40,60);scene.add(pl2);
    var pl3=new THREE.PointLight(0xf7c948,1.5,180);pl3.position.set(-55,-30,40);scene.add(pl3);
    w3d.pl1=pl1;
    // groups
    w3d.nucleusG=new THREE.Group();scene.add(w3d.nucleusG);
    w3d.orbitG=new THREE.Group();scene.add(w3d.orbitG);
    w3d.electronG=new THREE.Group();scene.add(w3d.electronG);
    w3d.glowG=new THREE.Group();scene.add(w3d.glowG);
    // background particles
    var pGeo=new THREE.BufferGeometry();
    var pPos=new Float32Array(220*3);
    for(var i=0;i<220;i++){pPos[i*3]=(Math.random()-.5)*450;pPos[i*3+1]=(Math.random()-.5)*450;pPos[i*3+2]=(Math.random()-.5)*450;}
    pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));
    scene.add(new THREE.Points(pGeo,new THREE.PointsMaterial({color:0x4040a0,size:0.7,transparent:true,opacity:0.4})));
  }
  w3d.renderer.setSize(W,H);
  w3d.camera.aspect=W/H;
  w3d.camera.updateProjectionMatrix();
}

function w3dClearGroup(g){while(g&&g.children.length){var c=g.children[0];if(c.geometry)c.geometry.dispose();if(c.material)c.material.dispose();g.remove(c);}}

function w3dBuildNucleus(p,n){
  w3dClearGroup(w3d.nucleusG);
  var total=Math.min(p+n,22);
  var golden=2.399963;
  var spread=Math.min(3+total*0.52,10);
  for(var i=0;i<total;i++){
    var r_pos=spread*Math.sqrt(i/Math.max(total-1,1));
    var theta=i*golden;
    var phi=Math.acos(1-2*(i+0.5)/total);
    var x=r_pos*Math.sin(phi)*Math.cos(theta);
    var y=r_pos*Math.sin(phi)*Math.sin(theta);
    var z=r_pos*Math.cos(phi);
    var isP=i<p;
    var geo=new THREE.SphereGeometry(1.55,12,12);
    var mat=new THREE.MeshStandardMaterial({
      color:isP?new THREE.Color(0xf97c7c):new THREE.Color(0x7cc4f9),
      roughness:0.25,metalness:0.5,
      emissive:isP?new THREE.Color(0x3a0808):new THREE.Color(0x081828),
      emissiveIntensity:0.45
    });
    var mesh=new THREE.Mesh(geo,mat);
    mesh.position.set(x,y,z);
    w3d.nucleusG.add(mesh);
  }
  var gGeo=new THREE.SphereGeometry(spread+5,14,14);
  var gMat=new THREE.MeshBasicMaterial({color:0x7c3aed,transparent:true,opacity:0.055,side:THREE.BackSide});
  w3d.nucleusG.add(new THREE.Mesh(gGeo,gMat));
}

function w3dGetShells(n){
  var shells=[],rem=n,caps=[2,8,18,32,18,12,32];
  for(var i=0;i<7&&rem>0;i++){var c=Math.min(rem,caps[i]||32);shells.push(c);rem-=c;}
  return shells;
}

function w3dBuildOrbits(shells){
  w3dClearGroup(w3d.orbitG);
  if(!w3d.showOrbits)return;
  shells.forEach(function(cnt,si){
    if(!cnt||cnt<=0)return;
    var r=w3d.ORBIT_R[si+1]||(28+si*18);
    // Guard: r must be a finite positive number
    if(!isFinite(r)||r<=0)return;
    var col=w3d.ORBIT_COLORS[si%w3d.ORBIT_COLORS.length];
    var tiltX=w3d.ORBIT_TILTS[si%w3d.ORBIT_TILTS.length]*Math.PI/180;
    var tiltZ=(si*9)*Math.PI/180;
    var geo=new THREE.TorusGeometry(r,0.32,7,110);
    var mat=new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:0.2});
    var ring=new THREE.Mesh(geo,mat);
    ring.rotation.x=Math.PI/2+tiltX;ring.rotation.z=tiltZ;
    w3d.orbitG.add(ring);
    var geo2=new THREE.TorusGeometry(r,0.9,5,110);
    var mat2=new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:0.055});
    var ring2=new THREE.Mesh(geo2,mat2);
    ring2.rotation.x=Math.PI/2+tiltX;ring2.rotation.z=tiltZ;
    w3d.orbitG.add(ring2);
  });
}

function w3dBuildElectrons(shells){
  w3dClearGroup(w3d.electronG);
  w3dClearGroup(w3d.glowG);
  w3d.electrons=[];
  shells.forEach(function(cnt,si){
    if(!cnt||cnt<=0)return;
    var r=w3d.ORBIT_R[si+1]||(28+si*18);
    // Guard: radius must be finite and positive
    if(!isFinite(r)||r<=0)r=28+si*18;
    var col=w3d.ORBIT_COLORS[si%w3d.ORBIT_COLORS.length];
    var speed=w3d.SPEEDS[si+1]||0.18;
    var tiltX=w3d.ORBIT_TILTS[si%w3d.ORBIT_TILTS.length]*Math.PI/180;
    var tiltZ=(si*9)*Math.PI/180;
    for(var e=0;e<cnt;e++){
      // Guard: cnt must be >0 to avoid division by zero in phase calculation
      var phase=cnt>0?(2*Math.PI*e)/cnt:0;
      // Guard: ensure phase is finite
      if(!isFinite(phase))phase=0;
      var geo=new THREE.SphereGeometry(1.35,10,10);
      var mat=new THREE.MeshStandardMaterial({color:new THREE.Color(col),emissive:new THREE.Color(col),emissiveIntensity:1.2,roughness:0.1,metalness:0.1});
      var mesh=new THREE.Mesh(geo,mat);
      w3d.electronG.add(mesh);
      var gGeo=new THREE.SphereGeometry(4,7,7);
      var gMat=new THREE.MeshBasicMaterial({color:new THREE.Color(col),transparent:true,opacity:w3d.showGlow?0.12:0});
      var gMesh=new THREE.Mesh(gGeo,gMat);
      w3d.glowG.add(gMesh);
      // Compute a safe starting world position for trail pre-fill
      var px0=r*Math.cos(phase),py0=0,pz0=r*Math.sin(phase);
      var cosTX=Math.cos(tiltX),sinTX=Math.sin(tiltX);
      var py0r=py0*cosTX-pz0*sinTX,pz0r=py0*sinTX+pz0*cosTX;
      var cosTZ=Math.cos(tiltZ),sinTZ=Math.sin(tiltZ);
      var fx0=px0*cosTZ-py0r*sinTZ;
      var fy0=px0*sinTZ+py0r*cosTZ;
      var fz0=pz0r;
      // Final NaN guard on computed start position
      if(!isFinite(fx0))fx0=r;
      if(!isFinite(fy0))fy0=0;
      if(!isFinite(fz0))fz0=0;
      // Pre-fill entire trail buffer with the safe start position (prevents NaN bounding sphere)
      var tBuf=new Float32Array(w3d.TRAIL_LEN*3);
      for(var tp=0;tp<w3d.TRAIL_LEN;tp++){tBuf[tp*3]=fx0;tBuf[tp*3+1]=fy0;tBuf[tp*3+2]=fz0;}
      var tAttr=new THREE.BufferAttribute(tBuf,3);tAttr.setUsage(THREE.DynamicDrawUsage);
      var tGeo=new THREE.BufferGeometry();
      tGeo.setAttribute('position',tAttr);
      // Explicitly compute bounding sphere now while positions are guaranteed finite
      tGeo.computeBoundingSphere();
      tGeo.setDrawRange(0,1);
      var tMat=new THREE.LineBasicMaterial({color:new THREE.Color(col),transparent:true,opacity:0});
      var line=new THREE.Line(tGeo,tMat);
      // Disable frustum culling — avoids Three.js recomputing bounding sphere during animation
      line.frustumCulled=false;
      w3d.electronG.add(line);
      w3d.electrons.push({mesh:mesh,gMesh:gMesh,line:line,buf:tBuf,attr:tAttr,head:0,speed:speed,radius:r,phase:phase,tiltX:tiltX,tiltZ:tiltZ,fill:0});
    }
  });
}

function w3dPosElectron(el,angle){
  // Guard angle
  if(!isFinite(angle))angle=el.phase||0;
  var lx=el.radius*Math.cos(angle),ly=0,lz=el.radius*Math.sin(angle);
  var cosTX=Math.cos(el.tiltX),sinTX=Math.sin(el.tiltX);
  var y1=ly*cosTX-lz*sinTX,z1=ly*sinTX+lz*cosTX;
  var cosTZ=Math.cos(el.tiltZ),sinTZ=Math.sin(el.tiltZ);
  var x2=lx*cosTZ-y1*sinTZ,y2=lx*sinTZ+y1*cosTZ,z2=z1;
  // Guard: skip write if any coordinate is NaN/Infinity
  if(!isFinite(x2)||!isFinite(y2)||!isFinite(z2))return;
  el.mesh.position.set(x2,y2,z2);
  el.gMesh.position.set(x2,y2,z2);
  // write new point into ring buffer at head position
  var h=el.head;
  el.buf[h*3]=x2;el.buf[h*3+1]=y2;el.buf[h*3+2]=z2;
  el.head=(h+1)%w3d.TRAIL_LEN;
  if(el.fill<w3d.TRAIL_LEN)el.fill++;
  el.attr.needsUpdate=true;
  // grow draw range until buffer full, then hold at TRAIL_LEN
  el.line.geometry.setDrawRange(0,el.fill);
  el.line.material.opacity=el.fill>4?Math.min(el.fill/w3d.TRAIL_LEN,0.3):0;
}

function w3dFrame(){
  if(!w3d.renderer||!w3d.scene||!w3d.camera)return;
  if(w3d.playing)w3d.t+=0.022;
  w3d.camT+=0.018;
  var pulse=1+0.018*Math.sin(w3d.t*2.1);
  if(w3d.nucleusG){w3d.nucleusG.scale.setScalar(pulse);w3d.nucleusG.rotation.y=w3d.t*0.22;}
  if(w3d.spinCam)w3d.camAngle+=0.008;
  var camR=168,camY=48+14*Math.sin(w3d.camT);
  w3d.camera.position.x=camR*Math.sin(w3d.camAngle);
  w3d.camera.position.y=camY;
  w3d.camera.position.z=camR*Math.cos(w3d.camAngle);
  w3d.camera.lookAt(0,0,0);
  w3d.electrons.forEach(function(el){
    var angle=w3d.playing?w3d.t*el.speed+el.phase:el.phase;
    w3dPosElectron(el,angle);
  });
  w3d.renderer.render(w3d.scene,w3d.camera);
  w3d.raf=requestAnimationFrame(w3dFrame);
}

function w3dStart(el){
  if(typeof THREE==='undefined')return;
  if(w3d.raf){cancelAnimationFrame(w3d.raf);w3d.raf=null;}
  w3dInit();
  var p=el.n;
  var n=el.mass?Math.round(parseFloat(String(el.mass).replace(/[\[\]]/g,''))-el.n):el.n;if(!isFinite(n)||n<0)n=Math.round(el.n*1.3);
  document.getElementById('a3dSym').textContent=el.sym||'?';
  document.getElementById('a3dName').textContent=el.name||'';
  document.getElementById('a3dP').textContent=el.n||0;
  document.getElementById('a3dN').textContent=n;
  document.getElementById('a3dE').textContent=el.n||0;
  var shells=w3dGetShells(el.n);
  w3dBuildNucleus(el.n,n);
  w3dBuildOrbits(shells);
  w3dBuildElectrons(shells);
  w3dFrame();
}

function w3dStop(){if(w3d.raf){cancelAnimationFrame(w3d.raf);w3d.raf=null;}}

// controls
window.w3dTogglePlay=function(){
  w3d.playing=!w3d.playing;
  var btn=document.getElementById('w3dPlayBtn');
  if(btn)btn.textContent=w3d.playing?'⏸':'▶';
};
window.w3dToggleOrbits=function(){
  w3d.showOrbits=!w3d.showOrbits;
  if(w3d.orbitG)w3d.orbitG.visible=w3d.showOrbits;
  var btn=document.getElementById('w3dOrbitBtn');
  if(btn){btn.style.background=w3d.showOrbits?'rgba(120,100,255,.18)':'rgba(40,40,80,.5)';btn.style.borderColor=w3d.showOrbits?'rgba(120,100,255,.4)':'rgba(255,255,255,.1)';}
};
window.w3dToggleGlow=function(){
  w3d.showGlow=!w3d.showGlow;
  if(w3d.glowG)w3d.glowG.visible=w3d.showGlow;
  var btn=document.getElementById('w3dGlowBtn');
  if(btn){btn.style.background=w3d.showGlow?'rgba(120,100,255,.18)':'rgba(40,40,80,.5)';btn.style.borderColor=w3d.showGlow?'rgba(120,100,255,.4)':'rgba(255,255,255,.1)';}
};
window.w3dToggleSpin=function(){
  w3d.spinCam=!w3d.spinCam;
  var btn=document.getElementById('w3dSpinBtn');
  if(btn){btn.style.background=w3d.spinCam?'rgba(120,100,255,.18)':'rgba(14,14,36,.8)';btn.style.borderColor=w3d.spinCam?'rgba(120,100,255,.4)':'rgba(255,255,255,.12)';btn.style.color=w3d.spinCam?'#b0a0ff':'rgba(255,255,255,.5)';}
};

function openEl(n){
  var el=elMap[n];if(!el)el={n:n,sym:(lantN[n]||actN[n]||symN[n]||[String(n),'Element '+n])[0],name:(lantN[n]||actN[n]||symN[n]||[,'Element '+n])[1]||'Element '+n,cat:n>=57&&n<=71?'lanthanide':n>=89&&n<=103?'actinide':'transition-metal'};
  var cc={alkali:'#ef4444',alkaline:'#f97316','transition-metal':'#8b5cf6','post-transition':'#6366f1',metalloid:'#14b8a6',nonmetal:'#22c55e',halogen:'#eab308','noble-gas':'#06b6d4',lanthanide:'#ec4899',actinide:'#f43f5e'};
  var cn={alkali:'Alkali Metal',alkaline:'Alkaline Earth','transition-metal':'Transition Metal','post-transition':'Post-Transition',metalloid:'Metalloid',nonmetal:'Nonmetal',halogen:'Halogen','noble-gas':'Noble Gas',lanthanide:'Lanthanide',actinide:'Actinide'};
  document.getElementById('elN').textContent='Z = '+n;
  document.getElementById('elSym').textContent=el.sym;
  document.getElementById('elName').textContent=el.name;
  var ct=document.getElementById('elCat');ct.textContent=cn[el.cat]||el.cat;ct.style.backgroundColor=(cc[el.cat]||'#6366f1')+'22';ct.style.color=cc[el.cat]||'#6366f1';ct.style.border='1px solid '+(cc[el.cat]||'#6366f1')+'44';
  document.getElementById('elMass').textContent=(el.mass||'?')+' u | G'+(el.g||'?')+' | P'+(el.p||'?');
  document.getElementById('elCfg').textContent=el.cfg||'—';
  document.getElementById('elVal').textContent=el.val!=null?el.val:'—';
  document.getElementById('elProt').textContent=n;
  document.getElementById('elEl').textContent=n;
  document.getElementById('elNeut').textContent=el.mass?Math.round(parseFloat(String(el.mass).replace(/[\[\]]/g,''))-n):'—';
  document.getElementById('elSt').textContent=el.state||'—';
  document.getElementById('elR').textContent=el.r?el.r+' pm':'—';
  document.getElementById('elIE').textContent=el.ie?el.ie+' kJ/mol':'—';
  document.getElementById('elEN').textContent=el.en!=null?el.en:'—';
  document.getElementById('elEA').textContent=el.ea!=null?el.ea+' kJ/mol':'—';
  document.getElementById('elMP').textContent=el.mp?el.mp+' K':'—';
  document.getElementById('elBP').textContent=el.bp?el.bp+' K':'—';
  document.getElementById('elDens').textContent=el.dens?el.dens+' g/cm³':'—';
  document.getElementById('elSH').textContent=el.sh?el.sh+' J/(g·°C)':'—';
  document.getElementById('elOx').innerHTML=(el.ox||['—']).map(function(o){var cls=o==='0'?'ox-zero':o.startsWith('-')?'ox-neg':'ox-pos';return'<span class="ox-pill '+cls+'">'+o+'</span>';}).join('');
  var d=el.disc||{};
  document.getElementById('elHist').innerHTML=['Discovery Year','Discovered By','Named By','STSE Context','Hazards'].map(function(l,i){var v=[d.yr,d.by,d.named,d.stse,d.haz][i]||'—';return'<div class="hist-row"><span class="hl">'+l+'</span><span style="font-weight:600;font-size:11px;">'+v+'</span></div>';}).join('');
  document.getElementById('elUses').innerHTML=(el.uses||d.uses||['See textbook']).map(function(u){return'<div class="use-item">'+u+'</div>';}).join('');
  document.getElementById('elFact').textContent=el.fact||'Element '+n+'.';
  currentEl=el;window.currentEl=el;
  var _visited=JSON.parse(localStorage.getItem('ht_visited')||'[]');
  if(!_visited.includes(n)){_visited.push(n);localStorage.setItem('ht_visited',JSON.stringify(_visited));}
  updateProgressBadge();
  document.getElementById('elModal').style.display='flex';
  var _em=document.getElementById('elModal');if(_em)_em.classList.add('on');
  setTimeout(function(){w3dStart(el);},60);
}
function closeEl(){
  document.getElementById('elModal').style.display='none';
  var _em2=document.getElementById('elModal');if(_em2)_em2.classList.remove('on');
  w3dStop();
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeEl();});
