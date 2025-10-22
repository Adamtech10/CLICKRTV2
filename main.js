const KEY = 'clickrt_save_v3';
const el = id => document.getElementById(id);

const state = { cookies:0, perClick:1, perSecond:0 };

function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function load(){
const raw = localStorage.getItem(KEY);
if(raw){ Object.assign(state, JSON.parse(raw)); }
}

function render(){
el('cookieCount').textContent = Math.floor(state.cookies);
el('perClick').textContent = state.perClick;
el('perSecond').textContent = state.perSecond.toFixed(1);
}

el('cookie').addEventListener('click', () => {
state.cookies += state.perClick;
save(); render();
});

el('saveBtn').addEventListener('click', save);
el('resetBtn').addEventListener('click', () => {
localStorage.removeItem(KEY);
state.cookies = 0; render();
});

setInterval(() => {
state.cookies += state.perSecond/10;
render();
}, 100);

load(); render();


