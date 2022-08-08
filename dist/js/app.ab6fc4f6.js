(function(){"use strict";var t={7409:function(t,e,s){var r=s(9242),o=s(3396);function i(t,e,s,r,i,n){const c=(0,o.up)("addition-form"),a=(0,o.up)("product-list");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(a,{ref:"productList"},null,512)],64)}var n=s(7139);const c=t=>((0,o.dD)("data-v-63122b40"),t=t(),(0,o.Cn)(),t),a={class:"addindionSection"},l=c((()=>(0,o._)("h2",{class:"header"},"Добавление товара",-1))),d={class:"inputField"},p=c((()=>(0,o._)("label",{for:"name",class:"inputLabel"},[(0,o.Uk)(" Наименование товара "),(0,o._)("span",{class:"dot"})],-1))),u={class:"inputError"},h={class:"inputField"},_=c((()=>(0,o._)("label",{for:"discription",class:"inputLabel"},"Описание товара",-1))),m={class:"inputField"},v=c((()=>(0,o._)("label",{for:"link",class:"inputLabel"},[(0,o.Uk)(" Ссылка на изображение товара "),(0,o._)("span",{class:"dot"})],-1))),f={class:"inputError"},w={class:"inputField"},g=c((()=>(0,o._)("label",{for:"price",class:"inputLabel"},[(0,o.Uk)(" Цена товара "),(0,o._)("span",{class:"dot"})],-1))),C={class:"inputError"};function k(t,e,s,i,c,k){return(0,o.wg)(),(0,o.iD)("section",a,[l,(0,o._)("form",{class:(0,n.C_)(["additionForm",{additionForm_pushed:c.isPush}]),onSubmit:e[7]||(e[7]=(0,r.iM)(((...t)=>k.validate&&k.validate(...t)),["prevent"])),onInput:e[8]||(e[8]=(...t)=>k.checkValid&&k.checkValid(...t))},[(0,o._)("fieldset",d,[p,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>c.product.name=t),onInput:e[1]||(e[1]=t=>k.checkInput("name")),class:"inputElement",name:"name",type:"text",placeholder:"Введите наименование товара"},null,544),[[r.nr,c.product.name]]),(0,o.wy)((0,o._)("span",u," Поле является обязательным ",512),[[r.F8,c.errorMsg.name]])]),(0,o._)("fieldset",h,[_,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>c.product.discription=t),class:"textareaElement",name:"discription",placeholder:"Введите описание товара"},null,512),[[r.nr,c.product.discription]])]),(0,o._)("fieldset",m,[v,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>c.product.link=t),onInput:e[4]||(e[4]=t=>k.checkInput("link")),class:"inputElement",name:"link",type:"url",placeholder:"Введите ссылку"},null,544),[[r.nr,c.product.link]]),(0,o.wy)((0,o._)("span",f," Поле является обязательным ",512),[[r.F8,c.errorMsg.link]])]),(0,o._)("fieldset",w,[g,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>c.product.price=t),onInput:e[6]||(e[6]=t=>k.checkInput("price")),class:"inputElement",name:"price",type:"number",placeholder:"Введите цену"},null,544),[[r.nr,c.product.price]]),(0,o.wy)((0,o._)("span",C," Поле является обязательным ",512),[[r.F8,c.errorMsg.price]])]),(0,o._)("button",{class:(0,n.C_)(["submitBtn",{submitBtn_disable:!c.isValid,submitBtn_active:c.isValid}]),type:"submit"}," Добавить товар ",2)],34)])}var b={name:"additionForm",data(){return{product:{name:"",discription:"",link:"",price:""},errorMsg:{name:!1,link:!1,price:!1},isValid:!1,isPush:!1}},props:{},methods:{checkValid(){for(let t in this.errorMsg)if(""===this.product[t])return void(this.isValid=!1);this.isValid=!0},checkInput(t){this.errorMsg[t]=!0,this.product[t]>0|this.product[t].length>0&&this.errorMsg[t]&&(this.errorMsg[t]=!1)},setErrorActive(){for(let t in this.errorMsg)this.checkInput(t)},validate(){!1!==this.isValid?(this.$parent.$refs.productList.addProduct({...this.product,id:10}),this.product={name:"",discription:"",link:"",price:""},this.isValid=!1,this.isPush=!0,setTimeout((()=>{this.isPush=!1}),500)):this.setErrorActive()}}},L=s(89);const M=(0,L.Z)(b,[["render",k],["__scopeId","data-v-63122b40"]]);var V=M;const S=t=>((0,o.dD)("data-v-c1cd1fc0"),t=t(),(0,o.Cn)(),t),y={class:"products"},H={class:"sortList__wrap"},P=(0,o.Uk)(" По умолчанию "),I=S((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"6",viewBox:"0 0 8 6",fill:"none"},[(0,o._)("path",{d:"M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264",stroke:"#b4b4b4"})],-1))),z=[P,I],R=(0,o.Uk)(" По имени "),x=S((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[(0,o._)("path",{d:"M239.6 373.1c11.94-13.05 11.06-33.31-1.969-45.27c-13.55-12.42-33.76-10.52-45.22 1.973L160 366.1V64.03c0-17.7-14.33-32.03-32-32.03S96 46.33 96 64.03v302l-32.4-35.39C51.64 317.7 31.39 316.7 18.38 328.7c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0L239.6 373.1zM448 416h-50.75l73.38-73.38c9.156-9.156 11.89-22.91 6.938-34.88S460.9 288 447.1 288H319.1C302.3 288 288 302.3 288 320s14.33 32 32 32h50.75l-73.38 73.38c-9.156 9.156-11.89 22.91-6.938 34.88S307.1 480 319.1 480h127.1C465.7 480 480 465.7 480 448S465.7 416 448 416zM492.6 209.3l-79.99-160.1c-10.84-21.81-46.4-21.81-57.24 0L275.4 209.3c-7.906 15.91-1.5 35.24 14.31 43.19c15.87 7.922 35.04 1.477 42.93-14.4l7.154-14.39h88.43l7.154 14.39c6.174 12.43 23.97 23.87 42.93 14.4C494.1 244.6 500.5 225.2 492.6 209.3zM367.8 167.4L384 134.7l16.22 32.63H367.8z"})],-1))),T=[R,x],O=(0,o.Uk)(" По имени "),Z=S((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[(0,o._)("path",{d:"M104.4 470.1c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27c-13.02-11.95-33.27-11.04-45.22 1.973L160 366.1V64.03c0-17.7-14.33-32.03-32-32.03S96 46.33 96 64.03v302l-32.4-35.39c-6.312-6.883-14.94-10.39-23.61-10.39c-7.719 0-15.47 2.785-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27L104.4 470.1zM320 96h50.75l-73.38 73.38c-9.156 9.156-11.89 22.91-6.938 34.88s16.63 19.74 29.56 19.74h127.1C465.7 223.1 480 209.7 480 192s-14.33-32-32-32h-50.75l73.38-73.38c9.156-9.156 11.89-22.91 6.938-34.88S460.9 32 447.1 32h-127.1C302.3 32 288 46.31 288 64S302.3 96 320 96zM492.6 433.3l-79.99-160.1c-10.84-21.81-46.4-21.81-57.24 0l-79.99 160.1c-7.906 15.91-1.5 35.24 14.31 43.19c15.87 7.922 35.04 1.477 42.93-14.4l7.154-14.39h88.43l7.154 14.39c6.174 12.43 23.97 23.87 42.93 14.4C494.1 468.6 500.5 449.2 492.6 433.3zM367.8 391.4L384 358.7l16.22 32.63H367.8z"})],-1))),E=[O,Z],q=(0,o.Uk)(" По цене "),F=S((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[(0,o._)("path",{d:"M416 288h-95.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H416c17.67 0 32-14.33 32-32S433.7 288 416 288zM544 32h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 32 544 32zM352 416h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32c17.67 0 31.1-14.33 31.1-32S369.7 416 352 416zM480 160h-159.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H480c17.67 0 32-14.33 32-32S497.7 160 480 160zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"})],-1))),j=[q,F],B=(0,o.Uk)(" По цене "),U=S((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[(0,o._)("path",{d:"M320 224H416c17.67 0 32-14.33 32-32s-14.33-32-32-32h-95.1c-17.67 0-32 14.33-32 32S302.3 224 320 224zM320 352H480c17.67 0 32-14.33 32-32s-14.33-32-32-32h-159.1c-17.67 0-32 14.33-32 32S302.3 352 320 352zM320 96h32c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-32c-17.67 0-32 14.33-32 32S302.3 96 320 96zM544 416h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 416 544 416zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"})],-1))),A=[B,U],D={class:"productList"};function J(t,e,s,i,c,a){const l=(0,o.up)("product-item");return(0,o.wg)(),(0,o.iD)("section",y,[(0,o._)("div",H,[(0,o._)("ul",{class:(0,n.C_)(["sortList",{sortList_open:c.sortIsOpen}]),onClick:e[4]||(e[4]=t=>c.sortIsOpen=!c.sortIsOpen)},[(0,o._)("li",{class:(0,n.C_)(["sortList__li sortList__li_disable",{sortList__li_select:""===c.sortReq}])},z,2),(0,o._)("li",{class:(0,n.C_)(["sortList__li",{sortList__li_select:"nameAToZ"===c.sortReq}]),onClick:e[0]||(e[0]=t=>a.changeSortReq("nameAToZ"))},T,2),(0,o._)("li",{class:(0,n.C_)(["sortList__li",{sortList__li_select:"nameZToA"===c.sortReq}]),onClick:e[1]||(e[1]=t=>a.changeSortReq("nameZToA"))},E,2),(0,o._)("li",{class:(0,n.C_)(["sortList__li",{sortList__li_select:"priceToLow"===c.sortReq}]),onClick:e[2]||(e[2]=t=>a.changeSortReq("priceToLow"))},j,2),(0,o._)("li",{class:(0,n.C_)(["sortList__li",{sortList__li_select:"priceToHigh"===c.sortReq}]),onClick:e[3]||(e[3]=t=>a.changeSortReq("priceToHigh"))},A,2)],2)]),(0,o._)("ul",D,[(0,o.Wm)(r.W3,{name:"listAnimation",class:"productList",tag:"ul"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.sorted,(t=>((0,o.wg)(),(0,o.j4)(l,{product:t,key:t.id,onRemoveProduct:a.removeProduct},null,8,["product","onRemoveProduct"])))),128))])),_:1})])])}const W=["src","alt"],$={class:"infoWrap"},N={class:"productHeader"},Y={class:"productInfo"},K={class:"productPrice"},G=(0,o.uE)('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-v-56763567><g clip-path="url(#clip0_4_349)" data-v-56763567><path d="M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z" fill="white" data-v-56763567></path><path d="M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z" fill="white" data-v-56763567></path><path d="M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04688 13.0622 4.04688H2.93019C2.55768 4.04688 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793Z" fill="white" data-v-56763567></path><path d="M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z" fill="white" data-v-56763567></path></g><defs data-v-56763567><clipPath id="clip0_4_349" data-v-56763567><rect width="16" height="16" fill="white" data-v-56763567></rect></clipPath></defs></svg>',1),Q=[G];function X(t,e,s,r,i,c){return(0,o.wg)(),(0,o.iD)("li",{class:"productItem",onMouseover:e[1]||(e[1]=t=>i.showRemove=!i.showRemove),onMouseout:e[2]||(e[2]=t=>i.showRemove=!i.showRemove)},[(0,o._)("img",{class:"productImg",src:s.product.link,alt:s.product.name},null,8,W),(0,o._)("div",$,[(0,o._)("h3",N,(0,n.zw)(s.product.name),1),(0,o._)("p",Y,(0,n.zw)(s.product.discription),1),(0,o._)("p",K,(0,n.zw)(c.formatPrice(s.product.price))+" руб. ",1)]),(0,o._)("button",{class:(0,n.C_)(["trashBtn",{trashBtn_active:i.showRemove}]),type:"button",onClick:e[0]||(e[0]=e=>t.$emit("removeProduct",s.product.id))},Q,2)],32)}var tt={name:"productItem",props:{product:{id:String,name:String,discription:String,link:String,price:Number}},data(){return{showRemove:!1}},methods:{formatPrice(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}};const et=(0,L.Z)(tt,[["render",X],["__scopeId","data-v-56763567"]]);var st=et,rt={name:"productList",components:{productItem:st},data(){return{products:[],sorted:[],sortIsOpen:!1,sortReq:"",api:"/api/products"}},mounted(){this.getJson(this.api).then((t=>{for(let e of t)this.products.push(e);this.sortProduct()}))},methods:{getJson(t){return fetch(t).then((t=>t.json())).catch((t=>{console.log(t)}))},postJson(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).catch((t=>console.log(t)))},deleteJson(t){return fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((t=>t.json())).catch((t=>console.log(t)))},addProduct(t){this.postJson(this.api,t).then((e=>{1===e.result&&(this.products.push({...t,id:e.id}),this.sortProduct())}))},removeProduct(t){this.deleteJson(`${this.api}/${t}`).then((e=>{if(1===e.result){const e=this.products.findIndex((e=>e.id===t));this.products.splice(e,1),this.sortProduct()}else console.log("Failed delete data.")}))},changeSortReq(t){this.sortReq=t,this.sortProduct()},sortProduct(){switch(this.sortReq){case"":this.sorted=[...this.products];break;case"nameAToZ":this.sorted=this.products.sort(((t,e)=>t.name>e.name?1:t.name<e.name?-1:0));break;case"nameZToA":this.sorted=this.products.sort(((t,e)=>t.name<e.name?1:t.name>e.name?-1:0));break;case"priceToLow":this.sorted=this.products.sort(((t,e)=>t.price<e.price?1:t.price>e.price?-1:0));break;case"priceToHigh":this.sorted=this.products.sort(((t,e)=>t.price>e.price?1:t.price<e.price?-1:0));break}}}};const ot=(0,L.Z)(rt,[["render",J],["__scopeId","data-v-c1cd1fc0"]]);var it=ot,nt={name:"App",components:{additionForm:V,productList:it}};const ct=(0,L.Z)(nt,[["render",i]]);var at=ct;(0,r.ri)(at).mount("#app")}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,r,o,i){if(!r){var n=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],i=t[d][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](r[a])}))?r.splice(a--,1):(c=!1,i<n&&(n=i));if(c){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,n=r[0],c=r[1],a=r[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in c)s.o(c,o)&&(s.m[o]=c[o]);if(a)var d=a(s)}for(e&&e(r);l<n.length;l++)i=n[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7409)}));r=s.O(r)})();
//# sourceMappingURL=app.ab6fc4f6.js.map