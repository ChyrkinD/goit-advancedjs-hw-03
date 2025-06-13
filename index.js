import{S as u,a as m,i as n}from"./assets/vendor-BMHzDZyJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),d=document.querySelector(".loader");let p=new u(".gallery a",{captionsData:"alt",captionDelay:250});const f=()=>{c.innerHTML=""},h=({tags:r,webformatURL:o,largeImageURL:a,likes:s,views:e,comments:t,downloads:i})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${s}</p>
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
    `,y=r=>{c.insertAdjacentHTML("beforeend",r.map(o=>h(o)).join("")),p.refresh()},g=()=>{d.classList.remove("hidden")},v=()=>{d.classList.add("hidden")};async function L(r){const o=new URLSearchParams({key:"50730122-93fdb989224721eaf9512ab49",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await m.get(`https://pixabay.com/api/?${o}`)).data.hits}const w={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function l(r){return{icon:"fa-solid fa-circle-exclamation",iconColor:"white",message:`${r}`,messageColor:"white",position:"topRight",timeout:3e3,color:"#EF4040",maxWidth:"432px"}}const S=r=>{r.preventDefault();const{target:o}=r,a=o.elements.query.value.trim();if(!a){n.show(l("Please enter a search query!"));return}f(),g(),L(a).finally(()=>{v()}).then(s=>{if(!s.length){n.show(l("Sorry, there are no images matching your search query. Please try again!"));return}y(s)}).catch(s=>{n.show(l("Something went wrong. Please try again later."))})};w.searchForm.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
