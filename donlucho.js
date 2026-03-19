// ============================================
//   DON LUCHO — donlucho.js
//   Menú con pizarrón · Constructor visual
//   Carrito de domicilio · Granizados
//   Humo animado · Contador de stats
// ============================================

// ══════════ DATA ══════════
const menuItems = [
  // SALCHIPAPAS — la estrella
  {id:1,  cat:'salchipapas', nombre:'Salchipapa Pequeña',    precio:8000,  desc:'Papas fritas + 1 salchicha + 2 salsas. La clásica.',         favorito:false, nuevo:false},
  {id:2,  cat:'salchipapas', nombre:'Salchipapa Mediana',    precio:12000, desc:'Papas fritas + 2 salchichas + 3 salsas. La más pedida.',     favorito:true,  nuevo:false},
  {id:3,  cat:'salchipapas', nombre:'Salchipapa Grande',     precio:16000, desc:'Papas fritas + 3 salchichas + todas las salsas. El lujo.',   favorito:false, nuevo:false},
  {id:4,  cat:'salchipapas', nombre:'Salchipapa Familiar',   precio:28000, desc:'Para compartir. 4 porciones + 6 salchichas. La bataola.',   favorito:true,  nuevo:false},
  {id:5,  cat:'salchipapas', nombre:'Salchipapa Especial',   precio:18000, desc:'Con tocineta, champiñones y queso fundido encima.',         favorito:true,  nuevo:false},
  {id:6,  cat:'salchipapas', nombre:'Salchipapa Mixta',      precio:15000, desc:'Papa criolla + papa común + salchicha + chimichurri.',      favorito:false, nuevo:true},
  {id:7,  cat:'salchipapas', nombre:'Salchipapa Caleña',     precio:17000, desc:'Con ají casero, hogao y cilantro fresco. El sabor de Cali.',favorito:true,  nuevo:true},

  // PAPAS SOLAS
  {id:8,  cat:'papas',       nombre:'Porción de Papas',      precio:7000,  desc:'Solo papas fritas, bien crocantes. Sin rollos.',            favorito:false, nuevo:false},
  {id:9,  cat:'papas',       nombre:'Papas con Queso',       precio:9000,  desc:'Papas + queso derretido encima. Así de simple y rico.',     favorito:false, nuevo:false},
  {id:10, cat:'papas',       nombre:'Papas con Tocineta',    precio:11000, desc:'Papas + tocineta crujiente + queso. El hit del barrio.',    favorito:true,  nuevo:false},
  {id:11, cat:'papas',       nombre:'Papas Criolla',         precio:9000,  desc:'Papas criollas colombianas fritas. Sabor local puro.',      favorito:false, nuevo:false},

  // SALCHICHAS Y COMBOS
  {id:12, cat:'combos',      nombre:'Combo Corriente',       precio:14000, desc:'Salchipapa mediana + granizado pequeño.',                   favorito:false, nuevo:false},
  {id:13, cat:'combos',      nombre:'Combo Especial',        precio:20000, desc:'Salchipapa especial + granizado mediano + papas adicional.',favorito:true,  nuevo:false},
  {id:14, cat:'combos',      nombre:'Combo Familiar',        precio:35000, desc:'Salchipapa familiar + 4 granizados pequeños. Para todos.', favorito:false, nuevo:false},
  {id:15, cat:'combos',      nombre:'Combo VIP Don Lucho',   precio:25000, desc:'Salchipapa caleña + granizado gigante + extra salchichas.', favorito:true,  nuevo:true},

  // EXTRAS
  {id:16, cat:'extras',      nombre:'Salchicha Extra',       precio:1500,  desc:'Una salchicha adicional, siempre.',                         favorito:false, nuevo:false},
  {id:17, cat:'extras',      nombre:'Porción de Queso',      precio:2000,  desc:'Queso mozarella fundido adicional.',                        favorito:false, nuevo:false},
  {id:18, cat:'extras',      nombre:'Tocineta',              precio:2500,  desc:'Tocineta crujiente para lo que quiera.',                    favorito:false, nuevo:false},
  {id:19, cat:'extras',      nombre:'Huevo de Codorniz',     precio:2000,  desc:'Tres huevitos de codorniz encima de su salchipapa.',        favorito:false, nuevo:true},
  {id:20, cat:'extras',      nombre:'Champiñones',           precio:2500,  desc:'Champiñones salteados en mantequilla.',                     favorito:false, nuevo:false},
];

const granizados = [
  {nombre:'Mora',          icono:'🫐', desc:'Mora de castilla natural, fresquita del Valle.',     precio:4000, grande:5500, color:'#8a2a8a', nuevo:false},
  {nombre:'Maracuyá',      icono:'🌟', desc:'Ácido y delicioso. El favorito del barrio.',          precio:4000, grande:5500, color:'#e8a820', nuevo:false},
  {nombre:'Fresa',         icono:'🍓', desc:'Fresa fresquita con leche condensada opcional.',      precio:4000, grande:5500, color:'#e83050', nuevo:false},
  {nombre:'Limón',         icono:'🍋', desc:'Limón natural, bien cargado. Para refrescarse.',     precio:3500, grande:5000, color:'#a8c820', nuevo:false},
  {nombre:'Tamarindo',     icono:'🌰', desc:'El clásico colombiano. Dulce y ácido a la vez.',    precio:3500, grande:5000, color:'#a06020', nuevo:false},
  {nombre:'Lulo',          icono:'🟡', desc:'Lulo colombiano puro. Único e irresistible.',        precio:4000, grande:5500, color:'#88aa20', nuevo:false},
  {nombre:'Uva',           icono:'🍇', desc:'Granizado de uva morada, bien frío y sabroso.',      precio:4000, grande:5500, color:'#6a2a9a', nuevo:false},
  {nombre:'Pinta Labios',  icono:'💋', desc:'La mezcla especial: mora + fresa + frambuesa.',      precio:5000, grande:7000, color:'#d02070', nuevo:true},
  {nombre:'Coco Loco',     icono:'🥥', desc:'Granizado de coco con leche condensada. ¡Espectacular!',precio:5000,grande:7000,color:'#d0c090',nuevo:true},
  {nombre:'Piña Colada',   icono:'🍍', desc:'Piña + coco + leche. Como vacaciones en un vaso.',  precio:5000, grande:7000, color:'#e8c040', nuevo:false},
];

const salsas = [
  {id:'ketchup',    nombre:'Ketchup',         color:'#c81a0a', extra:false},
  {id:'mostaza',    nombre:'Mostaza',          color:'#e8c80a', extra:false},
  {id:'mayo',       nombre:'Mayonesa',         color:'#fffde0', extra:false},
  {id:'rosada',     nombre:'Salsa Rosada',     color:'#f090a0', extra:false},
  {id:'ajo',        nombre:'Ajo',              color:'#e8e8c0', extra:false},
  {id:'chimichurri',nombre:'Chimichurri',      color:'#40a040', extra:false},
  {id:'aji',        nombre:'Ají Casero 🌶',    color:'#e84010', extra:false},
  {id:'hogao',      nombre:'Hogao',            color:'#e87020', extra:false},
  {id:'bbq',        nombre:'BBQ',              color:'#703010', extra:false},
  {id:'tartara',    nombre:'Tártara',          color:'#c8d890', extra:false},
  {id:'piña',       nombre:'Piña Casera',      color:'#f8c030', extra:false},
];

const tamanos = [
  {id:'peq', nombre:'Pequeña 🤏', precioBase:8000,  papas:'Papa Común',     salchichas:1},
  {id:'med', nombre:'Mediana ✋', precioBase:12000, papas:'Papa Común',     salchichas:2},
  {id:'gra', nombre:'Grande 👐',  precioBase:16000, papas:'Papa Común',     salchichas:3},
  {id:'fam', nombre:'Familiar 🏠',precioBase:28000, papas:'Papa Común',     salchichas:6},
];

const tiposPapa = [
  {id:'comun',  nombre:'Papa Común',    extra:0},
  {id:'criolla',nombre:'Papa Criolla',  extra:1000},
  {id:'mixta',  nombre:'Mixta (ambas)', extra:1500},
];

const extras = [
  {id:'queso',       nombre:'Queso fundido 🧀', precio:2000},
  {id:'tocineta',    nombre:'Tocineta 🥓',       precio:2500},
  {id:'champi',      nombre:'Champiñones 🍄',    precio:2500},
  {id:'codorniz',    nombre:'Huevos de codorniz 🥚', precio:2000},
  {id:'aguacate',    nombre:'Aguacate 🥑',        precio:2500},
  {id:'cebolla',     nombre:'Cebolla caramelizada', precio:1500},
];

// Productos rápidos para domicilio
const productosRapidos = [
  {id:'pr1', nombre:'Salchipapa Mediana',  icono:'🍟', precio:12000},
  {id:'pr2', nombre:'Salchipapa Especial', icono:'⭐', precio:18000},
  {id:'pr3', nombre:'Combo Corriente',     icono:'🥤', precio:14000},
  {id:'pr4', nombre:'Combo VIP',           icono:'👑', precio:25000},
  {id:'pr5', nombre:'Granizado Mora',      icono:'🫐', precio:4000},
  {id:'pr6', nombre:'Granizado Maracuyá',  icono:'🌟', precio:4000},
  {id:'pr7', nombre:'Papas con Queso',     icono:'🧀', precio:9000},
  {id:'pr8', nombre:'Familiar Completa',   icono:'🏠', precio:28000},
];

// ══════════ STATE ══════════
let constructorState = {tamano:null, tipoPapa:null, salchichas:2, salsas:[], extras:[]};
let carrito = {};
let metodoPago = null;
let audioCtx = null;

const PAGO_LABELS = {
  efectivo:  '💵 Efectivo al recibir',
  nequi:     '📱 Nequi — 316 789 4532',
  daviplata: '🔴 Daviplata — 316 789 4532',
  transfer:  '🏦 Transferencia / PSE',
};

// ══════════ INIT ══════════
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHumo();
  renderMenuTabs();
  renderMenu('salchipapas');
  renderConstructor();
  renderGranizados();
  renderProductosRapidos();
  animCounters();
  initReveal();
  updateBadgeHorario();
  setInterval(updateBadgeHorario, 60000);
});

// ══════════ HUMO ══════════
function initHumo() {
  const layer = document.getElementById('humoLayer');
  if (!layer) return;
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'humo-puff';
    const size = 40 + Math.random() * 80;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      bottom:${Math.random() * 30}%;
      animation-duration:${8 + Math.random() * 12}s;
      animation-delay:${Math.random() * 10}s;
    `;
    layer.appendChild(p);
  }
}

// ══════════ NAV ══════════
function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('navLucho')?.classList.toggle('visible', true);
    document.getElementById('navLucho')?.classList.toggle('scrolled', window.scrollY > 50);
  });
  // Always show nav
  setTimeout(() => document.getElementById('navLucho')?.classList.add('visible'), 100);
  document.getElementById('nlHam')?.addEventListener('click', () => {
    document.getElementById('nlMob').classList.toggle('open');
  });
}
function closeMob() { document.getElementById('nlMob').classList.remove('open'); }

function updateBadgeHorario() {
  const h = new Date().getHours();
  const badge = document.getElementById('nlBadge');
  if (!badge) return;
  const abierto = h >= 12 && h < 23;
  badge.textContent = abierto ? '🟢 Abierto' : '🔴 Cerrado';
  badge.style.color = abierto ? 'var(--amarillo)' : 'rgba(255,150,150,0.9)';
}

// ══════════ MENÚ ══════════
const categorias = [
  {id:'salchipapas', nombre:'🍟 Salchipapas'},
  {id:'papas',       nombre:'🥔 Solo Papas'},
  {id:'combos',      nombre:'🥤 Combos'},
  {id:'extras',      nombre:'➕ Extras'},
];

function renderMenuTabs() {
  const cont = document.getElementById('menuTabs');
  if (!cont) return;
  cont.innerHTML = categorias.map((c, i) =>
    `<button class="mt-btn ${i === 0 ? 'active' : ''}" onclick="filterMenu('${c.id}',this)">${c.nombre}</button>`
  ).join('');
}

function renderMenu(cat) {
  const cont = document.getElementById('pizarronMenu');
  if (!cont) return;
  const items = menuItems.filter(i => i.cat === cat);
  cont.innerHTML = `
    <div class="pm-categoria">
      <div class="pm-cat-titulo">— ${categorias.find(c=>c.id===cat)?.nombre || cat} —</div>
      <div class="pm-items">
        ${items.map(item => `
          <div class="pm-item ${item.favorito ? 'favorito' : ''} ${item.nuevo ? 'nuevo' : ''}">
            <div class="pmi-info">
              <span class="pmi-nombre">${item.nombre}</span>
              <span class="pmi-desc">${item.desc}</span>
            </div>
            <span class="pmi-precio">$${item.precio.toLocaleString('es-CO')}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.mt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
  playClick();
}

// ══════════ CONSTRUCTOR ══════════
function renderConstructor() {
  // Tamaños
  const poT = document.getElementById('poTamanio');
  if (poT) {
    poT.innerHTML = tamanos.map(t =>
      `<button class="pc-opt" id="pt_${t.id}" onclick="selTamano('${t.id}')">
        ${t.nombre}<br/><small style="opacity:0.6">$${t.precioBase.toLocaleString('es-CO')}</small>
      </button>`).join('');
  }
  // Tipos papa
  const poP = document.getElementById('poTipoPapa');
  if (poP) {
    poP.innerHTML = tiposPapa.map(p =>
      `<button class="pc-opt" id="pp_${p.id}" onclick="selPapa('${p.id}')">
        ${p.nombre}${p.extra ? `<br/><small style="opacity:0.6">+$${p.extra.toLocaleString('es-CO')}</small>` : ''}
      </button>`).join('');
  }
  // Salsas
  const sg = document.getElementById('salsasGrid');
  if (sg) {
    sg.innerHTML = salsas.map(s =>
      `<button class="salsa-btn" id="sb_${s.id}" onclick="toggleSalsa('${s.id}')">
        <span class="sb-color" style="background:${s.color}"></span>${s.nombre}
      </button>`).join('');
  }
  // Extras
  const eg = document.getElementById('extrasGrid');
  if (eg) {
    eg.innerHTML = extras.map(e =>
      `<button class="extra-btn" id="eb_${e.id}" onclick="toggleExtra('${e.id}')">
        ${e.nombre} <span style="color:rgba(255,255,255,0.4);font-size:0.7rem">+$${e.precio.toLocaleString('es-CO')}</span>
      </button>`).join('');
  }
  // Select defaults
  selTamano('med');
  selPapa('comun');
}

function selTamano(id) {
  constructorState.tamano = tamanos.find(t => t.id === id);
  constructorState.salchichas = constructorState.tamano.salchichas;
  document.getElementById('cantSalchicha').textContent = constructorState.salchichas;
  document.querySelectorAll('[id^="pt_"]').forEach(b => b.classList.remove('sel'));
  document.getElementById('pt_' + id)?.classList.add('sel');
  updateResumen();
  playClick();
}

function selPapa(id) {
  constructorState.tipoPapa = tiposPapa.find(p => p.id === id);
  document.querySelectorAll('[id^="pp_"]').forEach(b => b.classList.remove('sel'));
  document.getElementById('pp_' + id)?.classList.add('sel');
  updateResumen();
  playClick();
}

function cambiarSalchicha(delta) {
  constructorState.salchichas = Math.max(0, Math.min(8, constructorState.salchichas + delta));
  document.getElementById('cantSalchicha').textContent = constructorState.salchichas;
  updateResumen();
  playClick();
}

function toggleSalsa(id) {
  const idx = constructorState.salsas.indexOf(id);
  if (idx >= 0) constructorState.salsas.splice(idx, 1);
  else constructorState.salsas.push(id);
  document.getElementById('sb_' + id)?.classList.toggle('sel', constructorState.salsas.includes(id));
  updateResumen();
  updateSvgSalsas();
  playClick();
}

function toggleExtra(id) {
  const idx = constructorState.extras.indexOf(id);
  if (idx >= 0) constructorState.extras.splice(idx, 1);
  else constructorState.extras.push(id);
  document.getElementById('eb_' + id)?.classList.toggle('sel', constructorState.extras.includes(id));
  updateResumen();
  playClick();
}

function updateResumen() {
  const t = constructorState.tamano;
  const p = constructorState.tipoPapa;
  if (!t || !p) return;

  const extrasTotales = constructorState.extras.reduce((s, id) => {
    const e = extras.find(x => x.id === id); return s + (e ? e.precio : 0);
  }, 0);
  const salchiExtra = Math.max(0, constructorState.salchichas - t.salchichas) * 1500;
  const total = t.precioBase + p.extra + extrasTotales + salchiExtra;

  setT('prTamano', t.nombre.replace(/[🤏✋👐🏠]/u, '').trim());
  setT('prPapa', p.nombre);
  setT('prSalch', constructorState.salchichas + ' salchicha' + (constructorState.salchichas !== 1 ? 's' : ''));
  setT('prSalsasList', constructorState.salsas.length ? constructorState.salsas.map(id => salsas.find(s => s.id === id)?.nombre).join(', ') : 'Ninguna');
  setT('prExtrasList', constructorState.extras.length ? constructorState.extras.map(id => extras.find(e => e.id === id)?.nombre.split(' ')[0]).join(', ') : 'Ninguno');
  setT('prTotal', '$' + total.toLocaleString('es-CO'));
  document.getElementById('prTotal').style.color = 'var(--verde)';
}

function updateSvgSalsas() {
  const svg = document.getElementById('prSalsas');
  if (!svg) return;
  const colors = constructorState.salsas.map(id => salsas.find(s => s.id === id)?.color).filter(Boolean);
  if (!colors.length) { svg.innerHTML = ''; return; }
  const lines = [];
  colors.forEach((color, i) => {
    const y = 90 + i * 8;
    if (y > 100) return;
    lines.push(`<path d="M${85 + i*3} ${y} Q110 ${y-6} 135 ${y} Q160 ${y+6} 185 ${y}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity="0.9"/>`);
  });
  svg.innerHTML = lines.join('');
}

function agregarAlCarrito() {
  if (!constructorState.tamano || !constructorState.tipoPapa) {
    showToast('⚠️ Selecciona el tamaño y tipo de papa primero');
    return;
  }
  const t = constructorState.tamano;
  const p = constructorState.tipoPapa;
  const extrasTotales = constructorState.extras.reduce((s, id) => { const e = extras.find(x => x.id === id); return s + (e ? e.precio : 0); }, 0);
  const salchiExtra = Math.max(0, constructorState.salchichas - t.salchichas) * 1500;
  const total = t.precioBase + p.extra + extrasTotales + salchiExtra;
  const nombre = `Salchipapa ${t.nombre.replace(/[🤏✋👐🏠]/u,'').trim()} (${p.nombre})`;
  addToCarrito('cons_' + Date.now(), nombre, total);
  showToast('🍟 ¡Agregado al pedido!');
  document.getElementById('domicilio')?.scrollIntoView({behavior:'smooth'});
}

function resetConstructor() {
  constructorState = {tamano:null, tipoPapa:null, salchichas:2, salsas:[], extras:[]};
  document.querySelectorAll('.pc-opt,.salsa-btn,.extra-btn').forEach(b => b.classList.remove('sel'));
  selTamano('med'); selPapa('comun');
  document.getElementById('prSalsas').innerHTML = '';
  showToast('🔄 ¡Empecemos de nuevo!');
}

// ══════════ GRANIZADOS ══════════
function renderGranizados() {
  const grid = document.getElementById('granizadosGrid');
  if (!grid) return;
  grid.innerHTML = granizados.map((g, i) => `
    <div class="gran-card dl-reveal" style="transition-delay:${i*0.06}s">
      ${g.nuevo ? '<div class="gran-badge">¡Nuevo!</div>' : ''}
      <div style="height:4px;background:${g.color};border-radius:8px 8px 0 0;position:absolute;top:0;left:0;right:0"></div>
      <span class="gran-icono" style="animation-delay:${i*0.2}s">${g.icono}</span>
      <h3>${g.nombre}</h3>
      <p>${g.desc}</p>
      <div style="display:flex;justify-content:center;gap:12px;align-items:baseline">
        <div class="gran-precio">$${g.precio.toLocaleString('es-CO')}</div>
        <div style="font-size:0.72rem;color:#60a0e0;font-family:'Kalam',cursive">Grande: $${g.grande.toLocaleString('es-CO')}</div>
      </div>
    </div>`).join('');
  setTimeout(() => initReveal(), 80);
}

// ══════════ CARRITO / DOMICILIO ══════════
function renderProductosRapidos() {
  const cont = document.getElementById('productosRapidos');
  if (!cont) return;
  cont.innerHTML = productosRapidos.map(p => `
    <div class="pr-item">
      <div class="pri-top">
        <span class="pri-icono">${p.icono}</span>
        <span class="pri-nombre">${p.nombre}</span>
      </div>
      <div class="pri-precio">$${p.precio.toLocaleString('es-CO')}</div>
      <button class="pri-btn" onclick="addToCarrito('${p.id}','${p.nombre}',${p.precio})">
        + Agregar
      </button>
    </div>`).join('');
}

function addToCarrito(id, nombre, precio) {
  if (carrito[id]) carrito[id].qty++;
  else carrito[id] = {nombre, precio, qty:1};
  renderCarrito();
  playClick();
}

function renderCarrito() {
  const empty = document.getElementById('cbEmpty');
  const items = document.getElementById('cbItems');
  const totales = document.getElementById('cbTotales');
  const keys = Object.keys(carrito);

  if (!keys.length) {
    if (empty) empty.style.display = 'block';
    if (items) items.innerHTML = '';
    if (totales) totales.style.display = 'none';
    return;
  }
  if (empty) empty.style.display = 'none';

  let sub = 0;
  if (items) {
    items.innerHTML = keys.map(k => {
      const it = carrito[k];
      sub += it.precio * it.qty;
      return `
        <div class="cb-item">
          <div class="cbi-info">
            <span class="cbi-nombre">${it.nombre}</span>
            <span class="cbi-precio">$${it.precio.toLocaleString('es-CO')} c/u</span>
          </div>
          <div class="cbi-qty">
            <button class="cbi-btn" onclick="cambiarQty('${k}',-1)">−</button>
            <span class="cbi-num">${it.qty}</span>
            <button class="cbi-btn" onclick="cambiarQty('${k}',1)">+</button>
          </div>
        </div>`;
    }).join('');
  }
  const dom = sub >= 25000 ? 0 : 3000;
  setT('cbtSub', '$' + sub.toLocaleString('es-CO'));
  setT('cbtDom', dom === 0 ? '¡GRATIS! 🎉' : '$' + dom.toLocaleString('es-CO'));
  setT('cbtTotal', '$' + (sub + dom).toLocaleString('es-CO'));
  if (totales) totales.style.display = 'flex';
}

function cambiarQty(id, delta) {
  if (!carrito[id]) return;
  carrito[id].qty += delta;
  if (carrito[id].qty <= 0) delete carrito[id];
  renderCarrito();
  playClick();
}

function selMetodoPago(method, el) {
  metodoPago = method;
  document.querySelectorAll('.mpo').forEach(m => m.classList.remove('activo'));
  el.classList.add('activo');
  document.querySelectorAll('[id^="mpi-"]').forEach(i => { i.style.background = ''; i.style.boxShadow = ''; });
  const ind = document.getElementById('mpi-' + method);
  if (ind) { ind.style.background = 'var(--verde)'; ind.style.boxShadow = '0 0 6px rgba(42,122,58,0.4)'; }
  const row = document.getElementById('mpCopyRow');
  const lbl = document.getElementById('mpCopyLabel');
  if (method === 'nequi' || method === 'daviplata') {
    if (row) row.style.display = 'flex';
    if (lbl) lbl.textContent = method === 'nequi' ? 'Número Nequi:' : 'Número Daviplata:';
  } else {
    if (row) row.style.display = 'none';
  }
  const msgs = {
    efectivo:  'Pague en efectivo cuando llegue el domiciliario.',
    nequi:     'Transfiera antes de que salga el pedido. Envíe captura.',
    daviplata: 'Transfiera antes de que salga el pedido. Envíe captura.',
    transfer:  'Le enviamos los datos bancarios por WhatsApp.',
  };
  setT('mpMsg', msgs[method] || '');
  playClick();
}

function copiarNumero() {
  navigator.clipboard.writeText('3167894532').then(() => {
    showToast('📋 Número copiado');
  }).catch(() => showToast('Número: 316 789 4532'));
}

function confirmarPedido() {
  const nombre    = document.getElementById('pedNombre')?.value.trim();
  const telefono  = document.getElementById('pedTelefono')?.value.trim();
  const direccion = document.getElementById('pedDireccion')?.value.trim();
  const items = Object.keys(carrito);

  if (!items.length) { showToast('🍟 Agrega algo al pedido primero'); return; }
  if (!nombre || !telefono) { showToast('⚠️ Completa nombre y teléfono'); return; }
  if (!direccion) { showToast('📍 ¿A qué dirección te lo llevamos?'); return; }
  if (!metodoPago) { showToast('💳 Selecciona cómo vas a pagar'); return; }

  let sub = 0;
  const detalle = items.map(k => {
    const it = carrito[k];
    sub += it.precio * it.qty;
    return `🍟 ${it.nombre} ×${it.qty} — $${(it.precio * it.qty).toLocaleString('es-CO')}`;
  }).join('\n');
  const dom = sub >= 25000 ? 0 : 3000;

  document.getElementById('mlDetalle').innerHTML = `
    <strong>📦 Pedido:</strong><br/>
    ${items.map(k => { const it = carrito[k]; return `• ${it.nombre} ×${it.qty} — $${(it.precio*it.qty).toLocaleString('es-CO')}`; }).join('<br/>')}<br/><br/>
    <strong>📍 Dirección:</strong> ${direccion}<br/>
    <strong>💳 Pago:</strong> ${PAGO_LABELS[metodoPago]}<br/>
    <strong>💰 Total:</strong> $${(sub + dom).toLocaleString('es-CO')} ${dom === 0 ? '(domicilio gratis 🎉)' : ''}<br/><br/>
    <em>Te escribimos al ${telefono} cuando salga, ${nombre}.</em>
  `;
  document.getElementById('modalPedido').classList.add('open');
  playWin();
}

function cerrarModalPedido() {
  document.getElementById('modalPedido').classList.remove('open');
  carrito = {};
  metodoPago = null;
  renderCarrito();
  document.querySelectorAll('.mpo').forEach(m => m.classList.remove('activo'));
  ['pedNombre','pedTelefono','pedDireccion','pedBarrio','pedNota'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const row = document.getElementById('mpCopyRow'); if (row) row.style.display = 'none';
  const msg = document.getElementById('mpMsg'); if (msg) msg.textContent = '';
}

// ══════════ COUNTERS ══════════
function animCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = parseInt(el.dataset.target);
      let cur = 0; const step = Math.ceil(target / 60);
      const iv = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur.toLocaleString('es-CO');
        if (cur >= target) clearInterval(iv);
      }, 25);
      obs.unobserve(el);
    });
  }, {threshold:0.3});
  document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));
}

// ══════════ REVEAL ══════════
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, {threshold:0.1});
  document.querySelectorAll('.dl-reveal').forEach(el => obs.observe(el));
}

// ══════════ AUDIO ══════════
function getCtx() {
  if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return null; } }
  return audioCtx;
}
function playClick() {
  const ctx = getCtx(); if (!ctx) return;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = 'sine'; o.frequency.value = 700;
  g.gain.setValueAtTime(0.04, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
  o.start(); o.stop(ctx.currentTime + 0.08);
}
function playWin() {
  const ctx = getCtx(); if (!ctx) return;
  [523, 659, 784, 1047].forEach((f, i) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.1);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.4);
    o.start(ctx.currentTime + i * 0.1); o.stop(ctx.currentTime + i * 0.1 + 0.5);
  });
}

// ══════════ TOAST ══════════
function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;background:var(--rojo);color:white;font-family:'Kalam',cursive;font-size:0.9rem;padding:12px 18px;z-index:9999;box-shadow:3px 3px 0 var(--rojo2);border:2px solid var(--rojo2);max-width:280px;line-height:1.4;border-radius:4px`;
  t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s'; }, 2300);
  setTimeout(() => t.remove(), 2800);
}

// ══════════ UTILS ══════════
function setT(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
