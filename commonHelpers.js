import{a as c,i as l,S as f}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function u(r){const t="https://pixabay.com/api/",n={key:"45001500-719c9808934d73fced765b961",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20};try{const e=await c.get(t,{params:n});//! Працює і без await? response в будь якому разі - обєкт
return e.data}catch(e){throw new Error(e.response.status)}}function m(r){return!r||r.hits.length===0?"":r.hits.map(t=>`<li class="img-item">
  <a href="${t.largeImageURL}" class="img-link">
    <img src="${t.webformatURL}" alt="${t.tags}" class="img-picture" />
  </a>
  <ul class="img-stats">
    <li>
      <p class="img-text">
        Likes
        <span class="img-stat">${t.likes}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Views
        <span class="img-stat">${t.views}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Comments
        <span class="img-stat">${t.comments}</span>
      </p>
    </li>
    <li>
      <p class="img-text">
        Downloads
        <span class="img-stat">${t.downloads}</span>
      </p>
    </li>
  </ul>
</li>
`).join("")}function d(){l.error({title:"Error",message:"Please type your request!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})}function p(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})}function g(r){l.error({title:"Error",message:`Sorry, something went wrong: ${r.message}`,position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})}const i={form:document.querySelector(".form"),list:document.querySelector(".img-list"),imgList:document.querySelector(".img-item"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load-more")};i.form.addEventListener("submit",y);async function y(r){r.preventDefault(),i.list.innerHTML="";const t=r.target.elements.searchInput.value.trim();if(t==="")return d();r.target.reset(),i.loader.classList.remove("visually-hidden");try{const s=await u(t);if(console.log(s),s.hits.length===0)return p(),i.loader.classList.add("visually-hidden"),"";const n=m(s);i.list.innerHTML=n,i.loader.classList.add("visually-hidden"),h();//!===================== продовжити функцію
new f(".img-list a",{captionsData:"alt",captionDelay:250}).refresh()}catch(s){g(s)}}function h(){i.btnLoadMore.classList.remove("visually-hidden")}i.btnLoadMore.addEventListener("click",L);async function L(){}
//# sourceMappingURL=commonHelpers.js.map
