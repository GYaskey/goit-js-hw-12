import{i as a,S as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function f(o){const e="https://pixabay.com/api/",r=new URLSearchParams({key:"45001500-719c9808934d73fced765b961",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${r}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function u(o){return!o||o.hits.length===0?"":o.hits.map(e=>`<li class="img-item">
  <a href="${e.largeImageURL}" class="img-link">
    <img src="${e.webformatURL}" alt="${e.tags}" class="img-picture" />
  </a>
  <ul class="img-stats">
    <li>
      <p class="img-text">
        Likes
        <span class="img-stat">${e.likes}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Views
        <span class="img-stat">${e.views}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Comments
        <span class="img-stat">${e.comments}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Downloads
        <span class="img-stat">${e.downloads}</span>
      </p>
    </li>
  </ul>
</li>
`).join("")}const n={form:document.querySelector(".form"),list:document.querySelector(".img-list"),imgList:document.querySelector(".img-item"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",m);function m(o){o.preventDefault(),n.list.innerHTML="";const e=o.target.elements.searchInput.value.trim();if(e===""){a.error({title:"Error",message:"Please type your request!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"});return}o.target.reset(),n.loader.classList.remove("visually-hidden"),f(e).then(r=>r.hits.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"}),n.loader.classList.add("visually-hidden"),""):u(r)).then().then(r=>{r&&(n.list.innerHTML=r,n.loader.classList.add("visually-hidden"),new c(".img-list a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(r=>{a.error({title:"Error",message:`Sorry, something went wrong: ${r.message}`,position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})})}
//# sourceMappingURL=commonHelpers.js.map
