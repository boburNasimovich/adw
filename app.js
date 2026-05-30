// ============== Firebase init ==============
const firebaseConfig = {
  apiKey: "AIzaSyCDgzdUF3n8rI_9zxs-cFyODn0Df5vxC_U",
  authDomain: "bgburger-savdo.firebaseapp.com",
  databaseURL: "https://bgburger-savdo-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "bgburger-savdo",
  storageBucket: "bgburger-savdo.firebasestorage.app",
  messagingSenderId: "916871756784",
  appId: "1:916871756784:web:dc992046e491da5500bb35",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ============== Data ==============
const ADMIN_PASSWORD = "volk1111";
const TABLES = ["1-stol","2-stol","3-stol","4-stol","5-stol","Olib ketish"];
const CATEGORIES = ["Burgerlar","Lavashlar","Hotdoglar","Pitsalar","Tovuq","Ichimliklar","Shirinliklar","Qoshimcha"];

const INGREDIENTS = [
  {id:"burger_bun",name:"Burger noni",unit:"dona",emoji:"🍞"},
  {id:"hotdog_bun",name:"Hotdog noni",unit:"dona",emoji:"🥖"},
  {id:"lavash_dough",name:"Lavash xamiri",unit:"dona",emoji:"🫓"},
  {id:"non",name:"Non (tandir)",unit:"dona",emoji:"🥯"},
  {id:"kotlet",name:"Kotlet",unit:"dona",emoji:"🥩"},
  {id:"sosiska",name:"Sosiska",unit:"dona",emoji:"🌭"},
  {id:"qazi",name:"Qazi",unit:"gr",emoji:"🥓"},
  {id:"tandir_tovuq",name:"Tandir tovuq",unit:"dona",emoji:"🍗"},
  {id:"grill_tovuq",name:"Grill tovuq",unit:"dona",emoji:"🍗"},
  {id:"kfc_tovuq",name:"KFC tovuq",unit:"gr",emoji:"🍗"},
  {id:"pomidor",name:"Pomidor",unit:"gr",emoji:"🍅"},
  {id:"bodring",name:"Bodring (tuz.)",unit:"gr",emoji:"🥒"},
  {id:"salat",name:"Salat bargi",unit:"dona",emoji:"🥬"},
  {id:"pishloq",name:"Pishloq",unit:"dona",emoji:"🧀"},
  {id:"pizza_xamiri",name:"Pizza xamiri",unit:"dona",emoji:"🥣"},
  {id:"gosht",name:"Mol go'shti",unit:"gr",emoji:"🥩"},
  {id:"kartoshka",name:"Kartoshka fri",unit:"gr",emoji:"🍟"},
  {id:"ichimlik_025",name:"Tara 0.25L",unit:"dona",emoji:"🥤"},
  {id:"suv_05",name:"Suv 0.5L",unit:"dona",emoji:"💧"},
  {id:"kofe_porsiya",name:"Kofe",unit:"porsiya",emoji:"☕"},
  {id:"choy_paket",name:"Choy paketi",unit:"dona",emoji:"🍵"},
  {id:"shirinlik_kusok",name:"Shirinlik",unit:"kusok",emoji:"🍰"},
];

const IMG = {
  burger:"images/burger-classic.jpg", big_burger:"images/big-burger.jpg",
  cheeseburger:"images/cheeseburger.jpg", nonburger:"images/nonburger.jpg",
  doner:"images/doner.jpg", xaggi:"images/xaggi.jpg", nonkabob:"images/nonkabob.jpg",
  lavash_mini:"images/lavash-mini.jpg", lavash_chicken:"images/lavash-chicken.jpg",
  lavash_std:"images/lavash-standard.jpg", lavash_hotdog:"images/lavash-hotdog.jpg",
  hotdog_classic:"images/hotdog-classic.jpg", hotdog_big:"images/hotdog-big.jpg",
  pizza_pepperoni:"images/pizza-pepperoni.jpg", pizza_meat:"images/pizza-meat.jpg",
  pizza_asarti:"images/pizza-asarti.jpg", grill_chicken:"images/grill-chicken.jpg",
  tandir_chicken:"images/tandir-chicken.jpg", kfc_chicken:"images/kfc-chicken.jpg",
  cola:"images/cola.jpg", water:"images/water.jpg", coffee:"images/coffee.jpg",
  tea:"images/tea.jpg", tea_pot:"images/tea-pot.jpg", dessert:"images/dessert.jpg",
  fries:"images/fries.jpg",
  cheese:"images/cheese.jpg",
};

const MENU = [
  // Burgerlar
  {id:"gamburger",name:"Gamburger",price:20000,category:"Burgerlar",image:"burger",recipe:{burger_bun:1,kotlet:1,pomidor:0.25,bodring:0.25,salat:0.5,}},
  {id:"big_burger",name:"Big Burger",price:30000,category:"Burgerlar",image:"big_burger",recipe:{burger_bun:1,kotlet:2,pishloq:1,pomidor:0.5,bodring:0.5,salat:1,}},
  {id:"chisburger",name:"Chisburger",price:25000,category:"Burgerlar",image:"cheeseburger",recipe:{burger_bun:1,kotlet:1,pishloq:1,pomidor:0.25,bodring:0.25,}},
  {id:"chisburger_2",name:"Chisburger 2 kotlet",price:30000,category:"Burgerlar",image:"cheeseburger",recipe:{burger_bun:1,kotlet:2,pishloq:1,pomidor:0.25,bodring:0.25,}},
  {id:"nonburger",name:"Nonburger",price:32000,category:"Burgerlar",image:"nonburger",recipe:{non:1,kotlet:1,pishloq:1,pomidor:0.5,bodring:0.5,salat:1,}},
  {id:"nonburger_dobriy",name:"Nonburger dobriy",price:35000,category:"Burgerlar",image:"nonburger",recipe:{non:1,pishloq:1,pomidor:0.5,bodring:0.5,salat:1,}},
  {id:"danar",name:"Danar",price:28000,category:"Burgerlar",image:"doner",recipe:{burger_bun:1,tovuq_file:65,pomidor:0.5,bodring:0.5,piyoz:0.25,}},
  {id:"xaggi",name:"Xaggi",price:28000,category:"Burgerlar",image:"xaggi",recipe:{burger_bun:1,kotlet:1,pishloq:1,}},
  {id:"nonkabob",name:"Nonkabob",price:35000,category:"Burgerlar",image:"nonkabob",recipe:{non:1,gosht:1,piyoz:0.5,pomidor:0.5,}},
  
  // Lavashlar
  {id:"lavash_mini",name:"Lavash mini",price:28000,category:"Lavashlar",image:"lavash_mini",recipe:{lavash_dough:1,tovuq_file:65,kartoshka:0.3,pomidor:0.25,bodring:0.25,}},
  {id:"lavash_tovuq",name:"Lavash tovuq",price:25000,category:"Lavashlar",image:"lavash_chicken",recipe:{lavash_dough:1,tovuq_file:85,kartoshka:0.5,pomidor:0.5,bodring:0.5,}},
  {id:"lavash_std",name:"Lavash standart",price:32000,category:"Lavashlar",image:"lavash_std",recipe:{lavash_dough:1,tovuq_file:85,kartoshka:0.5,pomidor:0.5,bodring:0.5,salat:1,}},
  {id:"lavash_dobriy",name:"Lavash dobriy",price:35000,category:"Lavashlar",image:"lavash_std",recipe:{lavash_dough:1,tovuq_file:95,kartoshka:0.5,pomidor:0.5,bodring:0.5,}},
  {id:"lavash_tandir",name:"Lavash tandir",price:38000,category:"Lavashlar",image:"lavash_std",recipe:{lavash_dough:1,tandir_tovuq:0.25,kartoshka:0.5,pomidor:0.5,bodring:0.5,}},
  {id:"lavash_sirli",name:"Lavash sirli",price:38000,category:"Lavashlar",image:"lavash_std",recipe:{lavash_dough:1,tovuq_file:85,pishloq:2,kartoshka:0.5,}},
  {id:"lavash_hotdog",name:"Lavashda hotdog",price:20000,category:"Lavashlar",image:"lavash_hotdog",recipe:{lavash_dough:1,sosiska:3,kartoshka:0.3,}},
  {id:"lavash_kotlet",name:"Lavash s kotletoy",price:35000,category:"Lavashlar",image:"lavash_std",recipe:{lavash_dough:1,kotlet:1,kartoshka:0.5,pomidor:0.5,bodring:0.5,}},
  
  // Hotdoglar
  {id:"hotdog_1",name:"Hotdog 1 sasiska",price:10000,category:"Hotdoglar",image:"hotdog_classic",recipe:{hotdog_bun:1,sosiska:1,pomidor:50,bodring:50}},
  {id:"hotdog_kanada",name:"Hotdog kanada",price:13000,category:"Hotdoglar",image:"hotdog_classic",recipe:{hotdog_bun:1,sosiska:1,pishloq:1,pomidor:50,bodring:50}},
  {id:"hotdog_2",name:"Hotdog 2 sasiska",price:16000,category:"Hotdoglar",image:"hotdog_big",recipe:{hotdog_bun:1,sosiska:2,pomidor:50,bodring:50}},
  {id:"big_hotdog",name:"Big hotdog",price:20000,category:"Hotdoglar",image:"hotdog_big",recipe:{hotdog_bun:1,sosiska:2,pomidor:50,bodring:50}},
  {id:"hotdog_qazi",name:"Hotdog qazili",price:35000,category:"Hotdoglar",image:"hotdog_big",recipe:{hotdog_bun:1,qazi:1,pomidor:50,bodring:50}},
  
  // Pitsalar
  {id:"pepperoni",name:"Pepperoni",price:70000,category:"Pitsalar",image:"pizza_pepperoni",recipe:{pizza_xamiri:1,pepperoni:1,pishloq:2,}},
  {id:"goshtlik",name:"Go'shtlik",price:80000,category:"Pitsalar",image:"pizza_meat",recipe:{pizza_xamiri:1,gosht:150,pishloq:2,piyoz:0.5,}},
  {id:"asarti",name:"Asarti",price:90000,category:"Pitsalar",image:"pizza_asarti",recipe:{pizza_xamiri:1,pepperoni:0.5,gosht:0.5,pishloq:2,}},
  
  // Tovuq
  {id:"grill",name:"Grill",price:55000,category:"Tovuq",image:"grill_chicken",recipe:{grill_tovuq:1}},
  {id:"tandir_1",name:"Tandir tovuq 1",price:50000,category:"Tovuq",image:"tandir_chicken",recipe:{tandir_tovuq:1}},
  {id:"tandir_05",name:"Tandir tovuq 0.5",price:25000,category:"Tovuq",image:"tandir_chicken",recipe:{tandir_tovuq:0.5}},
  {id:"kfs_500",name:"Kfs (tovuq) 500GR",price:43000,category:"Tovuq",image:"kfc_chicken",recipe:{kfc_tovuq:500}},
  {id:"kfs_50k",name:"Kfs (tovuq) 50000 so'm",price:50000,category:"Tovuq",image:"kfc_chicken",recipe:{kfc_tovuq:600}},
  {id:"kfs_60k",name:"Kfs (tovuq) 60000 so'm",price:60000,category:"Tovuq",image:"kfc_chicken",recipe:{kfc_tovuq:750}},
  {id:"kfs_70k",name:"Kfs (tovuq) 70000 so'm",price:70000,category:"Tovuq",image:"kfc_chicken",recipe:{kfc_tovuq:850}},
  {id:"kfs_1k",name:"Kfs (tovuq) 1KG",price:85000,category:"Tovuq",image:"kfc_chicken",recipe:{kfc_tovuq:1000}},
  
  // Ichimliklar
  {id:"tara_025",name:"Tara 0.25L",price:5000,category:"Ichimliklar",image:"cola",recipe:{ichimlik_025:1}},
  {id:"suv_05",name:"Suv gazsiz 0.5L",price:3000,category:"Ichimliklar",image:"water",recipe:{suv_05:1}},
  {id:"kofe",name:"Kofe 1 stakan",price:5000,category:"Ichimliklar",image:"coffee",recipe:{kofe_porsiya:1,tara_stakan:1}},
  {id:"choy_stakan",name:"Choy 1 stakan",price:2000,category:"Ichimliklar",image:"tea",recipe:{choy_paket:1,tara_stakan:1}},
  {id:"choy_choynak",name:"Choy 1 choynak",price:5000,category:"Ichimliklar",image:"tea_pot",recipe:{choy_paket:2}},
  
  // Shirinliklar
  {id:"shirinlik",name:"Shirinlik 1 kusok",price:10000,category:"Shirinliklar",image:"dessert",recipe:{shirinlik_kusok:1}},
  {id:"fri",name:"Kartoshka fri 1 porsya",price:10000,category:"Shirinliklar",image:"fries",recipe:{kartoshka:1}},

  {id:"pishloq",name:"Pishloq",price:8000,category:"Qoshimcha",image:"cheese",recipe:{}},
];

// ============== State ==============
const state = {
  orders: Object.fromEntries(TABLES.map(t=>[t,[]])),
  activeTable: TABLES[0],
  category: "all",
  search: "",
  payment: "naqd",
  isSaving: false,
  skipNextSync: false,
};

const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>Array.from(el.querySelectorAll(s));
const fmt = n => Number(n||0).toLocaleString("ru-RU");

function toast(msg, type="success"){
  const t = $("#toast");
  t.textContent = msg;
  t.className = "toast " + type;
  setTimeout(()=>t.classList.add("hidden"), 2500);
}

// ============== Render: categories ==============
function renderCategories(){
  const wrap = $("#categories");
  const cats = [{k:"all",n:"Barchasi"}, ...CATEGORIES.map(c=>({k:c,n:c}))];
  wrap.innerHTML = cats.map(c=>`<button class="cat ${state.category===c.k?"active":""}" data-cat="${c.k}">${c.n}</button>`).join("");
  wrap.onclick = e=>{
    const b = e.target.closest("[data-cat]"); if(!b) return;
    state.category = b.dataset.cat;
    renderCategories(); renderMenu();
  };
}

// ============== Render: menu ==============
function renderMenu(){
  const q = state.search.trim().toLowerCase();
  let items = MENU;
  if (state.category !== "all") items = items.filter(i=>i.category===state.category);
  if (q) items = items.filter(i=>i.name.toLowerCase().includes(q));
  const grid = $("#menuGrid");
  grid.innerHTML = items.map(i=>`
    <button class="menu-card" data-id="${i.id}">
      <img src="${IMG[i.image]}" alt="${i.name}" loading="lazy" decoding="async" />
      <div class="grad"></div>
      <div class="info">
        <div class="name">${i.name}</div>
        <div class="price">${fmt(i.price)} so'm</div>
      </div>
    </button>`).join("");
  grid.onclick = e=>{
    const b = e.target.closest("[data-id]"); if(!b) return;
    const item = MENU.find(m=>m.id===b.dataset.id);
    if (item) addToOrder(item);
  };
}

// ============== Render: tables ==============
function renderTables(){
  const wrap = $("#tables");
  wrap.innerHTML = TABLES.map(t=>{
    const busy = (state.orders[t]?.length||0)>0;
    const cls = state.activeTable===t ? "active" : (busy?"busy":"");
    const dot = busy && state.activeTable!==t ? `<span class="dot"></span>`:"";
    return `<button class="table-btn ${cls}" data-table="${t}">${t}${dot}</button>`;
  }).join("");
  wrap.onclick = e=>{
    const b = e.target.closest("[data-table]"); if(!b) return;
    state.activeTable = b.dataset.table;
    renderTables(); renderCart();
  };
}

// ============== Render: cart ==============
function renderCart(){
  const cart = state.orders[state.activeTable] || [];
  $("#cartCount").textContent = cart.length;
  $("#btnClear").style.display = cart.length?"":"none";
  const list = $("#cartList");
  if (cart.length===0){
    list.innerHTML = `<div class="cart-empty">Savat bo'sh</div>`;
  } else {
    list.innerHTML = cart.map(i=>`
      <div class="cart-item">
        <div class="ci-info">
          <div class="ci-name">${i.name}</div>
          <div class="ci-meta">${fmt(i.price)} × ${i.qty}</div>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" data-act="dec" data-oid="${i.orderId}">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" data-act="inc" data-oid="${i.orderId}">+</button>
        </div>
        <div class="ci-total">${fmt(i.price*i.qty)}</div>
      </div>`).join("");
    list.onclick = e=>{
      const b = e.target.closest("[data-act]"); if(!b) return;
      changeQty(b.dataset.oid, b.dataset.act==="inc"?1:-1);
    };
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  $("#total").textContent = fmt(total)+" so'm";
  $("#btnSell").disabled = cart.length===0 || state.isSaving;
}

// ============== Order actions ==============
function persistTable(table, list){
  state.skipNextSync = true;
  db.ref(`openOrders/${table}`).set(list.length?list:null).catch(()=>{});
}

function addToOrder(item){
  const list = [...(state.orders[state.activeTable]||[])];
  const ex = list.find(i=>i.id===item.id);
  if (ex) ex.qty += 1;
  else list.push({...item, orderId: `${Date.now()}-${Math.random()}`, qty:1});
  state.orders[state.activeTable] = list;
  persistTable(state.activeTable, list);
  renderCart(); renderTables();
}

function changeQty(orderId, delta){
  const list = (state.orders[state.activeTable]||[])
    .map(i=>i.orderId===orderId?{...i,qty:i.qty+delta}:i)
    .filter(i=>i.qty>0);
  state.orders[state.activeTable] = list;
  persistTable(state.activeTable, list);
  renderCart(); renderTables();
}

function clearCart(){
  state.orders[state.activeTable] = [];
  persistTable(state.activeTable, []);
  renderCart(); renderTables();
}

async function deductInventory(items){
  const totals = {};
  for (const it of items){
    for (const [ing,amt] of Object.entries(it.recipe||{})){
      totals[ing] = (totals[ing]||0) + amt*it.qty;
    }
  }
  const ids = Object.keys(totals);
  if (!ids.length) return;
  const snaps = await Promise.all(ids.map(id=>db.ref(`inventory/${id}`).get()));
  const updates = {};
  ids.forEach((id,idx)=>{
    const cur = Number(snaps[idx].val() ?? 0);
    updates[`inventory/${id}`] = +(cur - totals[id]).toFixed(2);
  });
  await db.ref().update(updates);
}

async function completeSale(){
  if (state.isSaving) return;
  const cart = state.orders[state.activeTable]||[];
  if (cart.length===0) return toast("Savat bo'sh!", "error");

  state.isSaving = true;
  $("#loader").classList.remove("hidden");
  $("#btnSell").innerHTML = `<span class="spinner spinner-sm"></span> Saqlanmoqda...`;
  $("#btnSell").disabled = true;

  const snapshotCart = cart;
  const snapshotTable = state.activeTable;
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  // Optimistic clear
  state.orders[snapshotTable] = [];
  persistTable(snapshotTable, []);
  renderCart(); renderTables();

  const saleData = {
    time: new Date().toISOString(),
    items: snapshotCart,
    total,
    tableName: snapshotTable,
    paymentMethod: state.payment,
  };

  try {
    await Promise.all([
      db.ref("sales").push(saleData),
      deductInventory(snapshotCart),
    ]);
    toast("Sotuv saqlandi ✅");
  } catch (e){
    state.orders[snapshotTable] = snapshotCart;
    persistTable(snapshotTable, snapshotCart);
    renderCart(); renderTables();
    toast("Xato: "+e.message, "error");
  } finally {
    state.isSaving = false;
    $("#loader").classList.add("hidden");
    $("#btnSell").innerHTML = `✅ SOTISH`;
    renderCart();
  }
}

// ============== Firebase sync ==============
db.ref("openOrders").on("value", snap=>{
  if (state.skipNextSync){ state.skipNextSync=false; return; }
  const v = snap.val()||{};
  for (const t of TABLES) state.orders[t] = v[t]||[];
  renderCart(); renderTables();
});

// ============== Wire UI ==============
$("#search").addEventListener("input", e=>{ state.search = e.target.value; renderMenu(); });
$("#btnClear").addEventListener("click", clearCart);
$("#btnSell").addEventListener("click", completeSale);
$("#payNaqd").addEventListener("click", ()=>{ state.payment="naqd"; $("#payNaqd").classList.add("active"); $("#payKarta").classList.remove("active"); });
$("#payKarta").addEventListener("click", ()=>{ state.payment="karta"; $("#payKarta").classList.add("active"); $("#payNaqd").classList.remove("active"); });

// Close modal buttons
document.addEventListener("click", e=>{
  const c = e.target.closest("[data-close]");
  if (c) document.getElementById(c.dataset.close).classList.add("hidden");
});

// Expense
$("#btnExpense").addEventListener("click", ()=>{
  $("#expAmount").value=""; $("#expReason").value="";
  $("#expenseModal").classList.remove("hidden");
});
$("#expSave").addEventListener("click", async ()=>{
  const amount = parseInt($("#expAmount").value);
  const reason = $("#expReason").value.trim();
  if (!amount || !reason) return toast("Hamma maydonni to'ldiring", "error");
  try {
    await db.ref("expenses").push({amount,reason,time:new Date().toISOString()});
    toast("Xarajat saqlandi");
    $("#expenseModal").classList.add("hidden");
  } catch(e){ toast(e.message,"error"); }
});

// Admin
$("#btnAdmin").addEventListener("click", ()=>{
  const p = prompt("Admin parol:");
  if (p === ADMIN_PASSWORD){
    $("#adminPanel").classList.remove("hidden");
    openAdmin();
  } else if (p) toast("Parol noto'g'ri","error");
});

// ============== Admin panel ==============
const admin = {
  tab: "stats",
  filter: "today",
  sales: [],
  expenses: [],
  inventory: {},
  bound: false,
  addAmounts: {},
};

function openAdmin(){
  if (!admin.bound){
    admin.bound = true;
    db.ref("sales").on("value", s=>{
      const v = s.val()||{};
      admin.sales = Object.entries(v).map(([id,d])=>({id,...d}));
      if (!$("#adminPanel").classList.contains("hidden")) renderAdmin();
    });
    db.ref("expenses").on("value", s=>{
      const v = s.val()||{};
      admin.expenses = Object.entries(v).map(([id,d])=>({id,...d}));
      if (!$("#adminPanel").classList.contains("hidden")) renderAdmin();
    });
    db.ref("inventory").on("value", s=>{
      admin.inventory = s.val()||{};
      if (!$("#adminPanel").classList.contains("hidden")) renderAdmin();
    });
    $$(".admin-tab").forEach(b=>b.addEventListener("click", ()=>{
      admin.tab = b.dataset.tab;
      $$(".admin-tab").forEach(x=>x.classList.toggle("active", x.dataset.tab===admin.tab));
      $$(".tab-panel").forEach(p=>p.classList.add("hidden"));
      $("#tab-"+admin.tab).classList.remove("hidden");
      renderAdmin();
    }));
  }
  renderAdmin();
}

function getStartTime(){
  const now = new Date();
  if (admin.filter==="today") return new Date(now.setHours(0,0,0,0)).toISOString();
  if (admin.filter==="week"){ const d=new Date(); d.setDate(d.getDate()-7); return d.toISOString(); }
  if (admin.filter==="month") return new Date(now.getFullYear(),now.getMonth(),1).toISOString();
  return null;
}

function filterRow(active){
  const opts = [["today","Bugun"],["week","Hafta"],["month","Oy"],["all","Hammasi"]];
  return `<div class="filter-row">${opts.map(([k,n])=>`<button class="filter-btn ${admin.filter===k?"active":""}" data-filter="${k}">${n}</button>`).join("")}</div>`;
}

function renderAdmin(){
  // Stats
  const st = getStartTime();
  const filteredSales = admin.sales.filter(s=>!st||s.time>=st).sort((a,b)=>b.time.localeCompare(a.time));
  const filteredExp = admin.expenses.filter(e=>!st||e.time>=st).sort((a,b)=>b.time.localeCompare(a.time));
  const totalCash = filteredSales.filter(s=>s.paymentMethod!=="karta").reduce((a,b)=>a+b.total,0);
  const totalCard = filteredSales.filter(s=>s.paymentMethod==="karta").reduce((a,b)=>a+b.total,0);
  const totalSales = totalCash+totalCard;
  const totalExp = filteredExp.reduce((a,b)=>a+b.amount,0);
  const profit = totalSales-totalExp;

  $("#tab-stats").innerHTML = `
    ${filterRow()}
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">💵 NAQD</div><div class="val" style="color:#34d399">${fmt(totalCash)}</div></div>
      <div class="stat-card"><div class="lbl">💳 KARTA</div><div class="val" style="color:#60a5fa">${fmt(totalCard)}</div></div>
      <div class="stat-card"><div class="lbl">💰 JAMI SAVDO</div><div class="val" style="color:#fb923c">${fmt(totalSales)}</div></div>
      <div class="stat-card"><div class="lbl">💸 XARAJAT</div><div class="val" style="color:#f87171">${fmt(totalExp)}</div></div>
    </div>
    <div class="profit-card">
      <div class="lbl">SOF FOYDA</div>
      <div class="val">${fmt(profit)} so'm</div>
      <div class="sub">${filteredSales.length} ta sotuv</div>
    </div>
    <h4 style="margin:16px 0 8px">Xarajatlar:</h4>
    ${filteredExp.length===0 ? `<div style="color:#64748b;font-size:13px">Xarajatlar yo'q</div>` :
      filteredExp.map(e=>`
        <div class="exp-row">
          <div>
            <div class="name">${e.reason}</div>
            <div class="time">${new Date(e.time).toLocaleString("ru-RU")}</div>
          </div>
          <div style="display:flex;align-items:center">
            <div class="amt">-${fmt(e.amount)}</div>
            <button class="icon-btn" data-del-exp="${e.id}">🗑️</button>
          </div>
        </div>`).join("")
    }
  `;

  // Inventory
  $("#tab-inventory").innerHTML = `
    <div class="inv-info">Har bir sotuvda mahsulot retsepti bo'yicha xomashyo avtomatik kamayadi (masalan, hotdog sotilsa → noni va sosiskasi yechiladi).</div>
    <div class="inv-grid">
      ${INGREDIENTS.map(ing=>{
        const stock = Number(admin.inventory[ing.id] ?? 0);
        const low = stock < 5;
        return `
          <div class="inv-item ${low?"low":""}">
            <div class="inv-row">
              <div class="inv-name">${ing.emoji} ${ing.name}</div>
              <div class="inv-stock">${stock} <span class="inv-unit">${ing.unit}</span></div>
            </div>
            <div class="inv-ctrl">
              <input type="number" placeholder="+ qo'shish" data-add-id="${ing.id}" value="${admin.addAmounts[ing.id]||""}" />
              <button class="add" data-add-stock="${ing.id}">+ Keldi</button>
              <button class="edit" data-edit-stock="${ing.id}">✎</button>
            </div>
          </div>`;
      }).join("")}
    </div>
  `;

  // History
  $("#tab-history").innerHTML = `
    ${filterRow()}
    ${filteredSales.length===0 ? `<div style="color:#64748b;font-size:13px">Sotuvlar yo'q</div>` :
      filteredSales.map(s=>`
        <div class="history-row">
          <div class="head">
            <div class="meta">${new Date(s.time).toLocaleString("ru-RU")} · <b style="color:#fb923c">${s.tableName}</b> · ${s.paymentMethod==="karta"?"💳":"💵"}</div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="font-weight:700">${fmt(s.total)} so'm</div>
              <button class="icon-btn" data-del-sale="${s.id}">🗑️</button>
            </div>
          </div>
          <div class="items">${(s.items||[]).map(i=>`${i.name}${i.qty>1?` ×${i.qty}`:""}`).join(", ")}</div>
        </div>`).join("")
    }
  `;
}

// Admin event delegation
$("#adminPanel").addEventListener("click", async e=>{
  const f = e.target.closest("[data-filter]");
  if (f){ admin.filter = f.dataset.filter; renderAdmin(); return; }

  const dExp = e.target.closest("[data-del-exp]");
  if (dExp){ if(confirm("O'chirilsinmi?")) db.ref(`expenses/${dExp.dataset.delExp}`).remove(); return; }

  const dSale = e.target.closest("[data-del-sale]");
  if (dSale){ if(confirm("O'chirilsinmi?")) db.ref(`sales/${dSale.dataset.delSale}`).remove(); return; }

  const add = e.target.closest("[data-add-stock]");
  if (add){
    const id = add.dataset.addStock;
    const v = parseFloat(admin.addAmounts[id]||"0");
    if (!v) return;
    const cur = Number(admin.inventory[id] ?? 0);
    await db.ref(`inventory/${id}`).set(+(cur+v).toFixed(2));
    admin.addAmounts[id] = "";
    toast("Ombor yangilandi");
    return;
  }

  const ed = e.target.closest("[data-edit-stock]");
  if (ed){
    const id = ed.dataset.editStock;
    const cur = Number(admin.inventory[id] ?? 0);
    const v = prompt("Qoldiqni o'rnatish:", String(cur));
    if (v !== null) await db.ref(`inventory/${id}`).set(parseFloat(v)||0);
    return;
  }
});
$("#adminPanel").addEventListener("input", e=>{
  const a = e.target.closest("[data-add-id]");
  if (a) admin.addAmounts[a.dataset.addId] = a.value;
});

// ============== Boot ==============
renderCategories();
renderMenu();
renderTables();
renderCart();
