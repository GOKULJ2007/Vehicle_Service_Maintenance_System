const DB={vehicles:"autocare_vehicles",services:"autocare_services",reminders:"autocare_reminders",expenses:"autocare_expenses",centers:"autocare_centers",user:"autocare_user"};
function getData(key){try{return JSON.parse(localStorage.getItem(key)||"[]")}catch(e){return[]}}
function setData(key,data){localStorage.setItem(key,JSON.stringify(data))}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}
function money(n){return "₹"+Number(n||0).toLocaleString("en-IN",{maximumFractionDigits:2})}
function dateText(value){if(!value)return "—";const d=new Date(value+"T00:00:00");return d.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}
function today(){return new Date().toISOString().slice(0,10)}
function vehicleName(id){const v=getData(DB.vehicles).find(x=>x.id===id);return v?v.name:"Unknown vehicle"}
function showToast(message,type="success"){const t=document.createElement("div");t.className="toast "+type;t.textContent=message;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function openModal(id){document.getElementById(id)?.classList.add("show")}
function closeModal(id){document.getElementById(id)?.classList.remove("show")}
function setupCommon(){document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>{b.closest(".modal")?.classList.remove("show")}));document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("show")}));const logout=document.getElementById("logoutBtn");if(logout)logout.addEventListener("click",()=>{localStorage.removeItem(DB.user);location.href="login.html"});const menu=document.getElementById("menuBtn");if(menu)menu.addEventListener("click",()=>document.querySelector(".sidebar")?.classList.toggle("open"))}
document.addEventListener("DOMContentLoaded",setupCommon);