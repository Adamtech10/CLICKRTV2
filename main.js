const state = { cookies:0, perClick:1, perSecond:0, totalBaked:0, totalBuys:0 };
const el = id => document.getElementById(id);
const cookie = el('cookie');

function render(){
el('cookieCount').textContent = Math.floor(state.cookies);
el('perClick').textContent = state.perClick;
el('perSecond').textContent = state.perSecond.toFixed(1);
el('totalBaked').textContent = Math.floor(state.totalBaked);
el('totalBuys').textContent = state.totalBuys;
}

cookie.addEventListener('click', () => {
state.cookies += state.perClick;
state.totalBaked += state.perClick;
render();
});

setInterval(() => { // génération passive (0 ici)
state.cookies += state.perSecond/10;
state.totalBaked += state.perSecond/10;
render();
}, 100);

render();