// Language database
const LANGS = [
  {c:'auto',n:'Detect language'},{c:'af',n:'Afrikaans'},{c:'sq',n:'Albanian'},{c:'am',n:'Amharic'},{c:'ar',n:'Arabic'},{c:'hy',n:'Armenian'},{c:'as',n:'Assamese'},{c:'az',n:'Azerbaijani'},{c:'eu',n:'Basque'},{c:'be',n:'Belarusian'},{c:'bn',n:'Bengali'},{c:'bs',n:'Bosnian'},{c:'bg',n:'Bulgarian'},{c:'my',n:'Burmese'},{c:'ca',n:'Catalan'},{c:'ny',n:'Chichewa'},{c:'zh',n:'Chinese (Simplified)'},{c:'zh-TW',n:'Chinese (Traditional)'},{c:'co',n:'Corsican'},{c:'hr',n:'Croatian'},{c:'cs',n:'Czech'},{c:'da',n:'Danish'},{c:'nl',n:'Dutch'},{c:'en',n:'English'},{c:'eo',n:'Esperanto'},{c:'et',n:'Estonian'},{c:'tl',n:'Filipino'},{c:'fi',n:'Finnish'},{c:'fr',n:'French'},{c:'fy',n:'Frisian'},{c:'gl',n:'Galician'},{c:'ka',n:'Georgian'},{c:'de',n:'German'},{c:'el',n:'Greek'},{c:'gu',n:'Gujarati'},{c:'ht',n:'Haitian Creole'},{c:'ha',n:'Hausa'},{c:'haw',n:'Hawaiian'},{c:'he',n:'Hebrew'},{c:'hi',n:'Hindi'},{c:'hmn',n:'Hmong'},{c:'hu',n:'Hungarian'},{c:'is',n:'Icelandic'},{c:'ig',n:'Igbo'},{c:'id',n:'Indonesian'},{c:'ga',n:'Irish'},{c:'it',n:'Italian'},{c:'ja',n:'Japanese'},{c:'jv',n:'Javanese'},{c:'kn',n:'Kannada'},{c:'kk',n:'Kazakh'},{c:'km',n:'Khmer'},{c:'rw',n:'Kinyarwanda'},{c:'ko',n:'Korean'},{c:'ku',n:'Kurdish (Kurmanji)'},{c:'ckb',n:'Kurdish (Sorani)'},{c:'ky',n:'Kyrgyz'},{c:'lo',n:'Lao'},{c:'la',n:'Latin'},{c:'lv',n:'Latvian'},{c:'lb',n:'Luxembourgish'},{c:'lt',n:'Lithuanian'},{c:'mk',n:'Macedonian'},{c:'mg',n:'Malagasy'},{c:'ms',n:'Malay'},{c:'ml',n:'Malayalam'},{c:'mt',n:'Maltese'},{c:'mi',n:'Maori'},{c:'mr',n:'Marathi'},{c:'mn',n:'Mongolian'},{c:'ne',n:'Nepali'},{c:'no',n:'Norwegian'},{c:'or',n:'Odia'},{c:'ps',n:'Pashto'},{c:'fa',n:'Persian'},{c:'pl',n:'Polish'},{c:'pt',n:'Portuguese'},{c:'pa',n:'Punjabi'},{c:'ro',n:'Romanian'},{c:'ru',n:'Russian'},{c:'sm',n:'Samoan'},{c:'gd',n:'Scottish Gaelic'},{c:'sr',n:'Serbian'},{c:'st',n:'Sesotho'},{c:'sn',n:'Shona'},{c:'sd',n:'Sindhi'},{c:'si',n:'Sinhala'},{c:'sk',n:'Slovak'},{c:'sl',n:'Slovenian'},{c:'so',n:'Somali'},{c:'es',n:'Spanish'},{c:'su',n:'Sundanese'},{c:'sw',n:'Swahili'},{c:'sv',n:'Swedish'},{c:'tg',n:'Tajik'},{c:'ta',n:'Tamil'},{c:'tt',n:'Tatar'},{c:'te',n:'Telugu'},{c:'th',n:'Thai'},{c:'tr',n:'Turkish'},{c:'tk',n:'Turkmen'},{c:'uk',n:'Ukrainian'},{c:'ug',n:'Uyghur'},{c:'ur',n:'Urdu'},{c:'uz',n:'Uzbek'},{c:'vi',n:'Vietnamese'},{c:'cy',n:'Welsh'},{c:'xh',n:'Xhosa'},{c:'yi',n:'Yiddish'},{c:'yo',n:'Yoruba'},{c:'zu',n:'Zulu'}
];

const FLAG_MAP = {
  auto:'🌐', af:'🇿🇦', sq:'🇦🇱', am:'🇪🇹', ar:'🇸🇦', hy:'🇦🇲', as:'🇮🇳', az:'🇦🇿', eu:'🇪🇸', be:'🇧🇾', bn:'🇧🇩', bs:'🇧🇦', bg:'🇧🇬', my:'🇲🇲', ca:'🇪🇸', ny:'🇲🇼', zh:'🇨🇳', 'zh-TW':'🇹🇼', co:'🇫🇷', hr:'🇭🇷', cs:'🇨🇿', da:'🇩🇰', nl:'🇳🇱', en:'🇬🇧', eo:'🌍', et:'🇪🇪', tl:'🇵🇭', fi:'🇫🇮', fr:'🇫🇷', fy:'🇳🇱', gl:'🇪🇸', ka:'🇬🇪', de:'🇩🇪', el:'🇬🇷', gu:'🇮🇳', ht:'🇭🇹', ha:'🇳🇬', haw:'🇺🇸', he:'🇮🇱', hi:'🇮🇳', hmn:'🇨🇳', hu:'🇭🇺', is:'🇮🇸', ig:'🇳🇬', id:'🇮🇩', ga:'🇮🇪', it:'🇮🇹', ja:'🇯🇵', jv:'🇮🇩', kn:'🇮🇳', kk:'🇰🇿', km:'🇰🇭', rw:'🇷🇼', ko:'🇰🇷', ku:'🇮🇶', ckb:'🇮🇶', ky:'🇰🇬', lo:'🇱🇦', la:'🇻🇦', lv:'🇱🇻', lb:'🇱🇺', lt:'🇱🇹', mk:'🇲🇰', mg:'🇲🇬', ms:'🇲🇾', ml:'🇮🇳', mt:'🇲🇹', mi:'🇳🇿', mr:'🇮🇳', mn:'🇲🇳', ne:'🇳🇵', no:'🇳🇴', or:'🇮🇳', ps:'🇦🇫', fa:'🇮🇷', pl:'🇵🇱', pt:'🇧🇷', pa:'🇮🇳', ro:'🇷🇴', ru:'🇷🇺', sm:'🇼🇸', gd:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', sr:'🇷🇸', st:'🇿🇦', sn:'🇿🇼', sd:'🇵🇰', si:'🇱🇰', sk:'🇸🇰', sl:'🇸🇮', so:'🇸🇴', es:'🇪🇸', su:'🇮🇩', sw:'🇰🇪', sv:'🇸🇪', tg:'🇹🇯', ta:'🇮🇳', tt:'🇷🇺', te:'🇮🇳', th:'🇹🇭', tr:'🇹🇷', tk:'🇹🇲', uk:'🇺🇦', ug:'🇨🇳', ur:'🇵🇰', uz:'🇺🇿', vi:'🇻🇳', cy:'🏴󠁧󠁢󠁷󠁬󠁳󠁿', xh:'🇿🇦', yi:'🇮🇱', yo:'🇳🇬', zu:'🇿🇦'
};

const GLOW_COLORS = {
  auto:'#3b82f6', af:'#007a4d', sq:'#e41e20', am:'#078930', ar:'#007a3d', hy:'#d90012', az:'#0092bc', be:'#cf101a', bn:'#006a4e', bs:'#002395', bg:'#00966e', my:'#fecb00', ca:'#cf0000', zh:'#de2910', 'zh-TW':'#fe0000', hr:'#171796', cs:'#d7141a', da:'#c60c30', nl:'#ae1c28', en:'#cf142b', et:'#0072ce', tl:'#0038a8', fi:'#003580', fr:'#0055a4', ka:'#ff0000', de:'#ffce00', el:'#0d5eaf', gu:'#ff9933', ht:'#00209f', ha:'#008751', he:'#0038b8', hi:'#ff9933', hu:'#ce2939', is:'#003897', ig:'#008751', id:'#e70011', ga:'#169b62', it:'#009246', ja:'#bc002d', kk:'#00afca', km:'#032ea1', ko:'#003478', ky:'#e8112d', lo:'#ce1126', lv:'#9e3039', lt:'#006a44', mk:'#ce2028', ms:'#cc0001', mt:'#cf0000', mn:'#c4272f', ne:'#003580', no:'#ef2b2d', fa:'#239f40', pl:'#dc143c', pt:'#009c3b', ro:'#002b7f', ru:'#d52b1e', sm:'#ce1126', sr:'#0c4076', si:'#8d153a', sk:'#0b4ea2', sl:'#003da5', so:'#4189dd', es:'#c60b1e', sw:'#006600', sv:'#006aa7', tg:'#cc0000', th:'#a51931', tr:'#e30a17', uk:'#005bbb', ur:'#01411c', uz:'#1eb53a', vi:'#da251d', cy:'#00ab39', yi:'#0038b8', yo:'#008751', zu:'#007a4d'
};

const LANG_SEARCH = {
  en:'english united states america uk britain australia canada',
  es:'spanish spain mexico argentina colombia peru chile venezuela ecuador bolivia',
  fr:'french france canada belgium switzerland ivory coast',
  de:'german germany austria switzerland',
  pt:'portuguese brazil portugal angola',
  it:'italian italy',
  ru:'russian russia',
  zh:'chinese china mandarin beijing',
  ar:'arabic arab saudi arabia egypt morocco algeria',
  hi:'hindi india',
  nl:'dutch netherlands holland belgium',
  pl:'polish poland',
  tr:'turkish turkey',
  sv:'swedish sweden',
  da:'danish denmark',
  fi:'finnish finland',
  no:'norwegian norway',
  cs:'czech czechia republic',
  sk:'slovak slovakia',
  ro:'romanian romania',
  hu:'hungarian hungary',
  el:'greek greece',
  bg:'bulgarian bulgaria',
  uk:'ukrainian ukraine',
  hr:'croatian croatia',
  sr:'serbian serbia',
  sl:'slovenian slovenia',
  ms:'malay malaysia',
  id:'indonesian indonesia',
  vi:'vietnamese vietnam',
  th:'thai thailand',
  ko:'korean korea',
  ja:'japanese japan',
  he:'hebrew israel',
  fa:'persian iran farsi',
  ur:'urdu pakistan',
  bn:'bengali bangladesh india',
  ta:'tamil india sri lanka',
  te:'telugu india',
  ml:'malayalam india',
  sw:'swahili kenya tanzania',
  am:'amharic ethiopia',
  ha:'hausa nigeria',
  yo:'yoruba nigeria',
  zu:'zulu south africa'
};

const MAX = 100000;
let saved = [], busy = false;
let currentPickerType = null;
const $ = id => document.getElementById(id);

function getLangName(c) { return (LANGS.find(l => l.c === c) || { n: c }).n; }
function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function updateSrcCount() { const n = $('srcText').value.length; $('srcCount').textContent = `${n.toLocaleString()} / 100,000`; }
function updateTgtCount() { const raw = $('tgtOutput').textContent; $('tgtCount').textContent = raw.length.toLocaleString() + ' chars'; }
function setStatus(msg, type = '') { const el = $('statusChip'); el.textContent = msg; el.className = 'status-chip' + (type ? ' ' + type : ''); }

function updateBlob(type, color) { $(type === 'src' ? 'blobSrc' : 'blobTgt').style.background = color || '#3b82f6'; }

function updatePickerUI(type, code) {
  const flag = FLAG_MAP[code] || '🌐';
  const name = getLangName(code);
  $(type + 'Flag').textContent = flag;
  $(type + 'Name').textContent = name;
  updateBlob(type, GLOW_COLORS[code]);
}

function openPicker(type) {
  currentPickerType = type;
  $('searchOverlay').classList.remove('hidden');
  $('langSearchInput').value = '';
  const currentCode = $(type === 'src' ? 'srcLang' : 'tgtLang').value;
  updateFlagBgDisplay(currentCode);
  renderLangGrid('');
  setTimeout(() => $('langSearchInput').focus(), 60);
}

function closePicker() { $('searchOverlay').classList.add('hidden'); currentPickerType = null; }

function updateFlagBgDisplay(code) {
  const flag = FLAG_MAP[code] || '🌐';
  const name = getLangName(code);
  const glow = GLOW_COLORS[code];
  $('flagBgEmoji').textContent = flag;
  $('flagBgName').textContent = name;
  $('flagBgDisplay').style.background = glow ? `linear-gradient(135deg, ${glow}22 0%, transparent 70%)` : 'rgba(255,255,255,0.01)';
}

function renderLangGrid(query) {
  const q = query.toLowerCase().trim();
  let langs = LANGS;
  if (currentPickerType === 'tgt') langs = LANGS.filter(l => l.c !== 'auto');
  const filtered = q ? langs.filter(l => {
    const n = l.n.toLowerCase();
    const s = (LANG_SEARCH[l.c] || '').toLowerCase();
    return n.includes(q) || s.includes(q);
  }) : langs;
  $('searchResultCount').textContent = `${filtered.length} language${filtered.length !== 1 ? 's' : ''}`;
  const currentCode = $(currentPickerType === 'src' ? 'srcLang' : 'tgtLang').value;
  const grid = $('langGrid');
  grid.innerHTML = '';
  filtered.forEach(lang => {
    const flag = FLAG_MAP[lang.c] || '🌐';
    const div = document.createElement('div');
    div.className = 'lang-option' + (lang.c === currentCode ? ' active' : '');
    div.innerHTML = `<span class="lang-option-flag">${flag}</span><span class="lang-option-name">${lang.n}</span>`;
    div.addEventListener('mouseenter', () => updateFlagBgDisplay(lang.c));
    div.addEventListener('click', () => {
      if (!currentPickerType) return;
      $(currentPickerType === 'src' ? 'srcLang' : 'tgtLang').value = lang.c;
      updatePickerUI(currentPickerType, lang.c);
      closePicker();
    });
    grid.appendChild(div);
  });
}

function buildSelects() {
  LANGS.forEach(l => {
    ['srcLang', 'tgtLang'].forEach(id => {
      const o = document.createElement('option');
      o.value = l.c; o.textContent = l.n;
      $(id).appendChild(o);
    });
  });
  $('srcLang').value = 'auto';
  $('tgtLang').value = 'es';
  updatePickerUI('src', 'auto');
  updatePickerUI('tgt', 'es');
}

async function translateWithGoogle(text, sourceLang, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  let translated = '';
  if (data && Array.isArray(data) && data[0] && Array.isArray(data[0])) {
    for (const segment of data[0]) if (segment[0]) translated += segment[0];
  } else throw new Error('Unexpected API response format');
  if (sourceLang === 'auto' && data[2] && data[2] !== 'auto') {
    $('detectedLang').textContent = `Detected: ${getLangName(data[2])}`;
  } else if (sourceLang === 'auto') $('detectedLang').textContent = 'Auto-detected';
  return translated;
}

function splitTextIntoChunks(text, maxLen = 4800) {
  if (text.length <= maxLen) return [text];
  const chunks = []; let start = 0;
  while (start < text.length) {
    let end = start + maxLen;
    if (end >= text.length) { chunks.push(text.slice(start)); break; }
    let boundary = -1;
    for (let i = end; i > Math.max(start, end - 200); i--) {
      const ch = text[i];
      if (ch === '.' || ch === '!' || ch === '?' || ch === '\n') { boundary = i + 1; break; }
    }
    if (boundary === -1) {
      for (let i = end; i > start; i--) if (text[i] === ' ') { boundary = i + 1; break; }
    }
    if (boundary === -1) boundary = end;
    chunks.push(text.slice(start, boundary));
    start = boundary;
  }
  return chunks.filter(c => c.trim().length > 0);
}

async function translateFull(text, srcLang, tgtLang, onProgress) {
  if (!text.trim()) return '';
  const chunks = splitTextIntoChunks(text, 4800);
  if (chunks.length === 1) return await translateWithGoogle(text, srcLang, tgtLang);
  const results = [];
  for (let i = 0; i < chunks.length; i++) {
    if (onProgress) onProgress(i + 1, chunks.length);
    const translatedChunk = await translateWithGoogle(chunks[i], srcLang, tgtLang);
    results.push(translatedChunk);
    if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 150));
  }
  return results.join(' ');
}

async function translate() {
  const text = $('srcText').value.trim();
  if (!text || busy) return;
  busy = true;
  const sl = $('srcLang').value, tl = $('tgtLang').value;
  setStatus('Translating…', 'loading');
  $('spinOverlay').style.display = 'flex';
  $('translateBtn').disabled = true;
  $('detectedLang').textContent = '';
  const targetElem = $('tgtOutput');
  targetElem.innerHTML = '<span class="output-placeholder">Processing…</span>';
  try {
    const finalTrans = await translateFull(text, sl, tl, (cur, total) => {
      if (total > 1) setStatus(`Chunk ${cur}/${total}...`, 'loading');
    });
    if (finalTrans && finalTrans.length > 0) {
      targetElem.textContent = finalTrans;
      updateTgtCount();
      setStatus('Done', 'done');
      if (sl === 'auto' && !$('detectedLang').textContent.includes('Detected')) $('detectedLang').textContent = 'Language auto-detected';
    } else throw new Error('Empty translation result');
  } catch (err) {
    console.error(err);
    targetElem.innerHTML = `<span class="output-placeholder">Translation error — ${esc(err.message || 'Check network or try shorter text')}.</span>`;
    setStatus('Error', 'error');
  } finally {
    $('spinOverlay').style.display = 'none';
    $('translateBtn').disabled = false;
    busy = false;
  }
}

function swap() {
  if ($('srcLang').value === 'auto') return;
  const sv = $('srcLang').value, tv = $('tgtLang').value;
  $('srcLang').value = tv; $('tgtLang').value = sv;
  updatePickerUI('src', tv);
  updatePickerUI('tgt', sv);
  const s = $('srcText').value, t = $('tgtOutput').textContent;
  if (t && !$('tgtOutput').querySelector('.output-placeholder')) {
    $('srcText').value = t; $('tgtOutput').textContent = s;
    updateSrcCount(); updateTgtCount();
  }
}

function copyText() {
  const t = $('tgtOutput').textContent;
  if (!t || $('tgtOutput').querySelector('.output-placeholder')) return;
  navigator.clipboard.writeText(t).then(() => {
    const b = $('copyBtn'); b.textContent = 'Copied!'; b.style.color = 'var(--green)';
    setTimeout(() => { b.textContent = 'Copy'; b.style.color = ''; }, 1500);
  });
}

function totalChars() { return saved.reduce((s, i) => s + i.src.length + i.tgt.length, 0); }

async function loadStorage() {
  try { const r = await window.storage.get('lingua_v1'); if (r) saved = JSON.parse(r.value) || []; } catch { saved = []; }
  render();
}

async function persist() { try { await window.storage.set('lingua_v1', JSON.stringify(saved)); } catch {} render(); }

function render() {
  const total = totalChars(), pct = Math.min(100, Math.round(total / MAX * 100));
  $('storageFill').style.width = pct + '%';
  $('storageFill').style.background = pct > 85 ? 'var(--red)' : 'var(--accent)';
  $('storagePercent').textContent = pct + '%';
  $('storageSummary').textContent = `${total.toLocaleString()} / 100,000 chars`;
  const list = $('savedList');
  if (!saved.length) {
    list.innerHTML = '<div class="empty-state"><p>No saved translations yet.</p><p>Translate something and click "Save pair" to store it here.</p></div>';
    return;
  }
  list.innerHTML = '';
  saved.forEach((item, i) => {
    const sp = item.src.slice(0, 50) + (item.src.length > 50 ? '…' : '');
    const tp = item.tgt.slice(0, 45) + (item.tgt.length > 45 ? '…' : '');
    const srcFlag = FLAG_MAP[item.sl] || '';
    const tgtFlag = FLAG_MAP[item.tl] || '';
    const div = document.createElement('div'); div.className = 'saved-item';
    div.innerHTML = `<div class="saved-langs">${srcFlag} ${(item.sl === 'auto' ? 'AUTO' : item.sl).toUpperCase()} → ${tgtFlag} ${item.tl.toUpperCase()}</div><div class="saved-preview"><strong>${esc(sp)}</strong> · ${esc(tp)}</div><div class="saved-chars">${(item.src.length + item.tgt.length).toLocaleString()}c</div><button class="del-btn" data-i="${i}">✕</button>`;
    div.addEventListener('click', e => {
      if (e.target.classList.contains('del-btn')) return;
      $('srcText').value = item.src;
      $('tgtOutput').textContent = item.tgt;
      $('srcLang').value = item.sl;
      $('tgtLang').value = item.tl;
      updatePickerUI('src', item.sl);
      updatePickerUI('tgt', item.tl);
      updateSrcCount(); updateTgtCount();
      setStatus('Loaded', 'done');
    });
    list.appendChild(div);
  });
  list.querySelectorAll('.del-btn').forEach(btn => {
    btn.addEventListener('click', async e => { e.stopPropagation(); saved.splice(+btn.dataset.i, 1); await persist(); });
  });
}

async function savePair() {
  const src = $('srcText').value, tgt = $('tgtOutput').textContent;
  if (!src.trim() || !tgt.trim() || $('tgtOutput').querySelector('.output-placeholder')) { setStatus('Translate first!', 'error'); return; }
  const add = src.length + tgt.length;
  if (totalChars() + add > MAX) { setStatus('Storage full — delete some pairs', 'error'); return; }
  saved.unshift({ id: Date.now(), src, tgt, sl: $('srcLang').value, tl: $('tgtLang').value });
  await persist();
  setStatus(`Saved (${add.toLocaleString()} chars)`, 'done');
}

async function clearAll() { if (!saved.length) return; if (!confirm('Delete all saved translations?')) return; saved = []; await persist(); setStatus('Cleared', ''); }

// Event bindings
$('srcPickerBtn').addEventListener('click', () => openPicker('src'));
$('tgtPickerBtn').addEventListener('click', () => openPicker('tgt'));
$('searchClose').addEventListener('click', closePicker);
$('searchOverlay').addEventListener('click', e => { if (e.target === $('searchOverlay')) closePicker(); });
$('langSearchInput').addEventListener('input', e => renderLangGrid(e.target.value));
$('srcText').addEventListener('input', updateSrcCount);
$('translateBtn').addEventListener('click', translate);
$('swapBtn').addEventListener('click', swap);
$('copyBtn').addEventListener('click', copyText);
$('saveBtn').addEventListener('click', savePair);
$('clearBtn').addEventListener('click', () => { $('srcText').value = ''; updateSrcCount(); });
$('clearStorageBtn').addEventListener('click', clearAll);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePicker();
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); translate(); }
});

buildSelects(); loadStorage(); updateSrcCount(); updateTgtCount();