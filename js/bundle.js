(()=>{"use strict";function e(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearTimeout(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}const n=function(n,o){const s=document.querySelectorAll(n);function c(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),s.classList.remove("show"),e(".modal",o);const c=document.createElement("div");c.classList.add("modal__dialog"),c.innerHTML=`<div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>`,document.querySelector(".modal").append(c),setTimeout((()=>{c.remove(),s.classList.add("show"),s.classList.remove("hide"),t(".modal")}),4e3)}s.forEach((e=>function(e){e.addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{c("Отлично. Скоро мы с Вами свяжемся!"),console.log(e),n.remove()})).catch((()=>{c("Что-то пошло не так")})).finally((()=>{e.reset()}))}))}(e)))};window.addEventListener("DOMContentLoaded",(function(){const o=setTimeout((()=>e(".modal",o)),5e4);(function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,c;function r(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("gender")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function a(){e.textContent=t&&n&&o&&s&&c?"fermale"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*c):Math.round((88.36+13.4*o+4.8*n-5.7*s)*c):"____"}function i(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(c=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("gender",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),a()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}a()}))}localStorage.getItem("gender")?t=localStorage.getItem("gender"):(t="fermale",localStorage.setItem("gender","fermale")),localStorage.getItem("ratio")?c=localStorage.getItem("ratio"):(c=1.375,localStorage.setItem("ratio",1.375)),r("#gender div","calculating__choose-item_active"),r(".calculating__choose_big  div","calculating__choose-item_active"),a(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")})(),function(){class e{constructor(e,t,n,o,s,c,...r){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s,this.classes=r,this.parent=document.querySelector(c),this.transfer=2.5,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0==this.classes.length&&this.classes.push("menu__item"),this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                    <img src=${this.src} alt=${this.alt}>\n                    <h3 class="menu__item-subtitle">${this.title}</h3>\n                    <div class="menu__item-descr">${this.descr}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n                    </div>\n                    `,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Cold not fetch url:${e}, staatus ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:n,title:o,descr:s,price:c})=>{new e(t,n,o,s,c,".menu .container").render()}))}))}(),function(n,o,s){const c=document.querySelectorAll(n),r=document.querySelector(o),a=document.querySelector("[data-close]");c.forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),a.addEventListener("click",(()=>t(o))),r.addEventListener("click",(e=>{e.target!==r&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&r.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(o,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",o),n("form",o),function({container:e,slide:t,nextArrow:n,prevArrow:o,totalCounter:s,currentCounter:c,wrapper:r,field:a}){let i=0,l=1;const d=document.querySelectorAll(t),u=document.querySelector(e),m=document.querySelector(o),h=document.querySelector(n),g=document.querySelector(s),f=document.querySelector(c),v=document.querySelector(r),_=window.getComputedStyle(v).width,y=document.querySelector(a);d.length<10?(g.textContent=`0${d.length}`,f.textContent=`0${l}`):(g.textContent=d.length,f.textContent=l),y.style.width=100*d.length+"%",y.style.display="flex",y.style.transition="0.5s all",v.style.overflow="hidden",d.forEach((e=>{e.style.width=_})),u.style.position="relative";const p=document.createElement("ol"),L=[];p.classList.add("carousel-indicators"),u.append(p);for(let e=0;e<d.length;e++){const t=document.createElement("li");t.classList="dot",t.setAttribute("data-slide-to",e+1),0==e&&(t.style.opacity=1),p.append(t),L.push(t)}function w(){L.forEach((e=>e.style.opacity=".5")),L[l-1].style.opacity=1}function S(){d.length<10?f.textContent=`0${l}`:f.textContent=l}function E(){y.style.transform=`translateX(-${i}px)`}h.addEventListener("click",(()=>{i==+_.slice(0,_.length-2)*(d.length-1)?i=0:i+=+_.slice(0,_.length-2),E(),l==d.length?l=1:l++,S(),w()})),m.addEventListener("click",(()=>{0==i?i=+_.slice(0,_.length-2)*(d.length-1):i-=+_.slice(0,_.length-2),E(),1==l?l=d.length:l--,S(),w()})),L.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");l=t,i=+_.slice(0,_.length-2)*(t-1),E(),S(),w()}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(e,t,n,o){let s=document.querySelectorAll(e),c=document.querySelectorAll(t),r=document.querySelector(n);function a(){c.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function i(e=0){c[e].classList.add("show","fade"),c[e].classList.remove("hide"),s[e].classList.add(o)}a(),i(),r.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(a(),i(t))}))}))}(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e,t){function n(e){return e>=0&&e<10?"0"+e:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),c=o.querySelector("#hours"),r=o.querySelector("#minutes"),a=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){let t,n,o,s;const c=Date.parse(e)-Date.parse(new Date);return c<=0?(t=0,n=0,o=0,s=0):(t=Math.floor(c/864e5),n=Math.floor(c/1e3%60),o=Math.floor(c/1e3/60%60),s=Math.floor(c/36e5%24)),{total:c,days:t,hours:s,minutes:o,seconds:n}}(t);s.innerHTML=n(e.days),c.innerHTML=n(e.hours),r.innerHTML=n(e.minutes),a.innerHTML=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(t,e)}("2022-12-01",".timer")}))})();
//# sourceMappingURL=bundle.js.map