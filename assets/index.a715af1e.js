var e=Object.defineProperty,t=(t,n,s)=>(((t,n,s)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s})(t,"symbol"!=typeof n?n+"":n,s),s);!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const s=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const a=new URL(e,s);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){i(new Error(`Failed to import: ${e}`)),o(l)},onload(){n(self[t].moduleMap[a]),o(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");class n{constructor(){t(this,"delay",((e,t=1)=>!(e%this.speed.value)&&new Promise((e=>setTimeout(e,t))))),t(this,"toggleCheck",(e=>this.viewItems[e].classList.toggle("checking"))),t(this,"toggleBest",(e=>this.viewItems[e].classList.toggle("best"))),t(this,"setDone",(e=>this.viewItems[e].classList.add("sorted"))),t(this,"run",(()=>console.log("The run function for this algorithm hasn't been defined"))),t(this,"swap",((e,t,n)=>[e[t],e[n]]=[e[n],e[t]])),t(this,"swapInView",((e,t)=>[this.viewItems[e].style.height,this.viewItems[t].style.height]=[this.viewItems[t].style.height,this.viewItems[e].style.height])),t(this,"setAllDone",(async()=>{for(let e=0;e<this.viewItems.length;e++)this.setDone(e),await this.delay(e)})),this.viewItems=document.getElementById("visualizer").children,this.speed=document.getElementById("speed")}}const s=new n;s.run=async e=>{try{const{toggleCheck:t,setDone:n,toggleBest:o,delay:i,swap:a,swapInView:r}=s,l=e.length;for(let s=0;s<l;s++){t(s),o(0);let c=1e3,h=0;for(let n=s;n<l;n++)t(n),await i(n),e[n]<c&&(o(h),c=e[n],h=n,o(h)),t(n);a(e,s,h),r(s,h),o(h),n(s)}}catch(t){}};const o=new n;o.run=async e=>{try{const{toggleCheck:t,setDone:n,delay:s,swap:i,swapInView:a}=o;let r=!0,l=e.length-1;for(;r;){r=!1;for(let n=0;n<l;n++)e[n+1]<e[n]&&(r=!0,t(n),await s(n),i(e,n,n+1),a(n,n+1),t(n));n(l),l--}for(;l>=0;)n(l),l--,await s()}catch(t){}};const i=new n;i.run=async(e,t=0,n=e.length-1)=>{try{if(t>=n)return i.setDone(t);const s=await i.partition(e,t,n);await i.run(e,t,s-1),await i.run(e,s+1,n)}catch(s){}},i.partition=async(e,t,n)=>{const{toggleCheck:s,setDone:o,delay:a,swap:r,swapInView:l}=i,c=e[n];let h=t-1;s(n);for(let i=t;i<=n-1;i++)s(i),await a(i),e[i]<=c&&(h++,r(e,h,i),l(h,i)),s(i);return s(n),r(e,h+1,n),l(h+1,n),o(h+1),h+1};const a=new n;a.run=async e=>{try{const{viewItems:t,delay:n,isSorted:s,setAllDone:o}=a;let i=[];for(;!s(e);){for(let t=0;t<e.length;t++){let n;do{n=Math.round(Math.random()*(e.length-1))}while(i[n]);i[n]=e[t]}await n(null,100),e=i,i=[],e.forEach(((e,n)=>{t[n].style.height=`${e}px`}))}o()}catch(t){}},a.isSorted=e=>{for(let t=0;t<e.length-1;t++)if(e[t]>e[t+1])return!1;return!0};const r=new n;r.run=async e=>{try{const{toggleCheck:t,setAllDone:n,delay:s,swap:o,swapInView:i}=r;for(let a=0;a<e.length;a++){let n=a;for(await s(a);e[n]<e[n-1];)t(n),await s(a),o(e,n,n-1),i(n,n-1),t(n),n--}n()}catch(t){}};const l=document.getElementById("visualizer"),c=document.getElementById("arrGenBtn"),h=document.getElementById("algorithmBtns"),d=document.getElementById("array-size"),u=[["Selection Sort",s],["Bubble Sort",o],["Insertion Sort",r],["Quick Sort",i],["Bogosort",a]];let m;const w=e=>Array.from(h.children).forEach((t=>t.disabled=e));c.addEventListener("click",(async function(){w(!1),l.innerHTML="",await new Promise((e=>setTimeout(e,1))),function(){m=[];for(let e=0;e<d.value;e++)m.push(Math.round(500*Math.random()));m.forEach((e=>{const t=document.createElement("div");t.classList.add("bar"),t.style.height=`${e}px`,l.appendChild(t)}))}()})),u.forEach((e=>{const[t,n]=e,s=document.createElement("button");s.innerHTML=t,s.addEventListener("click",(()=>{return e=n,w(!0),void e.run(m);var e})),h.appendChild(s)}));