(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <div class="card">
    <div class="timeline"></div>
    <div class="img" >
      <img src="./assets/perfil.jpg">
    </div>
    <div class="conteiner">
      <div class="descrition">
          <h2>
            Guilherme Dannilo<br><span>Dev JavaScript-React UX|UI;</span>
          </h2>
          <div class="btn">
            <i class="fa-brands fa-github"></i>
          </div>
      </div>
    </div>
  </div>
`;
