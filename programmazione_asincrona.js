
import getData from "./programmazione_asincrona2.js";

const WRAPPER = document.querySelector(".wrapper");
const BTN=document.querySelector(".btn");
const SPINNER= document.querySelector(".spinner-border")
async function showData() {
   const SHOW = await getData();
   

   SHOW.forEach(element => {
      let div = document.createElement("div");
      div.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${element.category}</h6>
          <p class="card-text">${element.price}</p>
        </div>
      </div>`
      WRAPPER.appendChild(div);
      
   });
}


BTN.addEventListener(("click"),()=>{
   WRAPPER.innerHTML=""
   SPINNER.classList.remove("d-none")
   setTimeout(()=>{
      SPINNER.classList.add("d-none")
      showData();

   },3000)
   
})

