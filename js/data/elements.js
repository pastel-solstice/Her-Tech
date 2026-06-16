// HerTech — Element data, discovery dates, NCERT mappings
// 118 elements with full property sets

// ===== ELEMENT DATA =====
var EL=[
  {n:1,sym:'H',name:'Hydrogen',mass:'1.008',cat:'nonmetal',g:1,p:1,state:'Gas',cfg:'1s¹',val:1,ox:['+1','-1'],r:53,ie:1312,ea:73,en:2.20,metal:2,mp:14,bp:20,dens:0.09,sh:14.3,disc:{yr:1766,by:'Cavendish',named:'Lavoisier',stse:'Rocket fuel, fuel cells',haz:'Highly flammable',uses:['Rocket fuel (H₂)','Hydrogen fuel cells','Haber process (NH₃)']}  ,fact:'Hydrogen makes up 75% of all normal matter in the universe.'},
  {n:2,sym:'He',name:'Helium',mass:'4.003',cat:'noble-gas',g:18,p:1,state:'Gas',cfg:'1s²',val:0,ox:['0'],r:31,ie:2372,ea:0,en:null,metal:0,mp:1,bp:4,dens:0.16,sh:5.19,disc:{yr:1868,by:'Janssen',named:'Lockyer',stse:'MRI, balloons',haz:'Asphyxiant',uses:['MRI cooling','Balloons','Rocket pressurization']},fact:'Discovered in the Sun before found on Earth.'},
  {n:3,sym:'Li',name:'Lithium',mass:'6.941',cat:'alkali',g:1,p:2,state:'Solid',cfg:'[He] 2s¹',val:1,ox:['+1'],r:167,ie:520,ea:60,en:0.98,metal:95,mp:454,bp:1615,dens:0.53,sh:3.58,disc:{yr:1817,by:'Arfwedson',named:'Arfwedson',stse:'Li-ion batteries',haz:'Reacts with water',uses:['Li-ion batteries','Mood medication','Aircraft alloys']},fact:'Lightest solid metal — floats on water.'},
  {n:6,sym:'C',name:'Carbon',mass:'12.01',cat:'nonmetal',g:14,p:2,state:'Solid',cfg:'[He] 2s²2p²',val:4,ox:['+4','-4'],r:67,ie:1086,ea:122,en:2.55,metal:5,mp:3823,bp:4098,dens:2.26,sh:0.71,disc:{yr:-3000,by:'Antiquity',named:'Lavoisier',stse:'Organic chemistry',haz:'Combustible',uses:['Diamond & graphite','Carbon fiber','Steel']},fact:'Forms over 10 million compounds — more than any other element.'},
  {n:7,sym:'N',name:'Nitrogen',mass:'14.01',cat:'nonmetal',g:15,p:2,state:'Gas',cfg:'[He] 2s²2p³',val:5,ox:['-3','+3','+5'],r:56,ie:1402,ea:0,en:3.04,metal:2,mp:63,bp:77,dens:1.25,sh:1.04,disc:{yr:1772,by:'Rutherford',named:'Chaptal',stse:'Fertilizers',haz:'Asphyxiant',uses:['Fertilizers (Haber)','Liquid N₂','Food packaging']},fact:'78% of air is nitrogen, yet most organisms cannot use it directly.'},
  {n:8,sym:'O',name:'Oxygen',mass:'16.00',cat:'nonmetal',g:16,p:2,state:'Gas',cfg:'[He] 2s²2p⁴',val:6,ox:['-2','-1'],r:48,ie:1314,ea:141,en:3.44,metal:1,mp:55,bp:90,dens:1.43,sh:0.92,disc:{yr:1774,by:'Scheele & Priestley',named:'Lavoisier',stse:'Respiration',haz:'Accelerates combustion',uses:['Medical therapy','Steelmaking','Rocket oxidizer']},fact:'Oxygen makes up 65% of the human body by mass.'},
  {n:9,sym:'F',name:'Fluorine',mass:'19.00',cat:'halogen',g:17,p:2,state:'Gas',cfg:'[He] 2s²2p⁵',val:7,ox:['-1'],r:42,ie:1681,ea:328,en:3.98,metal:0,mp:53,bp:85,dens:1.70,sh:0.82,disc:{yr:1886,by:'Moissan',named:'Ampère',stse:'Teflon, toothpaste',haz:'Extremely corrosive',uses:['Teflon','Fluoride toothpaste','HFC refrigerants']},fact:'Most electronegative element (3.98) — reacts with almost everything.'},
  {n:10,sym:'Ne',name:'Neon',mass:'20.18',cat:'noble-gas',g:18,p:2,state:'Gas',cfg:'[He] 2s²2p⁶',val:0,ox:['0'],r:38,ie:2081,ea:0,en:null,metal:0,mp:25,bp:27,dens:0.90,sh:1.03,disc:{yr:1898,by:'Ramsay & Travers',named:'Ramsay',stse:'Neon signs',haz:'Asphyxiant',uses:['Neon signs','Cryogenics','Lasers']},fact:'Neon produces the characteristic red-orange glow in neon signs.'},
  {n:11,sym:'Na',name:'Sodium',mass:'22.99',cat:'alkali',g:1,p:3,state:'Solid',cfg:'[Ne] 3s¹',val:1,ox:['+1'],r:190,ie:496,ea:53,en:0.93,metal:97,mp:371,bp:1156,dens:0.97,sh:1.23,disc:{yr:1807,by:'Davy',named:'Davy',stse:'Salt, soap, lights',haz:'Reacts violently with water',uses:['Table salt (NaCl)','Sodium lamps','Soap (NaOH)']},fact:'Pure sodium catches fire in air and explodes in water, yet table salt is essential.'},
  {n:12,sym:'Mg',name:'Magnesium',mass:'24.31',cat:'alkaline',g:2,p:3,state:'Solid',cfg:'[Ne] 3s²',val:2,ox:['+2'],r:145,ie:738,ea:0,en:1.31,metal:85,mp:923,bp:1363,dens:1.74,sh:1.02,disc:{yr:1755,by:'Black',named:'Davy',stse:'Aircraft alloys, chlorophyll',haz:'Flammable powder',uses:['Aircraft alloys','Chlorophyll (photosynthesis)','Sparklers']},fact:'Every chlorophyll molecule has a Mg atom at its centre — it makes plants green.'},
  {n:13,sym:'Al',name:'Aluminium',mass:'26.98',cat:'post-transition',g:13,p:3,state:'Solid',cfg:'[Ne] 3s²3p¹',val:3,ox:['+3'],r:118,ie:578,ea:43,en:1.61,metal:75,mp:933,bp:2792,dens:2.70,sh:0.90,disc:{yr:1825,by:'Ørsted',named:'Davy',stse:'Cans, aircraft, cables',haz:'Dust explosive',uses:['Cans & packaging','Aircraft fuselage','Electrical cables']},fact:'Aluminium was once more valuable than gold — Napoleon used Al cutlery.'},
  {n:14,sym:'Si',name:'Silicon',mass:'28.09',cat:'metalloid',g:14,p:3,state:'Solid',cfg:'[Ne] 3s²3p²',val:4,ox:['+4','-4'],r:111,ie:786,ea:134,en:1.90,metal:25,mp:1687,bp:3538,dens:2.33,sh:0.71,disc:{yr:1824,by:'Berzelius',named:'Davy',stse:'Semiconductors, solar panels',haz:'Dust inhalation',uses:['Microchips','Solar panels','Glass']},fact:'Silicon Valley is named after this element — every device depends on it.'},
  {n:15,sym:'P',name:'Phosphorus',mass:'30.97',cat:'nonmetal',g:15,p:3,state:'Solid',cfg:'[Ne] 3s²3p³',val:5,ox:['+3','+5','-3'],r:98,ie:1012,ea:72,en:2.19,metal:5,mp:317,bp:554,dens:1.82,sh:0.77,disc:{yr:1669,by:'Brand',named:'Brand',stse:'Fertilizers, DNA',haz:'White P very toxic',uses:['Fertilizers','Match heads','DNA backbone']},fact:'Discovered by an alchemist searching for the Philosopher\'s Stone in urine.'},
  {n:16,sym:'S',name:'Sulfur',mass:'32.07',cat:'nonmetal',g:16,p:3,state:'Solid',cfg:'[Ne] 3s²3p⁴',val:6,ox:['-2','+4','+6'],r:88,ie:1000,ea:200,en:2.58,metal:2,mp:388,bp:718,dens:2.07,sh:0.71,disc:{yr:-3000,by:'Antiquity',named:'Ancient',stse:'H₂SO₄, rubber',haz:'SO₂ toxic',uses:['Sulfuric acid','Rubber vulcanization','Fungicide']},fact:'Responsible for the smell of rotten eggs, garlic, onions, and skunks.'},
  {n:17,sym:'Cl',name:'Chlorine',mass:'35.45',cat:'halogen',g:17,p:3,state:'Gas',cfg:'[Ne] 3s²3p⁵',val:7,ox:['-1','+1','+3','+5','+7'],r:79,ie:1251,ea:349,en:3.16,metal:0,mp:172,bp:239,dens:3.21,sh:0.48,disc:{yr:1774,by:'Scheele',named:'Davy',stse:'Water treatment, PVC',haz:'Toxic (WWI weapon)',uses:['Water disinfection','PVC plastic','Bleach (NaOCl)']},fact:'The pool smell is NOT chlorine — it\'s chloramines from reaction with sweat.'},
  {n:18,sym:'Ar',name:'Argon',mass:'39.95',cat:'noble-gas',g:18,p:3,state:'Gas',cfg:'[Ne] 3s²3p⁶',val:0,ox:['0'],r:71,ie:1521,ea:0,en:null,metal:0,mp:84,bp:87,dens:1.78,sh:0.52,disc:{yr:1894,by:'Rayleigh & Ramsay',named:'Ramsay',stse:'Welding shield',haz:'Asphyxiant',uses:['Welding shield','Light bulbs','Document preservation']},fact:'Argon makes up 0.93% of Earth\'s atmosphere — more than CO₂.'},
  {n:19,sym:'K',name:'Potassium',mass:'39.10',cat:'alkali',g:1,p:4,state:'Solid',cfg:'[Ar] 4s¹',val:1,ox:['+1'],r:243,ie:419,ea:48,en:0.82,metal:98,mp:337,bp:1032,dens:0.86,sh:0.75,disc:{yr:1807,by:'Davy',named:'Davy',stse:'Fertilizers, nerves',haz:'Reacts with water',uses:['Fertilizers (KCl)','Bananas (K source)','K-Ar dating']},fact:'Essential for nerve impulse transmission — your heart depends on K⁺.'},
  {n:20,sym:'Ca',name:'Calcium',mass:'40.08',cat:'alkaline',g:2,p:4,state:'Solid',cfg:'[Ar] 4s²',val:2,ox:['+2'],r:194,ie:590,ea:2,en:1.00,metal:90,mp:1115,bp:1757,dens:1.54,sh:0.63,disc:{yr:1808,by:'Davy',named:'Davy',stse:'Bones, cement',haz:'Reacts with water',uses:['Bones & teeth','Cement (CaCO₃)','Plaster of Paris']},fact:'Your body contains ~1 kg of calcium — 99% in bones and teeth.'},
  {n:26,sym:'Fe',name:'Iron',mass:'55.85',cat:'transition-metal',g:8,p:4,state:'Solid',cfg:'[Ar] 3d⁶4s²',val:2,ox:['+2','+3','+6'],r:126,ie:762,ea:15,en:1.83,metal:88,mp:1811,bp:3134,dens:7.87,sh:0.45,disc:{yr:-3000,by:'Antiquity',named:'Ancient',stse:'Steel, haemoglobin',haz:'Dust risk',uses:['Construction steel','Haemoglobin','Haber catalyst']},fact:'Fe-56 has the highest nuclear binding energy per nucleon — most stable nucleus.'},
  {n:29,sym:'Cu',name:'Copper',mass:'63.55',cat:'transition-metal',g:11,p:4,state:'Solid',cfg:'[Ar] 3d¹⁰4s¹',val:2,ox:['+2','+1'],r:128,ie:745,ea:118,en:1.90,metal:80,mp:1358,bp:2835,dens:8.96,sh:0.38,disc:{yr:-9000,by:'Antiquity',named:'Ancient',stse:'Wiring, plumbing',haz:'Aquatic toxicity',uses:['Electrical wiring','Plumbing','Bronze & brass']},fact:'Second-highest electrical conductivity of all metals (after silver).'},
  {n:30,sym:'Zn',name:'Zinc',mass:'65.38',cat:'transition-metal',g:12,p:4,state:'Solid',cfg:'[Ar] 3d¹⁰4s²',val:2,ox:['+2'],r:122,ie:906,ea:0,en:1.65,metal:70,mp:693,bp:1180,dens:7.13,sh:0.39,disc:{yr:1746,by:'Marggraf',named:'Marggraf',stse:'Galvanizing, sunscreen',haz:'Dust inhalation',uses:['Galvanizing steel','Sunscreen (ZnO)','Alkaline batteries']},fact:'Zinc is essential in over 300 enzymes in the human body.'},
  {n:47,sym:'Ag',name:'Silver',mass:'107.9',cat:'transition-metal',g:11,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰5s¹',val:1,ox:['+1'],r:165,ie:731,ea:126,en:1.93,metal:80,mp:1235,bp:2435,dens:10.5,sh:0.23,disc:{yr:-3000,by:'Antiquity',named:'Ancient',stse:'Jewelry, photography',haz:'AgNO₃ corrosive',uses:['Jewelry','Photography (AgBr)','Antibacterial coatings']},fact:'Silver has the HIGHEST electrical conductivity of all metals.'},
  {n:79,sym:'Au',name:'Gold',mass:'197.0',cat:'transition-metal',g:11,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s¹',val:1,ox:['+1','+3'],r:144,ie:890,ea:223,en:2.54,metal:75,mp:1337,bp:3129,dens:19.3,sh:0.13,disc:{yr:-3000,by:'Antiquity',named:'Ancient',stse:'Currency, electronics',haz:'Fine dust',uses:['Jewelry','Electronics (connectors)','Dentistry']},fact:'1 gram of gold can be beaten into a 1 m² sheet.'},
  {n:80,sym:'Hg',name:'Mercury',mass:'200.6',cat:'transition-metal',g:12,p:6,state:'Liquid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²',val:2,ox:['+2','+1'],r:151,ie:1007,ea:0,en:2.00,metal:60,mp:234,bp:630,dens:13.5,sh:0.14,disc:{yr:-3000,by:'Antiquity',named:'Ancient',stse:'Thermometers, barometers',haz:'Highly toxic (neurotoxin)',uses:['Historical thermometers','Dental amalgams (old)','Fluorescent lamps']},fact:'Only metal that is liquid at room temperature and pressure.'},
];
var moreEls=[
  {n:4,sym:'Be',name:'Beryllium',mass:'9.012',cat:'alkaline',g:2,p:2,state:'Solid',cfg:'[He] 2s²',val:2,ox:['+2'],r:112,ie:900,ea:0,en:1.57,metal:80,mp:1560,bp:2742,dens:1.85,sh:1.82,disc:{yr:1798,by:'Vauquelin',named:'Wöhler',stse:'Aerospace, X-ray windows',haz:'Highly toxic (berylliosis)',uses:['X-ray windows','Aerospace alloys','Nuclear reflectors']},fact:'Berylliosis from dust is potentially fatal — very toxic element.'},
  {n:5,sym:'B',name:'Boron',mass:'10.81',cat:'metalloid',g:13,p:2,state:'Solid',cfg:'[He] 2s²2p¹',val:3,ox:['+3'],r:87,ie:800,ea:27,en:2.04,metal:30,mp:2349,bp:4200,dens:2.35,sh:1.02,disc:{yr:1808,by:'Davy',named:'Davy',stse:'Borosilicate glass, nuclear',haz:'Dust irritant',uses:['Borosilicate glass','Borax detergents','Nuclear control rods']},fact:'Boron forms unusual electron-deficient compounds like diborane.'},
  {n:21,sym:'Sc',name:'Scandium',mass:'44.96',cat:'transition-metal',g:3,p:4,state:'Solid',cfg:'[Ar] 3d¹4s²',val:3,ox:['+3'],r:184,ie:633,ea:18,en:1.36,metal:82,mp:1814,bp:3109,dens:2.99,sh:0.57,disc:{yr:1879,by:'Nilson',named:'Nilson',stse:'Aerospace alloys',haz:'Irritant',uses:['Aircraft alloys','Bicycle frames','Sports equipment']},fact:'Predicted by Mendeleev as "eka-boron" years before discovery.'},
  {n:22,sym:'Ti',name:'Titanium',mass:'47.87',cat:'transition-metal',g:4,p:4,state:'Solid',cfg:'[Ar] 3d²4s²',val:4,ox:['+4','+3'],r:176,ie:658,ea:8,en:1.54,metal:82,mp:1941,bp:3560,dens:4.51,sh:0.52,disc:{yr:1791,by:'Gregor',named:'Klaproth',stse:'Aircraft, implants',haz:'Dust flammable',uses:['Aircraft fuselage','Medical implants','TiO₂ white paint']},fact:'As strong as steel but 45% lighter — ideal for aerospace.'},
  {n:23,sym:'V',name:'Vanadium',mass:'50.94',cat:'transition-metal',g:5,p:4,state:'Solid',cfg:'[Ar] 3d³4s²',val:5,ox:['+5','+4','+3','+2'],r:171,ie:650,ea:51,en:1.63,metal:82,mp:2183,bp:3680,dens:6.11,sh:0.49,disc:{yr:1801,by:'Del Río',named:'Sefström',stse:'Steel alloys, batteries',haz:'Dust toxic',uses:['Steel alloys','V flow batteries','V₂O₅ catalyst']},fact:'V₂O₅ catalyses the Contact process for sulfuric acid production.'},
  {n:24,sym:'Cr',name:'Chromium',mass:'52.00',cat:'transition-metal',g:6,p:4,state:'Solid',cfg:'[Ar] 3d⁵4s¹',val:3,ox:['+6','+3','+2'],r:166,ie:653,ea:64,en:1.66,metal:82,mp:2180,bp:2944,dens:7.19,sh:0.45,disc:{yr:1798,by:'Vauquelin',named:'Vauquelin',stse:'Chrome plating, stainless steel',haz:'Cr(VI) carcinogenic',uses:['Chrome plating','Stainless steel','Leather tanning']},fact:'Anomalous config [Ar]3d⁵4s¹ — extra stability of half-filled d.'},
  {n:25,sym:'Mn',name:'Manganese',mass:'54.94',cat:'transition-metal',g:7,p:4,state:'Solid',cfg:'[Ar] 3d⁵4s²',val:2,ox:['+7','+4','+2'],r:161,ie:717,ea:0,en:1.55,metal:82,mp:1519,bp:2334,dens:7.43,sh:0.48,disc:{yr:1774,by:'Gahn',named:'Gahn',stse:'Steel, batteries',haz:'Dust neurotoxic',uses:['Steel hardening','Dry cell batteries','KMnO₄ disinfectant']},fact:'MnO₄⁻ permanganate is deep purple — one of the most vivid chemicals.'},
  {n:27,sym:'Co',name:'Cobalt',mass:'58.93',cat:'transition-metal',g:9,p:4,state:'Solid',cfg:'[Ar] 3d⁷4s²',val:2,ox:['+3','+2'],r:125,ie:760,ea:64,en:1.88,metal:82,mp:1768,bp:3143,dens:8.90,sh:0.42,disc:{yr:1735,by:'Brandt',named:'Brandt',stse:'Li-ion batteries, pigment',haz:'Radioactive isotopes',uses:['Li-ion battery cathodes','Cobalt blue pigment','Vitamin B12']},fact:'Co-60 is used in radiation therapy to treat cancer.'},
  {n:28,sym:'Ni',name:'Nickel',mass:'58.69',cat:'transition-metal',g:10,p:4,state:'Solid',cfg:'[Ar] 3d⁸4s²',val:2,ox:['+2','+3'],r:124,ie:737,ea:112,en:1.91,metal:82,mp:1728,bp:3186,dens:8.91,sh:0.44,disc:{yr:1751,by:'Cronstedt',named:'Cronstedt',stse:'Stainless steel, coins',haz:'Allergenic',uses:['Stainless steel','Nickel coins','Rechargeable batteries']},fact:'The Mond process purifies Ni using volatile Ni(CO)₄.'},
  {n:31,sym:'Ga',name:'Gallium',mass:'69.72',cat:'post-transition',g:13,p:4,state:'Solid',cfg:'[Ar] 3d¹⁰4s²4p¹',val:3,ox:['+3'],r:122,ie:579,ea:29,en:1.81,metal:65,mp:303,bp:2477,dens:5.91,sh:0.37,disc:{yr:1875,by:'Lecoq',named:'Lecoq',stse:'LEDs, solar cells',haz:'Low toxicity',uses:['LED semiconductors (GaAs)','Solar cells','Thermometers']},fact:'Gallium melts in your hand at 29.8°C — below body temperature!'},
  {n:32,sym:'Ge',name:'Germanium',mass:'72.63',cat:'metalloid',g:14,p:4,state:'Solid',cfg:'[Ar] 3d¹⁰4s²4p²',val:4,ox:['+4'],r:122,ie:762,ea:119,en:2.01,metal:25,mp:1211,bp:3106,dens:5.32,sh:0.32,disc:{yr:1886,by:'Winkler',named:'Winkler',stse:'Fiber optics, semiconductors',haz:'Low toxicity',uses:['Fiber optic cables','Infrared cameras','Early transistors']},fact:'Predicted by Mendeleev as "eka-silicon" years before its discovery.'},
  {n:35,sym:'Br',name:'Bromine',mass:'79.90',cat:'halogen',g:17,p:4,state:'Liquid',cfg:'[Ar] 3d¹⁰4s²4p⁵',val:7,ox:['-1','+1','+5'],r:114,ie:1140,ea:325,en:2.96,metal:0,mp:266,bp:332,dens:3.12,sh:0.47,disc:{yr:1826,by:'Balard',named:'Balard',stse:'Flame retardants, photography',haz:'Toxic corrosive liquid',uses:['Flame retardants','Photography (AgBr)','Water treatment']},fact:'One of only two elements that are liquid at room temperature.'},
  {n:36,sym:'Kr',name:'Krypton',mass:'83.80',cat:'noble-gas',g:18,p:4,state:'Gas',cfg:'[Ar] 3d¹⁰4s²4p⁶',val:0,ox:['0'],r:112,ie:1351,ea:0,en:null,metal:0,mp:116,bp:120,dens:3.75,sh:0.25,disc:{yr:1898,by:'Ramsay & Travers',named:'Ramsay',stse:'High-power bulbs, lasers',haz:'Asphyxiant',uses:['HID lamps','KrF excimer laser (LASIK)','Flash photography']},fact:'KrF₂ exists — krypton does form compounds unlike helium or neon.'},
];
moreEls.forEach(function(e){EL.push(e);});
var elMap={};EL.forEach(function(e){elMap[e.n]=e;});

// Complete element data — all missing entries
var missingEls=[
  {n:33,sym:'As',name:'Arsenic',mass:'74.92',cat:'metalloid',g:15,p:4,state:'Solid',cfg:'[Ar] 3d¹⁰4s²4p³',val:3,ox:['+3','+5','-3'],r:114,ie:947,ea:78,en:2.18,metal:30,mp:1090,bp:887,dens:5.73,sh:0.33,disc:{yr:1250,by:'Magnus',named:'Magnus',stse:'Semiconductors, wood preservative',haz:'Highly toxic, carcinogen',uses:['GaAs semiconductors','Wood preservative (CCA)','Pesticides (historical)']},fact:'Arsenic was the favourite poison of the Borgias — undetectable until 19th century forensic chemistry.'},
  {n:34,sym:'Se',name:'Selenium',mass:'78.97',cat:'nonmetal',g:16,p:4,state:'Solid',cfg:'[Ar] 3d¹⁰4s²4p⁴',val:6,ox:['+4','+6','-2'],r:103,ie:941,ea:195,en:2.55,metal:3,mp:494,bp:958,dens:4.81,sh:0.32,disc:{yr:1817,by:'Berzelius',named:'Berzelius',stse:'Solar cells, photocopiers',haz:'Toxic in excess',uses:['Photocopier drums','Solar cells','Shampoo (SeS₂)']},fact:'Selenium is an essential trace element — deficiency causes Keshan disease, excess causes selenosis.'},
  {n:37,sym:'Rb',name:'Rubidium',mass:'85.47',cat:'alkali',g:1,p:5,state:'Solid',cfg:'[Kr] 5s¹',val:1,ox:['+1'],r:248,ie:403,ea:47,en:0.82,metal:98,mp:312,bp:961,dens:1.53,sh:0.36,disc:{yr:1861,by:'Bunsen & Kirchhoff',named:'Bunsen',stse:'Atomic clocks, fireworks',haz:'Pyrophoric',uses:['Rb atomic clocks','Purple fireworks','Photoelectric cells']},fact:'Rubidium was discovered using spectroscopy — the same technique used to analyse stars.'},
  {n:38,sym:'Sr',name:'Strontium',mass:'87.62',cat:'alkaline',g:2,p:5,state:'Solid',cfg:'[Kr] 5s²',val:2,ox:['+2'],r:215,ie:550,ea:5,en:0.95,metal:92,mp:1050,bp:1655,dens:2.64,sh:0.30,disc:{yr:1790,by:'Crawford',named:'Davy',stse:'Red fireworks, glass',haz:'⁹⁰Sr radioactive',uses:['Red fireworks/flares','TV CRT glass (old)','Ferrite magnets']},fact:'Strontium-90 from nuclear fallout mimics calcium in bones — used in bone cancer pain relief.'},
  {n:39,sym:'Y',name:'Yttrium',mass:'88.91',cat:'transition-metal',g:3,p:5,state:'Solid',cfg:'[Kr] 4d¹5s²',val:3,ox:['+3'],r:180,ie:600,ea:30,en:1.22,metal:83,mp:1799,bp:3609,dens:4.47,sh:0.30,disc:{yr:1794,by:'Gadolin',named:'Ekeberg',stse:'LED phosphors, YAG laser',haz:'Irritant',uses:['LED white phosphors (Y₃Al₅O₁₂)','YAG surgical laser','Yttrium iron garnet (microwave)']},fact:'Ytterbium, yttrium, terbium, and erbium are ALL named after Ytterby, a small Swedish village.'},
  {n:40,sym:'Zr',name:'Zirconium',mass:'91.22',cat:'transition-metal',g:4,p:5,state:'Solid',cfg:'[Kr] 4d²5s²',val:4,ox:['+4'],r:160,ie:640,ea:41,en:1.33,metal:82,mp:2128,bp:4682,dens:6.52,sh:0.28,disc:{yr:1789,by:'Klaproth',named:'Klaproth',stse:'Nuclear reactors, cubic zirconia',haz:'Low toxicity',uses:['Nuclear reactor cladding','Cubic zirconia gems','ZrO₂ dental implants']},fact:'Zirconium is transparent to neutrons — ideal nuclear reactor fuel cladding.'},
  {n:41,sym:'Nb',name:'Niobium',mass:'92.91',cat:'transition-metal',g:5,p:5,state:'Solid',cfg:'[Kr] 4d⁴5s¹',val:5,ox:['+5'],r:146,ie:652,ea:86,en:1.60,metal:82,mp:2750,bp:5017,dens:8.57,sh:0.27,disc:{yr:1801,by:'Hatchett',named:'Hatchett',stse:'Superconductor, steel alloys',haz:'Low toxicity',uses:['Superconducting magnets (MRI)','HSLA steel','Jet engines']},fact:'Niobium-titanium alloy forms the superconducting wire in the Large Hadron Collider.'},
  {n:42,sym:'Mo',name:'Molybdenum',mass:'95.96',cat:'transition-metal',g:6,p:5,state:'Solid',cfg:'[Kr] 4d⁵5s¹',val:6,ox:['+6','+4'],r:139,ie:684,ea:72,en:2.16,metal:82,mp:2896,bp:4912,dens:10.28,sh:0.25,disc:{yr:1778,by:'Scheele',named:'Hjelm',stse:'High-strength steel, lubricant',haz:'Dust irritant',uses:['High-speed tool steel','MoS₂ lubricant','Nitrogen fixation enzyme']},fact:'Molybdenum is the heaviest essential element — nitrogenase enzyme uses Mo to fix nitrogen.'},
  {n:43,sym:'Tc',name:'Technetium',mass:'[97]',cat:'transition-metal',g:7,p:5,state:'Solid',cfg:'[Kr] 4d⁵5s²',val:7,ox:['+7'],r:136,ie:702,ea:53,en:1.90,metal:82,mp:2430,bp:4538,dens:11.50,sh:0.21,disc:{yr:1937,by:'Perrier & Segrè',named:'Segrè',stse:'Medical imaging (⁹⁹ᵐTc)',haz:'All isotopes radioactive',uses:['⁹⁹ᵐTc nuclear medicine imaging','Corrosion inhibitor (experimental)']},fact:'First artificially produced element — created in a cyclotron in 1937, not found in nature.'},
  {n:44,sym:'Ru',name:'Ruthenium',mass:'101.1',cat:'transition-metal',g:8,p:5,state:'Solid',cfg:'[Kr] 4d⁷5s¹',val:3,ox:['+3','+4','+8'],r:134,ie:711,ea:101,en:2.20,metal:82,mp:2607,bp:4423,dens:12.37,sh:0.24,disc:{yr:1844,by:'Klaus',named:'Klaus',stse:'Chip resistors, solar cells',haz:'OsO₄-like oxide toxic',uses:['Hard disk read/write heads','Dye-sensitised solar cells','Catalysis']},fact:'Ruthenium-based dye solar cells can convert 11% of sunlight — approaching silicon efficiency.'},
  {n:45,sym:'Rh',name:'Rhodium',mass:'102.9',cat:'transition-metal',g:9,p:5,state:'Solid',cfg:'[Kr] 4d⁸5s¹',val:3,ox:['+3'],r:134,ie:720,ea:110,en:2.28,metal:82,mp:2237,bp:3968,dens:12.41,sh:0.24,disc:{yr:1803,by:'Wollaston',named:'Wollaston',stse:'Catalytic converters',haz:'Low toxicity',uses:['Catalytic converters (Rh/Pt/Pd)','Jewellery plating','Optical reflectors']},fact:'Rhodium is the rarest and most expensive precious metal — $14,000/oz at peak.'},
  {n:46,sym:'Pd',name:'Palladium',mass:'106.4',cat:'transition-metal',g:10,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰',val:2,ox:['+2'],r:137,ie:805,ea:54,en:2.20,metal:82,mp:1828,bp:3236,dens:12.02,sh:0.24,disc:{yr:1803,by:'Wollaston',named:'Wollaston',stse:'Catalytic converters, hydrogen',haz:'Low toxicity',uses:['Catalytic converters','Hydrogen storage','Pd-catalysed cross-coupling (Nobel 2010)']},fact:'Palladium can absorb 900× its own volume of hydrogen at room temperature.'},
  {n:48,sym:'Cd',name:'Cadmium',mass:'112.4',cat:'transition-metal',g:12,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰5s²',val:2,ox:['+2'],r:151,ie:868,ea:0,en:1.69,metal:70,mp:594,bp:1040,dens:8.69,sh:0.23,disc:{yr:1817,by:'Strohmeyer',named:'Strohmeyer',stse:'NiCd batteries, pigments',haz:'Highly toxic carcinogen',uses:['NiCd rechargeable batteries','Cd yellow/red pigments','CdTe solar cells']},fact:'Itai-itai disease (1950s Japan) — cadmium poisoning from rice paddies near zinc mines.'},
  {n:49,sym:'In',name:'Indium',mass:'114.8',cat:'post-transition',g:13,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰5s²5p¹',val:3,ox:['+3'],r:167,ie:558,ea:29,en:1.78,metal:65,mp:430,bp:2345,dens:7.31,sh:0.23,disc:{yr:1863,by:'Reich & Richter',named:'Richter',stse:'LCD screens (ITO)',haz:'Low toxicity',uses:['ITO transparent conductor (LCD/touchscreen)','Low-melting alloys','Semiconductor doping']},fact:'Every smartphone screen uses ITO (indium tin oxide) — indium is critical for displays.'},
  {n:50,sym:'Sn',name:'Tin',mass:'118.7',cat:'post-transition',g:14,p:5,state:'Solid',cfg:'[Kr] 4d\u00b9\u20705s\u00b25p\u00b2',val:4,ox:['+2','+4'],r:140,ie:709,ea:107,en:1.96,metal:60,mp:505,bp:2875,dens:7.31,sh:0.23,disc:{yr:-3500,by:'Antiquity',named:'Ancient',stse:'Tin cans, solder, bronze',haz:'Organotin toxic',uses:['Tin-plated cans','Solder (Sn-Pb)','Bronze (Cu-Sn)']},fact:'Tin pest: below 13C transforms white tin to grey powder. Destroyed Napoleons army buttons.'},
  {n:51,sym:'Sb',name:'Antimony',mass:'121.8',cat:'metalloid',g:15,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰5s²5p³',val:5,ox:['+3','+5','-3'],r:140,ie:834,ea:101,en:2.05,metal:35,mp:904,bp:1860,dens:6.68,sh:0.21,disc:{yr:1600,by:'Valentine',named:'Valentine',stse:'Flame retardants, batteries',haz:'Toxic (antimony trioxide)',uses:['Flame retardants (Sb₂O₃)','Lead-acid battery plates','Solder hardener']},fact:'Antimony was used as eye shadow (kohl) in ancient Egypt — Sb₂S₃.'},
  {n:52,sym:'Te',name:'Tellurium',mass:'127.6',cat:'metalloid',g:16,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰5s²5p⁴',val:6,ox:['+4','+6','-2'],r:123,ie:869,ea:190,en:2.10,metal:25,mp:723,bp:1261,dens:6.24,sh:0.20,disc:{yr:1782,by:'von Reichenstein',named:'Klaproth',stse:'CdTe solar cells, phase-change memory',haz:'Toxic (garlic breath)',uses:['CdTe thin-film solar cells','Phase-change memory discs','Steel additive']},fact:'Tellurium exposure causes garlic breath for weeks — excreted as dimethyltelluride.'},
  {n:53,sym:'I',name:'Iodine',mass:'126.9',cat:'halogen',g:17,p:5,state:'Solid',cfg:'[Kr] 4d¹⁰5s²5p⁵',val:7,ox:['-1','+1','+3','+5','+7'],r:133,ie:1008,ea:295,en:2.66,metal:0,mp:387,bp:457,dens:4.93,sh:0.21,disc:{yr:1811,by:'Courtois',named:'Gay-Lussac',stse:'Antiseptic, thyroid',haz:'Irritant, radioactive ¹³¹I',uses:['Antiseptic (I₂/KI)','Thyroid hormone (thyroxine)','AgI in photography']},fact:'Iodine deficiency causes goitre (enlarged thyroid) — affects 2 billion people worldwide.'},
  {n:54,sym:'Xe',name:'Xenon',mass:'131.3',cat:'noble-gas',g:18,p:5,state:'Gas',cfg:'[Kr] 4d¹⁰5s²5p⁶',val:0,ox:['0','+2','+4','+6'],r:108,ie:1170,ea:0,en:2.60,metal:0,mp:161,bp:165,dens:5.89,sh:0.16,disc:{yr:1898,by:'Ramsay & Travers',named:'Ramsay',stse:'Xe flash lamps, ion thrusters',haz:'Anaesthetic',uses:['High-intensity flash lamps','Xe ion thrusters (spacecraft)','General anaesthetic (rare)']},fact:'Xenon forms the first noble gas compound (XePtF₆) discovered in 1962, overturning the idea that noble gases were inert.'},
  {n:57,sym:'La',name:'Lanthanum',mass:'138.9',cat:'lanthanide',g:3,p:6,state:'Solid',cfg:'[Xe] 5d¹6s²',val:3,ox:['+3'],r:195,ie:538,ea:48,en:1.10,metal:88,mp:1193,bp:3737,dens:6.17,sh:0.20,disc:{yr:1839,by:'Mosander',named:'Mosander',stse:'Camera lenses, NiMH batteries',haz:'Irritant',uses:['Camera/telescope lenses','NiMH battery alloys','La₂O₃ optical glass']},fact:'La gives its name to the lanthanide series — all 15 elements have similar chemistry.'},
  {n:58,sym:'Ce',name:'Cerium',mass:'140.1',cat:'lanthanide',g:4,p:6,state:'Solid',cfg:'[Xe] 4f¹5d¹6s²',val:3,ox:['+3','+4'],r:185,ie:527,ea:50,en:1.12,metal:88,mp:1071,bp:3716,dens:6.77,sh:0.19,disc:{yr:1803,by:'Klaproth',named:'Berzelius',stse:'Catalytic converter, polishing',haz:'Irritant',uses:['CeO₂ catalytic converters','Optical polishing','Lighter flints (ferrocerium)']},fact:'Cerium oxide polishes glass so smoothly it is used for telescope mirror grinding.'},
  {n:59,sym:'Pr',name:'Praseodymium',mass:'140.9',cat:'lanthanide',g:5,p:6,state:'Solid',cfg:'[Xe] 4f³6s²',val:3,ox:['+3'],r:185,ie:523,ea:50,en:1.13,metal:88,mp:1208,bp:3793,dens:6.77,sh:0.19,disc:{yr:1885,by:'von Welsbach',named:'von Welsbach',stse:'NdFeB magnets, welding goggles',haz:'Irritant',uses:['NdPr magnets (EV motors)','Pr-doped glass (welder goggles)','Pr yellow ceramic pigment']},fact:'Praseodymium green glass filters IR radiation — used in welding goggles and cinematography.'},
  {n:60,sym:'Nd',name:'Neodymium',mass:'144.2',cat:'lanthanide',g:6,p:6,state:'Solid',cfg:'[Xe] 4f⁴6s²',val:3,ox:['+3'],r:185,ie:530,ea:50,en:1.14,metal:88,mp:1297,bp:3347,dens:7.01,sh:0.19,disc:{yr:1885,by:'von Welsbach',named:'von Welsbach',stse:'NdFeB strongest magnets, EV motors',haz:'Irritant',uses:['NdFeB permanent magnets (EV/wind turbines)','Nd:YAG laser (surgery/cutting)','Nd-doped glass (solar concentrators)']},fact:'Nd₂Fe₁₄B magnets are the strongest permanent magnets known — enabling Tesla EV motors.'},
  {n:61,sym:'Pm',name:'Promethium',mass:'[145]',cat:'lanthanide',g:7,p:6,state:'Solid',cfg:'[Xe] 4f⁵6s²',val:3,ox:['+3'],r:185,ie:536,ea:50,en:1.13,metal:88,mp:1373,bp:3273,dens:7.26,sh:0.18,disc:{yr:1945,by:'Marinsky et al.',named:'Marinsky',stse:'Radioactive tracer, betavoltaic batteries',haz:'Radioactive',uses:['¹⁴⁷Pm betavoltaic batteries (pacemakers)','Radioactive tracer','Luminous paint (historical)']},fact:'Promethium is the only lanthanide with no stable isotopes — all are radioactive.'},
  {n:62,sym:'Sm',name:'Samarium',mass:'150.4',cat:'lanthanide',g:8,p:6,state:'Solid',cfg:'[Xe] 4f⁶6s²',val:3,ox:['+2','+3'],r:185,ie:543,ea:50,en:1.17,metal:88,mp:1345,bp:2067,dens:7.52,sh:0.20,disc:{yr:1879,by:'Lecoq de Boisbaudran',named:'Lecoq',stse:'SmCo magnets, cancer therapy',haz:'Low toxicity',uses:['SmCo permanent magnets (high temp)','¹⁵³Sm cancer pain therapy','Sm₂O₃ catalyst']},fact:'SmCo magnets remain magnetised up to 350°C — used in jet engines where NdFeB would fail.'},
  {n:63,sym:'Eu',name:'Europium',mass:'152.0',cat:'lanthanide',g:9,p:6,state:'Solid',cfg:'[Xe] 4f⁷6s²',val:3,ox:['+2','+3'],r:185,ie:547,ea:50,en:1.20,metal:88,mp:1099,bp:1802,dens:5.24,sh:0.18,disc:{yr:1901,by:'Demarçay',named:'Demarçay',stse:'LED phosphors, Euro banknotes',haz:'Low toxicity',uses:['Red/blue LED TV phosphors','Euro banknote security (UV)','Eu-activated phosphors']},fact:'The red colour in LED TVs comes from Eu³⁺ phosphors — every colour TV needs europium.'},
  {n:64,sym:'Gd',name:'Gadolinium',mass:'157.3',cat:'lanthanide',g:10,p:6,state:'Solid',cfg:'[Xe] 4f⁷5d¹6s²',val:3,ox:['+3'],r:180,ie:593,ea:50,en:1.20,metal:88,mp:1585,bp:3546,dens:7.90,sh:0.24,disc:{yr:1880,by:'Marignac',named:'Marignac',stse:'MRI contrast agent',haz:'Toxic if released from complex',uses:['Gd-DTPA MRI contrast agent','Neutron shielding','Magnetocaloric refrigerants']},fact:'Gadolinium injection enhances MRI clarity — Gd³⁺ is strongly paramagnetic with 7 unpaired electrons.'},
  {n:65,sym:'Tb',name:'Terbium',mass:'158.9',cat:'lanthanide',g:11,p:6,state:'Solid',cfg:'[Xe] 4f⁹6s²',val:3,ox:['+3'],r:175,ie:566,ea:50,en:1.20,metal:88,mp:1629,bp:3503,dens:8.23,sh:0.18,disc:{yr:1843,by:'Mosander',named:'Mosander',stse:'Green LED phosphors, magnetostrictive',haz:'Low toxicity',uses:['Green LED phosphors (TbAG)','Terfenol-D magnetostrictive actuators','Solid-state laser material']},fact:'Terfenol-D (Tb₀.₃Dy₀.₇Fe₂) changes shape in a magnetic field — used in sonar transducers.'},
  {n:66,sym:'Dy',name:'Dysprosium',mass:'162.5',cat:'lanthanide',g:12,p:6,state:'Solid',cfg:'[Xe] 4f¹⁰6s²',val:3,ox:['+3'],r:175,ie:573,ea:50,en:1.22,metal:88,mp:1680,bp:2840,dens:8.55,sh:0.17,disc:{yr:1886,by:'Lecoq',named:'Lecoq',stse:'NdFeB magnet additive for heat resistance',haz:'Low toxicity',uses:['NdDyFeB magnets (EV/wind: high-temp stability)','Dy₂O₃ nuclear rods','Data storage discs']},fact:'Adding Dy to NdFeB magnets stops them demagnetising in hot EV motor environments.'},
  {n:67,sym:'Ho',name:'Holmium',mass:'164.9',cat:'lanthanide',g:13,p:6,state:'Solid',cfg:'[Xe] 4f¹¹6s²',val:3,ox:['+3'],r:175,ie:581,ea:50,en:1.23,metal:88,mp:1734,bp:2993,dens:8.80,sh:0.16,disc:{yr:1878,by:'Soret',named:'Cleve',stse:'Ho:YAG laser, magnets',haz:'Low toxicity',uses:['Ho:YAG 2.1μm laser (kidney stones/prostate)','Magnetic pole pieces','Nuclear reactor rods']},fact:'Holmium has the highest magnetic moment of any naturally occurring element.'},
  {n:68,sym:'Er',name:'Erbium',mass:'167.3',cat:'lanthanide',g:14,p:6,state:'Solid',cfg:'[Xe] 4f¹²6s²',val:3,ox:['+3'],r:175,ie:589,ea:50,en:1.24,metal:88,mp:1802,bp:3141,dens:9.07,sh:0.17,disc:{yr:1843,by:'Mosander',named:'Mosander',stse:'Fibre optic amplifiers',haz:'Low toxicity',uses:['Er-doped fibre amplifiers (internet backbone)','Er:YAG laser (dentistry/skin)','Vanadium alloy hardener']},fact:'Erbium fibre amplifiers (EDFAs) are the backbone of the internet — boosting fibre optic signals every 80 km.'},
  {n:69,sym:'Tm',name:'Thulium',mass:'168.9',cat:'lanthanide',g:15,p:6,state:'Solid',cfg:'[Xe] 4f¹³6s²',val:3,ox:['+3'],r:175,ie:597,ea:50,en:1.25,metal:88,mp:1818,bp:2223,dens:9.32,sh:0.16,disc:{yr:1879,by:'Cleve',named:'Cleve',stse:'Portable X-ray, laser',haz:'Low toxicity',uses:['¹⁶⁹Tm portable X-ray source','Tm:YAG 2μm laser','High-temperature superconductors']},fact:'Thulium is named after Thule, the ancient name for Scandinavia.'},
  {n:70,sym:'Yb',name:'Ytterbium',mass:'173.0',cat:'lanthanide',g:16,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴6s²',val:3,ox:['+2','+3'],r:175,ie:603,ea:50,en:1.10,metal:88,mp:1092,bp:1469,dens:6.97,sh:0.15,disc:{yr:1878,by:'Marignac',named:'Marignac',stse:'Optical atomic clocks, stress gauges',haz:'Low toxicity',uses:['Yb optical lattice clocks (most accurate)','Stress/strain gauges','Yb:YAG fibre laser']},fact:'Ytterbium atomic clocks are the most accurate timekeepers — losing 1 second in 10 billion years.'},
  {n:71,sym:'Lu',name:'Lutetium',mass:'175.0',cat:'lanthanide',g:17,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹6s²',val:3,ox:['+3'],r:175,ie:524,ea:50,en:1.27,metal:88,mp:1936,bp:3675,dens:9.84,sh:0.15,disc:{yr:1907,by:'Urbain',named:'Urbain',stse:'PET scan detectors, catalyst',haz:'Low toxicity',uses:['Lu₂SiO₅ PET scan detectors','¹⁷⁷Lu cancer radiotherapy','Petroleum refining catalyst']},fact:'Lutetium is the densest and hardest lanthanide — and last of the rare earth elements.'},
];
missingEls.forEach(function(e){
  if(!elMap[e.n]){EL.push(e);elMap[e.n]=e;}
  else{
    var ex=elMap[e.n];
    ['cfg','ox','r','ie','ea','en','mp','bp','dens','disc','fact','state','val','metal','sh','mass','g','p','cat'].forEach(function(k){
      if(e[k]!=null && (ex[k]==null||ex[k]===''||ex[k]==='?'))ex[k]=e[k];
    });
    ['disc','fact'].forEach(function(k){if(e[k]!=null)ex[k]=e[k];});
  }
});



// ═══ COMPLETE DATA: Elements 55–118 ═══
var extEls=[
  {n:55,sym:'Cs',name:'Caesium',mass:'132.9',cat:'alkali',g:1,p:6,state:'Solid',cfg:'[Xe] 6s¹',val:1,ox:['+1'],r:265,ie:376,ea:46,en:0.79,metal:100,mp:302,bp:944,dens:1.87,sh:0.24,disc:{yr:1860,by:'Bunsen & Kirchhoff',named:'Bunsen',stse:'Atomic clocks',haz:'Pyrophoric',uses:['Atomic clocks (GPS)','Photoelectric cells','Drilling fluids']},fact:'Caesium defines the SI second — atomic clocks using Cs are accurate to 1 second in 300 million years.'},
  {n:56,sym:'Ba',name:'Barium',mass:'137.3',cat:'alkaline',g:2,p:6,state:'Solid',cfg:'[Xe] 6s²',val:2,ox:['+2'],r:222,ie:503,ea:14,en:0.89,metal:95,mp:1000,bp:2118,dens:3.51,sh:0.20,disc:{yr:1808,by:'Davy',named:'Davy',stse:'BaSO₄ X-ray contrast',haz:'Toxic (soluble salts)',uses:['BaSO₄ barium meals (X-ray)','Fireworks (green)','Drilling mud']},fact:'Barium sulfate is completely insoluble and safe to swallow for GI X-rays, even though barium salts are toxic.'},
  {n:72,sym:'Hf',name:'Hafnium',mass:'178.5',cat:'transition-metal',g:4,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d²6s²',val:4,ox:['+4'],r:159,ie:658,ea:0,en:1.3,metal:80,mp:2506,bp:4876,dens:13.31,sh:0.14,disc:{yr:1923,by:'Coster & Hevesy',named:'Coster',stse:'Nuclear reactors',haz:'Low toxicity',uses:['Nuclear reactor control rods','Microchip gates (HfO₂)','Alloys with tungsten']},fact:'Hafnium is used in Intel CPUs as hafnium dioxide gate dielectric — a key part of modern transistors.'},
  {n:73,sym:'Ta',name:'Tantalum',mass:'180.9',cat:'transition-metal',g:5,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d³6s²',val:5,ox:['+5'],r:146,ie:761,ea:31,en:1.5,metal:80,mp:3290,bp:5731,dens:16.65,sh:0.14,disc:{yr:1802,by:'Ekeberg',named:'Ekeberg',stse:'Medical implants',haz:'Low toxicity',uses:['Capacitors (phones)','Surgical implants','Turbine blades']},fact:'Tantalum is completely bio-inert — the body never rejects it, making it ideal for bone repair.'},
  {n:74,sym:'W',name:'Tungsten',mass:'183.8',cat:'transition-metal',g:6,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d⁴6s²',val:6,ox:['+6','+4','+2'],r:139,ie:770,ea:79,en:2.36,metal:75,mp:3695,bp:5828,dens:19.3,sh:0.13,disc:{yr:1783,by:'d\'Elhujar brothers',named:'d\'Elhujar',stse:'Filament bulbs, X-rays',haz:'Low toxicity',uses:['Light bulb filaments','X-ray tubes','Drill bits','Radiation shielding']},fact:'Tungsten has the highest melting point of all metals (3695 K) and the lowest vapour pressure.'},
  {n:75,sym:'Re',name:'Rhenium',mass:'186.2',cat:'transition-metal',g:7,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d⁵6s²',val:7,ox:['+7','+4'],r:137,ie:760,ea:14,en:1.9,metal:75,mp:3459,bp:5869,dens:21.0,sh:0.14,disc:{yr:1925,by:'Noddack et al.',named:'Noddack',stse:'Jet engine superalloys',haz:'Low toxicity',uses:['Jet engine turbines','Catalytic reforming','Thermocouples']},fact:'Rhenium was one of the last stable elements to be discovered and is among the rarest in Earth\'s crust.'},
  {n:76,sym:'Os',name:'Osmium',mass:'190.2',cat:'transition-metal',g:8,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d⁶6s²',val:4,ox:['+4','+8'],r:135,ie:840,ea:106,en:2.2,metal:75,mp:3306,bp:5285,dens:22.59,sh:0.13,disc:{yr:1803,by:'Tennant',named:'Tennant',stse:'Fountain pen tips',haz:'OsO₄ very toxic',uses:['Pen nibs','Fingerprint detection (OsO₄)','Electrical contacts']},fact:'Osmium is the densest naturally occurring element at 22.59 g/cm³ — slightly denser than iridium.'},
  {n:77,sym:'Ir',name:'Iridium',mass:'192.2',cat:'transition-metal',g:9,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d⁷6s²',val:3,ox:['+3','+4'],r:136,ie:880,ea:151,en:2.2,metal:75,mp:2719,bp:4701,dens:22.56,sh:0.13,disc:{yr:1803,by:'Tennant',named:'Tennant',stse:'KT boundary (asteroid impact)',haz:'Low toxicity',uses:['Spark plugs','Compass bearings','International Prototype Kilogram (IPK alloy)']},fact:'The K-Pg mass extinction boundary (65 Ma) is marked by an iridium spike — evidence of asteroid impact.'},
  {n:78,sym:'Pt',name:'Platinum',mass:'195.1',cat:'transition-metal',g:10,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d⁹6s¹',val:2,ox:['+2','+4'],r:139,ie:870,ea:205,en:2.28,metal:75,mp:2041,bp:4098,dens:21.45,sh:0.13,disc:{yr:1748,by:'de Ulloa',named:'de Ulloa',stse:'Catalytic converters',haz:'Low toxicity',uses:['Catalytic converters','Cancer drugs (cisplatin)','Jewellery','Fuel cells']},fact:'Cisplatin (Pt complex) is one of the most successful cancer drugs — used to treat testicular, ovarian, and bladder cancer.'},
  {n:79,sym:'Au',name:'Gold',mass:'197.0',cat:'transition-metal',g:11,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s¹',val:1,ox:['+1','+3'],r:144,ie:890,ea:223,en:2.54,metal:80,mp:1337,bp:3129,dens:19.3,sh:0.13,disc:{yr:-6000,by:'Ancients',named:'Ancients',stse:'Currency, electronics',haz:'Non-toxic',uses:['Jewellery','CPU connectors','Dental crowns','Satellite coatings']},fact:'Gold is so malleable that 1g can be hammered into a sheet covering 1 m².'},
  {n:80,sym:'Hg',name:'Mercury',mass:'200.6',cat:'transition-metal',g:12,p:6,state:'Liquid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²',val:2,ox:['+1','+2'],r:151,ie:1007,ea:0,en:2.0,metal:70,mp:234,bp:630,dens:13.53,sh:0.14,disc:{yr:-1500,by:'Ancients',named:'Ancients',stse:'Thermometers (historical)',haz:'Neurotoxic vapour',uses:['Fluorescent lamps','Barometers (historical)','Mercury switches']},fact:'Mercury is the only metal liquid at room temperature. Its high density means iron floats on it.'},
  {n:81,sym:'Tl',name:'Thallium',mass:'204.4',cat:'post-transition',g:13,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²6p¹',val:3,ox:['+1','+3'],r:170,ie:589,ea:36,en:1.62,metal:60,mp:577,bp:1746,dens:11.85,sh:0.13,disc:{yr:1861,by:'Crookes',named:'Crookes',stse:'Historical rat poison',haz:'Highly toxic',uses:['Infrared detectors','Heart imaging (⁲⁰¹Tl)','Historical poison']},fact:'Thallium poisoning was the "perfect crime" poison for decades — colourless, tasteless, undetectable until Agatha Christie used it in fiction.'},
  {n:82,sym:'Pb',name:'Lead',mass:'207.2',cat:'post-transition',g:14,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²6p²',val:4,ox:['+2','+4'],r:175,ie:716,ea:35,en:2.33,metal:60,mp:601,bp:2022,dens:11.34,sh:0.13,disc:{yr:-7000,by:'Ancients',named:'Ancients',stse:'Radiation shielding',haz:'Neurotoxic (cumulative)',uses:['Car batteries','X-ray shielding','Weights','Historical plumbing']},fact:'The Roman Empire\'s decline has been partly attributed to lead poisoning from lead pipes and lead-lined wine vessels.'},
  {n:83,sym:'Bi',name:'Bismuth',mass:'209.0',cat:'post-transition',g:15,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²6p³',val:5,ox:['+3','+5'],r:156,ie:703,ea:91,en:2.02,metal:55,mp:545,bp:1837,dens:9.79,sh:0.12,disc:{yr:1753,by:'Geoffroy',named:'Geoffroy',stse:'Pepto-Bismol',haz:'Low toxicity',uses:['Pepto-Bismol (BiC₆H₅O₇)','Fusible alloys','Cosmetics (pearlescent)']},fact:'Bismuth crystals form stunning iridescent staircase structures and are the most naturally diamagnetic metal.'},
  {n:84,sym:'Po',name:'Polonium',mass:'[209]',cat:'metalloid',g:16,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²6p⁴',val:4,ox:['+2','+4'],r:167,ie:812,ea:183,en:2.0,metal:40,mp:527,bp:1235,dens:9.20,sh:0.12,disc:{yr:1898,by:'Curie & Curie',named:'Curie',stse:'Alpha source, static elimination',haz:'Highly radioactive',uses:['Static eliminators','Alpha source in nuclear devices','Curie used it in research']},fact:'Marie Curie named polonium after her homeland Poland. ²¹⁰Po was used to assassinate Alexander Litvinenko in 2006.'},
  {n:85,sym:'At',name:'Astatine',mass:'[210]',cat:'halogen',g:17,p:6,state:'Solid',cfg:'[Xe] 4f¹⁴5d¹⁰6s²6p⁵',val:7,ox:['-1','+1'],r:150,ie:890,ea:270,en:2.2,metal:20,mp:575,bp:610,dens:7.0,sh:0.20,disc:{yr:1940,by:'Corson et al.',named:'Corson',stse:'Targeted alpha therapy (cancer)',haz:'Highly radioactive',uses:['Cancer therapy (²¹¹At)','Research only']},fact:'Astatine is the rarest naturally occurring element — less than 1 gram exists in Earth\'s entire crust at any time.'},
  {n:86,sym:'Rn',name:'Radon',mass:'[222]',cat:'noble-gas',g:18,p:6,state:'Gas',cfg:'[Xe] 4f¹⁴5d¹⁰6s²6p⁶',val:0,ox:['0'],r:120,ie:1037,ea:0,en:null,metal:0,mp:202,bp:211,dens:9.73,sh:0.09,disc:{yr:1900,by:'Dorn',named:'Dorn',stse:'Home radon gas hazard',haz:'Radioactive carcinogen',uses:['Radiotherapy (historical)','Earthquake prediction research','Geophysical research']},fact:'Radon seeping from soil is the second leading cause of lung cancer after smoking, causing ~21,000 deaths per year in the US.'},
  {n:87,sym:'Fr',name:'Francium',mass:'[223]',cat:'alkali',g:1,p:7,state:'Solid',cfg:'[Rn] 7s¹',val:1,ox:['+1'],r:270,ie:380,ea:44,en:0.7,metal:100,mp:300,bp:950,dens:2.48,sh:0.15,disc:{yr:1939,by:'Perey',named:'Perey',stse:'Research only',haz:'Highly radioactive',uses:['Research only (trace amounts)']},fact:'Francium is the most unstable naturally occurring element. At most a few grams exist on Earth at any time.'},
  {n:88,sym:'Ra',name:'Radium',mass:'[226]',cat:'alkaline',g:2,p:7,state:'Solid',cfg:'[Rn] 7s²',val:2,ox:['+2'],r:215,ie:509,ea:10,en:0.9,metal:90,mp:973,bp:2010,dens:5.5,sh:0.09,disc:{yr:1898,by:'Curie & Curie',named:'Curie',stse:'Historical cancer therapy',haz:'Radiotoxic carcinogen',uses:['Historical cancer treatment','Luminous paint (historical)','Neutron source']},fact:'Marie Curie\'s notebooks are still radioactive and stored in lead boxes. Handling them requires signing a waiver.'},
  {n:89,sym:'Ac',name:'Actinium',mass:'[227]',cat:'actinide',g:3,p:7,state:'Solid',cfg:'[Rn] 6d¹7s²',val:3,ox:['+3'],r:215,ie:499,ea:33,en:1.1,metal:85,mp:1323,bp:3471,dens:10.07,sh:0.12,disc:{yr:1899,by:'Debierne',named:'Debierne',stse:'Neutron source, cancer therapy',haz:'Radioactive',uses:['²²⁵Ac cancer therapy','Neutron source in research']},fact:'Actinium gives its name to the actinide series. It glows blue in the dark due to intense radioactivity ionizing air.'},
  {n:90,sym:'Th',name:'Thorium',mass:'232.0',cat:'actinide',g:4,p:7,state:'Solid',cfg:'[Rn] 6d²7s²',val:4,ox:['+4'],r:206,ie:587,ea:112,en:1.3,metal:80,mp:2023,bp:5061,dens:11.72,sh:0.11,disc:{yr:1828,by:'Berzelius',named:'Berzelius',stse:'Thorium reactors (future fuel)',haz:'Radioactive',uses:['Gas mantles (historical)','Nuclear fuel (experimental)','High-temp crucibles']},fact:'Thorium is ~3× more abundant than uranium and could fuel thorium reactors — producing far less long-lived waste.'},
  {n:91,sym:'Pa',name:'Protactinium',mass:'231.0',cat:'actinide',g:5,p:7,state:'Solid',cfg:'[Rn] 5f²6d¹7s²',val:5,ox:['+5'],r:200,ie:568,ea:53,en:1.5,metal:80,mp:1841,bp:4300,dens:15.37,sh:0.12,disc:{yr:1917,by:'Hahn & Meitner',named:'Hahn',stse:'Oceanography dating',haz:'Radiotoxic',uses:['²³¹Pa/²³⁰Th ocean current dating','Research only']},fact:'Protactinium is extremely rare and highly toxic. Its longest-lived isotope ²³¹Pa has a half-life of 32,760 years.'},
  {n:92,sym:'U',name:'Uranium',mass:'238.0',cat:'actinide',g:6,p:7,state:'Solid',cfg:'[Rn] 5f³6d¹7s²',val:6,ox:['+4','+6'],r:196,ie:598,ea:51,en:1.38,metal:80,mp:1405,bp:4404,dens:19.1,sh:0.12,disc:{yr:1789,by:'Klaproth',named:'Klaproth',stse:'Nuclear fuel, weapons',haz:'Radiotoxic, chemically toxic',uses:['Nuclear fuel (²³⁵U)','Depleted U ammunition','Historical yellow glass glaze']},fact:'Natural uranium is 99.3% ²³⁸U. Enriching it to >90% ²³⁵U creates weapons-grade material.'},
  {n:93,sym:'Np',name:'Neptunium',mass:'[237]',cat:'actinide',g:7,p:7,state:'Solid',cfg:'[Rn] 5f⁴6d¹7s²',val:5,ox:['+3','+4','+5'],r:190,ie:605,ea:46,en:1.36,metal:80,mp:917,bp:4174,dens:20.2,sh:0.12,disc:{yr:1940,by:'McMillan & Abelson',named:'McMillan',stse:'Neutron detection',haz:'Radioactive',uses:['²³⁷Np neutron detectors','Pu-238 production for RTGs']},fact:'Neptunium was the first transuranium element discovered, created by bombarding uranium with neutrons.'},
  {n:94,sym:'Pu',name:'Plutonium',mass:'[244]',cat:'actinide',g:8,p:7,state:'Solid',cfg:'[Rn] 5f⁶7s²',val:4,ox:['+3','+4','+5','+6'],r:187,ie:585,ea:0,en:1.28,metal:80,mp:913,bp:3505,dens:19.84,sh:0.13,disc:{yr:1940,by:'Seaborg et al.',named:'Seaborg',stse:'Nuclear weapons, RTGs',haz:'Extremely radiotoxic',uses:['Nuclear weapons','RTG power (²³⁸Pu — Voyager, Curiosity)','MOX reactor fuel']},fact:'Pu-238 powered the Voyager spacecraft, launched in 1977 — still operating in interstellar space today.'},
  {n:95,sym:'Am',name:'Americium',mass:'[243]',cat:'actinide',g:9,p:7,state:'Solid',cfg:'[Rn] 5f⁷7s²',val:3,ox:['+3','+5'],r:180,ie:578,ea:10,en:1.3,metal:80,mp:1449,bp:2880,dens:13.67,sh:0.11,disc:{yr:1944,by:'Seaborg et al.',named:'Seaborg',stse:'Smoke detectors',haz:'Alpha emitter',uses:['Smoke detectors (²⁴¹Am α source)','Gamma radiography','Medical research']},fact:'²⁴¹Am is in almost every smoke detector. It ionizes air so a smoke particle breaks the circuit and triggers the alarm.'},
  {n:96,sym:'Cm',name:'Curium',mass:'[247]',cat:'actinide',g:10,p:7,state:'Solid',cfg:'[Rn] 5f⁷6d¹7s²',val:3,ox:['+3'],r:169,ie:581,ea:10,en:1.3,metal:80,mp:1613,bp:3383,dens:13.51,sh:0.12,disc:{yr:1944,by:'Seaborg et al.',named:'Seaborg',stse:'RTGs, α-particle X-ray (Mars rovers)',haz:'Radioactive',uses:['Alpha particle X-ray spectrometer (Mars rovers)','Pacemaker batteries (historical)']},fact:'Curium powered the alpha-particle X-ray spectrometer on Mars Pathfinder, Spirit, and Opportunity rovers.'},
  {n:97,sym:'Bk',name:'Berkelium',mass:'[247]',cat:'actinide',g:11,p:7,state:'Solid',cfg:'[Rn] 5f⁹7s²',val:3,ox:['+3','+4'],r:170,ie:601,ea:10,en:1.3,metal:80,mp:1259,bp:2900,dens:14.79,sh:0.12,disc:{yr:1949,by:'Thompson et al.',named:'Thompson',stse:'Research: synthesis of heavy elements',haz:'Radioactive',uses:['Target material for synthesizing elements 117-118']},fact:'Only 22 milligrams of berkelium were ever produced at Oak Ridge in 2009 to help synthesize element 117 (Tennessine).'},
  {n:98,sym:'Cf',name:'Californium',mass:'[251]',cat:'actinide',g:12,p:7,state:'Solid',cfg:'[Rn] 5f¹⁰7s²',val:3,ox:['+3'],r:168,ie:608,ea:10,en:1.3,metal:80,mp:1173,bp:1743,dens:15.1,sh:0.12,disc:{yr:1950,by:'Seaborg et al.',named:'Seaborg',stse:'Neutron source, oil well logging',haz:'Radioactive',uses:['Neutron startup sources (nuclear reactors)','Oil well logging','Cancer brachytherapy']},fact:'Californium-252 is one of the most expensive materials — $27 million per gram. It\'s a powerful neutron emitter.'},
  {n:99,sym:'Es',name:'Einsteinium',mass:'[252]',cat:'actinide',g:13,p:7,state:'Solid',cfg:'[Rn] 5f¹¹7s²',val:3,ox:['+2','+3'],r:165,ie:619,ea:50,en:1.3,metal:80,mp:1133,bp:1269,dens:8.84,sh:0.12,disc:{yr:1952,by:'Ghiorso et al.',named:'Ghiorso',stse:'Research only',haz:'Radioactive',uses:['Nuclear research only']},fact:'Einsteinium was discovered in the fallout of the first hydrogen bomb test (Ivy Mike, 1952) and named after Einstein.'},
  {n:100,sym:'Fm',name:'Fermium',mass:'[257]',cat:'actinide',g:14,p:7,state:'Solid',cfg:'[Rn] 5f¹²7s²',val:3,ox:['+2','+3'],r:167,ie:627,ea:34,en:1.3,metal:80,mp:1800,bp:null,dens:null,sh:0.12,disc:{yr:1952,by:'Ghiorso et al.',named:'Ghiorso',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Fermium was also discovered in Ivy Mike bomb fallout. Named for Enrico Fermi who built the first nuclear reactor.'},
  {n:101,sym:'Md',name:'Mendelevium',mass:'[258]',cat:'actinide',g:15,p:7,state:'Solid',cfg:'[Rn] 5f¹³7s²',val:3,ox:['+2','+3'],r:173,ie:635,ea:36,en:1.3,metal:80,mp:1100,bp:null,dens:null,sh:0.12,disc:{yr:1955,by:'Ghiorso et al.',named:'Ghiorso',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named for Dmitri Mendeleev. Only a few atoms of Md have ever been produced.'},
  {n:102,sym:'No',name:'Nobelium',mass:'[259]',cat:'actinide',g:16,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴7s²',val:2,ox:['+2','+3'],r:176,ie:642,ea:30,en:1.3,metal:80,mp:1100,bp:null,dens:null,sh:0.12,disc:{yr:1966,by:'Flerov et al.',named:'Flerov',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named for Alfred Nobel. Nobelium has the most stable +2 state of all actinides due to full 5f¹⁴ configuration.'},
  {n:103,sym:'Lr',name:'Lawrencium',mass:'[262]',cat:'actinide',g:17,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴7s²7p¹',val:3,ox:['+3'],r:161,ie:479,ea:30,en:1.3,metal:80,mp:1900,bp:null,dens:null,sh:0.12,disc:{yr:1961,by:'Ghiorso et al.',named:'Ghiorso',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Lawrencium is the last actinide. Named for Ernest O. Lawrence, inventor of the cyclotron particle accelerator.'},
  {n:104,sym:'Rf',name:'Rutherfordium',mass:'[267]',cat:'transition-metal',g:4,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d²7s²',val:4,ox:['+4'],r:150,ie:579,ea:null,en:null,metal:75,mp:2400,bp:5800,dens:23.2,sh:0.12,disc:{yr:1964,by:'Flerov et al.',named:'Flerov',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named for Ernest Rutherford. Its chemical properties are being studied — it behaves like hafnium as expected.'},
  {n:105,sym:'Db',name:'Dubnium',mass:'[268]',cat:'transition-metal',g:5,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d³7s²',val:5,ox:['+5'],r:139,ie:665,ea:null,en:null,metal:75,mp:null,bp:null,dens:29.3,sh:0.12,disc:{yr:1968,by:'Flerov et al.',named:'Flerov',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named after Dubna, Russia. Dubnium has a half-life of about 28 hours — long enough to study its chemistry.'},
  {n:106,sym:'Sg',name:'Seaborgium',mass:'[271]',cat:'transition-metal',g:6,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d⁴7s²',val:6,ox:['+6'],r:132,ie:757,ea:null,en:null,metal:75,mp:null,bp:null,dens:35.0,sh:0.12,disc:{yr:1974,by:'Ghiorso et al.',named:'Ghiorso',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Glenn T. Seaborg is the only person to have an element named after them while still alive.'},
  {n:107,sym:'Bh',name:'Bohrium',mass:'[272]',cat:'transition-metal',g:7,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d⁵7s²',val:7,ox:['+7'],r:128,ie:740,ea:null,en:null,metal:75,mp:null,bp:null,dens:37.1,sh:0.12,disc:{yr:1981,by:'Münzenberg et al.',named:'Münzenberg',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Bohrium\'s most stable isotope (²⁷⁰Bh) has a half-life of ~61 seconds. Named for Niels Bohr.'},
  {n:108,sym:'Hs',name:'Hassium',mass:'[270]',cat:'transition-metal',g:8,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d⁶7s²',val:8,ox:['+8'],r:126,ie:730,ea:null,en:null,metal:75,mp:null,bp:null,dens:41.0,sh:0.12,disc:{yr:1984,by:'Münzenberg et al.',named:'Münzenberg',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Hassium forms HsO₄ — volatile like OsO₄ — confirming it behaves like osmium in Group 8.'},
  {n:109,sym:'Mt',name:'Meitnerium',mass:'[278]',cat:'transition-metal',g:9,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d⁷7s²',val:3,ox:['+3'],r:128,ie:800,ea:null,en:null,metal:75,mp:null,bp:null,dens:37.4,sh:0.12,disc:{yr:1982,by:'Münzenberg et al.',named:'Münzenberg',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named for Lise Meitner, who co-discovered nuclear fission but was controversially excluded from the Nobel Prize.'},
  {n:110,sym:'Ds',name:'Darmstadtium',mass:'[281]',cat:'transition-metal',g:10,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d⁸7s²',val:2,ox:['+2','+4'],r:132,ie:955,ea:null,en:null,metal:75,mp:null,bp:null,dens:34.8,sh:0.12,disc:{yr:1994,by:'Hofmann et al.',named:'Hofmann',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named after Darmstadt, Germany, where GSI Helmholtz Centre is located. Only a few atoms have been made.'},
  {n:111,sym:'Rg',name:'Roentgenium',mass:'[282]',cat:'transition-metal',g:11,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d¹⁰7s¹',val:3,ox:['+3'],r:138,ie:1020,ea:151,en:null,metal:75,mp:null,bp:null,dens:28.7,sh:0.12,disc:{yr:1994,by:'Hofmann et al.',named:'Hofmann',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named after Wilhelm Röntgen, discoverer of X-rays. Relativistic effects should make Rg prefer +3 unlike gold (+1).'},
  {n:112,sym:'Cn',name:'Copernicium',mass:'[285]',cat:'transition-metal',g:12,p:7,state:'Gas',cfg:'[Rn] 5f¹⁴6d¹⁰7s²',val:2,ox:['+2'],r:147,ie:1155,ea:null,en:null,metal:70,mp:283,bp:340,dens:23.7,sh:0.12,disc:{yr:1996,by:'Hofmann et al.',named:'Hofmann',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Relativistic effects are so strong in Cn that it may be a gas at room temperature — behaving more like a noble gas than mercury.'},
  {n:113,sym:'Nh',name:'Nihonium',mass:'[286]',cat:'post-transition',g:13,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d¹⁰7s²7p¹',val:1,ox:['+1','+3'],r:170,ie:705,ea:null,en:null,metal:60,mp:700,bp:1430,dens:16.0,sh:0.12,disc:{yr:2004,by:'Morita et al.',named:'Morita',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Nihonium (Nh) is named after Japan (Nihon). First element discovered in Asia.'},
  {n:114,sym:'Fl',name:'Flerovium',mass:'[289]',cat:'post-transition',g:14,p:7,state:'Gas',cfg:'[Rn] 5f¹⁴6d¹⁰7s²7p²',val:2,ox:['+2'],r:180,ie:832,ea:null,en:null,metal:55,mp:340,bp:420,dens:14.0,sh:0.12,disc:{yr:1999,by:'Oganessian et al.',named:'Oganessian',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Flerovium may be a gas at room temperature due to relativistic effects — behaving more like a noble gas than lead.'},
  {n:115,sym:'Mc',name:'Moscovium',mass:'[290]',cat:'post-transition',g:15,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d¹⁰7s²7p³',val:1,ox:['+1','+3'],r:187,ie:539,ea:null,en:null,metal:55,mp:670,bp:1400,dens:13.5,sh:0.12,disc:{yr:2003,by:'Oganessian et al.',named:'Oganessian',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Moscovium is named after Moscow Oblast. Only a few dozen atoms have ever been created.'},
  {n:116,sym:'Lv',name:'Livermorium',mass:'[293]',cat:'post-transition',g:16,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d¹⁰7s²7p⁴',val:2,ox:['+2'],r:183,ie:723,ea:null,en:null,metal:55,mp:709,bp:1085,dens:12.9,sh:0.12,disc:{yr:2000,by:'Oganessian et al.',named:'Oganessian',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Named after Lawrence Livermore National Laboratory in California. Predicted to decay to copernicium.'},
  {n:117,sym:'Ts',name:'Tennessine',mass:'[294]',cat:'halogen',g:17,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d¹⁰7s²7p⁵',val:1,ox:['-1','+1','+3'],r:138,ie:736,ea:null,en:null,metal:30,mp:700,bp:883,dens:7.17,sh:0.12,disc:{yr:2010,by:'Oganessian et al.',named:'Oganessian',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Tennessine required berkelium-249 from Oak Ridge as target material — only 22 mg was made for this purpose.'},
  {n:118,sym:'Og',name:'Oganesson',mass:'[294]',cat:'noble-gas',g:18,p:7,state:'Solid',cfg:'[Rn] 5f¹⁴6d¹⁰7s²7p⁶',val:0,ox:['0'],r:157,ie:839,ea:5,en:null,metal:0,mp:325,bp:450,dens:5.0,sh:0.12,disc:{yr:2002,by:'Oganessian et al.',named:'Oganessian',stse:'Research only',haz:'Radioactive',uses:['Research only']},fact:'Oganesson may NOT be a noble gas despite being in Group 18 — relativistic effects could make it highly reactive.'},
];
extEls.forEach(function(e){
  if(!elMap[e.n]){
    EL.push(e);
    elMap[e.n]=e;
  } else {
    // Enrich existing stub with full data
    var existing=elMap[e.n];
    Object.keys(e).forEach(function(k){if(existing[k]==null||existing[k]===''||existing[k]==='?')existing[k]=e[k];});
    // Always update these key fields
    ['cfg','ox','r','ie','ea','en','mp','bp','dens','disc','fact','uses','state','val','metal','sh'].forEach(function(k){
      if(e[k]!=null)existing[k]=e[k];
    });
  }
});

var layout={1:[1,1],2:[1,18],3:[2,1],4:[2,2],5:[2,13],6:[2,14],7:[2,15],8:[2,16],9:[2,17],10:[2,18],11:[3,1],12:[3,2],13:[3,13],14:[3,14],15:[3,15],16:[3,16],17:[3,17],18:[3,18],19:[4,1],20:[4,2],21:[4,3],22:[4,4],23:[4,5],24:[4,6],25:[4,7],26:[4,8],27:[4,9],28:[4,10],29:[4,11],30:[4,12],31:[4,13],32:[4,14],33:[4,15],34:[4,16],35:[4,17],36:[4,18],37:[5,1],38:[5,2],39:[5,3],40:[5,4],41:[5,5],42:[5,6],43:[5,7],44:[5,8],45:[5,9],46:[5,10],47:[5,11],48:[5,12],49:[5,13],50:[5,14],51:[5,15],52:[5,16],53:[5,17],54:[5,18],55:[6,1],56:[6,2],72:[6,4],73:[6,5],74:[6,6],75:[6,7],76:[6,8],77:[6,9],78:[6,10],79:[6,11],80:[6,12],81:[6,13],82:[6,14],83:[6,15],84:[6,16],85:[6,17],86:[6,18],87:[7,1],88:[7,2],104:[7,4],105:[7,5],106:[7,6],107:[7,7],108:[7,8],109:[7,9],110:[7,10],111:[7,11],112:[7,12],113:[7,13],114:[7,14],115:[7,15],116:[7,16],117:[7,17],118:[7,18]};
var catMap={33:'metalloid',34:'nonmetal',37:'alkali',38:'alkaline',39:'transition-metal',40:'transition-metal',41:'transition-metal',42:'transition-metal',43:'transition-metal',44:'transition-metal',45:'transition-metal',46:'transition-metal',48:'transition-metal',49:'post-transition',50:'post-transition',51:'metalloid',52:'metalloid',53:'halogen',54:'noble-gas',55:'alkali',56:'alkaline',72:'transition-metal',73:'transition-metal',74:'transition-metal',75:'transition-metal',76:'transition-metal',77:'transition-metal',78:'transition-metal',81:'post-transition',82:'post-transition',83:'post-transition',84:'metalloid',85:'halogen',86:'noble-gas',87:'alkali',88:'alkaline',104:'transition-metal',105:'transition-metal',106:'transition-metal',107:'transition-metal',108:'transition-metal',109:'transition-metal',110:'transition-metal',111:'transition-metal',112:'transition-metal',113:'post-transition',114:'post-transition',115:'post-transition',116:'post-transition',117:'halogen',118:'noble-gas'};
var symN={33:['As','Arsenic'],34:['Se','Selenium'],37:['Rb','Rubidium'],38:['Sr','Strontium'],39:['Y','Yttrium'],40:['Zr','Zirconium'],41:['Nb','Niobium'],42:['Mo','Molybdenum'],43:['Tc','Technetium'],44:['Ru','Ruthenium'],45:['Rh','Rhodium'],46:['Pd','Palladium'],48:['Cd','Cadmium'],49:['In','Indium'],50:['Sn','Tin'],51:['Sb','Antimony'],52:['Te','Tellurium'],53:['I','Iodine'],54:['Xe','Xenon'],55:['Cs','Caesium'],56:['Ba','Barium'],72:['Hf','Hafnium'],73:['Ta','Tantalum'],74:['W','Tungsten'],75:['Re','Rhenium'],76:['Os','Osmium'],77:['Ir','Iridium'],78:['Pt','Platinum'],81:['Tl','Thallium'],82:['Pb','Lead'],83:['Bi','Bismuth'],84:['Po','Polonium'],85:['At','Astatine'],86:['Rn','Radon'],87:['Fr','Francium'],88:['Ra','Radium'],104:['Rf','Rutherfordium'],105:['Db','Dubnium'],106:['Sg','Seaborgium'],107:['Bh','Bohrium'],108:['Hs','Hassium'],109:['Mt','Meitnerium'],110:['Ds','Darmstadtium'],111:['Rg','Roentgenium'],112:['Cn','Copernicium'],113:['Nh','Nihonium'],114:['Fl','Flerovium'],115:['Mc','Moscovium'],116:['Lv','Livermorium'],117:['Ts','Tennessine'],118:['Og','Oganesson']};
var massN={33:'74.92',34:'78.97',37:'85.47',38:'87.62',39:'88.91',40:'91.22',41:'92.91',42:'95.96',43:'[97]',44:'101.1',45:'102.9',46:'106.4',48:'112.4',49:'114.8',50:'118.7',51:'121.8',52:'127.6',53:'126.9',54:'131.3',55:'132.9',56:'137.3',72:'178.5',73:'180.9',74:'183.8',75:'186.2',76:'190.2',77:'192.2',78:'195.1',81:'204.4',82:'207.2',83:'209.0',84:'[209]',85:'[210]',86:'[222]',87:'[223]',88:'[226]',104:'[267]',105:'[268]',106:'[271]',107:'[272]',108:'[270]',109:'[278]',110:'[281]',111:'[282]',112:'[285]',113:'[286]',114:'[289]',115:'[290]',116:'[293]',117:'[294]',118:'[294]'};
var lantN={57:['La','Lanthanum'],58:['Ce','Cerium'],59:['Pr','Praseodymium'],60:['Nd','Neodymium'],61:['Pm','Promethium'],62:['Sm','Samarium'],63:['Eu','Europium'],64:['Gd','Gadolinium'],65:['Tb','Terbium'],66:['Dy','Dysprosium'],67:['Ho','Holmium'],68:['Er','Erbium'],69:['Tm','Thulium'],70:['Yb','Ytterbium'],71:['Lu','Lutetium']};
var actN={89:['Ac','Actinium'],90:['Th','Thorium'],91:['Pa','Protactinium'],92:['U','Uranium'],93:['Np','Neptunium'],94:['Pu','Plutonium'],95:['Am','Americium'],96:['Cm','Curium'],97:['Bk','Berkelium'],98:['Cf','Californium'],99:['Es','Einsteinium'],100:['Fm','Fermium'],101:['Md','Mendelevium'],102:['No','Nobelium'],103:['Lr','Lawrencium']};

function mkCell(n,sym,name,mass,cat){
  var catLabel = (cat||'').replace(/-/g,' ');
  return '<div class="cell '+cat+'" data-n="'+n+'" data-cat="'+cat+
    '" onclick="openEl('+n+')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();openEl('+n+')}" '+
    'role="button" tabindex="0" '+
    'aria-label="'+name+', atomic number '+n+', '+catLabel+', atomic mass '+(mass||'unknown')+'" '+
    'title="'+name+'">'+
    '<span class="cn">'+n+'</span>'+
    '<span class="cs">'+sym+'</span>'+
    '<span class="cname">'+name+'</span>'+
    '<span class="cmass">'+(mass||'')+'</span></div>';
}
var gd=[];for(var ri=0;ri<7;ri++){gd.push([]);for(var ci=0;ci<18;ci++)gd[ri].push(null);}
EL.forEach(function(e){var p=layout[e.n];if(p)gd[p[0]-1][p[1]-1]=e;});
Object.keys(symN).forEach(function(n){n=+n;if(!elMap[n]){var p=layout[n];if(p){var s=symN[n];gd[p[0]-1][p[1]-1]={n:n,sym:s[0],name:s[1],mass:massN[n]||'',cat:catMap[n]||'transition-metal'};}}});
gd[5][2]='LN';gd[6][2]='AC';
var gh='';
for(var r=0;r<7;r++)for(var c=0;c<18;c++){var cl=gd[r][c];if(!cl)gh+='<div class="cell empty"></div>';else if(cl==='LN')gh+='<div class="cell gap-lbl lanthanide"><span>57–71</span></div>';else if(cl==='AC')gh+='<div class="cell gap-lbl actinide"><span>89–103</span></div>';else gh+=mkCell(cl.n,cl.sym,cl.name,cl.mass,cl.cat);}
document.getElementById('mainGrid').innerHTML=gh;
document.getElementById('lantGrid').innerHTML=[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71].map(function(n){var s=lantN[n];return mkCell(n,s[0],s[1],'','lanthanide');}).join('');
document.getElementById('actGrid').innerHTML=[89,90,91,92,93,94,95,96,97,98,99,100,101,102,103].map(function(n){var s=actN[n];return mkCell(n,s[0],s[1],'','actinide');}).join('');

// Theme
function toggleTheme(){var t=document.body.dataset.theme==='dark'?'light':'dark';document.body.dataset.theme=t;document.getElementById('ticon').textContent=t==='dark'?'🌙':'☀️';}
// View switch
function sv(id,btn){
  document.querySelectorAll('.view').forEach(function(v){v.classList.remove('on');});
  document.querySelectorAll('.ntab').forEach(function(b){b.classList.remove('on');});
  var target=document.getElementById(id);
  if(!target){console.warn('sv(): view not found: #'+id);if(btn)btn.classList.remove('on');return;}
  target.classList.add('on');
  if(btn)btn.classList.add('on');
  if(id==='trendView')setTimeout(function(){drawT('r',document.querySelector('#tBtns .fb.on'));},80);
  // Task 8: refresh chemistry day card when switching to table view
  if(id==='tblView'){
    if(!document.getElementById('chem-day-wrapper')){
      var chemDayHtml=getChemistryDayCard();
      if(chemDayHtml){var gridEl=document.getElementById('mainGrid');if(gridEl){var wr=document.createElement('div');wr.id='chem-day-wrapper';wr.innerHTML=chemDayHtml;gridEl.parentNode.insertBefore(wr,gridEl);}}
    }
  }
  // Task 3: refresh quiz stats panel when switching to challenge view
  if(id==='challengeView'){
    var qsp=document.getElementById('quizStatsPanel');
    if(qsp)qsp.innerHTML=renderQuizStats();
  }
}
// Hover cats
function hoverCat(c){document.querySelectorAll('.cell[data-n]').forEach(function(el){el.classList.toggle('dim',el.dataset.cat!==c);el.classList.toggle('glow',el.dataset.cat===c);});}
function clearCat(){document.querySelectorAll('.cell[data-n]').forEach(function(el){el.classList.remove('dim','glow');});}
// Search
function searchEl(q){q=q.trim().toLowerCase();document.querySelectorAll('.cell[data-n]').forEach(function(c){var n=+c.dataset.n;var el=elMap[n];if(!q){c.classList.remove('dim','glow');return;}var s=symN[n]||[];var nm=(el?el.name:(s[1]||'')).toLowerCase();var sym=(el?el.sym:(s[0]||'')).toLowerCase();var match=nm.includes(q)||sym.includes(q)||String(n).includes(q);c.classList.toggle('dim',!match);c.classList.toggle('glow',match);});}
// Block filter
var blkMap={s:[1,2,3,4,11,12,19,20,37,38,55,56,87,88],p:[5,6,7,8,9,10,13,14,15,16,17,18,31,32,33,34,35,36,49,50,51,52,53,54,81,82,83,84,85,86,113,114,115,116,117,118]};
function filterBlk(b,btn){document.querySelectorAll('.fbtns .fb').forEach(function(x){x.classList.remove('on');});btn.classList.add('on');document.querySelectorAll('.cell[data-n]').forEach(function(c){var n=+c.dataset.n;if(!b){c.classList.remove('dim');return;}var inB;if(b==='s')inB=blkMap.s.includes(n);else if(b==='p')inB=blkMap.p.includes(n);else if(b==='d')inB=(n>=21&&n<=30)||(n>=39&&n<=48)||(n>=72&&n<=80)||(n>=104&&n<=112);else if(b==='f')inB=(n>=57&&n<=71)||(n>=89&&n<=103);else inB=true;c.classList.toggle('dim',!inB);});}
// ═══════════════════════════════════════════════════════════════════════
//  COMPREHENSIVE MULTILINGUAL i18n ENGINE — HerTech Periodic Table
// ═══════════════════════════════════════════════════════════════════════

var currentLang = localStorage.getItem('hertech_lang') || 'en';

// ── Language Meta ─────────────────────────────────────────────────────
var LANG_META = window.LANG_META = {
  en: { flag:'🇺🇸', native:'English',    code:'EN', dir:'ltr', fontClass:'' },
  hi: { flag:'🇮🇳', native:'हिन्दी',      code:'HI', dir:'ltr', fontClass:'lang-body-hi' },
  or: { flag:'🇮🇳', native:'ଓଡ଼ିଆ',      code:'OR', dir:'ltr', fontClass:'lang-body-or' },
  fr: { flag:'🇫🇷', native:'Français',    code:'FR', dir:'ltr', fontClass:'' },
  de: { flag:'🇩🇪', native:'Deutsch',     code:'DE', dir:'ltr', fontClass:'' },
  es: { flag:'🇪🇸', native:'Español',     code:'ES', dir:'ltr', fontClass:'' },
  ja: { flag:'🇯🇵', native:'日本語',       code:'JA', dir:'ltr', fontClass:'lang-body-ja' },
  zh: { flag:'🇨🇳', native:'中文',         code:'ZH', dir:'ltr', fontClass:'lang-body-zh' },
  ar: { flag:'🇸🇦', native:'العربية',     code:'AR', dir:'rtl', fontClass:'lang-body-ar' },
  ru: { flag:'🇷🇺', native:'Русский',     code:'RU', dir:'ltr', fontClass:'lang-body-ru' },
  ko: { flag:'🇰🇷', native:'한국어',       code:'KO', dir:'ltr', fontClass:'lang-body-ko' }
};

// ── UI Translations ───────────────────────────────────────────────────
var UI_TRANSLATIONS = {
  en: {
    nav_table:'🧪 Table', nav_reactions:'⚗ Reactions', nav_organic:'🌿 Organic', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 Mnemonics',
    nav_ions:'⚡ Ions', nav_tools:'🔧 Tools', nav_worksheet:'📄 Worksheet',
    nav_trends:'📈 Trends', nav_challenge:'🏆 Challenge', nav_realworld:'🌍 Real World',
    nav_about:'ℹ️ About',
    cat_alkali:'Alkali', cat_alkaline:'Alkaline Earth', cat_transition:'Transition',
    cat_post_transition:'Post-Trans', cat_metalloid:'Metalloid', cat_nonmetal:'Nonmetal',
    cat_halogen:'Halogen', cat_noble_gas:'Noble Gas', cat_lanthanide:'Lanthanide',
    cat_actinide:'Actinide',
    search_placeholder:'Search element…',
    btn_ask_ai:'🤖 Ask AI', btn_send:'Send ↑', btn_clear:'Clear',
    lbl_atomic_structure:'⚛ Atomic Structure', lbl_configuration:'Configuration',
    lbl_valence:'Valence e⁻', lbl_protons:'Protons', lbl_neutrons:'Neutrons',
    lbl_state_stp:'State @ STP', lbl_electrons:'Electrons',
    lbl_properties:'Physical Properties', lbl_uses:'Common Uses',
    lbl_history:'History & Discovery', lbl_hazards:'Hazards',
    lbl_filters:'Filters', lbl_category:'Category', lbl_phase:'Phase at 25°C',
    lbl_block:'Electron Block',
    lbl_tools_title:'🔧 Chemistry Tools',
    lbl_tools_desc:'Interactive tools for learning and problem solving.',
    toast_lang_changed:'🌐 Language: '
  },
  hi: {
    nav_table:'🧪 तालिका', nav_reactions:'⚗ अभिक्रियाएँ', nav_organic:'🌿 कार्बनिक', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 स्मृति-सूत्र',
    nav_ions:'⚡ आयन', nav_tools:'🔧 उपकरण', nav_worksheet:'📄 वर्कशीट',
    nav_trends:'📈 प्रवृत्तियाँ', nav_challenge:'🏆 चुनौती', nav_realworld:'🌍 वास्तविक दुनिया',
    nav_about:'ℹ️ परिचय',
    cat_alkali:'क्षार धातु', cat_alkaline:'क्षारीय मृदा', cat_transition:'संक्रमण धातु',
    cat_post_transition:'पश्च-संक्रमण', cat_metalloid:'धातुकल्प', cat_nonmetal:'अधातु',
    cat_halogen:'हैलोजन', cat_noble_gas:'उत्कृष्ट गैस', cat_lanthanide:'लैन्थेनाइड',
    cat_actinide:'एक्टिनाइड',
    search_placeholder:'तत्व खोजें…',
    btn_ask_ai:'🤖 AI से पूछें', btn_send:'भेजें ↑', btn_clear:'साफ़ करें',
    lbl_atomic_structure:'⚛ परमाणु संरचना', lbl_configuration:'विन्यास',
    lbl_valence:'संयोजकता e⁻', lbl_protons:'प्रोटॉन', lbl_neutrons:'न्यूट्रॉन',
    lbl_state_stp:'STP पर अवस्था', lbl_electrons:'इलेक्ट्रॉन',
    lbl_properties:'भौतिक गुण', lbl_uses:'सामान्य उपयोग',
    lbl_history:'इतिहास एवं खोज', lbl_hazards:'खतरे',
    lbl_filters:'फ़िल्टर', lbl_category:'श्रेणी', lbl_phase:'25°C पर अवस्था',
    lbl_block:'इलेक्ट्रॉन ब्लॉक',
    lbl_tools_title:'🔧 रसायन उपकरण',
    lbl_tools_desc:'सीखने और समस्या-समाधान के लिए इंटरैक्टिव उपकरण।',
    toast_lang_changed:'🌐 भाषा: '
  },
  or: {
    nav_table:'🧪 ତାଲିକା', nav_reactions:'⚗ ପ୍ରତିକ୍ରିୟା', nav_organic:'🌿 ଜୈବ', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 ସ୍ମୃତି-ସୂତ୍ର',
    nav_ions:'⚡ ଆୟନ', nav_tools:'🔧 ଉପକରଣ', nav_worksheet:'📄 ୱର୍କଶୀଟ',
    nav_trends:'📈 ଧାରା', nav_challenge:'🏆 ଚ୍ୟାଲେଞ୍ଜ', nav_realworld:'🌍 ବାସ୍ତବ ଜଗତ',
    nav_about:'ℹ️ ପରିଚୟ',
    cat_alkali:'କ୍ଷାର ଧାତୁ', cat_alkaline:'ମୃଦୁ ଧାତୁ', cat_transition:'ସଂକ୍ରମଣ',
    cat_post_transition:'ପଶ୍ଚ-ସଂକ୍ରମଣ', cat_metalloid:'ଉପ-ଧାତୁ', cat_nonmetal:'ଅଧାତୁ',
    cat_halogen:'ହାଲୋଜେନ', cat_noble_gas:'ନିଷ୍କ୍ରିୟ ଗ୍ୟାସ', cat_lanthanide:'ଲ୍ୟାଣ୍ଟ୍ହାନାଇଡ',
    cat_actinide:'ଆକ୍ଟିନାଇଡ',
    search_placeholder:'ମୌଳ ଖୋଜ…',
    btn_ask_ai:'🤖 AI ପଚାର', btn_send:'ପଠାଅ ↑', btn_clear:'ସଫା',
    lbl_atomic_structure:'⚛ ପରମାଣୁ ଗଠନ', lbl_configuration:'ଇଲେକ୍ଟ୍ରନ ବିନ୍ୟାସ',
    lbl_valence:'ସଂଯୋଜ୍ୟ e⁻', lbl_protons:'ପ୍ରୋଟୋନ', lbl_neutrons:'ନ୍ୟୁଟ୍ରୋନ',
    lbl_state_stp:'STP ଅବସ୍ଥା', lbl_electrons:'ଇଲେକ୍ଟ୍ରନ',
    lbl_properties:'ଭୌତିକ ଗୁଣ', lbl_uses:'ସାଧାରଣ ଉପଯୋଗ',
    lbl_history:'ଇତିହାସ ଏବଂ ଆବିଷ୍କାର', lbl_hazards:'ବିପଦ',
    lbl_filters:'ଫିଲ୍ଟର', lbl_category:'ଶ୍ରେଣୀ', lbl_phase:'25°C ରେ ଅବସ୍ଥା',
    lbl_block:'ଇଲେକ୍ଟ୍ରନ ବ୍ଲକ',
    lbl_tools_title:'🔧 ରସାୟନ ଉପକରଣ',
    lbl_tools_desc:'ଶିକ୍ଷା ଓ ସମସ୍ୟା ସମାଧାନ ପାଇଁ ଇଣ୍ଟରାକ୍ଟିଭ ଉପକରଣ।',
    toast_lang_changed:'🌐 ଭାଷା: '
  },
  fr: {
    nav_table:'🧪 Tableau', nav_reactions:'⚗ Réactions', nav_organic:'🌿 Organique', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 Mnémoniques',
    nav_ions:'⚡ Ions', nav_tools:'🔧 Outils', nav_worksheet:'📄 Fiche de travail',
    nav_trends:'📈 Tendances', nav_challenge:'🏆 Défi', nav_realworld:'🌍 Monde Réel',
    nav_about:'ℹ️ À Propos',
    cat_alkali:'Alcalins', cat_alkaline:'Alcalino-terreux', cat_transition:'Métaux de transition',
    cat_post_transition:'Post-transition', cat_metalloid:'Métalloïdes', cat_nonmetal:'Non-métaux',
    cat_halogen:'Halogènes', cat_noble_gas:'Gaz nobles', cat_lanthanide:'Lanthanides',
    cat_actinide:'Actinides',
    search_placeholder:'Rechercher un élément…',
    btn_ask_ai:'🤖 Demander à l\'IA', btn_send:'Envoyer ↑', btn_clear:'Effacer',
    lbl_atomic_structure:'⚛ Structure Atomique', lbl_configuration:'Configuration',
    lbl_valence:'e⁻ de valence', lbl_protons:'Protons', lbl_neutrons:'Neutrons',
    lbl_state_stp:'État à STP', lbl_electrons:'Électrons',
    lbl_properties:'Propriétés Physiques', lbl_uses:'Utilisations',
    lbl_history:'Histoire & Découverte', lbl_hazards:'Dangers',
    lbl_filters:'Filtres', lbl_category:'Catégorie', lbl_phase:'Phase à 25°C',
    lbl_block:'Bloc électronique',
    lbl_tools_title:'🔧 Outils de Chimie',
    lbl_tools_desc:'Outils interactifs pour l\'apprentissage et la résolution de problèmes.',
    toast_lang_changed:'🌐 Langue: '
  },
  de: {
    nav_table:'🧪 Tabelle', nav_reactions:'⚗ Reaktionen', nav_organic:'🌿 Organisch', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 Eselsbrücken',
    nav_ions:'⚡ Ionen', nav_tools:'🔧 Werkzeuge', nav_worksheet:'📄 Arbeitsblatt',
    nav_trends:'📈 Trends', nav_challenge:'🏆 Herausforderung', nav_realworld:'🌍 Reale Welt',
    nav_about:'ℹ️ Über uns',
    cat_alkali:'Alkalimetalle', cat_alkaline:'Erdalkalimetalle', cat_transition:'Übergangsmetalle',
    cat_post_transition:'Post-Übergang', cat_metalloid:'Halbmetalle', cat_nonmetal:'Nichtmetalle',
    cat_halogen:'Halogene', cat_noble_gas:'Edelgase', cat_lanthanide:'Lanthanide',
    cat_actinide:'Actinide',
    search_placeholder:'Element suchen…',
    btn_ask_ai:'🤖 KI fragen', btn_send:'Senden ↑', btn_clear:'Löschen',
    lbl_atomic_structure:'⚛ Atomstruktur', lbl_configuration:'Konfiguration',
    lbl_valence:'Valenzelektronen', lbl_protons:'Protonen', lbl_neutrons:'Neutronen',
    lbl_state_stp:'Zustand bei STP', lbl_electrons:'Elektronen',
    lbl_properties:'Physikalische Eigenschaften', lbl_uses:'Häufige Verwendungen',
    lbl_history:'Geschichte & Entdeckung', lbl_hazards:'Gefahren',
    lbl_filters:'Filter', lbl_category:'Kategorie', lbl_phase:'Phase bei 25°C',
    lbl_block:'Elektronenblock',
    lbl_tools_title:'🔧 Chemie-Werkzeuge',
    lbl_tools_desc:'Interaktive Werkzeuge für Lernen und Problemlösung.',
    toast_lang_changed:'🌐 Sprache: '
  },
  es: {
    nav_table:'🧪 Tabla', nav_reactions:'⚗ Reacciones', nav_organic:'🌿 Orgánica', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 Mnemotecnia',
    nav_ions:'⚡ Iones', nav_tools:'🔧 Herramientas', nav_worksheet:'📄 Hoja de trabajo',
    nav_trends:'📈 Tendencias', nav_challenge:'🏆 Desafío', nav_realworld:'🌍 Mundo Real',
    nav_about:'ℹ️ Acerca de',
    cat_alkali:'Metales alcalinos', cat_alkaline:'Alcalinotérreos', cat_transition:'Metales de transición',
    cat_post_transition:'Post-transición', cat_metalloid:'Semimetales', cat_nonmetal:'No metales',
    cat_halogen:'Halógenos', cat_noble_gas:'Gases nobles', cat_lanthanide:'Lantánidos',
    cat_actinide:'Actínidos',
    search_placeholder:'Buscar elemento…',
    btn_ask_ai:'🤖 Preguntar IA', btn_send:'Enviar ↑', btn_clear:'Borrar',
    lbl_atomic_structure:'⚛ Estructura Atómica', lbl_configuration:'Configuración',
    lbl_valence:'e⁻ de valencia', lbl_protons:'Protones', lbl_neutrons:'Neutrones',
    lbl_state_stp:'Estado en STP', lbl_electrons:'Electrones',
    lbl_properties:'Propiedades Físicas', lbl_uses:'Usos Comunes',
    lbl_history:'Historia y Descubrimiento', lbl_hazards:'Peligros',
    lbl_filters:'Filtros', lbl_category:'Categoría', lbl_phase:'Fase a 25°C',
    lbl_block:'Bloque electrónico',
    lbl_tools_title:'🔧 Herramientas de Química',
    lbl_tools_desc:'Herramientas interactivas para aprender y resolver problemas.',
    toast_lang_changed:'🌐 Idioma: '
  },
  ja: {
    nav_table:'🧪 周期表', nav_reactions:'⚗ 反応', nav_organic:'🌿 有機', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 語呂合わせ',
    nav_ions:'⚡ イオン', nav_tools:'🔧 ツール', nav_worksheet:'📄 ワークシート',
    nav_trends:'📈 傾向', nav_challenge:'🏆 チャレンジ', nav_realworld:'🌍 実世界',
    nav_about:'ℹ️ 概要',
    cat_alkali:'アルカリ金属', cat_alkaline:'アルカリ土類', cat_transition:'遷移金属',
    cat_post_transition:'後遷移金属', cat_metalloid:'半金属', cat_nonmetal:'非金属',
    cat_halogen:'ハロゲン', cat_noble_gas:'希ガス', cat_lanthanide:'ランタノイド',
    cat_actinide:'アクチノイド',
    search_placeholder:'元素を検索…',
    btn_ask_ai:'🤖 AIに質問', btn_send:'送信 ↑', btn_clear:'クリア',
    lbl_atomic_structure:'⚛ 原子構造', lbl_configuration:'電子配置',
    lbl_valence:'価電子', lbl_protons:'陽子', lbl_neutrons:'中性子',
    lbl_state_stp:'STPでの状態', lbl_electrons:'電子',
    lbl_properties:'物理的性質', lbl_uses:'一般的な用途',
    lbl_history:'歴史・発見', lbl_hazards:'危険性',
    lbl_filters:'フィルター', lbl_category:'カテゴリー', lbl_phase:'25°Cでの相',
    lbl_block:'電子ブロック',
    lbl_tools_title:'🔧 化学ツール',
    lbl_tools_desc:'学習と問題解決のためのインタラクティブツール。',
    toast_lang_changed:'🌐 言語: '
  },
  zh: {
    nav_table:'🧪 周期表', nav_reactions:'⚗ 化学反应', nav_organic:'🌿 有机化学', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 记忆口诀',
    nav_ions:'⚡ 离子', nav_tools:'🔧 工具', nav_worksheet:'📄 工作表',
    nav_trends:'📈 趋势', nav_challenge:'🏆 挑战', nav_realworld:'🌍 现实世界',
    nav_about:'ℹ️ 关于',
    cat_alkali:'碱金属', cat_alkaline:'碱土金属', cat_transition:'过渡金属',
    cat_post_transition:'后过渡金属', cat_metalloid:'类金属', cat_nonmetal:'非金属',
    cat_halogen:'卤素', cat_noble_gas:'稀有气体', cat_lanthanide:'镧系元素',
    cat_actinide:'锕系元素',
    search_placeholder:'搜索元素…',
    btn_ask_ai:'🤖 问AI', btn_send:'发送 ↑', btn_clear:'清除',
    lbl_atomic_structure:'⚛ 原子结构', lbl_configuration:'电子配置',
    lbl_valence:'价电子', lbl_protons:'质子', lbl_neutrons:'中子',
    lbl_state_stp:'STP状态', lbl_electrons:'电子',
    lbl_properties:'物理性质', lbl_uses:'常见用途',
    lbl_history:'历史与发现', lbl_hazards:'危害',
    lbl_filters:'筛选', lbl_category:'类别', lbl_phase:'25°C相态',
    lbl_block:'电子块',
    lbl_tools_title:'🔧 化学工具',
    lbl_tools_desc:'用于学习和解决问题的交互式工具。',
    toast_lang_changed:'🌐 语言: '
  },
  ar: {
    nav_table:'🧪 الجدول', nav_reactions:'⚗ التفاعلات', nav_organic:'🌿 عضوي', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 الحفظ',
    nav_ions:'⚡ الأيونات', nav_tools:'🔧 الأدوات', nav_worksheet:'📄 ورقة العمل',
    nav_trends:'📈 الاتجاهات', nav_challenge:'🏆 التحدي', nav_realworld:'🌍 العالم الحقيقي',
    nav_about:'ℹ️ حول',
    cat_alkali:'الفلزات القلوية', cat_alkaline:'القلويات الأرضية', cat_transition:'فلزات الانتقال',
    cat_post_transition:'ما بعد الانتقال', cat_metalloid:'أشباه الفلزات', cat_nonmetal:'اللافلزات',
    cat_halogen:'الهالوجينات', cat_noble_gas:'الغازات النبيلة', cat_lanthanide:'اللانثانيدات',
    cat_actinide:'الأكتينيدات',
    search_placeholder:'ابحث عن عنصر…',
    btn_ask_ai:'🤖 اسأل الذكاء الاصطناعي', btn_send:'إرسال ↑', btn_clear:'مسح',
    lbl_atomic_structure:'⚛ البنية الذرية', lbl_configuration:'التوزيع الإلكتروني',
    lbl_valence:'إلكترونات التكافؤ', lbl_protons:'البروتونات', lbl_neutrons:'النيوترونات',
    lbl_state_stp:'الحالة عند STP', lbl_electrons:'الإلكترونات',
    lbl_properties:'الخصائص الفيزيائية', lbl_uses:'الاستخدامات الشائعة',
    lbl_history:'التاريخ والاكتشاف', lbl_hazards:'المخاطر',
    lbl_filters:'تصفية', lbl_category:'الفئة', lbl_phase:'الطور عند 25°C',
    lbl_block:'الكتلة الإلكترونية',
    lbl_tools_title:'🔧 أدوات الكيمياء',
    lbl_tools_desc:'أدوات تفاعلية للتعلم وحل المسائل.',
    toast_lang_changed:'🌐 اللغة: '
  },
  ru: {
    nav_table:'🧪 Таблица', nav_reactions:'⚗ Реакции', nav_organic:'🌿 Органика', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 Мнемоника',
    nav_ions:'⚡ Ионы', nav_tools:'🔧 Инструменты', nav_worksheet:'📄 Рабочий лист',
    nav_trends:'📈 Тенденции', nav_challenge:'🏆 Вызов', nav_realworld:'🌍 Реальный мир',
    nav_about:'ℹ️ О нас',
    cat_alkali:'Щелочные металлы', cat_alkaline:'Щёлочноземельные', cat_transition:'Переходные металлы',
    cat_post_transition:'Постпереходные', cat_metalloid:'Металлоиды', cat_nonmetal:'Неметаллы',
    cat_halogen:'Галогены', cat_noble_gas:'Благородные газы', cat_lanthanide:'Лантаниды',
    cat_actinide:'Актиниды',
    search_placeholder:'Поиск элемента…',
    btn_ask_ai:'🤖 Спросить ИИ', btn_send:'Отправить ↑', btn_clear:'Очистить',
    lbl_atomic_structure:'⚛ Атомная структура', lbl_configuration:'Конфигурация',
    lbl_valence:'Валентные e⁻', lbl_protons:'Протоны', lbl_neutrons:'Нейтроны',
    lbl_state_stp:'Состояние при STP', lbl_electrons:'Электроны',
    lbl_properties:'Физические свойства', lbl_uses:'Применение',
    lbl_history:'История и открытие', lbl_hazards:'Опасность',
    lbl_filters:'Фильтры', lbl_category:'Категория', lbl_phase:'Фаза при 25°C',
    lbl_block:'Электронный блок',
    lbl_tools_title:'🔧 Химические инструменты',
    lbl_tools_desc:'Интерактивные инструменты для обучения и решения задач.',
    toast_lang_changed:'🌐 Язык: '
  },
  ko: {
    nav_table:'🧪 주기율표', nav_reactions:'⚗ 반응', nav_organic:'🌿 유기화학', nav_ncert:'📚 NCERT', nav_mnemonics:'🎵 암기법',
    nav_ions:'⚡ 이온', nav_tools:'🔧 도구', nav_worksheet:'📄 학습지',
    nav_trends:'📈 경향', nav_challenge:'🏆 챌린지', nav_realworld:'🌍 실생활',
    nav_about:'ℹ️ 소개',
    cat_alkali:'알칼리 금속', cat_alkaline:'알칼리 토금속', cat_transition:'전이 금속',
    cat_post_transition:'후전이 금속', cat_metalloid:'준금속', cat_nonmetal:'비금속',
    cat_halogen:'할로겐', cat_noble_gas:'비활성 기체', cat_lanthanide:'란타넘족',
    cat_actinide:'악티늄족',
    search_placeholder:'원소 검색…',
    btn_ask_ai:'🤖 AI에게 묻기', btn_send:'전송 ↑', btn_clear:'지우기',
    lbl_atomic_structure:'⚛ 원자 구조', lbl_configuration:'전자 배치',
    lbl_valence:'원자가 e⁻', lbl_protons:'양성자', lbl_neutrons:'중성자',
    lbl_state_stp:'STP 상태', lbl_electrons:'전자',
    lbl_properties:'물리적 특성', lbl_uses:'일반적인 용도',
    lbl_history:'역사 및 발견', lbl_hazards:'위험성',
    lbl_filters:'필터', lbl_category:'분류', lbl_phase:'25°C에서의 상',
    lbl_block:'전자 블록',
    lbl_tools_title:'🔧 화학 도구',
    lbl_tools_desc:'학습과 문제 해결을 위한 대화형 도구.',
    toast_lang_changed:'🌐 언어: '
  }
};

// ── Element Name Translations ─────────────────────────────────────────
var i18nNames = {
  en: {},
  hi: {
    1:'हाइड्रोजन',2:'हीलियम',3:'लिथियम',4:'बेरिलियम',5:'बोरॉन',
    6:'कार्बन',7:'नाइट्रोजन',8:'ऑक्सीजन',9:'फ्लोरीन',10:'नियॉन',
    11:'सोडियम',12:'मैग्नीशियम',13:'एल्युमीनियम',14:'सिलिकॉन',
    15:'फास्फोरस',16:'सल्फर',17:'क्लोरीन',18:'आर्गन',
    19:'पोटेशियम',20:'कैल्शियम',21:'स्कैंडियम',22:'टाइटेनियम',
    23:'वैनेडियम',24:'क्रोमियम',25:'मैंगनीज',26:'लोहा',
    27:'कोबाल्ट',28:'निकेल',29:'तांबा',30:'जस्ता',
    31:'गैलियम',32:'जर्मेनियम',33:'आर्सेनिक',34:'सेलेनियम',
    35:'ब्रोमीन',36:'क्रिप्टान',47:'चाँदी',50:'टिन',
    53:'आयोडीन',54:'जेनान',79:'सोना',80:'पारा',82:'सीसा',
    86:'रेडान',88:'रेडियम',92:'यूरेनियम'
  },
  or: {
    1:'ହାଇଡ୍ରୋଜେନ୍',2:'ହିଲିୟମ୍',3:'ଲିଥିୟମ୍',4:'ବେରିଲିୟମ୍',
    5:'ବୋରୋନ୍',6:'କାର୍ବନ୍',7:'ନାଇଟ୍ରୋଜେନ୍',8:'ଅମ୍ଳଜାନ',
    9:'ଫ୍ଲୋରିନ୍',10:'ନିଓନ୍',11:'ସୋଡ଼ିୟମ୍',12:'ମ୍ୟାଗ୍ନେସିୟମ୍',
    13:'ଆଲୁମିନିୟମ୍',14:'ସିଲିକନ୍',15:'ଫସ୍‌ଫରସ୍',16:'ଗନ୍ଧକ',
    17:'କ୍ଲୋରିନ୍',18:'ଆର୍ଗନ୍',19:'ପୋଟାସିୟମ୍',20:'କ୍ୟାଲସିୟମ୍',
    21:'ସ୍କ୍ୟାଣ୍ଡ଼ିୟମ',22:'ଟାଇଟାନ୍ୟମ',23:'ଭ୍ୟାନ୍ଡ଼ିୟମ',
    24:'କ୍ରୋମ୍ୟମ',25:'ମ୍ୟାଙ୍ଗାନ୍ସ',26:'ଲୋହା',27:'କୋବାଲ୍ଟ',
    28:'ନ୍ୟୋକ୍ଲ',29:'ତମ୍ବା',30:'ଜିଙ୍କ',35:'ବ୍ରୋମ୍ନ',
    47:'ରୂପା',53:'ଆୟୋଡ଼ିନ',79:'ସୁନା',80:'ପାରଦ',82:'ସୀସା',92:'ୟୁରାନ୍ୟମ'
  },
  fr: {
    1:'Hydrogène',2:'Hélium',3:'Lithium',4:'Béryllium',5:'Bore',
    6:'Carbone',7:'Azote',8:'Oxygène',9:'Fluor',10:'Néon',
    11:'Sodium',12:'Magnésium',13:'Aluminium',14:'Silicium',
    15:'Phosphore',16:'Soufre',17:'Chlore',18:'Argon',
    19:'Potassium',20:'Calcium',21:'Scandium',22:'Titane',
    23:'Vanadium',24:'Chrome',25:'Manganèse',26:'Fer',
    27:'Cobalt',28:'Nickel',29:'Cuivre',30:'Zinc',
    31:'Gallium',32:'Germanium',33:'Arsenic',34:'Sélénium',
    35:'Brome',36:'Krypton',47:'Argent',50:'Étain',
    53:'Iode',54:'Xénon',79:'Or',80:'Mercure',82:'Plomb',
    86:'Radon',88:'Radium',92:'Uranium'
  },
  de: {
    1:'Wasserstoff',2:'Helium',3:'Lithium',4:'Beryllium',5:'Bor',
    6:'Kohlenstoff',7:'Stickstoff',8:'Sauerstoff',9:'Fluor',10:'Neon',
    11:'Natrium',12:'Magnesium',13:'Aluminium',14:'Silicium',
    15:'Phosphor',16:'Schwefel',17:'Chlor',18:'Argon',
    19:'Kalium',20:'Calcium',21:'Scandium',22:'Titan',
    23:'Vanadium',24:'Chrom',25:'Mangan',26:'Eisen',
    27:'Kobalt',28:'Nickel',29:'Kupfer',30:'Zink',
    31:'Gallium',32:'Germanium',33:'Arsen',34:'Selen',
    35:'Brom',36:'Krypton',47:'Silber',50:'Zinn',
    53:'Iod',54:'Xenon',79:'Gold',80:'Quecksilber',82:'Blei',
    86:'Radon',88:'Radium',92:'Uran'
  },
  es: {
    1:'Hidrógeno',2:'Helio',3:'Litio',4:'Berilio',5:'Boro',
    6:'Carbono',7:'Nitrógeno',8:'Oxígeno',9:'Flúor',10:'Neón',
    11:'Sodio',12:'Magnesio',13:'Aluminio',14:'Silicio',
    15:'Fósforo',16:'Azufre',17:'Cloro',18:'Argón',
    19:'Potasio',20:'Calcio',21:'Escandio',22:'Titanio',
    23:'Vanadio',24:'Cromo',25:'Manganeso',26:'Hierro',
    27:'Cobalto',28:'Níquel',29:'Cobre',30:'Zinc',
    31:'Galio',32:'Germanio',33:'Arsénico',34:'Selenio',
    35:'Bromo',36:'Criptón',47:'Plata',50:'Estaño',
    53:'Yodo',54:'Xenón',79:'Oro',80:'Mercurio',82:'Plomo',
    86:'Radón',88:'Radio',92:'Uranio'
  },
  ja: {
    1:'水素',2:'ヘリウム',3:'リチウム',4:'ベリリウム',5:'ホウ素',
    6:'炭素',7:'窒素',8:'酸素',9:'フッ素',10:'ネオン',
    11:'ナトリウム',12:'マグネシウム',13:'アルミニウム',14:'ケイ素',
    15:'リン',16:'硫黄',17:'塩素',18:'アルゴン',
    19:'カリウム',20:'カルシウム',21:'スカンジウム',22:'チタン',
    23:'バナジウム',24:'クロム',25:'マンガン',26:'鉄',
    27:'コバルト',28:'ニッケル',29:'銅',30:'亜鉛',
    31:'ガリウム',32:'ゲルマニウム',33:'ヒ素',34:'セレン',
    35:'臭素',36:'クリプトン',47:'銀',50:'スズ',
    53:'ヨウ素',54:'キセノン',79:'金',80:'水銀',82:'鉛',
    86:'ラドン',88:'ラジウム',92:'ウラン'
  },
  zh: {
    1:'氢',2:'氦',3:'锂',4:'铍',5:'硼',6:'碳',7:'氮',8:'氧',
    9:'氟',10:'氖',11:'钠',12:'镁',13:'铝',14:'硅',15:'磷',
    16:'硫',17:'氯',18:'氩',19:'钾',20:'钙',21:'钪',22:'钛',
    23:'钒',24:'铬',25:'锰',26:'铁',27:'钴',28:'镍',29:'铜',
    30:'锌',31:'镓',32:'锗',33:'砷',34:'硒',35:'溴',36:'氪',
    47:'银',50:'锡',53:'碘',54:'氙',79:'金',80:'汞',82:'铅',
    86:'氡',88:'镭',92:'铀'
  },
  ar: {
    1:'هيدروجين',2:'هيليوم',3:'ليثيوم',4:'بيريليوم',5:'بورون',
    6:'كربون',7:'نيتروجين',8:'أكسجين',9:'فلور',10:'نيون',
    11:'صوديوم',12:'ماغنيسيوم',13:'ألومنيوم',14:'سيليكون',
    15:'فوسفور',16:'كبريت',17:'كلور',18:'أرغون',
    19:'بوتاسيوم',20:'كالسيوم',26:'حديد',29:'نحاس',
    47:'فضة',50:'قصدير',53:'يود',79:'ذهب',80:'زئبق',82:'رصاص',
    92:'يورانيوم'
  },
  ru: {
    1:'Водород',2:'Гелий',3:'Литий',4:'Бериллий',5:'Бор',
    6:'Углерод',7:'Азот',8:'Кислород',9:'Фтор',10:'Неон',
    11:'Натрий',12:'Магний',13:'Алюминий',14:'Кремний',
    15:'Фосфор',16:'Сера',17:'Хлор',18:'Аргон',
    19:'Калий',20:'Кальций',21:'Скандий',22:'Титан',
    23:'Ванадий',24:'Хром',25:'Марганец',26:'Железо',
    27:'Кобальт',28:'Никель',29:'Медь',30:'Цинк',
    31:'Галлий',32:'Германий',33:'Мышьяк',34:'Селен',
    35:'Бром',36:'Криптон',47:'Серебро',50:'Олово',
    53:'Йод',54:'Ксенон',79:'Золото',80:'Ртуть',82:'Свинец',
    86:'Радон',88:'Радий',92:'Уран'
  },
  ko: {
    1:'수소',2:'헬륨',3:'리튬',4:'베릴륨',5:'붕소',
    6:'탄소',7:'질소',8:'산소',9:'플루오린',10:'네온',
    11:'나트륨',12:'마그네슘',13:'알루미늄',14:'규소',
    15:'인',16:'황',17:'염소',18:'아르곤',
    19:'칼륨',20:'칼슘',21:'스칸듐',22:'타이타늄',
    23:'바나듐',24:'크로뮴',25:'망가니즈',26:'철',
    27:'코발트',28:'니켈',29:'구리',30:'아연',
    31:'갈륨',32:'저마늄',33:'비소',34:'셀레늄',
    35:'브로민',36:'크립톤',47:'은',50:'주석',
    53:'아이오딘',54:'제논',79:'금',80:'수은',82:'납',
    86:'라돈',88:'라듐',92:'우라늄'
  }
};

// ── Translation helper ────────────────────────────────────────────────
function t(key) {
  var dict = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;
  return dict[key] || UI_TRANSLATIONS.en[key] || key;
}

// ── Language Switcher — Portal Pattern ───────────────────────────────
// Moves #langDropdown to <body> so it escapes ALL parent stacking
// contexts (position:sticky+z-index on .topbar, backdrop-filter, etc.)
(function initLangPortal() {
  function portal() {
    var dropdown = document.getElementById('langDropdown');
    if (!dropdown) return;
    // Already portalled
    if (dropdown.parentElement === document.body) return;
    // Detach from .lang-switcher-wrap and re-attach to body
    document.body.appendChild(dropdown);
    // Force fixed positioning & top z-index (redundant safety)
    dropdown.style.position = 'fixed';
    dropdown.style.zIndex   = '2147483647'; // max int z-index
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', portal);
  } else {
    portal();
  }
})();

// Task 6: Update voice button titles when lang changes
function _updateVoiceBtnTitles() {
  if (typeof currentLang !== 'undefined' && currentLang === 'or' && SPEECH_RECOG_AVAILABLE) {
    document.querySelectorAll('[id^="voiceBtn_"]').forEach(function(btn) {
      btn.title = 'ଓଡ௃ଆரெ ப்ரஶ்ன் କரந்து'; // "Ask a question in Odia"
    });
  } else {
    document.querySelectorAll('[id^="voiceBtn_"]').forEach(function(btn) {
      btn.title = 'Speak your question in Odia or Hindi';
    });
  }
}

function _positionLangDropdown() {
  var trigger  = document.getElementById('langTrigger');
  var dropdown = document.getElementById('langDropdown');
  if (!trigger || !dropdown) return;
  var rect = trigger.getBoundingClientRect();
  var gap  = 8;
  // Place below trigger button
  var top   = rect.bottom + gap;
  // Align right edges; clamp so it never falls off-screen left
  var right = window.innerWidth - rect.right;
  right = Math.max(8, right);
  // Clamp so dropdown doesn't overflow below viewport
  var maxH = Math.max(120, Math.min(320, window.innerHeight - top - 12));
  dropdown.style.top       = top + 'px';
  dropdown.style.right     = right + 'px';
  dropdown.style.left      = 'auto';
  dropdown.style.maxHeight = maxH + 'px';
}

function _openLangDropdown() {
  var wrap     = document.getElementById('langSwitcher');
  var dropdown = document.getElementById('langDropdown');
  wrap.classList.add('open');
  // Since dropdown is now on <body>, manually mirror open class
  if (dropdown) dropdown.classList.add('open');
  _positionLangDropdown();
  window._langPosHandler = function() { _positionLangDropdown(); };
  window.addEventListener('scroll', window._langPosHandler, true);
  window.addEventListener('resize', window._langPosHandler);
}

function _closeLangDropdown() {
  var wrap     = document.getElementById('langSwitcher');
  var dropdown = document.getElementById('langDropdown');
  wrap.classList.remove('open');
  if (dropdown) dropdown.classList.remove('open');
  if (window._langPosHandler) {
    window.removeEventListener('scroll', window._langPosHandler, true);
    window.removeEventListener('resize', window._langPosHandler);
    window._langPosHandler = null;
  }
}

function toggleLangDropdown(e) {
  e.stopPropagation();
  var wrap = document.getElementById('langSwitcher');
  if (wrap.classList.contains('open')) {
    _closeLangDropdown();
  } else {
    _openLangDropdown();
  }
}

document.addEventListener('click', function(e) {
  var wrap     = document.getElementById('langSwitcher');
  var dropdown = document.getElementById('langDropdown');
  var clickedInside = (wrap && wrap.contains(e.target)) ||
                      (dropdown && dropdown.contains(e.target));
  if (!clickedInside) {
    _closeLangDropdown();
  }
});

function filterLangs(query) {
  var q = query.toLowerCase().trim();
  document.querySelectorAll('#ldList .ld-option').forEach(function(opt) {
    var native = (opt.querySelector('.ld-native')||{textContent:''}).textContent.toLowerCase();
    var eng = (opt.querySelector('.ld-english')||{textContent:''}).textContent.toLowerCase();
    var match = !q || native.includes(q) || eng.includes(q);
    opt.classList.toggle('hidden', !match);
  });
}

function selectLang(l) {
  // Close dropdown via portal-aware close
  _closeLangDropdown();
  // Clear search
  var ldSearch = document.getElementById('ldSearch');
  if (ldSearch) { ldSearch.value = ''; filterLangs(''); }
  // Apply language
  setLang(l);
}

// ── Core Language Application ─────────────────────────────────────────
function setLang(l) {
  // Validate
  if (!LANG_META[l]) l = 'en';
  currentLang = l;

  // Persist to localStorage
  try { localStorage.setItem('hertech_lang', l); } catch(e){}

  var meta = LANG_META[l];

  // 1. Update <html> lang + dir
  document.documentElement.lang = l;
  document.documentElement.dir = meta.dir;

  // 2. Apply font class
  var allFontClasses = ['lang-body-hi','lang-body-ar','lang-body-ja','lang-body-zh','lang-body-ko','lang-body-ru','lang-body-or'];
  document.body.classList.remove.apply(document.body.classList, allFontClasses);
  if (meta.fontClass) document.body.classList.add(meta.fontClass);

  // 3. Update trigger button
  var ltFlag = document.getElementById('ltFlag');
  var ltCode = document.getElementById('ltCode');
  if (ltFlag) ltFlag.textContent = meta.flag;
  if (ltCode) ltCode.textContent = meta.code;

  // 4. Update active state in dropdown
  document.querySelectorAll('#ldList .ld-option').forEach(function(opt) {
    opt.classList.toggle('active', opt.dataset.lang === l);
  });

  // 5. Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var translated = t(key);
    if (translated) el.textContent = translated;
  });

  // 6. Translate placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    var translated = t(key);
    if (translated) el.placeholder = translated;
  });

  // 7. Translate element names on periodic table cells
  document.querySelectorAll('.cell[data-n]').forEach(function(c) {
    var n = +c.dataset.n;
    var nameEl = c.querySelector('.cname');
    if (!nameEl) return;
    var el = elMap[n];
    if (!el) {
      var fallback = lantN[n]||actN[n]||symN[n];
      if (!fallback) return;
      var engName = fallback[1]||'';
      nameEl.textContent = (i18nNames[l]&&i18nNames[l][n]) ? i18nNames[l][n] : engName;
      return;
    }
    var translated = (i18nNames[l] && i18nNames[l][n]) ? i18nNames[l][n] : el.name;
    nameEl.textContent = translated;
  });

  // 8. Handle RTL layout
  document.body.style.direction = meta.dir === 'rtl' ? 'rtl' : '';

  // 9. Translate element modal labels if open
  translateModalLabels();

  // 10. Translate all visible tab content
  translateAllTabContent();

  // 11. Translate heatmap dropdown options
  translateHeatmapOptions();

  // 12. Translate filter toolbar labels
  translateFilterLabels();

  // 13. Handle Odia banner
  var banner = document.getElementById('odiaBanner');
  if (l === 'or') {
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'odiaBanner';
      banner.style.cssText = 'background:linear-gradient(135deg,rgba(16,185,129,.12),rgba(6,182,212,.08));border-bottom:1px solid rgba(16,185,129,.25);padding:7px 16px;font-size:12px;color:var(--text);display:flex;align-items:center;gap:8px;';
      banner.innerHTML = '<span style="font-size:16px;">🏛️</span><span style="font-family:\'Noto Sans\',sans-serif;"><strong style="color:#059669;">ଓଡ଼ିଆ ମୋଡ୍ ସକ୍ରିୟ</strong> — ଆବଧ ପ୍ରମୁଖ ମୌଳିକ ପଦାର୍ଥ ଓଡ଼ିଆ ଭାଷାରେ ଦେଖାଯାଉଛି।</span><button onclick="this.parentNode.remove()" style="margin-left:auto;background:none;border:none;cursor:pointer;font-size:14px;color:var(--muted);">✕</button>';
      var nav = document.querySelector('.navtabs');
      if (nav) nav.parentNode.insertBefore(banner, nav.nextSibling);
    }
  } else if (banner) {
    banner.remove();
  }

  // 14. Show toast
  showToast(t('toast_lang_changed') + meta.native);

  // 15. If element modal is open, re-render it with new language
  if (currentEl) {
    openEl(currentEl.n);
  }

  // Task 6: update voice button tooltips for Odia
  if (l === 'or' && SPEECH_RECOG_AVAILABLE) {
    document.querySelectorAll('[id^="voiceBtn_"]').forEach(function(btn) {
      btn.title = 'ଓଡ଼ିଆରେ ପ୍ରଶ୍ନ କରନ୍ତୁ'; // "Ask a question in Odia"
    });
  } else {
    document.querySelectorAll('[id^="voiceBtn_"]').forEach(function(btn) {
      btn.title = 'Speak your question in Odia or Hindi';
    });
  }
}

// ── Translate modal property labels ──────────────────────────────────
function translateModalLabels() {
  var labels = {
    'lbl_atomic_structure': '⚛ Atomic Structure',
    'lbl_configuration': 'Configuration',
    'lbl_valence': 'Valence e⁻',
    'lbl_protons': 'Protons',
    'lbl_neutrons': 'Neutrons',
    'lbl_state_stp': 'State @ STP',
    'lbl_electrons': 'Electrons'
  };
  // These are inside .pl (property label) divs inside the modal
  document.querySelectorAll('.pl').forEach(function(el) {
    var txt = el.textContent.trim().toUpperCase();
    // Map English text to i18n key and update
    var keyMap = {
      'CONFIGURATION': 'lbl_configuration',
      'VALENCE E⁻': 'lbl_valence',
      'PROTONS': 'lbl_protons',
      'NEUTRONS': 'lbl_neutrons',
      'STATE @ STP': 'lbl_state_stp',
      'ELECTRONS': 'lbl_electrons',
      'ATOMIC RADIUS': 'lbl_atomic_radius',
      'IONIZATION ENERGY': 'lbl_ie',
      'ELECTRONEGATIVITY': 'lbl_en',
      'ELECTRON AFFINITY': 'lbl_ea',
      'MELTING POINT': 'lbl_mp',
      'BOILING POINT': 'lbl_bp',
      'DENSITY': 'lbl_density',
      'SPECIFIC HEAT': 'lbl_sh',
      'OXIDATION STATES': 'lbl_ox'
    };
    if (keyMap[txt]) {
      var translated = t(keyMap[txt]);
      if (translated && translated !== keyMap[txt]) el.textContent = translated;
    }
  });
}

// ── Translate heatmap dropdown ────────────────────────────────────────
function translateHeatmapOptions() {
  var propSel = document.getElementById('propSel');
  if (!propSel) return;
  var opts = propSel.options;
  var keys = ['heatmap_label','hm_radius','hm_ie','hm_en','hm_ea','hm_mp','hm_metal','hm_dens','hm_bp'];
  for (var i = 0; i < opts.length && i < keys.length; i++) {
    var tx = t(keys[i]);
    if (tx && tx !== keys[i]) opts[i].text = tx;
  }
}

// ── Translate filter toolbar ──────────────────────────────────────────
function translateFilterLabels() {
  // Filter toggle row text
  var filterSpan = document.querySelector('#filterToggleRow span');
  if (filterSpan) {
    var tx = t('lbl_filters');
    if (tx) filterSpan.textContent = tx;
  }
  // Category / Phase / Block headers inside filter panel
  document.querySelectorAll('#filterPanel > div > div:first-child').forEach(function(el) {
    var txt = el.textContent.trim().toLowerCase();
    if (txt === 'category') { var tx = t('lbl_category'); if (tx) el.textContent = tx; }
    else if (txt.includes('phase')) { var tx2 = t('lbl_phase'); if (tx2) el.textContent = tx2; }
    else if (txt.includes('block')) { var tx3 = t('lbl_block'); if (tx3) el.textContent = tx3; }
  });
  // Filter pill text
  var catMap2 = {
    'alkali metals': 'cat_alkali_full', 'alkaline earth': 'cat_alkaline_full',
    'transition metals': 'cat_transition_full', 'post-transition': 'cat_post_full',
    'metalloids': 'cat_metalloid_full', 'nonmetals': 'cat_nonmetal_full',
    'halogens': 'cat_halogen_full', 'noble gases': 'cat_noble_full',
    'lanthanides': 'cat_lanthanide_full', 'actinides': 'cat_actinide_full'
  };
}

// ── Translate ALL tab content comprehensively ─────────────────────────
function translateAllTabContent() {
  var L = currentLang;

  // --- Tools view ---
  var toolsTitle = document.querySelector('#toolsView .tools-wrap > div:first-child');
  if (toolsTitle) {
    var tx = t('lbl_tools_title');
    if (tx) toolsTitle.textContent = tx;
  }
  var toolsDesc = document.querySelector('#toolsView .tools-wrap > p');
  if (toolsDesc) {
    var txd = t('lbl_tools_desc');
    if (txd) toolsDesc.textContent = txd;
  }

  // --- Ion view section titles ---
  var ionTitles = document.querySelectorAll('.ion-sec-t');
  var ionKeys = ['ion_mono','ion_poly','ion_trans','ion_special'];
  ionTitles.forEach(function(el, i) {
    var tx = t(ionKeys[i]);
    if (tx && tx !== ionKeys[i]) el.textContent = tx;
  });

  // --- Real World view ---
  var rwTitle = document.querySelector('#realWorldView [style*="font-size:22px"]');
  if (rwTitle) { var tx = t('nav_realworld_title'); if (tx && tx !== 'nav_realworld_title') rwTitle.textContent = tx; }

  // --- Legend bar ---
  document.querySelectorAll('.legend-bar .leg span[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  // --- Challenge view ---
  translateChallengeView();

  // --- Trend view ---
  translateTrendView();

  // --- Reactions view title ---
  var rxTitle = document.querySelector('.rx-sidebar h3');
  if (rxTitle) { var tx2 = t('nav_reactions_title'); if (tx2 && tx2 !== 'nav_reactions_title') rxTitle.textContent = tx2; }

  // --- NCERT view ---
  var ncertTitle = document.querySelector('.ncert-nav h3');
  if (ncertTitle) { var tx3 = t('nav_ncert_title'); if (tx3 && tx3 !== 'nav_ncert_title') ncertTitle.textContent = tx3; }

  // --- Worksheet view ---
  translateWorksheetView();
}

function translateChallengeView() {
  // Challenge view title
  var cvWrap = document.querySelector('#challengeView');
  if (!cvWrap) return;
  var title = cvWrap.querySelector('[style*="font-size:22px"]');
  if (title) { var tx = t('challenge_title'); if (tx && tx !== 'challenge_title') title.innerHTML = tx; }
}

function translateTrendView() {
  var tv = document.querySelector('#trendView');
  if (!tv) return;
  var title = tv.querySelector('[style*="font-size:20px"]');
  if (title) { var tx = t('trends_title'); if (tx && tx !== 'trends_title') title.textContent = tx; }
}

function translateWorksheetView() {
  var wsv = document.querySelector('#wsView');
  if (!wsv) return;
  // Worksheet title
  var title = wsv.querySelector('[style*="font-size:20px"]');
  if (title) { var tx = t('ws_title'); if (tx && tx !== 'ws_title') title.textContent = tx; }
}

// ── Old setLang alias (backward compat with any existing calls) ────────
// (setLang is now the full function above)

// ── Initialize language on page load ─────────────────────────────────
(function initLang() {
  var saved = currentLang;
  if (saved && LANG_META[saved]) {
    // Apply language after DOM is ready via the existing flow
    // We'll call setLang after elMap is built (see bottom of script)
  }
})();

// ── Old setLang alias (backward compat with any existing calls) ────────
// (setLang is now the full function above)

// ── Initialize language on page load ─────────────────────────────────
(function initLang() {
  var saved = currentLang;
  if (saved && LANG_META[saved]) {
    // Apply language after DOM is ready via the existing flow
    // We'll call setLang after elMap is built (see bottom of script)
  }
})();

// ===== HEATMAP =====
var pdData={
  r:{min:30,max:265,lbl:'Atomic Radius (pm)',unit:'pm'},
  ie:{min:376,max:2372,lbl:'Ionization Energy',unit:'kJ/mol'},
  en:{min:0.7,max:3.98,lbl:'Electronegativity',unit:'Pauling'},
  ea:{min:0,max:349,lbl:'Electron Affinity',unit:'kJ/mol'},
  mp:{min:1,max:3823,lbl:'Melting Point',unit:'K'},
  bp:{min:4,max:5870,lbl:'Boiling Point',unit:'K'},
  dens:{min:0.09,max:22.59,lbl:'Density',unit:'g/cm³'},
  metal:{min:0,max:100,lbl:'Metallic Character',unit:'%'}
};
function getProp(el,prop){if(!el)return null;return el[prop]!=null?el[prop]:null;}
function applyHM(prop){
  if(!prop){clearHM();return;}
  var pd=pdData[prop];
  if(!pd){clearHM();return;}
  var bar=document.getElementById('hmBar');
  bar.classList.add('on');
  document.getElementById('hmMin').textContent=pd.min+(pd.unit?' '+pd.unit:'');
  document.getElementById('hmMax').textContent=pd.max+(pd.unit?' '+pd.unit:'');
  var isDark=document.body.dataset.theme==='dark';
  document.querySelectorAll('.cell[data-n]').forEach(function(c){
    var n=+c.dataset.n;
    var el=elMap[n];
    var v=el?getProp(el,prop):null;
    if(v==null){c.style.opacity='0.25';c.style.removeProperty('background-color');return;}
    c.style.opacity='1';
    var pct=Math.max(0,Math.min(1,(v-pd.min)/(pd.max-pd.min)));
    var h=220-pct*180, s=65, l=isDark?(30+pct*25):(75-pct*40);
    c.style.backgroundColor='hsl('+h+','+s+'%,'+l+'%)';
  });
}
function clearHM(){document.getElementById('propSel').value='';var _hmb=document.getElementById('hmBar');if(_hmb)_hmb.classList.remove('on');document.querySelectorAll('.cell[data-n]').forEach(function(c){c.style.backgroundColor='';c.style.opacity='';});}
