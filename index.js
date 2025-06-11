import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),d=document.querySelector(".loader");let m=new u(".gallery a",{captionsData:"alt",captionDelay:250});const f=()=>{l.innerHTML=""},p=({tags:r,webformatURL:o,largeImageURL:s,likes:a,views:e,comments:t,downloads:i})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${e}</p>
          </div>
          <div class="info-item">
            <p class="title">Comments</p>
            <p>${t}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${i}</p>
          </div>
        </div>
      </li>
    `,h=r=>{l.insertAdjacentHTML("beforeend",r.map(o=>p(o)).join("")),m.refresh()},y=()=>{d.classList.remove("hidden")},g=()=>{d.classList.add("hidden")};async function w(r){const o=new URLSearchParams({key:"50730122-93fdb989224721eaf9512ab49",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=await fetch(`https://pixabay.com/api/?${o}`);if(!s.ok)throw new Error(s.status);return(await s.json()).hits}const v={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function c(r){return{icon:"fa-solid fa-circle-exclamation",iconColor:"white",message:`${r}`,messageColor:"white",position:"topRight",timeout:3e3,color:"#EF4040",maxWidth:"432px"}}const L=r=>{r.preventDefault();const{target:o}=r,s=o.elements.query.value.trim();if(!s){n.show(c("Please enter a search query!"));return}f(),y(),w(s).finally(()=>{g()}).then(a=>{if(!a.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}h(a)}).catch(a=>{n.show(c("Something went wrong. Please try again later."))})};v.searchForm.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
