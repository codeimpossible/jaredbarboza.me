!function(){"use strict";(()=>{const e=document.getElementsByTagName("pre");if(null!==e)for(let t=0;t<e.length;t++)"language"===e[t].className.substring(0,8)&&(e[t].innerHTML='<div class="copy">copy</div>'+e[t].innerHTML);new ClipboardJS(".copy",{target:e=>e.nextElementSibling}).on("success",e=>{e.trigger.textContent="copied!",setTimeout(()=>{e.clearSelection(),e.trigger.textContent="copy"},2e3)})})()}();