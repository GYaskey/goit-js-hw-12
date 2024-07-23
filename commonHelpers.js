import{a as b,i as c,S as C}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();async function m(t,e){const i="https://pixabay.com/api/",r={key:"45001500-719c9808934d73fced765b961",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await b.get(i,{params:r})).data}catch(o){throw new Error(o.response.status)}}function g(t){return!t||t.hits.length===0?"":t.hits.map(e=>`<li class="img-item">
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
`).join("")}function v(){c.error({title:"Error",message:"Please type your request!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})}function p(){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})}function h(t){c.error({title:"Error",message:`Sorry, something went wrong: ${t.message}`,position:"topRight",backgroundColor:"#EF4040",iconColor:"#fff",messageColor:"#fff",titleColor:"#fff"})}function E(){c.info({title:"Oops",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"rgba(151, 255, 245)",iconColor:"#000",messageColor:"#000",titleColor:"#000"})}const s={form:document.querySelector(".form"),list:document.querySelector(".img-list"),imgItem:document.querySelector(".img-item"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load-more"),spinner:document.querySelector(".js-spinner")};s.form.addEventListener("submit",S);let l="",a=1,y=null;const w=15;async function S(t){if(t.preventDefault(),a=1,s.list.innerHTML="",l=t.target.elements.searchInput.value.trim(),l===""){v(),f();return}t.target.reset(),s.loader.classList.remove("visually-hidden");try{const e=await m(l,a);if(y=Math.ceil(e.totalHits/w),e.hits.length===0)return f(),p(),s.loader.classList.add("visually-hidden"),"";const i=g(e);s.list.innerHTML=i,s.loader.classList.add("visually-hidden"),n(),L.refresh()}catch(e){n(),h(e)}}const L=new C(".img-list a",{captionsData:"alt",captionDelay:250});function q(){s.btnLoadMore.classList.remove("visually-hidden")}function f(){s.btnLoadMore.classList.add("visually-hidden")}s.btnLoadMore.addEventListener("click",M);async function M(){a++;try{n(),s.spinner.classList.remove("visually-hidden");const t=await m(l,a);if(t.hits.length===0)return n(),p(),s.loader.classList.add("visually-hidden"),"";const e=g(t);s.list.insertAdjacentHTML("beforeend",e),P(),s.spinner.classList.add("visually-hidden"),s.loader.classList.add("visually-hidden"),L.refresh()}catch(t){n(),h(t)}}function n(){a>=y?(f(),E()):q()}function P(){const e=s.list.firstElementChild.getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
