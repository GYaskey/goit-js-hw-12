import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function f(s){const e="https://pixabay.com/api/",o=new URLSearchParams({key:"45001500-719c9808934d73fced765b961",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${o}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function m(s){return s.hits.map(e=>`<li class="img-item">
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
`).join("")}const n={form:document.querySelector(".form"),list:document.querySelector(".img-list"),imgList:document.querySelector(".img-item"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",u);function u(s){s.preventDefault();const e=s.target.elements.searchInput.value.trim();if(e===""){l.error({title:"Error",message:"Please type your request!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"});return}s.target.reset(),n.loader.classList.remove("visually-hidden"),f(e).then(o=>{if(o.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"});return}return m(o)}).then(o=>{n.list.innerHTML=o,n.loader.classList.add("visually-hidden"),new c(".img-list a",{captionsData:"alt",captionDelay:250})}).catch(o=>{l.error({title:"Error",message:`Sorry, something went wrong: ${o.message}`,position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})})}
//# sourceMappingURL=commonHelpers.js.map
