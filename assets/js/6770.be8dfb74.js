"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[6770],{6770:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var s=o(6252),i=o(3577);const l=[(0,s._)("img",{src:"https://raw.githubusercontent.com/misskey-dev/assets/main/i-want-you.png"},null,-1)],n=[(0,s._)("defs",null,[(0,s._)("pattern",{id:"dots",x:"0",y:"0",width:"16",height:"16",patternUnits:"userSpaceOnUse"},[(0,s._)("circle",{cx:"2",cy:"2",r:"2",fill:"currentColor"})])],-1),(0,s._)("rect",{width:"100%",height:"100%",fill:"url(#dots)"},null,-1)],a={components:{Layout:o(3293).Z},data:()=>({aimode:"true"===localStorage.getItem("aimode")}),mounted(){if(this.aimode){const e=this.$refs.live2d.getBoundingClientRect();window.addEventListener("mousemove",(t=>{this.$refs.live2d.contentWindow.postMessage({type:"moveCursor",body:{x:t.clientX-e.left,y:t.clientY-e.top}},"*")}),{passive:!0}),window.addEventListener("touchmove",(t=>{this.$refs.live2d.contentWindow.postMessage({type:"moveCursor",body:{x:t.touches[0].clientX-e.left,y:t.touches[0].clientY-e.top}},"*")}),{passive:!0})}},methods:{toggleAimode(){localStorage.setItem("aimode",this.aimode?"false":"true"),location.reload()}}};(a.__cssModules={}).$style={footer:"footer_p_lr1kkd",footerDots:"footerDots_rj5usHey",iwantyou:"iwantyou_Nc02GMA6",live2d:"live2d_QSmugm_Q"},a.render=function(e,t,o,a,r,d){const c=(0,s.up)("Layout",!0);return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,null,{"navbar-after":(0,s.w5)((()=>[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>d.toggleAimode&&d.toggleAimode(...e))},"藍モード")])),"sidebar-bottom":(0,s.w5)((()=>[(0,s._)("a",{class:(0,i.C_)(e.$style.iwantyou),href:"https://github.com/misskey-dev",target:"_blank"},l,2)])),"page-bottom":(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)("svg",{class:(0,i.C_)(e.$style.footerDots),fill:"none"},n,2)),(0,s._)("div",{class:(0,i.C_)(e.$style.footer)},"Copyright (c) 2021 syuilo and other contributors",2)])),_:1}),r.aimode?((0,s.wg)(),(0,s.iD)("iframe",{key:0,class:(0,i.C_)(e.$style.live2d),ref:"live2d",src:"https://misskey-dev.github.io/mascot-web/?scale=2&y=1.4",allowtransparency:""},null,2)):(0,s.kq)("",!0)],64)};const r=a}}]);