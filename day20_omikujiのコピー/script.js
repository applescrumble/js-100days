const unsei = ["大吉","中吉","小吉","凶"];
const btn=document.getElementById("btn");

btn.addEventListener("click", ()=>{
const result=unsei[Math.floor(Math.random()*unsei.length)];
const page2=document.getElementById("page2");
page2.textContent="結果は…"+result+"です！";

  document.getElementById("page1").classList.add("hidden");
  page2.classList.remove("hidden");
});
